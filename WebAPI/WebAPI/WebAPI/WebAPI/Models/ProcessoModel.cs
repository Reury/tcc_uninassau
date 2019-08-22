using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Processo")]
    public class ProcessoModel
    {
        public ProcessoModel()
        {
        }

        [Column("processo_id")]
        [Key]
        public int processo_id { get; set; }

        [Column("processo")]
        public string processo { get; set; }

        [Column("valor")]
        public double valor { get; set; }

        [Column("parcelado")]
        public double parcelado { get; set; }

        [Column("parcelas")]
        public double parcelas { get; set; }

        [Column("status")]
        public string status { get; set; }

        [Column("tipo")]
        public string tipo { get; set; }

        [Column("vencimento")]
        public string vencimento { get; set; }

        [Column("polo_ativo")]
        public string polo_ativo { get; set; }

        [Column("polo_passivo")]
        public string polo_passivo { get; set; }

        [Column("juros")]
        public Int32? juros { get; set; }

        [Column("multa")]
        public Int32? multa { get; set; }

        [Column("desconto")]
        public Int32? desconto { get; set; }

        [Column("cd_cliente")]
        public Int32? cd_cliente { get; set; }
    }
}