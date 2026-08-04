const menu = document.querySelector(".list-menu");
const navMenu = document.querySelector(".menu");
const divLogOut = document.createElement("div");
const iForIcon = document.createElement("i");
const aLink = document.createElement("a");
const fargment = document.createDocumentFragment();
const list = ["Form", "List", "Profile", "results", "setting", "Account"];
list.forEach((list, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${list.toLowerCase()}`;
    a.textContent = list;
    a.classList.add("list");
    li.dataset.section = list.toLowerCase();
    li.classList.add(`${i}`);
    li.appendChild(a);
    fargment.appendChild(li);
});
menu.appendChild(fargment);
divLogOut.classList.add("log-out");
iForIcon.classList.add("fa-solid");
iForIcon.classList.add("fa-door-open");
aLink.href = "#";
aLink.appendChild(iForIcon);
divLogOut.appendChild(aLink);
navMenu.appendChild(divLogOut);
export {};
//# sourceMappingURL=main.js.map