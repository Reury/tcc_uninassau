using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Usuario")]
    public class UsuarioModel
    {
        public UsuarioModel()
        {
        }

        public UsuarioModel(int codigo, string email, string senha)
        {
            this.codigo = codigo;
            this.email = email;
            this.senha = senha;
        }

        [Column("codigo")]
        [Key]
        public int codigo { get; set; }

        [Column("email")]
        public string email { get; set; }

        [Column("senha")]
        public string senha { get; set; }
    }
}