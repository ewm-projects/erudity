import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT ?? "3001";

export const env = { NODE_ENV, PORT };