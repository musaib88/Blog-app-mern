# Blog-app

This is a Full stack project created using MERN stack ,every end-point is integrated with Ui.

## Overview

 This project is created to give user a interface of creating blog posts and fetching all blogs from database (mongodb) .Basically to provide every service as blog website
 it can be run only on local enviroment with individuals mongodb connection as i don't have premium mongo db access

## Features
  **Authentication:** The whole webiste is authenticated with jsonwebtoken.
- **Homepage :** A user can read all blog posts without signup or login .
- **Category Blogs:** A user  can also search or fetch by query or catagory of post .
- **Registar:** A user can register easily .
- **Login:** A user can login so that he would be able to get access to authenticated pages.
- **Write:** A user who is logged in can write a new blog post with post img .
- **Update:** A logged in user can update  post or can update his/her profile and profile pic
- 

## Design Technologies Used

- **Expreesjs:** The Blog-api is created using expressjs and nodejs
- **Mongoose:** The data-base connection is obtained by mongoose  .
- **Multer:** The image files are stored in backend using multer.
- **Reactjs:** The awesome front-end Ui is designed using reactjs.
- **Redux-toolkit:** The global state is managed by redux-toolkit in Ui

## Installation

  1. **Clone the Repository:**
     ```bash
     git clone https://github.com/musaib88/Blog-app-mern.git
  2. **Install Dependencies:**
      ```bash
       front-end:
      cd client-side
      npm install
      back-end:
      cd blog-api
      npm install
      create a connection for mongodb in .env file
  3. **Run the Application:**
      ```bash
      step 1 : cd blog-api
      step 2 : npm start
      Note: After sucessful  running of backend and mongodb connection
      step 3 : cd client-side
      step 4 : npm start
  4. Application will run  at 'http://localhost:3000'.
     

- 

## Screenshots





## Design Credits

- Design inspired by lamadev.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests related to design improvements or enhancements.

## License

This project is licensed under the [MIT License](LICENSE).
