using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public class PersonRepository : IRepositories.IClientRepository
    {
        private ProjectDbContext _context;
        public PersonRepository(ProjectDbContext cdbc)
        {
            _context = cdbc;
        }

        public void Save(Person person)
        {
            try { 
            foreach (Child child in person.child)
            {
                _context.children.Add(child);
            }
            _context.persons.Add(person);
            _context.SaveChanges();
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message.ToString());
            }
        }
    }
}
