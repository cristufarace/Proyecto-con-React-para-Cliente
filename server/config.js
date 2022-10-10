import { config } from "dotenv";
config();

export const MONGODB_URI =
  // process.env.MONGODB_URI ||
   "mongodb+srv://usuario:constraseña@cluster0.war4lia.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 3000;

export const CLOUD_NAME = "clave";
export const API_KEY = "clave";
export const API_SECRET = "clave";
