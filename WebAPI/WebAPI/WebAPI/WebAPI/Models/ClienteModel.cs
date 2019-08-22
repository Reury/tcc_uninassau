using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    [Table("Cliente")]
    public class ClienteModel
    {
        public ClienteModel() { }

        [Column("cd_cliente")]
        [Key]
        public int cd_cliente { get; set; }

        [Column("nome")]
        public string nome { get; set; }

        [Column("cpf")]
        public string cpf { get; set; }

        [Column("cep")]
        public string cep { get; set; }

        [Column("endereco")]
        public string endereco { get; set; }


        [Column("uf")]
        public string uf { get; set; }

        [Column("celular")]
        public string celular { get; set; }


        [Column("tel_fixo")]
        public string tel_fixo { get; set; }

        [Column("bairro")]
        public string bairro { get; set; }

        [Column("complemento")]
        public string complemento { get; set; }


        [Column("estado")]
        public string estado { get; set; }

        [Column("rg")]
        public string rg { get; set; }

        [Column("numero")]
        public string numero { get; set; }
    }
}