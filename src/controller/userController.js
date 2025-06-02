import userModel from "../model/userModel.js";

const userData = {
  addUser: async (req, res) => {
    try {
      
      console.log(req.file);
      
      const { name, email } = req.body;
      const file = req.file?.path;
   
      
      
      if (!name || !email) {
        return res.json({ message: "name or email fields cannot be empty" });
      } else {
        const existingemail = await userModel.findOne({ email });
        if (existingemail) {
          return res.json({ message: "Email already exist" });
        }
        await userModel.create({ name, email , file });
        return res.json({ message: "User added successfully" });
      }
    } catch (err) {
      res.json({error: err.message});
    }
  },

  getUser: async (req, res) => {
    try {
      
       const name = req.query.name;
       const email = req.query.email;
       let conditions = [];
       if(name) conditions.push({name: {$regex: name , $options: "i"} });
       if(email) conditions.push({ email: {$regex: email , $options: "i"} });
       const filteredData = await userModel.find(
        conditions.length ? {$and : conditions} : {}
       )
       console.log(filteredData);
       
       return res.json(filteredData);
       
    } catch(err) {
      res.json({error: err.message});
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
    } catch(err) {
      res.json({ error: err.message });
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
    } catch(err) {
      res.json({ error: err.message });
    }
  },
};

export default userData;
