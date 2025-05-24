import { model, Schema, Document } from "mongoose";

interface IRanking extends Document {
  emoji: string;
  created: number;
  teacherId: number;
}

const RankingSchema = new Schema({
  emoji: {
    type: String,
  },
  created: {
    type: Number,
  },
  teacherId: {
    type: String,
  },
});

const RankingModel = model<IRanking>("Ranking", RankingSchema);

export { RankingModel, IRanking };

