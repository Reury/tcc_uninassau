using System.Data.Entity;

namespace WebAPI.Models
{
    public class Contexto : DbContext
    {
        public Contexto()
           : base("name=DbContext")
        {
            Database.SetInitializer<Contexto>(new CreateDatabaseIfNotExists<Contexto>());
        }

        public DbSet<ClientesModel> Clientes { get; set; }
        public DbSet<UsuarioModel> Usuarios { get; set; }
    }
}