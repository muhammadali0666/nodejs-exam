const { read_file } = require("../fs/fs_api");


const Allcourses = {
  GET: (req, res) => {
    let courses = read_file("courses.json")
    res.status(200).send(courses);
  }
};

module.exports = Allcourses;
