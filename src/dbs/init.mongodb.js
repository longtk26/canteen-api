import mongoose from "mongoose";
import config from "../configs/config.mongodb.js";
import { countConnect } from "../helpers/check.connect.js";

const {
  db: { host, port, name },
} = config;

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(connectString)
      .then(() => {
        countConnect();
        console.log("Connected to MongoDB");
      })
      .catch(() => console.log("Failed to connect to MongoDB"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

export default instanceMongodb;
