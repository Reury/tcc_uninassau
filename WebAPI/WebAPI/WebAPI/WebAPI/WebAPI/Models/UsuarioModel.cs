using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Usuario")]
    public class UsuarioModel
    {
        private int codigo;
        private string email;
        private string senha;

        public UsuarioModel()
        {
        }

        public UsuarioModel(int codigo, string email, string senha)
        {
            this.Codigo = codigo;
            this.Email = email;
            this.Senha = senha;
        }

        [Column("codigo")]
        [Key]
        public int Codigo
        {
            get
            {
                return codigo;
            }

            set
            {
                codigo = value;
            }
        }

        [Column("email")]
        public string Email
        {
            get
            {
                return email;
            }

            set
            {
                email = value;
            }
        }

        [Column("senha")]
        public string Senha
        {
            get
            {
                return senha;
            }

            set
            {
                senha = value;
            }
        }
    }
}