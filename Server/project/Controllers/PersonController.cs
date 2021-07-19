using IRepositories;
using Logic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : Controller {

        private IClientRepository _peronsRepository;
        public PersonController(PersonRepository rep)
        {
            _peronsRepository = rep;
        }

        [HttpPost]
        [Route("CreatePerson")]
        public IActionResult CreatePerson([FromBody]DAL.Person person)
        {
            _peronsRepository.Save(person);
            return Ok();
        }
    }
}
