import "./lib/db";
import express from "express";
import cors from "cors";
import teacherRoutes from "./routes/teacher";
import rankingRouter from "./routes/ranking";

const app = express();
app.use(cors());
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(cors({
  origin: "https://kemmentaler-production.up.railway.app",
}));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /teacher or /ranking to view all the data" });
});

app.use("/teacher", teacherRoutes);
app.use("/ranking", rankingRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
