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

        public DbSet<ProcessoModel> Processo { get; set; }
        public DbSet<UsuarioModel> Usuario { get; set; }

        public DbSet<ClienteModel>Cliente { get; set; }
    }
}