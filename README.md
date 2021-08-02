# soc-net

## Description

To view the video demonstration of this application, click this link: [**soc-net**](https://youtu.be/js68-kxVTs0).

**soc-net** is a NoSql, MongooseDB/Express.js powered backend application. The user creates a profile as a `User`. `Users` can post `Thoughts` that other users can read and to which post a `Reaction`. Additionally, `Users` can friend one another, adding each other to their friend arrays.

Or watch the trailer as a gif below!  
![soc-net](./assets/soc-net.gif)

This application was written following the guidelines laid out in the provided [User Story](#user-story) and [Acceptance Criteria](#acceptance-criteria).

### Table of Contents

-   [User Story](#user-story)
-   [Acceptance Criteria](#acceptance-criteria)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Future Developments](#future-developments)
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

#### Usage Directory:

-   [Starting **soc-net**](#starting-soc-net)
-   [User CRUD Routes](#user-crud-routes)
-   [Friending](#friending)
-   [Thought CRUD Routes](#thought-crud-routes)
-   [Reactions](#reactions)

---

---

### **Starting soc-net**

There are three commands to choose from to start the application in the integrated terminal:

-   `npm start`
-   `node server`
-   `nodemon server`  
    ![start](./assets/start.gif)

---

---

### **User CRUD Routes**

**soc-net** utilizes basic CRUD routes.

-   GET ALL USERS: make a `GET` request to [localhost:3001/api/users]()

---

-   GET A USER BY ID: make a `GET` request to [localhost:3001/api/users/`{user id}`]()

---

-   CREATE A USER:


    -   set the Body of the request's text type to JSON and use the following JSON input:

    ```js
      {
        "username": "{enter username here}",
        "email": "{enter user's email address here}
      }
    ```

    -   then make a `POST` request to [localhost:3001/api/users]()

---

-   UPDATE A USER:

    -   set the Body of the request's text type to JSON and use the following JSON input:

        ```js
          {
            "username": "{enter username here}",
            "email": "{enter user's email address here}
          }
        ```

    -   make `PUT` request to [localhost:3001/api/users/`{user id}`]()

---

-   DELETE A USER: make a `DELETE` request to [localhost:3001/api/users/`{user id}`]()

---

---

### **Friending**

To add or remove a friend, both the user's and friend's ids are necessary for separate endpoints within the request's URL. The two endpoints are `users/{user's id}` followed by `friends/{friend's id}`.

-   ADD A FRIEND: make a `POST` request to [localhost:3001/api/users/`{user's id}`/friends/`{friend's id}`]()

---

-   REMOVE A FRIEND: make a `DELETE` request to [localhost:3001/api/users/`{user's id}`/friends/`{friend's id}`]()

---

---

### **Thought CRUD Routes**

-   GET ALL THOUGHTS: make a `GET` request to [localhost:3001/api/thoughts]().

---

-   GET A THOUGHT BY ID: make a `GET` request to [localhost:3001/api/thoughts/`{thought id}`]()

---

-   CREATE A THOUGHT:


    -   Set the Body of the request's text type to JSON and use the following JSON input:

    ```js
      {
        "thoughtText": "{enter thought here, max 280 characters}",
        "username": "{enter username associated to this thought}"
      }
    ```

    -   Then make a `POST` request to [localhost:3001/api/thoughts]()

---

-   UPDATE A THOUGHT:

    -   Set the Body of the request's text type to JSON and use the following JSON input:

        ```js
          {
            "thoughtText": "{enter updated thought text here}",
            "username": "{enter username here}",
            "userId": "{enter user id here}"
          }
        ```

    -   Make `PUT` request to [localhost:3001/api/thoughts/`{thought id}`]()

---

-   DELETE A THOUGHT: make a `DELETE` request to [localhost:3001/api/thoughts/`{thought id}`]()

---

---

### **Reactions**

`Thoughts` can have `Reactions`, which are essentially comments on the thoughts.

-   CREATE A REACTION

    -   Set the body type of the request to JSON and use the following JSON input:

    ```js
      {
        "reactionText": "{enter reaction text here}",
        "username": "{enter username here}",
        "userId": "{enter user id here}"
      }
    ```

    -   Make a `POST` request to [localhost:3001/api/thoughts/{thought id}/reactions]()

---

-   DELETE A REACTION: make a `DELETE` request to [localhost:3001/api/thoughts/{thought id}/reaction/{reaction id}]()

---

---

## Future Developments

Because of time constraints, I'm submitting this assignment unfinished. The `DELETE reaction` functionality does not work. Upon revisitation, that would be the first improvement I would make.  
Additionally, I did not implement the bonus challenge of the automatic deletion of a deleted user's thoughts.

## Questions?

Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.  
[Contact me by email](mailto:pablodlc@gmail.com)  
[GitHub User pablodlc](https://github.com/pablodlc)  
[**soc-net** GitHub Repo](https://github.com/pablodlc/soc-net)

**soc-net** made with ❤️ by pablodlc
