# NoSQL-Fitness-App
Mongo Based platform to log fitness routines

[Live Demo](https://fitness-app-merk.herokuapp.com/)

![Screenshot](public/assets/FitnessTrackerDashboard.png)



## Technologies used

* NoSQL
* Express for the server
* MongoDB & Mongoose for database
* Heroku for deployement
* Node for backend

## Description

This week's homework assignment was to create a fitness tracker app that allowed users to log and review information to track their weekly routines using Mongo for data management.

  
## Installation

To install, first make sure you have the dependencies (in this case express, path, mongoose, and dotenv for authentication ):

`npm install`

You will also need to populate the database by running the seed script

`npm run seed`

To run the application from the terminal, you will enter:

`npm start`

## Strategy

Since there was so much starter code, I used that as a guide (along with the ReadME) to build out my model. I used previous exercises as a template for CRUD routing for the workout info and building out the API. NoSQL languages are thankfully pretty easy to read and route compaerd to sequelize, and I feel like I've gained a lot of experience building out CRUD routes at this point. 

## Challenges

I ran into a problem linking my heroku and MongoDB Atlas that was related to a whitelisting issue. After I resolved that, I was able to finish testing the rest of the application. Initially, I tried population the "totalDuration" key in the model, but in office hours, we discussed building it out in the apiRoutes file using "Model.aggregate". That cleared up the biggest bug I encountered while building out the stats dashboard. There were some errors we uncovered with the front end code, that I imagine we will discuss further in class.

## License

[Apache 2.0](https://opensource.org/licenses/Apache2.0)

## Questions

For further questions, contact here:
* Email Address: jlimhb@gmail.com
* GitHub: [frank-merk](https://github.com/frank-merk)
