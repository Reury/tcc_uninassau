using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Cliente")]
    public class ClientesModel
    {
        public ClientesModel()
        {
        }

        [Column("processo_id")]
        [Key]
        public int idProcesso { get; set; }

        [Column("processo")]
        public string processo { get; set; }

        [Column("reclamante")]
        public string reclamante { get; set; }

        [Column("reclamada")]
        public string reclamada { get; set; }

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
    }
}