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


![Screenshot from 2024-01-01 19-12-38](https://github.com/musaib88/Blog-app-mern/assets/119590812/1ac26681-2c22-41ab-a211-d0868f687ab8)


![Screenshot from 2024-01-01 19-13-07](https://github.com/musaib88/Blog-app-mern/assets/119590812/8e7dc3bb-152c-46e3-a320-a86c7a8c5489)


![Screenshot from 2024-01-01 19-14-07](https://github.com/musaib88/Blog-app-mern/assets/119590812/a54f5cda-786b-4cb5-92ab-3d7f379ef2a7)



![Screenshot from 2024-01-01 19-14-38](https://github.com/musaib88/Blog-app-mern/assets/119590812/1a78f43a-54fe-4351-8433-07d6775b16c0)



![Screenshot from 2024-01-01 19-15-01](https://github.com/musaib88/Blog-app-mern/assets/119590812/e5c00abf-fb36-480b-bb25-18beaf275862)

![Screenshot from 2024-01-01 19-15-37](https://github.com/musaib88/Blog-app-mern/assets/119590812/2272a1e4-6386-4bbc-8bb9-1ad471a9e9ad)


![Screenshot from 2024-01-01 19-16-46](https://github.com/musaib88/Blog-app-mern/assets/119590812/82ccab99-fdc8-4e9a-8ceb-ebbf02244c34)

![Screenshot from 2024-01-01 19-17-25](https://github.com/musaib88/Blog-app-mern/assets/119590812/7e732acf-7ddc-49e8-bd31-7d64d6cd577a)
![Screenshot from 2024-01-01 19-18-46](https://github.com/musaib88/Blog-app-mern/assets/119590812/d19851c4-b456-43c7-90bd-b1c45dcfd815)


![Screenshot from 2024-01-01 19-19-08](https://github.com/musaib88/Blog-app-mern/assets/119590812/aa4b176d-accb-4adf-85bd-22e151bf0424)

![Screenshot from 2024-01-01 19-19-27](https://github.com/musaib88/Blog-app-mern/assets/119590812/c4304e7b-90a1-42e6-8ca7-fdbfdd6cbb38)

![Screenshot from 2024-01-01 19-19-44](https://github.com/musaib88/Blog-app-mern/assets/119590812/9edd5101-26a7-490a-944a-2890b8e86cbd)


## Design Credits

- Design inspired by lamadev.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests related to design improvements or enhancements.

## License

This project is licensed under the [MIT License](LICENSE).
