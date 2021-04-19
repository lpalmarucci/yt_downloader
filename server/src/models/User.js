import mongoose from "mongoose";

export default mongoose.model('Users', { username: String, email: String, password: String});