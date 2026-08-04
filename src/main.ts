type s = string;
type n = number;

// Add List In Menu

const menu = document.querySelector(".list-menu") as HTMLElement;
const navMenu = document.querySelector(".menu") as HTMLElement;
const divLogOut = document.createElement("div") as HTMLElement;
const iForIcon = document.createElement("i") as HTMLElement;
const aLink = document.createElement("a") as HTMLAnchorElement;
const fargment = document.createDocumentFragment() as DocumentFragment;

const list: s[] = ["Form", "List", "Profile", "results", "setting", "Account"];

list.forEach((list: s, i: n) => {
  const li = document.createElement("li") as HTMLLIElement;
  const a = document.createElement("a") as HTMLAnchorElement;

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
