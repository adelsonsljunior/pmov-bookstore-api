import { Request, Response } from "express";

export default class LabController {

    public async hello(req: Request, res: Response) {
        return res.status(200).json({ hello: "Hello, Elliot!" });
    }

    public async paramns(req: Request, res: Response) {
        const nome = req.params.nome;

        return res.status(200).json({ nome: nome });
    }

    public async body(req: Request, res: Response) {
        const nome = req.body.nome;

        return res.status(201).json({ nome: nome });
    }

}