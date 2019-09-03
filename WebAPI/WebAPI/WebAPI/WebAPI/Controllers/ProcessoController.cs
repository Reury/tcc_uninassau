using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/processo")]
    public class ProcessoController : ApiController
    {
        private static List<ProcessoModel> listaClientes = new List<ProcessoModel>();

        [HttpGet]
        [Route("ListarProcessos/{cdCliente}")]
        public List<ProcessoModel> CadastrarCliente(int cdCliente)
        {
            StringBuilder sql = new StringBuilder();
            using (var ctx = new Contexto())
            {             
            sql.Append("select p.processo_id, p.processo, \n");
            sql.Append(" p.status, p.tipo,valor,p.parcelado, \n");
            sql.Append(" p.parcelas, p.vencimento,p.polo_ativo, \n");
            sql.Append(" p.polo_passivo, p.juros,p.multa,p.desconto, \n");
            sql.Append(" p.cd_cliente, up.id_usuario_processo, up.cd_usuario \n");
            sql.Append(" from processo p inner join usuario_processo up on p.processo_id = up.processo_id where \n");
            sql.Append(" up.cd_usuario = "+ cdCliente + "");
            
                var teste = ctx.Processo.SqlQuery("select * from processo");
                return ctx.Database.SqlQuery<ProcessoModel>(sql.ToString()).ToList();
            }

        }


        [HttpGet]
        [Route("ListarTodosProcessos")]
        public List<ProcessoModel> CadastrarCliente()
        {
            using (var ctx = new Contexto())
            {
                return ctx.Processo.SqlQuery("select * from processo").ToList(); 
            }

        }

        [HttpPost]
        [Route("CadastrarProcesso/{cdCliente}")]
        public int CadastrarCliente(ProcessoModel processo, int cdCliente)
        {
            var sql = new StringBuilder();
            processo.parcelado = 0;
            processo.parcelado = processo.valor / processo.parcelas;




            if (processo.multa == null)
            {
                processo.multa = 0;
            }

            if (processo.juros == null)
            {
                processo.juros = 0;
            }

            if (processo.desconto == null)
            {
                processo.desconto = 0;
            }
            using (var ctx = new Contexto())
            {

                sql.Append("INSERT INTO mywebappdb.processo (processo,");
                sql.Append(" status, tipo,");
                sql.Append(" valor, parcelado, ");
                sql.Append(" parcelas, vencimento,");
                sql.Append(" polo_ativo, polo_passivo,");
                sql.Append(" juros, multa,");
                sql.Append(" desconto, cd_cliente)");
                sql.Append(" VALUES ('" + processo.processo + "', '" + processo.status + "', '" + processo.tipo + "', '" + processo.valor + "', " + processo.parcelado.ToString().Replace(",", ".") + ",");
                sql.Append(" '" + processo.parcelas + "','" + processo.vencimento + "', '" + processo.polo_ativo + "', '" + processo.polo_passivo + "', " + processo.juros + ", " + processo.multa + ", " + processo.desconto + ", " + cdCliente + ");");

                var result = ctx.Database.ExecuteSqlCommand(sql.ToString());


                if (result > 0)
                {
                    return result;
                }
                else
                {
                    return 0;

                }
            }

        }

        [HttpPost]
        [Route("AlterarProcesso")]
        public int AlterarCliente(ProcessoModel processo)
        {
            processo.parcelado = 0;
            processo.parcelado = processo.valor / processo.parcelas;

            if (processo.multa == null)
            {
                processo.multa = 0;
            }

            if (processo.juros == null)
            {
                processo.juros = 0;
            }

            if (processo.desconto == null)
            {
                processo.desconto = 0;
            }

            var sql = new StringBuilder();
            using (var ctx = new Contexto())
            {
                sql.Append("UPDATE processo ");
                sql.Append(" SET ");
                sql.Append(" processo = '" + processo.processo + "', ");
                sql.Append(" status = '" + processo.status + "', ");
                sql.Append(" tipo = '" + processo.tipo + "' ,");
                sql.Append(" valor = " + processo.valor + ", ");
                sql.Append(" parcelado = " + processo.parcelado.ToString().Replace(",", ".") + ", ");
                sql.Append(" parcelas = " + processo.parcelas + ", ");
                sql.Append(" vencimento = '" + processo.vencimento + "', ");
                sql.Append(" polo_ativo = '" + processo.polo_ativo + "', ");
                sql.Append(" polo_passivo = '" + processo.polo_passivo + "', ");
                sql.Append(" juros = " + processo.juros + ", ");
                sql.Append(" multa = " + processo.multa + ", ");
                sql.Append(" desconto = " + processo.desconto + "");
                sql.Append(" WHERE processo_id =" + processo.processo_id + " ;");

                var result = ctx.Database.ExecuteSqlCommand(sql.ToString());


                if (result > 0)
                {
                    return result;
                }
                else
                {
                    return 0;

                }
            }


        }

        [HttpPost]
        [Route("ExcluirProcesso")]
        public int ExcluirProcesso(ProcessoModel processo)
        {
            var sql = new StringBuilder();
            using (var ctx = new Contexto())
            {

                sql.Append("DELETE FROM processo where processo_id = " + processo.processo_id + "");

                var result = ctx.Database.ExecuteSqlCommand(sql.ToString());


                if (result > 0)
                {
                    return result;
                }
                else
                {
                    return 0;

                }
            }

        }
    }
}