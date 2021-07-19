using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ProjectDbContext : DbContext
    {
        public DbSet<Person> persons { get; set; }

        public DbSet<Child> children { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer(@"Data Source=(LocalDb)\MSSQLLocalDB;Initial Catalog=persons;");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().HasKey(p => p.personId);
            modelBuilder.Entity<Child>().HasKey(c => c.childId);
        }
    }
}
