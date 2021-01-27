import type { NextApiRequest, NextApiResponse } from 'next';

import MongooseManager from '../../utils/mongo';
import { Users } from '../../models/mongo/users';

const mongo = new MongooseManager;
mongo.connect();

interface bodyPOST {
  login: string | undefined,
  email: string | undefined,
  password: string | undefined,
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  // получить всех пользователей
  if (req.method === 'GET') {
    try {
      Users.find().then((data: object[]) => {
        
        res.status(200).json({ 
          status: 200,
          data,
        });
        return;
      });

    } catch (error) {
      res.status(500).json({ 
        status: 500,
        error,
        message: 'Ошибка сервера',
      });
      return;
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
      return;
    }

    try {
      const user = new Users({
        login,
        email,
        password,
      });

      user.save().then((newUser: object) => {
        res.status(200).json({ 
          status: 200,
          result: newUser,
        });
        return;
      });

    } catch (error) {
      res.status(500).json({ 
        status: 500,
        error,
        message: 'Ошибка сервера',
      });
      return;
    }
  }
};
