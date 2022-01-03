import { Request, Response } from 'express'

export const txt = async (req: Request, res: Response): Promise<Response>=>{
    return res.json({mgs:"Api en desarrollo."})
}