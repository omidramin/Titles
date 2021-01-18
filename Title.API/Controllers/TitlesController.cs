using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Title.Presistence;
using Title.Domain;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private readonly TitlesContext _context;
        public TitlesController(TitlesContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Title.Domain.Title>>> Get()
        {
            var title = await _context.Titles.ToListAsync();
            return Ok(title);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Title.Domain.Title>> Get(int id)
        {
             var title = await _context.Titles.FindAsync(id);
            return Ok(title);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
