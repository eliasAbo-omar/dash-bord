type s = string;
type n = number;

// Add List In Menu

const menu = document.querySelector(".list-menu") as HTMLElement;
const navMenu = document.querySelector(".menu") as HTMLElement;
const divLogOut = document.createElement("div") as HTMLElement;
const fargment = document.createDocumentFragment() as DocumentFragment;

interface icon {
  first: s;
  second: s;
}

const list: s[] = [
  "Form",
  "List",
  "Profile",
  "results",
  "setting",
  "Account",
  "LogOut",
];
const iconList: icon[] = [
  { first: "fa-regular", second: "fa-file" },
  { first: "fa-solid", second: "fa-list" },
  { first: "fa-regular", second: "fa-circle-user" },
  { first: "fa-solid", second: "fa-square-poll-horizontal" },
  { first: "fa-solid", second: "fa-gear" },
  { first: "fa-regular", second: "fa-user" },
  { first: "fa-solid", second: "fa-right-from-bracket" },
];

list.forEach((item: s, i: n) => {
  const li = document.createElement("li") as HTMLLIElement;
  const a = document.createElement("a") as HTMLAnchorElement;
  const p = document.createElement("p") as HTMLElement;
  const icons = document.createElement("i") as HTMLElement;

  p.textContent = item;

  a.href = `#${item.toLowerCase()}`;
  a.classList.add("list");

  const currentIcon = iconList[i];
  icons.classList.add(`${currentIcon?.first}`);
  icons.classList.add(`${currentIcon?.second}`);

  li.dataset.section = item.toLowerCase();
  li.classList.add(`${i}`);

  a.appendChild(icons);
  a.appendChild(p);
  li.appendChild(a);
  fargment.appendChild(li);
});

menu.appendChild(fargment);

navMenu.appendChild(divLogOut);
