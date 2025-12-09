console.log("JS Connected !!!")

const inputField = document.getElementById("input_password");
const description = document.getElementsByClassName("description").item(0);
const counter = document.getElementsByClassName("counter").item(0);
const submitButton = document.getElementById("submit");
const toggler = document.getElementsByClassName("toggleIcon").item(0);

var isValidPassword = false;

const submitted = () => {

    const confirm_password_element = document.getElementsByClassName("confirm_password").item(0);

    if(confirm_password_element.value === inputField.value)
    {
        alert("Password matched successfully");
    }else{
        alert("Passwords doesnt match")
    }
}

submitButton.addEventListener("click", submitted)

const togglerClicked = () => {

    console.log("Toggler Pressed")

    if(toggler.textContent === "👁️")
    {
        toggler.textContent = "🙈";
        inputField.type = "text"
    }else{
        toggler.textContent = "👁️";
        inputField.type = "password"
    }
}

toggler.addEventListener("click", togglerClicked)

const typed = () => {

    const text = inputField.value;
    const length = text.length;

    counter.textContent = length;
    
    if(text.length == 0)
    {
        description.textContent = "Password Strength will be displayed here";
        description.style.color = "black";
        submitButton.disabled = true;
    }
    else if(text.length < 4)
    {
        console.log("Less than 4 characters");
        description.textContent = "STRENGTH: WEAK";
        description.style.color = "red";
        submitButton.disabled = true;
    }
    else if(text.length < 8)
    {
        console.log("Character length between 4 to 8");
        description.textContent = "STRENGTH: MEDIUM";
        description.style.color = "orange";
        submitButton.disabled = true;

        if(isValidPassword === true)
        {
            const confirm_password_element = document.getElementsByClassName("confirm_password").item(0);
            confirm_password_element.remove();

            isValidPassword = false;
        }
    }
    else
    {
        console.log("Character length more then 8");
        description.textContent = "STRENGTH: STRONG";
        description.style.color = "green";
        submitButton.disabled = false;

        if(isValidPassword === false)
        {
            const newInputFeild = document.createElement("input");
            newInputFeild.classList.add("confirm_password")
            toggler.insertAdjacentElement("afterend", newInputFeild);
            isValidPassword = true;
        }
    }
}

inputField.addEventListener("input", typed)