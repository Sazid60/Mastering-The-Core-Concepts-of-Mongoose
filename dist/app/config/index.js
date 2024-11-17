"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// connecting with .env
// Configure dotenv to load .env file
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
};
// The code imports dotenv and path to manage environment variables.
// It uses dotenv.config() to load a .env file located in the current working directory.
// It exports an object containing port and database_url, which are retrieved from the .env file.
// This setup is used to configure a Node.js application dynamically with environment-specific variables.
