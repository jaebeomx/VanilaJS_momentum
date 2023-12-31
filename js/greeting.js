const loginInput= document.querySelector("#login-form input");
const loginForm= document.querySelector("#login-form"); 
const greeting= document.querySelector("#greeting");
const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY= "username";
function onLoginSubmit(event){
    event.preventDefault();
    const username= loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username); //
}
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText=`Hello  ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername= localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
    //show the ßgreeting
}