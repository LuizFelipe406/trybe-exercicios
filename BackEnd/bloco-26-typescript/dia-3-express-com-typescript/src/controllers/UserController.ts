import { Request, Response } from "express";
import IUser from "../interface/UserInterface";
import UserService from "../services/UserService";

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    const users = await this.service.getAll();
    res.status(200).json(users);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const id: number = parseInt(req.params.id);
    const user = await this.service.getById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found'});
    }
  }

  create = async (req: Request<{}, {}, IUser>, res: Response): Promise<void> => {
    await this.service.create(req.body);
    res.status(201).json({ message: 'Usuario criado' });
  }
}