import { model, Schema, Document } from "mongoose";

interface ITeacher extends Document {
  name: string;
  id: string;
  picture: string;
}

const TeacherSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  picture: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: String,
    unique: true,
  },
});

const TeacherModel = model<ITeacher>("Teacher", TeacherSchema);

export { TeacherModel, ITeacher };
