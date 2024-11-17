# Mastering The Core Concepts of Mongoose

Installation: https://blog.logrocket.com/linting-typescript-eslint-prettier

In this module, you will gain an overview of the Mongoose library and its role in working with MongoDB databases. You will learn how to install and set up Express, Mongoose, TypeScript, dotenv, and CORS for your project. By installing prettier-ts-node-dev, you'll be able to automatically fix any formatting issues in your code, while Installing ESLint will help you identify and address errors in your codebase.

The module will also cover software design patterns, specifically comparing the MVC (Model-View-Controller) pattern with the modular pattern, enabling you to choose the most suitable approach for organizing and structuring your application. Additionally, you will explore creating interfaces to define object structures and behaviors in your code.

To apply the concepts learned, you will create a schema for a student, defining the necessary properties and relationships. Following that, you will learn how to create routes, services, and controllers to handle student-related requests. Finally, you will be encouraged to refactor your existing schema, leveraging the knowledge gained throughout the module, to enhance its design and implementation.

## 8-1 Introduction to mongoose

- Mongoose is a powerful object data modeling library for mongodb. It is called O D M. Its like modeling the data like object.
- We can store some unstructured data in mongodb. If there exists different structured data in one collection we can not work. For this reason we will use mongoose. Its like it will check and allow to enter if its valid data. It will not allow to keep the unstructured data according to our modeling. Mongoose will work lie abstraction here.
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
- "outDir": "./dist", "rootDir": "./src",
- npm i --save-dev @types/node
- "scripts": {
  "build" : "tsc",
  "test": "echo \"Error: no test specified\" && exit 1"
  }, if we write npm run build it will create dist folder and tsc command work will be done
- npm run build
- node ./dist/app.js
- we will keep all connections in server.ts
- Install node typing library npm i -D @types/node
- Install express typing library npm i -D @types/express
- npm i --save-dev @types/cors
- Create .env file in the root and

  ```js
  PORT = 5000
  DATABASE_URL=mongodb+srv://admin-um:admin12345@cluster0.cjbmdks
  mongodb.net/first-project?retryWrites=true&w=majority
  appName=Cluster0

  <!-- here first-project is the database name it is added additionally  -->
  ```

- In server.ts

```ts
import app from './app';

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
```

- In app.ts

```ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
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

#### Explanation of dotenv.config({ path: path.join((process.cwd(), '.env')) }):

- This line configures the dotenv library to load environment variables from a specific .env file. Here's what each part does:

- dotenv.config({ path: ... }):

dotenv.config() initializes the dotenv library, making variables in the .env file accessible via process.env.
path.join(process.cwd(), '.env'):

- process.cwd(): Gets the current working directory of the Node.js process.
- path.join(): Constructs the full path to the .env file by combining the current working directory with the file name .env.
- Purpose: This line ensures that dotenv loads environment variables from a .env file located in the root of the project's working directory. This is a common practice for managing configuration settings in a Node.js application.

ন্ডাস্ট্রি তে এখনো .eslintrc.json এবং .eslintignore এই প্যাটার্ন ব্যবহার হতেই দেখা যায়, তবে .eslint.config.mjs তুলনামূলক নতুন যা সামনে ইন্ডাস্ট্রিতে এডাপ্ট হতে পারে এবং আপনারাচাইলে ইনডিভিজুয়াল প্রজেক্ট এর জন্য সেটাপ করতে পারেন, সেজন্য এই রিলেটেড ব্লগ এবং ভিডিও দেয়া হল।

ব্লগঃ
[Blog Link](https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg)

## 8-3 Installing eslint, refactor code, fix errors using command

- index.ts

```ts
import dotenv from 'dotenv';
import path from 'path';

// connecting with .env
// Configure dotenv to load .env file
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
```

- The code imports dotenv and path to manage environment variables.
- It uses dotenv.config() to load a .env file located in the current working directory.
- It exports an object containing port and database_url, which are retrieved from the .env file.
- This setup is used to configure a Node.js application dynamically with environment-specific variables.

- server.ts

```ts
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
```

- app.ts

```ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
```

#### Eslint Installation

- Eslint helps to forma codes, find error, code quality check
- Prettier helps tto format code

[Installation Guide](https://blog.logrocket.com/linting-typescript-eslint-prettier) This is old one

- add these on top of tsconfig.json

```js
 "include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip
```

- Strictly follow this documentation [Express-Typescript-eslint-prettier_setup](https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg)

1. run this command : npm i -D eslint@9.14.0 @eslint/js @types/eslint\_\_js typescript typescript-eslint
2. Run this command : npx eslint --init
   ![alt text](image-1.png)
3. To remove upgraded version run command: npm remove eslint
4. Run command tto add specific version : npm i -D eslint@9.14.0
5. Add he rules inside the eslint.config.mjs

```js
{
  ignores: ["node_modules", "dist"],
  rules: {
    "no-unused-vars": "error",
  },
},
```

![alt text](image-2.png)

6. Add these scripts inside package.json

   ```js
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix"
   ```

   ![alt text](image-3.png)

7. Run command : npm run lint
8. Run Command to Fix Error : npm run lint:fix
9. Setting up more rules in eslint.config.mjs

```js
{
    ignores: ["node_modules", "dist"], // Directories to be ignored by the linter.
    rules: {
        "no-unused-vars": "error",         // Disallow variables that are declared but never used.
        "no-unused-expressions" : "error", // Disallow standalone expressions that do nothing.
        "prefer-const" : "error",         // Prefer `const` over `let` for variables that are not reassigned.
        "no-console" : "warn",         // Warn when `console` statements are used (e.g., console.log).
        "no-undef" : "error" //if anything is not used show error
    },
}
```

10. Run command to find error: npm run lint
11. Run Command to fix error: npm run lint:fix

### 8-4 Install prettier,ts-node-dev,fix formatting issues

1. install prettier : npm i -D --exact prettier
2. create a file .prettierrc in the root and write inside
   ```js
   {
    "semi": true,
    "singleQuote": true
   }
   ```
3. Create .prettierignore file in the root and add inside dist
4. npx prettier --write src/app.ts this will fix the unwanted things
5. Add this inside the script of package.json so that if we run this command and say prettier to format

   ```js
   "prettier": "prettier . --write"
   <!-- or more specifically -->
   "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
   ```

6. Add another script for auto fixing the prettier problems
   ```js
   "prettier:fix": "npx prettier --write src"
   ```
7. now on we will use prettier command: npm run prettier or npm run prettier:fix
8. Got to vs code settings add open json and add

   ```js
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true,
   ```

9. if we want tto use while writing the codes we have use eslint and prettier extension
10. The best solution here is to use the eslint-config-prettier plugin to disable all ESLint rules that are irrelevant to code formatting, as Prettier is already good at it: prettier and eslint maramari korbe na

```js
npm install --save-dev eslint-config-prettier
```

11. Install ts-node-dev to re run automatically
    ```js
    npm i ts-node-dev --save-dev
    ```
12. ts-node-dev --respawn --transpile-only src/server.js run the server
13. Add the scripts to work more organized for production and development mode
    ```js
    "start:prod":"node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.js",
    ```
14. add NODE_ENV=development in .env. when its in production we will rename
