# soc-net

## Description

To view the video demonstration of this application, click this link: [**soc-net**](https://www.youtube.com/watch?v=Tlsy9G_tXI4).

**soc-net** is

Or watch the gif below!  
![soc-net](./assets/soc-net.gif)

This application was written following the guidelines laid out in the provided [User Story](#User%20Story) and [Acceptance Criteria](#Acceptance%20Criteria).

### Table of Contents

-   [User Story](#user%20story)
-   [Acceptance Criteria](#acceptance%20criteria)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Future Developments](#future%20developments)
-   [Questions?](#questions)

#### User Story

> AS A social media startup  
> I WANT an API for my social network that uses a NoSQL database  
> SO THAT my website can handle large amounts of unstructured data

#### Acceptance Criteria

> GIVEN a social network API  
> WHEN I enter the command to invoke the application  
> THEN my server is started and the Mongoose models are synced to the MongoDB database  
> WHEN I open API GET routes in Insomnia Core for users and thoughts  
> THEN the data for each of these routes is displayed in a formatted JSON  
> WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
> THEN I am able to successfully create, update, and delete users and thoughts in my database  
> WHEN I test API POST and DELETE routes in Insomnia Core  
> THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

As listed in `package.json`, this application has the following dependencies:

-   Express
-   Mongoose

At the root level of the application, open the terminal and run either `npm i` or `npm i express mongoose`.  
![install](./assets/install.gif)

## Usage

[Insomnia](https://insomnia.rest/) is the recommended API client to run **soc-net** (because it's the one I use and the only one I know how to use, currently...).

##### Usage Directory:

-   ##### [Starting **soc-net**](#starting)
-   ##### [User CRUD Routes](#user)
-   ##### [Friending](#friending)

### Starting **soc-net**

There are three commands to choose from to start the application in the integrated terminal:

-   `npm start`
-   `node server`
-   `nodemon server`  
    ![start](./assets/start.gif)

### User CRUD Routes

**soc-net** utilizes basic CRUD routes.

-   GET ALL USERS: make a `GET` request to [localhost:3001/api/users](localhost:3001/api/users)
-   GET A USER BY ID: make a `GET` request to [localhost:3001/api/users/`{userId}`](localhost:3001/api/users/{userId})
-   CREATE A USER:

    -   set the Body of the request's text type to JSON and use the following JSON input:

    ```js
      {
        "username": "{ enter username here}",
        "email": "{ enter user's email address here}
      }
    ```

    -   then make a `POST` request to [localhost:3001/api/users](localhost:3001/api/users)

-   UPDATE A USER:

    -   set the Body of the request's text type to JSON and use the following JSON input:

        ```js
          {
            "username": "{ enter username here}",
            "email": "{ enter user's email address here}
          }
        ```

    -   make `PUT` request to [localhost:3001/api/users/`{userId}`](localhost:3001/api/users/{userId})

-   DELETE A USER: make a `DELETE` request to [localhost:3001/api/users/`{userId}`](localhost:3001/api/users/{userId})

### Friending

To add or remove a friend, both the user's and friend's ids are necessary in separate endpoints in the request's URL. The two endpoints are `user/{ user's id }` followed by `friends/{ friend's id }`.

-   ADD A FRIEND: make a `POST` request to [localhost:3001/api/users/`{ user's id }`/friends/`{ friend's id }`]()
-   REMOVE A FRIEND: make a `DELETE` request to [localhost:3001/api/users/`{ user's id }`/friends/`{ friend's id }`]()

## Future Developments

## Questions?

Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.  
[Contact me by email](mailto:pablodlc@gmail.com)  
[GitHub User pablodlc](https://github.com/pablodlc)  
[**soc-net** GitHub Repo](https://github.com/pablodlc/soc-net)

**soc-net** made with ❤️ by pablodlc
