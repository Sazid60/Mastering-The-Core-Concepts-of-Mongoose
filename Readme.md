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

| **MongoDB**          | **Mongoose**                       |
|-----------------------|------------------------------------|
| `find()`             | `Model.find()`                    |
| `findOne()`          | `Model.findOne()`                 |
| `count()`            | -                                |
| `update()`           | `Model.findByIdAndUpdate()`       |
| `delete()`           | `Model.findByIdAndDelete()`       |
| -                   | `Model.create()`                  |
| -                   | `Model.findById()`                |
| -                   | `Model.findOneAndDelete()`         |
| -                   | `Model.replaceOne()`              |
| -                   | `Model.updateMany()`              |
| -                   | `Model.updateOne()`               |

#### Why we will use mongoose
- Schema Definition
- Model Creation
- Data Validation
- Querying
- Middleware Support
- Population