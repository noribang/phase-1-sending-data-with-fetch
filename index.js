// Add your code here
/* 1) makes a POST request to /users with a name and email
   2) handles the POST request response, retrieves the new id value and appends it to the DOM
   3) handles a failed POST request using catch, appends the error message to the DOM */

// submitData("John", "john@email.com")

function submitData(name, email) {

const body = document.getElementsByTagName("body")
console.log(body)
const paragraph = document.createElement("p")
// paragraph.innerText = "somehting"
// console.log(paragraph)

const formData = {
    name: name,
    email: email,
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData)
}

const destinationURL = "http://localhost:3000/users"

fetch(destinationURL, configurationObject)
    /*Response object from request convert to JSON.*/
    .then(function(response) {
        return response.json()
    })
    /*Result of .json is returned and available to second .then*/
    .then(function(object) {
        console.log(object)
        console.log(object.id)
        const id = object.id
        body[0].innerHTML = id
    })
    .catch(function(error) {
        console.log(error.message)
        const errorMessage = 'Unauthorized Access'
        body[0].innerHTML = errorMessage
        // paragraph.innerText = errorMessage
        // body[0].appendChild(paragraph)
    })
} 

/* Code from Module. */
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// }

// const destinationURL = "http://localhost:3000/dogs"

// fetch(destinationURL, configurationObject)
//     /*Response object from request convert to JSON.*/
//     .then(function(response) {
//         return response.json()
//     })
//     /*Result of .json is returned and available to second .then*/
//     .then(function(object) {
//         console.log(object)
//         console.log(object.id)
//     })
//     .catch(function(error) {
//         alert("Bad things!")
//         console.log(error.message)
//     })