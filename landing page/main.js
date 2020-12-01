//Dom Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set AM or PM
    const amPm = hour <= 12 ? 'AM' : 'PM';
    
    //12hr format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);

}

//add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0': '') + n;
}

//set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
        document.body.style.backgroundSize = "Cover";
        greeting.textContent = "Good Morning";

    } else if(hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        document.body.style.backgroundSize = "Cover";
        greeting.textContent = "Good Afternoon";
    } else {
        //evening
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
        document.body.style.backgroundSize = "Cover";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    } 

}

//get name 
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if(e.type === 'keypress') {
        //make sure enter is press
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is press
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();