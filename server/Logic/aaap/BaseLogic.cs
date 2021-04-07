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
        protected MyDbContext _dbContext;

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
                throw new Exception(String.Format("Record with Id = {0} not found!", id));
            }
            return result;
        }

        public virtual IEnumerable<T> GetList()
        {
            List<T> res = _dbContext.Set<T>().ToList();
            OnGetList(res);
            return res;
        }

        public virtual IEnumerable<T> GetList(List<int> ids)
        {
            //var res = _dbContext.Set<T>().Where(e => ids.Contains(e.Id));
            IQueryable<T> qry = _dbContext.Set<T>().Where(e => ids.Contains(e.Id));
            var res = GetListByQuery(qry);
            return res;
        }

        public virtual List<T> GetListByQuery(IQueryable<T> query)
        {
            var res = query.ToList();
            OnGetList(res);
            return res;
        }
        public virtual void OnGetList(List<T> list)
        {
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
            OnUpsert(entity);
            _dbContext.SaveChanges();
            OnUpsertSaved(entity);
        }
        public virtual void OnUpsert(T entity)
        {
        }
        public virtual void OnUpsertSaved(T entity)
        {
        }

        public virtual void Delete(int id)
        {
            _dbContext.Remove(new T { Id = id });
            _dbContext.SaveChanges();
        }
    }
}
