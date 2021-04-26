![movingimage](./assets/00-mi-logo.png)

# Front-end developer challenge

The application is a panel control for the videos list. Is possible to add a new video description, edit and delete it. And the list is presented in a table where is also possible to search.

# Solution and tech decisions

As it is a simple application, I will concentrate to make it more performative with a custom clean UI.
To do so, I will not use the material-ui, I will replace it for my customs components build with TailwindCSS.

## Stack

React (CRA)
TailwindCSS

### Notes

- The backend can be accessed via http://localhost:3001
- It runs with a package called **_json-server_**, and the data comes from the **_db.json_** file
- The JSON structure of the **_db.json_** file was twisted a bit on purpose. Please do not change the original DB structure. Of course, on the front-end side you are free to transform and manipulate the data in any way you feel appropriate
- Material-UI was added to the starter template. If you feel more comforable with another UI framework, you can change it. You can add all the styles that you need

## Steps to run the project

- Install dependencies with:

`npm i`

- Run both the frontend and backend with:

`npm start`
