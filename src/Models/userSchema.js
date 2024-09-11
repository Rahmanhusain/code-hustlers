import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },  // Primary email field
    ismentor: { type: Boolean, default: false }
});

// Create the User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
