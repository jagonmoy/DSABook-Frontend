<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

# <h1 align = 'center'> DSABook </h1>
<br>

**This is a Readme For Frontend Part of the Application DSABook** 

<!-- 
In my Internship Program in **Cefalo Bangladesh Limited** I was asked to create a web Application having CRUD functionalities using NodeJs , ExpressJs and ReactJs . I had a choice to select any database in my project . So I have used MongoDB Atlas for database (NoSQL) . I have named my CRUD application **DSABook** as it contains blogs regarding data Structures and algorithms .  -->

<br>

# Table of Contents
<ul>
<li> <h3> <a href = "#introduction" > 1. &nbsp; Introduction </a> </h3> </li>
<br>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#motivation" > 1.1 &nbsp; Motivation </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#technology" > 1.2 &nbsp; Technology </a> </h4>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#runproject" > 1.3 &nbsp; How to Run this Project in your machine </a> </h4>

<br>

<li> <h3> <a href = "#deployment" > 2. &nbsp; Deployment </a> </h3> </li> 

<br>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#deployheroku" > 2.1 &nbsp; Deployment in Heroku </a> </h4>
<h4>&nbsp; &nbsp; &nbsp;<a href = "#deploydockerhub" > 2.2 &nbsp; Docker Image Deployed in Docker Hub </a> </h4>
<h4>&nbsp; &nbsp; &nbsp;<a href = "#runimage" > 2.3 &nbsp; How to Run this Docker image in your machine </a> </h4>

<br>

<li> <h3> <a href = "#api" > 3.&nbsp; Functionalities </a> </h3> </li> 

<br>

<h4>&nbsp; &nbsp; &nbsp;<a href = "#authapi" > 3.1 &nbsp; Auth Related Endpoints </a> </h4>

<br>

# <h1 id = 'introduction'> 1. Introduction</h1>
<br>


## <h2 id = 'motivation' > 1.1 Motivation </h2>
<br>

In my Internship Program in **Cefalo Bangladesh Limited** I was asked to create a web Application having CRUD functionalities . I have named my CRUD application **DSABook** as it contains blogs regarding data Structures and algorithms .In this readme I will mainly describe everyting related to frontend part of DSABook web application . 

<br>

## <h2 id = 'technology' > 1.2 Technology </h2>
<br>
  
  [React js](https://reactjs.org/) : &nbsp; A JavaScript library for building user interfaces <br>
  [Material-UI](https://v4.mui.com/) : &nbsp; A React UI framework <br>
  [React Router](https://reactrouter.com/) : &nbsp;  a fully-featured client and server-side routing library for React <br>
  [axios](https://www.npmjs.com/package/axios) : &nbsp; a Promise based HTTP client for the browser and node.js<br>
  [moment.js](https://momentjs.com/) : &nbsp; Moment.js provides a wrapper for the native JavaScript date<br>
  and others...

<br><br>

## <h2 id = 'runproject' > 1.3  How to Run this Project </h2>
<br>

### Step 1 :
<br> 
Make you you have Node and react installed in your machine . If not then install these in your machine
<br><br>

### Step 2 :
<br>
Clone this Github Repository <br><br>
<pre>git clone https://github.com/jagonmoy/Cefalo-Internship-ReactJs.git</pre>
<br>

### Step 3 :
<br>

start the backend server and set the REACT_APP_BACKEND_URL_TEST of .env according to the PORT and HOST variable of config.env file of
[Backend](https://github.com/jagonmoy/Cefalo-Internship-Nodejs)  


<br>


### Step 4 :
<br>
make sure you have any package manager ( e.g npm,yarn etc) installed in your machine . Then run the following command <br> <br>
for npm <br> <br>
<pre> npm install</pre>    
<br>

### Step 5 :
<br>
after doing all the steps now you can run the following command <br><br>
for npm ,<br><br>
<pre>npm start</pre>

if there is no error then it should run perfectly!!

# <h1 id = 'deployment'> 2. Deployment</h1>
<br>

## <h2 id = 'deployheroku' > 2.1 Deployment in Heroku </h2>
<br>

I have deployed backend and frontend part of **DSABook** separately in Heroku .

[Frontend Part of **DSABook** Deployed in Heroku](https://dsa-book-frontend.herokuapp.com/)

<br>

## <h2 id = 'deploydockerhub' > 2.2 Docker Image Deployed in Docker Hub</h2>
<br>

I have deployed image of backend and frontend part of DSABook separately in Docker Hub .

[Image of Frontend Part of **DSABook** deployed in DockerHub](https://hub.docker.com/repository/docker/jagonmoy/dsa-book-frontend)

<br>

## <h2 id = 'runimage' > 2.3 How to run This Docker image in your machine </h2>
<br>

Install Docker in your machine and do all the commands and procedure to start docker in your terminal .
[This might help you to install docker in your machine](https://docs.docker.com/get-docker/) or you can find many youtube Tutorials . <br>
After Installing Docker in your machine and starting docker in your terminal you can type following command  .<br>

    docker run -it -p <port-number>:3000 -d jagonmoy/dsa-book-backend:<tag-name>

In place of **port-number** you will use any port number which is free and where you are wishing to run this application . In place of **tag-name** use the tag which has latest version. 

suppose , you want to use the port number **3005** and the latest version is **v2.0.0** then your command will be <br>
  
    ​docker run -it -p 3005:3000 -d jagonmoy/dsa-book-backend:v2.0.0

Now you can visit frontend part  of **DSABook** in :
http://localhost:3005/

<br>