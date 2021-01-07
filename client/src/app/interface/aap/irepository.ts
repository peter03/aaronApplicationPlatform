export interface IRepository {

    getList();

    getCachedEntityById(id: number);

    getNewEntity();

    validateEntity(entity: any)

    upsertEntity(entity: any)

    deleteEntity(id: number)
    
}
