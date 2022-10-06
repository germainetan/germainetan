
let bg = document.getElementById("background");
let edu = document.getElementById("education");
let contact = document.getElementById("contact");

// let bg_btn = document.getElementById("bg-btn");
// let edu_btn = document.getElementById("edu-btn");
// let contact_btn = document.getElementById("contact-btn");

// bg_btn.addEventListener("click", open_bg);
// edu_btn.addEventListener("click", open_edu);
// contact_btn.addEventListener("click", open_contact);


function display_default() {
    let d = new Date();
    let year = d.getFullYear();
    let age = document.getElementById("age");
    age.innerText = year - 2001;
}


let myfamily = document.getElementById("myfamily");
let myage = document.getElementById("myage");
let mystery = document.getElementById("mystery");
let favnum = document.getElementById("favnum");


myfamily.addEventListener("mouseover", fam_mOver);
myfamily.addEventListener("mouseout", fam_mOut);

function fam_mOver() {
    myfamily.innerHTML = `<img src="img/photo_2022-09-27_19-41-49.jpg" class="w-100 img-fluid border rounded">`;
}

function fam_mOut() {
    myfamily.innerHTML = `
    <div class="rounded bg-light border d-flex justify-content-center align-items-center h-100 p-5" >
        <h1>5</h1>
    </div>`;
}

myage.addEventListener("mouseover", myage_mOver);
myage.addEventListener("mouseout", myage_mOut);

function myage_mOver() {
    myage.innerHTML = `<img src="img/bday.jpg" class="w-100 img-fluid border rounded">`;
}

function myage_mOut() {
    myage.innerHTML = `
    <div class="rounded bg-light border d-flex justify-content-center align-items-center h-100 p-5" >
        <h1>5</h1>
    </div>`;
}

favnum.addEventListener("mouseover", favnum_mOver);
favnum.addEventListener("mouseout", favnum_mOut);

function favnum_mOver() {
    favnum.innerHTML = `
    <div class="rounded bg-light border d-flex justify-content-center align-items-center h-100 p-5">
        <h1>My Favourite Number :)</h1>
    </div>`;
}

function favnum_mOut() {
    favnum.innerHTML = `
    <div class="rounded bg-light border d-flex justify-content-center align-items-center h-100 p-5" >
        <h1>5</h1>
    </div>`;
}

