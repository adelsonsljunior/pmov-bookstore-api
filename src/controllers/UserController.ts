import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {

    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public async create(req: Request, res: Response) {

        const { name, email, password } = req.body;

        console.log(name);
        console.log(email);
        console.log(password);

        const newUser = await this.userService.create(name, email, password);

        if (newUser) {
            return res.status(201).json({ newUser })
        } else {
            return res.status(400).json({ menssage: "deu pau" })
        }

    }
}