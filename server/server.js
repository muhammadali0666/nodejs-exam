const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Router = require("./routes/course_routes");
const AutRouter = require("./routes/auth_router");
const Allrouter = require("./routes/all_courses");
const path = require("path");
const upload = require("express-fileupload");

dotenv.config();
const { PORT } = process.env || 4000;

const app = express();
app.use(cors());
app.use(express.json());

/////////////////// ROUTER
app.use(Router);

/////////////////// Auth
app.use(AutRouter);

/////////////////// Allcourses
app.use(Allrouter);

/////////////////// file upload
app.use(upload());

//////////////////////////////////////

app.post("/upload", (req, res) => {
  if (req.files) {
    console.log(req.files);
    let files = req.files.file;
    let filename = Date.now() + path.extname(files.name);

    files.mv("img/" + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          img: `/img/${filename}`,
        });
      }
    });
  }
});

//////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
