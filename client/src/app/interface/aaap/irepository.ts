export interface IRepository<T> {

  loadEntities();

  getList();

  getListAsObservable();

  getEntityById(id: number);

  getNewEntity(): T;

  validateEntity(entity: any)

  upsertEntity(entity: any)

  deleteEntity(id: number)

  reset();

}
