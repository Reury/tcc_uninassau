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
        public string CadastrarCliente(ClientesModel cliente)
        {
            listaClientes.Add(cliente);

            return "Cliente cadastrado com sucesso!";
        }

        [HttpPut]
        [Route("AlterarCliente")]
        public string AlterarCliente(ClientesModel cliente)
        {
            listaClientes.Where(n => n.Processo == cliente.Processo)
                         .Select(s =>
                         {
                             s.Processo = cliente.Processo;
                             s.Reclamante = cliente.Reclamante;
                             s.Reclamada = cliente.Reclamada;
                             s.Valor = cliente.Valor;
                             s.Parcelado = cliente.Parcelado;
                             s.Parcelas = cliente.Parcelas;
                             s.Status = cliente.Status;
                             s.Tipo = cliente.Tipo;

                             return s;
                         }).ToList();

            return "Cliente alterado com sucesso!";
        }

        [HttpDelete]
        [Route("ExcluirCliente/{processo}")]
        public string ExcluirCliente(string processo)
        {
            ClientesModel cliente = listaClientes.Where(n => n.Processo == processo)
                                                .Select(n => n)
                                                .First();

            listaClientes.Remove(cliente);

            return "Registro excluido com sucesso!";
        }
    }
}