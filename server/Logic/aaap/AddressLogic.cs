using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Logic
{
    public class AddressLogic : BaseLogic<Address> 
    {
        public AddressLogic()
        {
        }

        public AddressLogic(MyDbContext dbContext) : base(dbContext)
        {
        }

    }
}
