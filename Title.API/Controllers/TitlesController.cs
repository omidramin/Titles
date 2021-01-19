using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Title.Presistence;
using Title.Domain;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Title.Application.Titles;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TitlesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Title.Domain.Title>>> List()
        {      
            return await _mediator.Send(new List.Query());
        }

        [HttpPut("{name}")]
        public async Task<ActionResult<object>> Search(string title)
        {
            return await _mediator.Send(new Search.Query { Name = title });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<object>> Detail(int titleId)
        {
            return await _mediator.Send(new Details.Query { TitleId = titleId });
        }

    }
}
