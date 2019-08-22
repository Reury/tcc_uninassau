using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.helpers;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/usuario")]
    public class UsuarioController : ApiController
    {
        private static List<UsuarioModel> listaUsuarios = new List<UsuarioModel>();

        [HttpPost]
        [Route("CadastrarUsuario")]
        public int CadastrarUsuario(UsuarioModel usuario)
        {
            using (var ctx = new Contexto())
            {
                var senha = (UtilEncryption.CriptografarSenhaUsuario(usuario.email, usuario.senha));

                var result = ctx.Usuario.SqlQuery("insert into usuario(email, senha) values('" + usuario.email + "', '" + senha + "')");


                var usuarioCadastrado = ctx.Usuario.SqlQuery("select * from usuario where email = '" + usuario.email + "'").FirstOrDefault();

                if (usuarioCadastrado != null)
                {

                    throw new Exception("Usuario ja cadastrado");

                }
                else
                {
                    var resulta = ctx.Database.ExecuteSqlCommand("insert into usuario(email, senha) values('" + usuario.email + "', '" + senha + "')");
                    if (result == null)
                    {

                        throw new Exception("Erro ao cadastrar uruário");
                    }
                    else
                    {
                        return resulta;
                    }
                }

            }
        }

        [HttpPost]
        [Route("AutenticarUsuario")]
        public UsuarioModel AlterarUsuario(UsuarioModel usuario)
        {
            
            using (var ctx = new Contexto())
            {
                var senha = (UtilEncryption.CriptografarSenhaUsuario(usuario.email, usuario.senha));

                var sql4 = ctx.Usuario.SqlQuery("select * from usuario where email = '" + usuario.email + "'");

                var sql = ctx.Usuario.SqlQuery("select * from usuario where email = '" + usuario.email + "'").FirstOrDefault();
              
                if (sql == null)
                {
                    return sql;
                    throw new Exception("E-mail ou senha inválidos.");

                } else
                {
                    return sql;
                }

            }
        }

        //[HttpDelete]
        //[Route("ExcluirUsuario/{codigo}")]
        //public string ExcluirUsuario(int codigo)
        //{

        //    UsuarioModel usuario = listaUsuarios.Where(n => n.codigo == codigo)
        //                                        .Select(n => n)
        //                                        .First();

        //    listaUsuarios.Remove(usuario);

        //    return "Registro excluido com sucesso!";
        //}
    }
}
