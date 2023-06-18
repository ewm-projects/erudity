import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT ?? "3001";
const getMongoUri = () => {
    switch (NODE_ENV) {
      case "dev":
        return process.env.LOCAL_MONGO_URI ?? "undefined";
      case "test":
        return process.env.TEST_MONGO_URI ?? "undefined";
      default:
        return process.env.MONGO_URI ?? "undefined";
    }
  };

export const env = { NODE_ENV, PORT, getMongoUri };