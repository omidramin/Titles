using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace Title.Domain
{
    [Table("Participant")]
    public partial class Participant
    {
        public Participant()
        {
            TitleParticipants = new HashSet<TitleParticipant>();
        }

        [Key]
        public int Id { get; set; }
        [StringLength(100)]
        public string Name { get; set; }
        [StringLength(100)]
        public string ParticipantType { get; set; }

        [InverseProperty(nameof(TitleParticipant.Participant))]
        public virtual ICollection<TitleParticipant> TitleParticipants { get; set; }
    }
}
