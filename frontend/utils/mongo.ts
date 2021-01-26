import mongoose from 'mongoose';

/*
  Сервис по ваимодействию с MongoDB через Mongoose
*/

export default class MongooseManager {
  connect = async () => {
    await mongoose.connect(`mongodb+srv://ilyaKodit:ilya-gluk@cluster.lxq5s.mongodb.net/project?retryWrites=true&w=majority`, {
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
