using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace MiniTesteDAW.Models
{
    public class DefaultContext: DbContext
    {
        public DbSet<Member> member { get; set; }
        public DbSet<Office> office { get; set; }
        public DbSet<Project> project { get; set; }
        public DbSet<Tarefa> tarefa { get; set; }

        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

        }



       




        // O bluid deve ser feito somente uma vez e depois comentar o construtur para criar os controllers


        public DefaultContext()
        {
            { Database.Connection.ConnectionString = @"Server=RDR_VINTUAR-PC\SQLEXPRESS; Database= db_to_do_app; uid=sa; pwd=44822rdr"; }
        }
    }
}