import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    motivo: {
      type: String,
      required: true,
      trim: true,
    },
    codigo: {
      type: Number,
      required: true,
      trim: true,
    },
    medidas: {
      type: String,
      required: true,
      trim: true,
    },
    motivo: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      public_id: String,
      url: String,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Post", postSchema);
