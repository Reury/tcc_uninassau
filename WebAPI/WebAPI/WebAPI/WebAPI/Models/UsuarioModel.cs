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


        [Column("cd_usuario")]
        [Key]
        public int cd_usuario { get; set; }

        [Column("email")]
        public string email { get; set; }

        [Column("senha")]
        public string senha { get; set; }

        
    }
}