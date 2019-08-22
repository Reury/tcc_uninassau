using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/clientes")]
    public class ClientesController : ApiController
    {
        private static List<ClientesModel> listaClientes = new List<ClientesModel>();

        [HttpGet]
        [Route("ListarClientes")]
        public List<ClientesModel> ListarClientes()
        {
            using (var ctx = new Contexto())
            {
                var result = ctx.Clientes.ToList();
                return result;
            }
        }

        [HttpPost]
        [Route("CadastrarCliente")]
        public bool CadastrarCliente(ClientesModel cliente)
        {
            cliente.parcelado = 0;
           cliente.parcelado = cliente.valor / cliente.parcelas;
            using (var ctx = new Contexto())
            {
                ctx.Clientes.Add(cliente);
                ctx.SaveChanges();
            }
            return true;
        }

        [HttpPost]
        [Route("AlterarCliente")]
        public bool AlterarCliente(ClientesModel cliente)
        {
            using (var ctx = new Contexto())
            {
                
                ctx.Entry(cliente).State = System.Data.Entity.EntityState.Modified;
                ctx.SaveChanges();
                //var alteraCliente = ctx.Clientes.Find(cliente);

                //ctx.Entry(alteraCliente).CurrentValues.SetValues(cliente);
                //ctx.SaveChanges();
            }

            return true;
        }

        [HttpPost]
        [Route("ExcluirCliente")]
        public bool ExcluirCliente(ClientesModel cliente)
        {
            using (var ctx = new Contexto())
            {
               
                ctx.Entry(cliente).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return true;
        }
    }
}