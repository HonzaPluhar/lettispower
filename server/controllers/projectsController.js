const Project = require("../models/project");
const User = require("../models/user");

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      progression,
      status,
      trackTimeUrl,
      downloadUrl,
      assignetTo,
      projectOwner,
    } = req.body;

    // Find user by email
    const user = await User.findOne({ email: assignetTo });
    if (!user) {
      return res.json({ error: "User not found" });
    }

    // Create new project
    const newProject = new Project({
      title,
      description,
      progression,
      status: status || "waiting",
      trackTimeUrl,
      downloadUrl,
      assignetTo: user._id,
      projectOwner,
    });

    //Add project to user projects
    user.projects.push(newProject);

    // Save project
    await newProject.save();
    res.json(newProject);

    // Save user
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

//get All projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProject,
  getProjects,
};
