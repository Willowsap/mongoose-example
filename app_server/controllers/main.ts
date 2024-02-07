import { NextFunction, Request, Response } from "express";
import Cat from "../models/cats.model";

export default class MainCtrl {
    index = (req: Request, res: Response, next: NextFunction) => {
        const cat = new Cat({
            name: "yuri",
            age: 4,
            favoriteToy: "cat tent"
        });
        cat.save();
        res.render('index', { title: 'Express' });
    }
}