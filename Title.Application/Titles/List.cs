using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Title.Presistence;

namespace Title.Application.Titles
{
    public class List
    {
        public class Query : IRequest<List<Domain.Title>>
        {
            public string Name { get; set; }

        }

        public class Handler : IRequestHandler<Query, List<Domain.Title>>
        {
            private readonly TitlesContext _context;

            public Handler(TitlesContext context)
            {
                _context = context;
            }

            public async Task<List<Domain.Title>> Handle(Query request, CancellationToken cancellationToken)
            {

                if (!string.IsNullOrEmpty(request.Name))
                {
                    var titles = await _context.Titles.Where(t => t.TitleName.Contains(request.Name)).ToListAsync();
                    return titles;
                }

                var titlesLst = await _context.Titles.ToListAsync();

                return titlesLst;
            }
        }
    }
}