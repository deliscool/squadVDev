// https://api.vschool.io/digipass/todo

const credentialContainer = document.querySelector("#credential-container")

axios.get("https://api.vschool.io/digipass/todo")
    .then(result => renderCredentials(result.data))

function renderCredentials(data) {
    for (let i = 0 ; i < data.length ; i++ ) {
        const credential = document.createElement("div")
        credential.style.boxShadow = "0px 0px 1px"
        
        const firstName = document.createElement("h1")
        firstName.textContent = data[i].title

        const lastName = document.createElement("h1")
        lastName.textContent = data[i].description

        const email = document.createElement("h1")
        email.textContent = data[i].imgUrl

        credential.appendChild(firstName)
        credential.appendChild(lastName)
        credential.appendChild(email)
        credentialContainer.appendChild(credential)
    }
}