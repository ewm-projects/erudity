<h1 align="center">Erudity</h1>
<h2 align="center">
    <a href="https://quiet-eyrie-77866-ae5f9905f516.herokuapp.com/">Live</a> · 
    <a href="https://discord.gg/nWH3TnMDp5" class="default">Discord</a> 
</h2>

## Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributors](#contributors)

## About
**Description**
- Web app that features a learning resources catalog, progress tracking system, and more to make the learning process easier 
- See [Project Vision](https://github.com/ewm-projects/ewm-docs/blob/main/v1/vision.md) for more details

**Purpose**
- For learning to build and collaborate on a fullstack project
- To create an application that can be useful and beneficial to many people  

**Planned features**
- _Note: more will be planned once [MVP](https://github.com/ewm-projects/ewm-docs/blob/main/v1/mvp.md) is achieved_

|Id | Functional features |
|:---|:---|
| 1 | Signup & Signin |
| 2 | Resource Display |
| 3 | Resource interaction |
| 4 | Resource submission |
| 5 | Reporting resources |
| 6 | User password reset |
| 7 | Admin dashboard |
| 8 | User profile |

## Tech Stack
**Backend**
- Express
- Mongoose
- MongoDB

**Frontend**
- Vite
- React
- React Router
- TailwindCSS

**Testing**
- Jest
- React Testing Library

**Other**
- Docker
- Nginx
- Heroku
- Figma
- Github Actions

## Getting Started
Thank you for helping on this project!
If you haven't already, please clone this repository.
To do this, you need to use  a command terminal and have git installed.
From there:
- run
    git clone https://github.com/ewm-projects/erudity.git
- enter the "erudity/backend" folder
- run
    npm install
- enter the "erudityfrontend" folder
- run
    npm install

There are two main parts of this project, and we need help on both: frontend and backend
Frontend uses React, Vite, and Tailwind CSS
    Its main entry point is "erudity/frontend/index.html"
    To run the frontend application
        npm run dev
Backend uses Node, Express, and Mongoose (to access MongoDB)
    Its main entry point is "erudity/backend/src/main/index.js"
    To run the backend application
        npm run dev

### Prerequisites
- Node LTS
- Docker

### How to run
- `npm run docker:rebuild`
- Go to `localhost:3000`

## Contributors
- ...
