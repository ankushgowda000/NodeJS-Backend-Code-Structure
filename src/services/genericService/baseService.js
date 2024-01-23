const baseService = (repo) => {
 
  const create = async (request) => await repo.create(request);
 
  const deleteById = async (id) => await repo.deleteById(id);
 
  const getById = async (id) => await repo.getById(id);

  const getByObject = async (object) => await model.query(object).exec();
 
  const getAll = async () => await repo.getAll();
 
  const update = async (request) => await repo.update(request);
 
  return {
      create,
      deleteById,
      getAll,
      getById,
      update,
      getByObject
  };
};
 
module.exports.baseService = baseService;