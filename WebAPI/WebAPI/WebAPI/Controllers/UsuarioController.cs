using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/usuario")]
    public class UsuarioController : ApiController
    {
        private static List<UsuarioModel> listaUsuarios = new List<UsuarioModel>();

        [HttpPost]
        [Route("CadastrarUsuario")]
        public string CadastrarUsuario(UsuarioModel usuario)
        {

            listaUsuarios.Add(usuario);

            return "Usuário cadastrado com sucesso!";
        }

        [HttpPut]
        [Route("AlterarUsuario")]
        public string AlterarUsuario(UsuarioModel usuario)
        {

            listaUsuarios.Where(n => n.codigo == usuario.codigo)
                         .Select(s =>
                         {
                             s.codigo = usuario.codigo;
                             s.email = usuario.email;
                             s.senha = usuario.senha;

                             return s;

                         }).ToList();



            return "Usuário alterado com sucesso!";
        }

        [HttpDelete]
        [Route("ExcluirUsuario/{codigo}")]
        public string ExcluirUsuario(int codigo)
        {

            UsuarioModel usuario = listaUsuarios.Where(n => n.codigo == codigo)
                                                .Select(n => n)
                                                .First();

            listaUsuarios.Remove(usuario);

            return "Registro excluido com sucesso!";
        }
    }
}
