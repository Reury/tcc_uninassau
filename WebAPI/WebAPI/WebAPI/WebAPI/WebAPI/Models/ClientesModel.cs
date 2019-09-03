using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Cliente")]
    public class ClientesModel
    {
        private string processo;
        private string reclamante;
        private string reclamada;
        private double valor;
        private double parcelado;
        private double parcelas;
        private string status;
        private string tipo;
        private int idProcesso;

        public ClientesModel()
        {
        }

        //public ClientesModel(string processo, string reclamante, string reclamada, int valor, int parcelado, int parcelas, string status, string tipo)
        //{
        //    this.Processo = processo;
        //    this.Reclamante = reclamante;
        //    this.Reclamada = reclamada;
        //    this.Valor = valor;
        //    this.Parcelado = parcelado;
        //    this.Parcelas = parcelas;
        //    this.Status = status;
        //    this.Tipo = tipo;
        //}

        [Column("processo_id")]
        [Key]
        public int IdProcesso
        {
            get
            {
                return idProcesso;
            }

            set
            {
                idProcesso = value;
            }
        }

        [Column("processo")]
        public string Processo
        {
            get
            {
                return processo;
            }

            set
            {
                processo = value;
            }
        }

        [Column("reclamante")]
        public string Reclamante
        {
            get
            {
                return reclamante;
            }

            set
            {
                reclamante = value;
            }
        }

        [Column("reclamada")]
        public string Reclamada
        {
            get
            {
                return reclamada;
            }

            set
            {
                reclamada = value;
            }
        }

        [Column("valor")]
        public double Valor
        {
            get
            {
                return valor;
            }

            set
            {
                valor = value;
            }
        }

        [Column("parcelado")]
        public double Parcelado
        {
            get
            {
                return parcelado;
            }

            set
            {
                parcelado = value;
            }
        }

        [Column("parcelas")]
        public double Parcelas
        {
            get
            {
                return parcelas;
            }

            set
            {
                parcelas = value;
            }
        }

        [Column("status")]
        public string Status
        {
            get
            {
                return status;
            }

            set
            {
                status = value;
            }
        }

        [Column("tipo")]
        public string Tipo
        {
            get
            {
                return tipo;
            }

            set
            {
                tipo = value;
            }
        }
    }
}