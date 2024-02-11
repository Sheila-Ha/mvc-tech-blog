# mvc-tech-blog<!-- omit from toc -->
by Sheila Hanson ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)  
 ![alt text](public/assets/assets/img/logo.png)
## Description <!-- omit from toc -->
This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well. This is built from scratch and deployed using Heroku. This app is following a MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM and the express-session npm package fro authentication.

## Table of Contents <!-- omit from toc -->
  
- [Installation](#installation)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Features](#features)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)
- [Badges](#badges)
    

## Installation
- Clone the repository to get your starter code  
- Install dependencies
  - npm init  
    - npm install Sequelize  
    - npm install dotenv package  
    -  npm install MySQL  
    -  npm install MySQL2  
    -  npm install Node.js  
 - Insomnia
   - Used for testing
  
  ### User Story
- AS A developer who writes about tech    
    - I WANT a CMS - style blog site  
    - SO THAT I can publish articles, blog posts, and my thoughts and opinions  
  
  ### Acceptance Criteria  
-  **GIVEN** a CMS = style blog site
     - **WHEN** I visit the site for the first time
     - **THEN** I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in  


     - **WHEN**  I click on the homepage option
     - **THEN** I am taken to the homepage  

     - **WHEN** I click on any other links in the navigation
     - **THEN** I am prompted to either sign up or sign in  

     - **WHEN** I choose to sign up
     - **THEN** I am prompted to either sign up or sign in  

     - **WHEN** I choose to sign up
     - **THEN** I am prompted to create a username and password  

     - **WHEN** I click on the sign-up button
     - **THEN** my user credentials are saved and I am logged into the site  

     - **WHEN** I revisit the site at a later time and choose to sign in
     - **THEN** I am prompted to enter my username and password  

     - **WHEN**  I am signed in the site
     - **THEN**  I see navigation links for the homepage, the dashboard, and the option to log out  

     - **WHEN** I click on the homepage option in the navigation
     - **THEN** I am taken to the homepage and presented with the existing blog posts that include the post title and date created

     - **WHEN** I click on an existing blog post
     - **THEN** I am presented with the post title, contents, post creator's username, and date created for that post and have the option leave a comment  

     - **WHEN** I enter a comment and click on the submit button while signed in
     - **THEN** the comment is saved and the post is updated to display the comment, the comment creator's username, and the date created  

     - **WHEN** I click on the dashboard option in the navigation
     - **THEN** I am prompted to enter both a title and contents for my blog post  

     - **WHEN** I click on the button to create a new blog post
     - **THEN** the title and contents of my post are saved an I am taken back to an updated dashboard with my new blog post  

     - **WHEN** I click on one of my existing posts in the dashboard
     - **THEN** I am able to delete or update my post and taken back to an updated dashboard  

     - **WHEN** I click on the logout option in the navigation
     - **THEN** I am signed out of the site  

     - **WHEN** I am idle on the site for more than a set time
     - **THEN** I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts



      
## Usage 
- Run schema
  -  Develop folder - db folder - right click schema.sql 
      -  Then open in an integrated terminal and type the following commands in  
           -  mysql -u root -p  
           -  password - [enter your password]  
           -  source schema.sql  
           -  quit (this is going to end the sql shell = Bye)  
   ![alt text](assets/img/mysqlstartup.png)
- Run seeds
  - JS server.js - right click server.js
      - Then open in an integrated terminal and type the follow commands in  
          - npm i (run to make sure all the dependencies are installed before you begin)
          - npm run seed  
      - Starting the server - type the following below in the command line
          - npm run watch  
           - response on last line = App listening on port 3001!  
  ![alt text](assets/img/npmi.png)  
![alt text](assets/img/npmrunwatch.png)
- Insomnia - testing will be done here

 - Database Model Diagram  
![alt text](<assets/img/EER Diagram.png>)  
  
  DEMO: (https:)

## Features
 

## Challenges  



## Contributing
[NPM](https://www.npmjs.com/package/inquirer/v/8.2.4?activeTab=readme#installation)  
[Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)  
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)    
[Node.js](https://nodejs.org/docs/latest/api/) 
[Stack Overflow](https://stackoverflow.com/?newreg=67d94556b887449fa2885dadf54a5439)  
[JS Cheatsheet](https://htmlcheatsheet.com/js/)  
[W3school](https://www.w3schools.com/)  
[DEV](https://dev.to/envoy_/150-badges-for-github-pnk#contact)  
[Shields](https://shields.io/)  
[Sequelize](https://sequelize.org/docs/v6/getting-started/)   
[YouTube](https://youtube.com)  
[Insomnia](https://insomnia.rest)  
[Logo Maker](https://logo.com/)  
U of M teachers and materials from bootcamp

## Testing



## Questions
![Ask me anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
If you have any questions, or additional feedback, please feel free to email me and I will respond as soon as possible.
    
* Github -
[https://github.com/Sheila-Ha/mvc-tech-blog.git](https://github.com/Sheila-Ha/mvc-tech-blog.git)

* Email -
slhanson11@live.com

## License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Badges
![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-black?logo=insomnia&logoColor=5849BE) ![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)    
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat-square) 
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)   
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)  ![Lenovo](https://img.shields.io/badge/lenovo-E2231A?style=for-the-badge&logo=lenovo&logoColor=white)  ![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat-square)
![W3schools](https://img.shields.io/badge/W3Schools-04AA6D?style=for-the-badge&logo=W3Schools&logoColor=white) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=red)  
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)  ![Google Chrome](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)  
![MYSQLITE](https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white) ![Stack Overflow](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)  ![Lenovo](https://img.shields.io/badge/lenovo%20laptop-E2231A?style=for-the-badge&logo=lenovo&logoColor=white)  

