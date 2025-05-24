import { Router } from "express";
import { TeacherModel, ITeacher } from "../models/teacher";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const teachers: ITeacher[] = await TeacherModel.find().exec();
    return res.json(teachers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const { name, picture, description } = req.body;

    const newTeacher = await TeacherModel.create({
      id: Date.now(),
      name: name,
      description: description,
      picture: picture
    });
    return res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
