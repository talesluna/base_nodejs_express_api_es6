/* tslint:disable:newline-per-chained-call */

import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default (req: Request, res: Response, next: NextFunction) => {
    Joi
    .object(
        {
            name        : Joi.string().max(50),
            genres      : Joi.array().items(Joi.string()).min(1),
            originLocale: Joi.string(),
            originYear  : Joi.number().min(1500).max(new Date().getFullYear())
        }
    )
    .validate(req.body, err => {

        if (err) {
            return res.api.send(err.details, res.api.codes.UNPROCESSABLE_ENTITY);
        }

        next();
    });

};
