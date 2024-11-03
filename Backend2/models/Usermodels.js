import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// Static signup method
userSchema.statics.signup = async function (username, email, password) {
  // the validation of the fields
  if (!email || !password) {
    throw Error(`All the fields must be filled`);
  }
  if (!validator.isEmail(email)) {
    throw Error(`The email not valid`);
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(`The password is not strong enough`);
  }
  // the first line to check that user who have this email does not exists in the database
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  // inside the last code we tranform the password into the hash format
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  //   the next line to store the user inside the database
  const user = await this.create({ username, email, password: hashPassword });
  return user;
};
const User = mongoose.model("user", userSchema);
export default User;
