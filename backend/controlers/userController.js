import User from "../models/userModel.js";
import asyncHandler from "../middlerware/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("PlEase providE all input fiElds,");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Check for existing User.
  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("UsEr alrEady Exists.");

  // Creates the User.
  const newUser = new User({ username, email, password: hashedPassword }); // you have to specify the hashed password with 'password: hashedPassword' since "hashedPassword" is not the same as 'password'

  try {
    await newUser.save();

    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid usEr Data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPaswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPaswordValid) {
      createToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
      return;
    }
  }
});

export { createUser, loginUser };
