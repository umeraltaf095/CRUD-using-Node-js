import userModel from "../model/userModel.js";

const userData = {
  addUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      if (!name || !email) {
        return res.json({ message: "name or email fields cannot be empty" });
      } else {
        const existingemail = await userModel.findOne({ email });
        if (existingemail) {
          return res.json({ message: "Email already exist" });
        }
        await userModel.create({ name, email });
        return res.json({ message: "User added successfully" });
      }
    } catch (error) {
      res.status(500).send("Error Ocuured");
    }
  },

  getUser: async (req, res) => {
    try {
      const data = await userModel.find();
      return res.json(data);
    } catch {
      res.status(500).send("error");
    }
  },
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userModel.findOne({ _id: userId });
      if (!user) {
        return res.json({ message: "User does not exist" });
      }
      await userModel.deleteOne({ _id: userId });
      return res.json({ message: "User deleted successfully" });
    } catch {
      res.json({ error: " Error occured" });
    }
  },
  editUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updateData = req.body;
      const existingUser = await userModel.findOne({ _id: userId });
      if (!existingUser) {
        return res.json({ message: "User does not exist" });
      }
      await userModel.findOneAndUpdate({ _id: userId }, updateData);
      return res.json({ message: "User updated successfully" });
    } catch {
      res.json({ error: "Error occured" });
    }
  },
};

export default userData;
