/// ------------------------------
/// Please do NOT modify this file
/// ------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Interface;

namespace aaronApplicationPlatform.Logic
{
    public abstract class BaseLogic<T> where T : class, IId, new()
    {
        private MyDbContext _dbContext;

        public MyDbContext DbContext
        {
            set { _dbContext = value; }
        }

        public BaseLogic()
        {
        }

        public BaseLogic(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public virtual T GetById(int id, bool throwExIfNotFound = false)
        {
            T result = GetList().Where(e => e.Id == id).FirstOrDefault();
            if (result == null && throwExIfNotFound)
            {
                throw new Exception(String.Format("Record with Id = {0} not found!"));
            }
            return result;
        }

        public virtual IEnumerable<T> GetList()
        {
            List<T> result = _dbContext.Set<T>().ToList();
            return result;
        }

        public virtual IEnumerable<T> GetList(List<int> ids)
        {
            var res = _dbContext.Set<T>().Where(e => ids.Contains(e.Id));
            return res;
        }

        public virtual void Upsert(T entity)
        {
            if (entity.Id == 0)
            {
                _dbContext.Add(entity);
            }
            else
            {
                _dbContext.Entry(entity).State = EntityState.Modified;
            }
            _dbContext.SaveChanges();
        }

        public virtual void Delete(int id)
        {
            _dbContext.Remove(new T { Id = id });
            _dbContext.SaveChanges();
        }
    }
}
