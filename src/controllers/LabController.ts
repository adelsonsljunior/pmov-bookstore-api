import { Request, Response } from "express";

export const hello =  async ( req: Request, res : Response ) => {
    return res.status(200).json({hello: "Hello, Elliot!"});
}


export const params = async ( req: Request, res : Response ) => {
     const nome = req.params.nome;

     return res.status(200).json({nome: nome});
}

export const body = async ( req: Request, res : Response ) =>{
    const nome = req.body.nome;

    return res.status(201).json({nome: nome});
}