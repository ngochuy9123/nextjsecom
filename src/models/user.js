import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 1,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      unique: true,
      trim: true,
      minLength: 1,
    },
    password: String,
    role: {
      type: String,
      default: "user", //admin
    },
    image: String,
    resetCode: {
      data: String,
      expireAt: {
        type: Date,
        default: () => new Date(Date.now() + 10 * 60 * 1000),
      },
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model("User", userSchema);
