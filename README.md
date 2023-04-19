# local-search-engine

### Introduction

This is the project will help you to find all the local businesses and their corrosponding details.

### Technical Stack

1. Server Stack: Node.js, Typescript
2. Client Stack: ReactJS. Typescript, Antd (UI Framework)
3. IDE: Visual Studio Code
4. Browser: Google Chrome

### How To Build & Run Application

1. Pre-requisite: Visual Studio Code, Node.js, GIT, Google Chrome browser are already installed on the target machine.
2. Clone Repository: https://github.com/amittkSharma/local-search-engine.git
3. Package Installation: Open the source code in Visual Studio Code, and open the terminal window, navigate to the source folder. And execute command npm install . Due to monorepo concept packages for both client and server will be installed in one go. If there is a problem please check the troubleshooting section below.
4. Server Startup: Open another terminal window, navigate to the local-search-server and execute the command in the same sequence to build and start the nodejs server: npm run build and npm run start
5. After the execution of commands in step 4, server will start up at port 8081
6. Fire-up Client: Open another terminal window, navigate to the local-search-client and execute the command to launch the dashboard(web application) npm run start
7. After the execution of commands in step 6, the client application will be launched in the chrome browser at http://localhost:3000/localSearch/search
8. CONGRATULATIONS :) all the components of the system are up and running.

### Troubleshooting Guide

1. If the Package Installation step does not work, then please navigate to the specific folders local-search-server, local-search-client and execute npm install command inside those folders

### Known Issues:

1. The search page is not holding the state for the old search results, once navigated back from the details page.
2. The is no REST API available to search the results directly. The only API available are the details API, which is not the efficient way for searching based on name or addresses. So in order to get the search result some of the data is hard coded.
3. There is one case in the opening hours display is not tackled, when there is a disruption in the sequence of weekdays for closing and opening
