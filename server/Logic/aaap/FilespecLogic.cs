using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class FilespecLogic: BaseLogic<Filespec>
    {

        public FilespecLogic()
        {
        }

        public FilespecLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

    }

}
