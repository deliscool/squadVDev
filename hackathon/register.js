// https://api.vschool.io/digipass/todo

const form = document.form

const firstName = form["first-name"].value
const lastName = form["last-name"].value
const email = form.email.value

const registerBtn = document.querySelector("#register")

form.addEventListener("submit", function(e){
    e.preventDefault()

    console.log("clicked")
    
    const firstName = form["first-name"].value
    const lastName = form["last-name"].value
    const email = form.email.value
    
    const userData = {
        title: firstName,
        description: lastName,
        imgUrl: email
    }
    
    axios.post("https://api.vschool.io/digipass/todo", userData)
        .then(result => console.log(result))
        .catch(err => console.log(err))
})

// const createURL = (zipCode) => {
//     const YOURGOOGLEMAPSAPIKEY = 'AIzaSyBYLdm9sktx54eqPVmv8-q_1Y6-B2vrReo'
//     let URLString = `verify.html`;
//     zipDetails = fetch(URLString)
//     .then(response => response.json())
//     .then(data => {
//         cityState = data.results[0].formatted_address;
//         zipDetails = data})
//     .catch(err => console.log(err));
// }
