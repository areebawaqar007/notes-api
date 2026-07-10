import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 1,
            maxLength:13
            
        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 16,
        
            
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

            
        }

    },
    {
        timestamps: true
    }
)

// 1. PRE SAVE HOOK (before saving user)
// This only runs when you SAVE a user during register
// or when updating password
// 👉 It does NOT run during login


userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

// During LOGIN (comparePassword)
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User", userSchema)

