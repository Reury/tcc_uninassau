using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/cliente")]
    public class ClienteController : ApiController
    {
        [HttpPost]
        [Route("CadastrarCliente")]
        public int CadastrarCliente(ClienteModel usuario)
        {
            var sql = new StringBuilder();
            usuario.tel_fixo = null;

            using (var ctx = new Contexto())
            {
                sql.Append("insert into cliente(nome,cpf,cep,endereco,uf,celular,tel_fixo,bairro,complemento,estado,rg,numero)");
                sql.Append("values('" + usuario.nome+"','"+ usuario.cpf + "','" + usuario.cep + "','" + usuario.endereco + "','" + usuario.uf + "', ");
                sql.Append("'" + usuario.celular + "',null,'" + usuario.bairro + "' ,'" + usuario.complemento + "','" + usuario.estado + "', ");
                sql.Append("'" + usuario.rg + "','" + usuario.numero + "')");

                var result = ctx.Database.ExecuteSqlCommand(sql.ToString());

                if (result != null)
                {
                    return result;
                }
                else
                    return 0;
                {

                }
            }
        }

        [HttpGet]
        [Route("GetClientes")]
        public List<ClienteModel> ListaClientes()
        {
            var sql = new StringBuilder();

            using (var ctx = new Contexto())
            {
                sql.Append("select * from cliente");

                return ctx.Cliente.SqlQuery(sql.ToString()).ToList();

               
            }
        }

        [HttpGet]
        [Route("DeletarCliente/{cdCliente}")]
        public int DeletarCliente(int cdCliente)
        {
            var sql = new StringBuilder();
            var sqlDelete = new StringBuilder();

            using (var ctx = new Contexto())
            {
                sql.Append("DELETE FROM processo WHERE cd_cliente = " + cdCliente);

              var  result = ctx.Database.ExecuteSqlCommand(sql.ToString());


                sqlDelete.Append("delete from cliente where cd_cliente = "+ cdCliente);
           

                return ctx.Database.ExecuteSqlCommand(sqlDelete.ToString());
            }
        }

        [HttpPost]
        [Route("ALterarCliente")]
        public int ALterarCliente(ClienteModel cliente)
        {
            var sql = new StringBuilder();
            cliente.tel_fixo = null;

            using (var ctx = new Contexto())
            {
                sql.Append("UPDATE cliente ");
                sql.Append("SET nome = '"+cliente.nome+"', cpf = '"+cliente.cpf+"',");
                sql.Append(" cep ='"+cliente.cep+"' , endereco = '"+cliente.endereco+"', uf ='"+cliente.uf+"' , celular = '"+cliente.celular+"' ,");
                sql.Append(" bairro ='"+cliente.bairro+"', complemento = '"+cliente.complemento+"',");
                sql.Append("estado = '"+cliente.estado+"', rg = '"+cliente.rg+"', numero = '"+cliente.numero+"' ");
                sql.Append("WHERE cd_cliente = "+cliente.cd_cliente+";");


                var result = ctx.Database.ExecuteSqlCommand(sql.ToString());

                if (result > 0)
                {
                    return result;
                }
                else
                    return 0;
                {

                }
            }
        }

    }

}

