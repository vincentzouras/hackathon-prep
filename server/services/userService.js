import userRepository from "../repositories/userRepository.js";

const createUser = async (data) => {
  try {
    if (!data.name || !data.email || !data.password) {
      throw new Error("Missing required fields");
    }
    const user = await userRepository.create(data);
    return user;
  } catch (error) {
    throw new Error("Error creating user");
  }
};

const getAllUsers = async () => {
  try {
    const users = await userRepository.findAll();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

const getUserById = async (id) => {
  try {
    const user = await userRepository.findById(id);
    return user;
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

export default { createUser, getAllUsers, getUserById };
