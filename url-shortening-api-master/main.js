
const url = document.getElementById('link');
const form = document.getElementById('form');

const parent = document.getElementById('parent');

async function getShort(url) {
    const APIURL = "https://api.shrtco.de/v2/shorten?url="+url;

    const req = await fetch(APIURL);
    const reqData = await req.json();

    console.log(reqData);

    createCard(reqData);
}

function createCard(reqData) {
    // const { original_link, full_short_link2} = reqData;
    const card = document.createElement('div');
    // const link = document.createElement('div');
    // const shtLink = document.createElement('div');

    card.classList.add('header-flex');
    card.classList.add('card');
    card.style.backgroundColor = "#fff";
    card.style.padding = "20px";

    card.innerHTML = `  
                        <div>
                            <span>${reqData.result.original_link}</span>
                        </div>
                        <div class="card-flex">
                            <span style="color: hsl(180, 66%, 49%); margin: 10px 10px 10px 0">${reqData.result.full_short_link2}</span>
                            <button class="btn btn-long">copy</button>
                        </div>`;

    parent.appendChild(card);  
    card.getElementsByClassName('btn-long')[0].addEventListener('click', function()  {
        this.innerText = "Copied!";
        this.style.backgroundColor = "hsl(257, 27%, 26%)";
        // var copyText = this.previousElementSibling;
        // console.log(copyText.innerText);
        var temporaryInputElement = document.createElement('input');
        temporaryInputElement.type = "text";
        temporaryInputElement.value = this.previousElementSibling.innerText;
        temporaryInputElement.style.display = "hidden";
        document.body.appendChild(temporaryInputElement);
        console.log(temporaryInputElement.value);
        // copyText.innerText.select();
        // copyText.innerText.setSelectionRange(0, 99999)
        temporaryInputElement.select();
        document.execCommand("Copy");
        document.body.removeChild(temporaryInputElement);
        // alert("Copied the text: " + copyText.value);
    });                    


}



const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    let site = url.value;
    if(site === "")
    error.classList.remove('hidden');
    else {
        getShort(site);
    }

    url.value = "";

});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
// const menu_2 = document.getElementById('menu-2');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    menu.classList.toggle('show');
    // menu_2.classList.toggle('show');
});