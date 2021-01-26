import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UsersSchema = new Schema({
  login: String,
  email: String,
  password: String
});

const Users = model('Users', UsersSchema);
export { Users };