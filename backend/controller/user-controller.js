import User from "../model/User.js";
import bcrypt from 'bcryptjs';

// Defining and exporting the getAllUsers function
export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find(); // Fetching all users from the database
    } catch (err) {
        return console.log(err); // Logging any errors
    }

    // Checking if users were found
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }

    // Sending back the users data
    return res.status(200).json({ users });
};

export const signUp = async (req,res,next) => {
    const {name,email,password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email});
    }catch(err){
        return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message : "User Already exist! loging instead."});
    }

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password : hashedPassword
    });

    try{
        await user.save();
    }catch (err){
        console.log(err);
    }
    return res.status(201).json({user})
};

export const logIn = async (req,res,next) => {
    const {email,password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email});
    }catch(err){
        return console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message : "Could not find user by this email."});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message : "Incorrect Password."});
    }
    return res.status(200).json({message:"Login Success."})

};