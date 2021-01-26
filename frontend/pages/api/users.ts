import type { NextApiRequest, NextApiResponse } from 'next';

import MongooseManager from '../../utils/mongo';
import { Users } from '../../models/mongo/users';

const mongo = new MongooseManager;

interface bodyPOST {
  login: string,
  email: string,
  password: string,
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  // получить всех пользователей
  if (req.method === 'GET') {
    try {
      await mongo.connect();
      const result: object[] = await Users.find();

      await mongo.disconnect();
      res.status(200).json({ 
        status: 200,
        result,
      });
      
    } catch (error) {
      res.status(500).json({ 
        status: 500,
        error,
        message: 'Ошибка сервера',
      });
    }
    
  }

  // // создать нового польователя
  if (req.method === 'POST') {
    const { login, email, password }: bodyPOST = req.body;

    if (!login || !email || !password) {
      res.status(400).json({ 
        status: 400,
        message: 'Отсутствует обязательное поле',
      });
    }

    try {
      await mongo.connect();

      const user = new Users({
        login,
        email,
        password,
      });
      const newUser: object = await user.save();

      await mongo.disconnect();
      res.status(200).json({ 
        status: 200,
        result: newUser,
      });

    } catch (error) {
      res.status(500).json({ 
        status: 500,
        error,
        message: 'Ошибка сервера',
      });
    }
  }
};
