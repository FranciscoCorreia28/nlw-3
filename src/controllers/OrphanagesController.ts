import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanages from "../models/Orphanages";
export default {
    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanages = await orphanagesRepository.find();
        return res.status(200).json(orphanages);
    },

    async create(req: Request, res: Response) {
        const { name, longitude, latitude, open_on_weekends, opening_hours, instrutions, about } = req.body;
        const orphanagesRepository = getRepository(Orphanages);

        const orphanage = orphanagesRepository.create({ name, longitude, latitude, open_on_weekends, opening_hours, instrutions, about });
        await orphanagesRepository.save(orphanage);

        res.status(201).json(orphanage);
    }
}