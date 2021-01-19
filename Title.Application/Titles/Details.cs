using System;
using System.Threading;
using System.Threading.Tasks;
using Title.Domain;
using MediatR;
using Title.Presistence;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Title.Application.Titles
{
    public class Details
    {
        public class Query : IRequest<Modal>
        {
            public int TitleId { get; set; }

        }
        public class Modal
        {
            public int TitleId { get; set; }
            public string GenreName { get; set; }
            public string TitleNameLanguage { get; set; }
            public string TitleNameType { get; set; }
            public string Award { get; set; }
            public bool? AwardWon { get; set; }
            public int? AwardYear { get; set; }
            public string AwardCompany { get; set; }
            public string Description { get; set; }
            public string ParticipantName { get; set; }
        }

        public class Handler : IRequestHandler<Query, Modal>
        {
            private readonly TitlesContext _context;
            public Handler(TitlesContext context)
            {
                _context = context;
            }

            public async Task<Modal> Handle(Query request, CancellationToken cancellationToken)
            {

                var title = _context.Titles.Include(t => t.TitleGenres).ThenInclude(tg => tg.Genre)
                    .Include(t => t.StoryLines)
                    .Include(t => t.OtherNames)
                    .Include(t => t.Awards)
                    .Include(t => t.TitleParticipants)
                    .FirstOrDefaultAsync(t => t.TitleId == request.TitleId).Result;
      

                if (title == null)
                {
                    return null;
                }

                Modal modal = new Modal()
                {
                    TitleId = title.TitleId,
                    GenreName = title.TitleGenres.Any() ? title.TitleGenres.FirstOrDefault().Genre.Name : null,
                    TitleNameLanguage = title.OtherNames.Any() ? title.OtherNames.Where(on => on.TitleId == title.TitleId).Select(x => x.TitleNameLanguage).FirstOrDefault() : null,
                    TitleNameType = title.OtherNames.Any() ? title.OtherNames.Where(on => on.TitleId == title.TitleId).Select(x => x.TitleNameType).FirstOrDefault() : null,
                    Award = title.Awards.Any() ? title.Awards.Where(a => a.TitleId == title.TitleId).Select(x => x.Award1).FirstOrDefault() : null,
                    AwardWon = title.Awards.Any() ? title.Awards.Where(a => a.TitleId == title.TitleId).Select(x => x.AwardWon).Any() : null,
                    AwardYear = title.Awards.Any() ? title.Awards.Where(a => a.TitleId == title.TitleId).Select(x => x.AwardYear).FirstOrDefault() : null,
                    AwardCompany = title.Awards.Any() ? title.Awards.Where(a => a.TitleId == title.TitleId).Select(x => x.AwardCompany).FirstOrDefault() : null,
                    Description = title.StoryLines.Any() ? title.StoryLines.Where(sl => sl.TitleId == title.TitleId).Select(x => x.Description).FirstOrDefault() : null,
                    ParticipantName = title.TitleParticipants.Any() ? title.TitleParticipants.Where(sl => sl.TitleId == title.TitleId).FirstOrDefault().Participant?.Name : null,

                };

                return modal;
            }
        }
    }
}