# fs1030-fall2020-grp-d

## Backend environment configuration and how to start application ## 

1.  Run `npm install express esm uuid argon2 bcrypt jsonwebtoken express-jwt dotenv cors react-bootstrap bootstrap reactstrap react-router-dom --save` to install dependencies

2.  Run `npm nodemon --save-dev` to install development dependency

3.  Add `"dev": "nodemon -r esm -r dotenv/config index.js"` to ***package.json*** file scripts
   
4.  Run `npm run dev` to begin nodemon instance (start server)