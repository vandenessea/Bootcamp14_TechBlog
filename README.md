
  # Project Name:

  MVC Tech Blog
  
  ## Deployed Application
  
  [Click Here](https://intense-dawn-84284.herokuapp.com/)
  
  ## Known Issues
  
  The following are known issues (among many others I am sure) I did not add into this application due to time constraints or just a total failure to implement:
  
  - No way to add comments (I had some seeded comments in my local setup)
  - No session/cookies tracking
  - No Logout

  ## License

  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) : [View License](https://www.gnu.org/licenses/gpl-3.0)

  ## Table of Contents

  - [Title](#Project-Name)
  - [License](#License)
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description

  Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

  ## Installation

  To run app locally, navigate to the root directory of this repository and run the following commands to install necessary dependencies:

    npm i
    
  Create your own .env file which will contain the following:
  
    DB_NAME= your database name
    DB_USER= your username
    DB_PASSWORD = your password
    
  To create your own database, navigate to the db/ directory and run the following SQL Statements either in MySQL workbench or in MySQL command prompt: 
  
    DROP DATABASE IF EXISTS tech_blog_db;
    CREATE DATABASE tech_blog_db;
    
  To seed your database, from the root directory of the project run the following:
  
    node seeds/seed.js  

  ## Questions 

  For issues, questions, and comments please contact epurpur@gmail.com or visit [https://github.com/epurpur](https://github.com/epurpur) 
  
