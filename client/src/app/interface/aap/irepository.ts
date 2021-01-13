export interface IRepository<T> {

    getList();

    getCachedEntityById(id: number);

    getNewEntity() : T;

    validateEntity(entity: any)

    upsertEntity(entity: any)

    deleteEntity(id: number)
    
}
