import User from "../model/user.js"

const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }


    // Create a new user
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: password,
    });

    const user = newUser.save();

    if (!user) {
      return res.status(500).json({ message: "Error creating user" });
    }
    else {
      return res.status(201).json({ message: "User created successfully" });
    }


    
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




export default Signup;
