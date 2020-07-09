// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)




    //for (let i = 0; i < object.length; i++) {
    //  let currentUser = object[i]
    //console.log(currentUser)
    //let userDiv = document.createElement('div')
    //userDiv.className = "user"

    //for (key in currentUser) {
    //  let propertyDiv = document.createElement('div')
    //propertyDiv.className = "property"
    //propertyDiv.append(key + ": " + currentUser[key])
    //userDiv.append(propertyDiv)
    //}
    //detailsElement.append(userDiv)
    //}


}

//Kata0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above

//Kata1  Use the .filter() method
//Filter the users array to show only the users with an isActive property of true.
const isActive = users.filter(user => user.isActive === true)
printKata(1, isActive)

//Kata 2: Use the .map() method
//Map over the users array to show only the email addresses of the users.

const email = users.map(user => user.email)
printKata(2, email)

//Kata 3: Use the .some() method
//Check whether at least one user in the users array has a company property of "OVATION".

const OVATION = users.some(user => user.company)
printKata(3, OVATION)

//Kata 4: Use the .find() method
//Find the first user in the array over the age of 38.
const age = users.find(user => user.age > 38)
printKata(4, age)

//Kata 5: Use the .filter() and .find() methods
//Find the first user in the array over the age of 38 who is active.
const ageactive = users
    .filter(user => user.age > 38)
    .find(user => user.isActive === true)
printKata(5, ageactive)

//Kata 6: Use the .filter() and .map() methods
//Show the balance of every user in the array from the "ZENCO" company.

const ZENCObal = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
printKata(6, ZENCObal)

//Kata 7: Use the .filter() method with .includes() and the .map() method
//Show the age of every user with the "fugiat" tag.
const usertag = users
    .filter(user => (user.tags).includes("fugiat"))
    .map(user => user.age)
printKata(7, usertag)













