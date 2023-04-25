// * ======= HTML ELEMENT SELECTORS ========= * \\

const body = document.body;
const input = document.querySelector(".user-input");
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".btn");

// EVENT LISTENERS INITIATION AREA

input.addEventListener("focus", focusInput);
overlay.addEventListener("click", endFocus);

// FUNCTIONS
function focusInput() {
    body.classList.add("focus-form");
}
function endFocus() {
    if (body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}

// EVENT LISTENERS
input.addEventListener("focusin", focusInput);
input.addEventListener("focusout", endFocus);

// HTML ELEMENT SELECTORS

const userForm = document.querySelector("#user-form");
const userList = document.querySelector(".user-list");

// Event Listener

userForm.addEventListener("submit", createUser);
// ageForm.addEventListener("submit", createAge);

// Declare Functions

function createUser(e) {
    e.preventDefault();
    const user = input.value;
    const userContainer = document.createElement("li");
    const newUser = document.createElement("user-list");
    newUser.className = "name";
    newUser.target = "_blank";
    // console.log("newUser:", newUser);
    userContainer.appendChild(newUser);
    userList.appendChild(userContainer);
    userForm.reset(); 
}