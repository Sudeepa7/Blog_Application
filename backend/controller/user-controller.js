import User from "../model/User";

// Defining and exporting the getAllUsers function
export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find(); // Fetching all users from the database
    } catch (err) {
        console.log(err); // Logging any errors
    }

    // Checking if users were found
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }

    // Sending back the users data
    return res.status(200).json({ users });
};
