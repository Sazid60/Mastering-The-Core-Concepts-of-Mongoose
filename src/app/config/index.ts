import dotenv from 'dotenv'
import path from 'path'

// connecting with .env
// Configure dotenv to load .env file
dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL
}

// The code imports dotenv and path to manage environment variables.
// It uses dotenv.config() to load a .env file located in the current working directory.
// It exports an object containing port and database_url, which are retrieved from the .env file.
// This setup is used to configure a Node.js application dynamically with environment-specific variables.