/********************************************************************************* 
*  WEB700 – Assignment 2 
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including websites) or distributed to other students. 
*  
*  Name: __FELIX A TORTO_______ Student ID: __168365229____ Date: __1/30/2025________ 
********************************************************************************/

const collegeData = require("./modules/collegeData");

// Initialize datacd WEB700-Assignment2
collegeData.initialize()
    .then(() => {
        console.log("Data successfully initialized.");

        // Get all students
        return collegeData.getAllStudents();
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students.`);
        
        // Get all courses
        return collegeData.getCourses();
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses.`);
        
        // Get all TAs
        return collegeData.getTAs();
    })
    .then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs.`);
    })
    .catch((err) => {
        console.log(err);
    });
