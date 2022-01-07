AOS.init();
const getone = document.querySelector.bind(document);
const getall = document.querySelectorAll.bind(document);
const tabs = getall(".tab-item");
const panes = getall(".products-list");
const tabActive = getone(".tab-item.active");
const line = getone(".line");
// 
const sety = getone('.year-of-operation');

function getyearss() {
    const cearted = 2018;
    const nam = new Date();
    const newY = nam.getFullYear();
    sety.innerHTML = newY - cearted;
}
getyearss();
const typedTextSpan = getone(".typed-text");
const cursorSpan = getone(".cursor");
const textArray = ["Thương mại điện tử", "App đặt đồ ăn", "Hệ thống ERP", "Số 1 Việt Nam"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        getone(".tab-item.active").classList.remove("active");
        getone(".products-list.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});

const dangky = getall(".ntechs-btn");
const pagentechs = getone('.wrapper');
dangky.forEach((tab, index) => {
    pagentechs.classList.remove("active");
    tab.onclick = function () {
        pagentechs.classList.add("active");
    }
});

window.onclick = function (event) {
    if (event.target == pagentechs) {
        pagentechs.classList.toggle("active");
    }
}

// Send mail
const sends = document.querySelector('.btnsubmit');


function sendcontact() {
    const hoten = document.querySelector('.hoten').value;
    const phones = document.querySelector('.phones').value;

    if (hoten === '' && phones === '') {

    } else {
        var formData = new FormData();
        formData.append('entry.182307577', hoten);
        formData.append('entry.346746103', phones);
        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLRaDha7FXigyjw_wc6iCigu7w-2FlOFjFR5nnO_g6nNKkTw/formResponse");
        request.send(formData);
        setTimeout(function () {
            location.replace("/index.html");
        }, 500);
    }

}