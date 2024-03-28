# Simple-Expense-Tracker
Simple CRUD App for Expense Tracking

## About The Project
A simple Create, Read, Update, and Delete (CRUD) web application to track simple expenses. This project was aimed to understand and implement the HTTP Methods: `GET`, `POST`, `UPDATE`, and `DELETE` along with the data being stored in the database. This project is a prototype development of a more feature rich application which is to come in the future.

*It should be noted that this project does not follow the MVC software design pattern. Content Styling is also not the goal of this project.*

### Built With

* ![Javascript][Javascript]
* ![EJS][EJS]
* ![CSS][CSS3]
* ![HTML5][HTML5]
* ![Express.js][Express.js]
* ![MongoDB][MongoDB]
* ![Node.js][Node.js]

### Prerequisites
* Latest npm package
```sh
    npm install npm@latest -g
```

### Installation
1. Clone the repo
```sh
    git clone https://github.com/github_username/repo_name.git
```
2. Install NPM packages
```sh
    npm install
```
3. Create MongoDB database and get your unique connection string at https://www.mongodb.com/
4. Create a `.env` file and enter your unique connection string with the following format
```sh
    DB_STRING = 'ENTER YOUR UNIQUE CONNECTION DB STRING'
```
5. Run the application
```sh
    node server.js
```
6. Go to `http://localhost:8000/` in the browser.

### Known Issues
 - Editing multiple entries in one request is not possible - though the UI may look like it is supported, due to the design of the "Update" and "Cancel" buttons reloading the page.


[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[EJS]:https://img.shields.io/badge/EJS-grey?style=for-the-badge&logo=ejs
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML5]:https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Express.js]:https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[MongoDB]:https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[Node.js]:https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white