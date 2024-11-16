# Mastering The Core Concepts of Mongoose
Installation: https://blog.logrocket.com/linting-typescript-eslint-prettier



In this module, you will gain an overview of the Mongoose library and its role in working with MongoDB databases. You will learn how to install and set up Express, Mongoose, TypeScript, dotenv, and CORS for your project. By installing prettier-ts-node-dev, you'll be able to automatically fix any formatting issues in your code, while Installing ESLint will help you identify and address errors in your codebase. 



The module will also cover software design patterns, specifically comparing the MVC (Model-View-Controller) pattern with the modular pattern, enabling you to choose the most suitable approach for organizing and structuring your application. Additionally, you will explore creating interfaces to define object structures and behaviors in your code.



To apply the concepts learned, you will create a schema for a student, defining the necessary properties and relationships. Following that, you will learn how to create routes, services, and controllers to handle student-related requests. Finally, you will be encouraged to refactor your existing schema, leveraging the knowledge gained throughout the module, to enhance its design and implementation.

## 8-1 Introduction to mongoose
- Mongoose is a powerful object data modeling library for mongodb. It is called O D M. Its like modeling the data like object.
- We can store some unstructured data in mongodb. If there exists different structured data in one  collection we can not work. For this reason we will use mongoose. Its like it will check and allow to enter if its valid data. It will not allow to keep the unstructured data according to our modeling. Mongoose will work lie abstraction here. 
- Sent data -> Compares with he modeling by mapping -> If valid It will allow to keep data by using mongodb driver

### Mongoose Vs Mongodb 
#### MongoDB vs Mongoose Methods

| **MongoDB** | **Mongoose**                |
| ----------- | --------------------------- |
| `find()`    | `Model.find()`              |
| `findOne()` | `Model.findOne()`           |
| `count()`   | -                           |
| `update()`  | `Model.findByIdAndUpdate()` |
| `delete()`  | `Model.findByIdAndDelete()` |
| -           | `Model.create()`            |
| -           | `Model.findById()`          |
| -           | `Model.findOneAndDelete()`  |
| -           | `Model.replaceOne()`        |
| -           | `Model.updateMany()`        |
| -           | `Model.updateOne()`         |

#### Why we will use mongoose
- Schema Definition
- Model Creation
- Data Validation
- Querying
- Middleware Support
- Population
  
## 8-2 Installing express , mongoose, typescript, dotenv ,cors
- npm init -y
- npm install express
- npm install mongoose --save
- npm install typescript --save-dev
- npm install cors
- npm install dotenv --save
- tsc -init
- "outDir": "./dist",   "rootDir": "./src",    
- npm i --save-dev @types/node
-   "scripts": {
    "build" : "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, if we write npm run build it will create dist folder and tsc command work will be done
- npm run build
- node ./dist/app.js
- we will keep all connections in server.ts
- Install node typing library npm i -D @types/node
- Install express typing library npm i -D @types/express
- Create .env file in the root and 
  ```js
  PORT = 5000
  DATABASE_URL=mongodb+srv://admin-um:admin12345@cluster0.cjbmdks
  mongodb.net/first-project?retryWrites=true&w=majority
  appName=Cluster0

  <!-- here first-project is the database name it is added additionally  -->
  ```
-  In server.ts  
```ts
import app from "./app";

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
  
  }


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
```
- In app.ts
```ts
import express, {Request, Response} from 'express';

const app = express()
const port = 3000

app.get('/', (req :Request, res:Response) => {
  res.send('Hello World!')
})

export default app

```
- For Port Purpose we have to create a separate file so that we do not need to use process.env every time.
![alt text](image.png)

- Inside te config -> index.ts file 
```ts
import dotenv from 'dotenv';
import path from 'path';

// Configure dotenv to load .env file
dotenv.config({ path: path.join(process.cwd(), '.env') });

// process.cwd() gets the current working directory (CWD) of the Node.js process. This typically points to the root directory of your project.
// Combines the current working directory (process.cwd()) with the string '.env' to create the full path to the .env file.
// dotenv.config is called with the { path } option to tell dotenv where to find the .env filedotenv.config is called with the { path } option to tell dotenv where to find the .env file
```
- This setup is useful in scenarios where sensitive configuration data (e.g., API keys, database credentials, or server configurations) is stored in a .env file to keep it out of the source code and version control.

