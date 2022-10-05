import User from "../database/models/UserModel";
import IUser from "../interface/UserInterface";

export default class UserService {
  public async getAll(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  };

  public async getById(id: number): Promise<User | null> {
    const user = await User.findByPk(id);
    return user;
  }

  public async create(user: IUser): Promise<void> {
    const { name, email, password } = user;
    await User.create({ name, email, password });
  }
};