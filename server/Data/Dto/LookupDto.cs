using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace aaronApplicationPlatform.Data.Dto
{ 
    public partial class LookupDto
    {
        public LookupDto()
        {
        }

        public LookupDto(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public int Id { get; set; }

        public string Name { get; set; }

    }
}
