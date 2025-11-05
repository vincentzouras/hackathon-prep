import User from "../models/user.js";

const create = (userData) => User.create(userData);

const findAll = () => User.find();

const findById = (id) => User.findById(id);

export default { create, findAll, findById };
