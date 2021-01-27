/*
  Сервис по ваимодействию с MongoDB через Mongoose
*/

import mongoose from 'mongoose';

import { MONGO_CLUSTER, MONGO_USER, MONGO_PASS, MONGO_DB } from '../config';

export default class MongooseManager {
  async connect () {
    await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  }

  async disconnect () {
    await mongoose.disconnect();
  }
}
