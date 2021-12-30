AOS.init();
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

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
const getone = document.querySelector.bind(document);
const getall = document.querySelectorAll.bind(document);
const tabs = getall(".tab-item");
const panes = getall(".products-list");
const tabActive = getone(".tab-item.active");
const line = getone(".line");
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
console.log(tabs, panes);
const dangky = getone(".ntechs-btn");
const pagentechs = getone('.wrapper');
dangky.addEventListener('click', () => {
    pagentechs.classList.toggle("active");
});
window.onclick = function (event) {
    if (event.target == pagentechs) {
        pagentechs.classList.toggle("active");
    }
}