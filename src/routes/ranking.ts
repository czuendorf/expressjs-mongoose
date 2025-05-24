import { Router } from "express";
import { RankingModel, IRanking } from "../models/ranking";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const rankings: IRanking[] = await RankingModel.find().exec();
    return res.json(rankings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const { teacherId, emoji } = req.body;

    if (!emoji || emoji?.length < 1) {
      return res.status(500).json({ error: `Emoji not well-formed: ${emoji} Length: ${emoji?.length}` });
    }
    const newRanking = await RankingModel.create({
      emoji: emoji,
      teacherId: teacherId,
      created: Date.now()
    });
    return res.status(201).json(newRanking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
