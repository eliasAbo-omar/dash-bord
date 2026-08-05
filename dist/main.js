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
export {};
//# sourceMappingURL=main.js.map