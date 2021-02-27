using System;
using System.Collections.Generic;

namespace aaronApplicationPlatform.Data.Entity
{
    public partial class Filespec
    {
        public Filespec()
        {
            #region Generated Constructor
            #endregion
        }

        #region Generated Properties
        public int Id { get; set; }

        public string Filename { get; set; }

        public Byte[] Filecontent { get; set; }

        public int FiletypeId { get; set; }

        public string Description { get; set; }

        public int? Filesize { get; set; }

        public int? Imagewidth { get; set; }

        public int? Imageheight { get; set; }

        public int UserId { get; set; }

        #endregion

        #region Generated Relationships
        public virtual Filetype Filetype { get; set; }

        public virtual User User { get; set; }

        #endregion

    }
}
