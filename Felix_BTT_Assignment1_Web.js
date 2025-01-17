/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Felix Akuetteh Torto      Student ID: 168365229     Date: 1-14-2025
*
********************************************************************************/

// Define three global arrays in assignment1.js
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Felix Akuetteh Torto",
  "Student Name: Felix Akuetteh Torto, Student Email: fatorto@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

// Test function to verify server Arrays
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
      if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
        return `200: ${serverResponses[i]}`;
      }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
  }

// Example HTTP request calls
console.log(httpRequest("GET", "/")); // Expected output: "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // Expected output: "200: This assignment was prepared by Felix Akuetteh Torto"
console.log(httpRequest("GET", "/contact")); // Expected output: "200: Student Name: Felix Akuetteh Torto, Student Email: fatorto@myseneca.ca"
console.log(httpRequest("POST", "/login")); // Expected output: "200: User Logged In"
console.log(httpRequest("GET", "/panel")); // Expected output: "200: Main Panel"
console.log(httpRequest("POST", "/logout")); // Expected output: "200: Logout Complete"

// Example of a mismatch causing a 404 error
console.log(httpRequest("GET", "/nonexistent")); // Expected output: "404: Unable to process GET request for /nonexistent"
console.log(httpRequest("PUT", "/login")); // Expected output: "404: Unable to process PUT request for /login"

// Utility Function to Generate Random Integers
/**
 * Generates a random integer between 0 (inclusive) and max (exclusive).
 * @param {number} max - The maximum value (exclusive).
 * @returns {number} A random integer.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Automating the Tests with the "automateTests" Function
  function automateTests() {
    const verbs = ["GET", "POST", "PUT"]; // Including an invalid verb for testing
    const paths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/nonexistent"]; // Including a non-matching path
  
    for (let i = 0; i < 10; i++) { // Running 10 random tests
      const randomVerb = verbs[getRandomInt(verbs.length)];
      const randomPath = paths[getRandomInt(paths.length)];
      console.log(httpRequest(randomVerb, randomPath));
    }
  }
  
  // Call automateTests to run all tests
  automateTests();