// PROMT MULAI

function replaceName() {
    let name = prompt ("halo,siapakah nama anda?", "");
   document.getElementById("name-promt").innerHTML = name
}

replaceName();


// PROMT SELESAI




// SLIDESHOW MULAI

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("img-slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// SLIDESHOW SELESAI




// FORM MULAI

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;


    if (name == "" || birthDate == "" || gender == "" || messages =="") {
       alert("Tidak boleh ada yang kosong!")
       return false
    }

    setSenderUI(name, birthDate, gender, messages)

    return false
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

// FORM SELESAI

