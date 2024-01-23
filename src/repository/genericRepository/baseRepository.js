
const baseRepository = (model) => {

    const create = async (request) => await model.create(request);

    const deleteById = async (id) => await model.delete({ id });

    const getAll = async () => await model.scan().exec();

    const getById = async (id) => await model.get({ id });

    const getByObject = async (object) => await model.query(object).exec();

    const update = async (request) => {
        const { id, ...data } = request;
        return await model.update({ id }, { ...data });
    }

    return {
        create,
        deleteById,
        getAll,
        getById,
        update,
        getByObject
    };
};

module.exports.baseRepository = baseRepository;