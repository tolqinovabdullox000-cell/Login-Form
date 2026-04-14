let ismInput = document.getElementById('name');
let telInput = document.getElementById('phone');
let tugma = document.getElementById('add-btn');
let royxat = document.getElementById('contact-list');

tugma.onclick = function() {
    let ism = ismInput.value;
    let tel = telInput.value;

    if (ism == "Abu" && tel == "+998 99 999 99 99") {
        alert("Siz registratsiyadan o'tdingiz");
        window.location.href = "https://t.me/this_killer"
    } 
    
    if (ism == "" || tel == "") {
        alert("Bo'sh joylarni to'ldiring!");
    } else {
        royxat.innerHTML = royxat.innerHTML + 
            '<div class="contact-card">' +
                '<h3>' + ism + '</h3>' +
                '<p class="tel">' + tel + '</p>' +
            '</div>';

        ismInput.value = "";
        telInput.value = "";
    }
};



