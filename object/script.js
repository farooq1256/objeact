const users = [];

const getInputField = id => {
    return document.getElementById(id).value;
}

const getRandomId = () => {
    return Math.random().toString(36).slice(2);
}
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function submitData() {
    event.preventDefault()
    let firstName = getInputField("firstName").trim();
    let lastName = getInputField("lastName").trim();
    let email = getInputField("email").trim();
    let date = getInputField("date");
 
    if (firstName.length < 3) {
        alert("please enter correct first name")
        return
    }
    if (!emailFormat.test(email)) {
        alert("please enter correct email")
        return
    }
if (!date) {
    alert("enter your date of birth")
    return
}

    const existingUser = users.find((user) => {
        return user.firstName === firstName && user.lastName === lastName && user.email === email && user.dob === date
    }
        );
    if (existingUser) {
        // User already exists, show toast message
        alert("User already exists!");
        return;
    }


    // // Loop through existing users
    // for (let i = 0; i < users.length; i++) {
    //     let user = users[i];
    //     // Check if the details match
    //     if (user.firstName === firstName && user.lastName === lastName && user.email === email && user.dob === date) {
    //         // User already exists, show toast message
    //         alert("User already exists!");
    //         return;
    //     }
    // }
    const user = new User(firstName, lastName, email, date);
   
    users.push(user);
    // console.log(user,"user")
    // localStorage.setItem("user", JSON.stringify(user));
    
    // console.log('user', user);
    
}

function User(firstName, lastName, email, dob, ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
    this.id = getRandomId();
    this.calculaleAge = function() {
        let dob = new Date(this.dob);
        let currentDate = new Date();
        let month_diff = currentDate.getTime() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getFullYear();
        let age = Math.abs(year - 1970);
        return age;
    }
    if (users.length) {
        alert("user submit Welcome")
    }
    
}

function showTable() {
    if (!users.length) {
        alert("there is no a single user aveilable")
        return
    }
    let tableStart = '<div class="table-responsive"><table class="table">'
let tableHead = '<thead><tr><th scope="col">#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th><th scope="col">age</th></tr></thead>';

let tableEnd = ' </table></div>'

let tableBody = ''
for (let i = 0; i < users.length; i++) {
    tableBody += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].calculaleAge() + '</td> </tr>'
    
}
let table = tableStart + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEnd

document.getElementById("output").innerHTML = table
// if (!user.firstName === firstName && !user.lastName === lastName && !user.email === email &&! user.dob === date) {
//     document.getElementById("output").innerHTML = "";
// }
}