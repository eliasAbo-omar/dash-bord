const menu = document.querySelector(".list-menu");
const navMenu = document.querySelector(".menu");
const divLogOut = document.createElement("div");
const fargment = document.createDocumentFragment();
const list = [
    "Form",
    "List",
    "Profile",
    "results",
    "setting",
    "Account",
    "LogOut",
];
const iconList = [
    { first: "fa-regular", second: "fa-file" },
    { first: "fa-solid", second: "fa-list" },
    { first: "fa-regular", second: "fa-circle-user" },
    { first: "fa-solid", second: "fa-square-poll-horizontal" },
    { first: "fa-solid", second: "fa-gear" },
    { first: "fa-regular", second: "fa-user" },
    { first: "fa-solid", second: "fa-right-from-bracket" },
];
list.forEach((item, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p = document.createElement("p");
    const icons = document.createElement("i");
    p.textContent = item;
    a.href = `#${item.toLowerCase()}`;
    a.classList.add("list");
    const currentIcon = iconList[i];
    icons.classList.add(`${currentIcon === null || currentIcon === void 0 ? void 0 : currentIcon.first}`);
    icons.classList.add(`${currentIcon === null || currentIcon === void 0 ? void 0 : currentIcon.second}`);
    li.dataset.section = item.toLowerCase();
    li.classList.add(`${i}`);
    a.appendChild(icons);
    a.appendChild(p);
    li.appendChild(a);
    fargment.appendChild(li);
});
menu.appendChild(fargment);
navMenu.appendChild(divLogOut);
const toggle = document.querySelector(".toggle");
const header = document.querySelector(".header");
const head = document.querySelector(".head");
const imgSearch = document.querySelector(".img-search");
const search = document.querySelector(".search");
const profile = document.querySelector(".profile");
const cards = document.querySelector(".cards");
const close = document.querySelector(".close");
toggle.addEventListener("click", () => {
    header.classList.toggle("active");
    head.classList.toggle("active");
    cards.classList.toggle("active");
});
imgSearch.addEventListener("click", () => {
    search.classList.toggle("active");
});
profile.addEventListener("click", () => {
    header.classList.toggle("active");
    head.classList.toggle("active");
});
close.addEventListener("click", () => {
    header.classList.remove("active");
    head.classList.remove("active");
});
document.addEventListener("click", (e) => {
    const target = e.target;
    const closest = target.closest(".head") ||
        target.closest(".toggle") ||
        target.closest(".profile");
    const searchClosest = target.closest(".search") ||
        target.closest(".img-search");
    if (!closest) {
        header.classList.remove("active");
        head.classList.remove("active");
    }
    if (!searchClosest) {
        search.classList.remove("active");
    }
});
const red = document.querySelectorAll(".red");
const blue = document.querySelectorAll(".blue");
red.forEach((item, i) => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * 100);
        item.style.height = `${random}%`;
    }, i * 100);
});
blue.forEach((item, i) => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * 100);
        item.style.height = `${random}%`;
    }, i * 100);
});
const p = document.querySelectorAll(".total-card .text-card p");
const configs = [
    { max: 120, suffix: "" },
    { max: 100, suffix: "" },
    { max: 100, suffix: "%" },
    { max: 1200, suffix: "" },
];
p.forEach((item, i) => {
    const config = configs[i];
    if (config) {
        const random = Math.floor(Math.random() * config.max) + 1;
        item.textContent = `${random}${config.suffix}`;
    }
});
const time = document.querySelectorAll(".time");
time.forEach((item) => {
    const random = Math.floor(Math.random() * 24) + 1;
    const unit = random <= 10 ? "Hour" : "Hours";
    item.textContent = `${random} ${unit} Ago`;
});
export {};
//# sourceMappingURL=main.js.map