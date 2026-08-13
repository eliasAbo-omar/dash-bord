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

// ========== active class on many element ===========
const toggle = document.querySelector(".toggle") as HTMLElement;
const header = document.querySelector(".header") as HTMLElement;
const head = document.querySelector(".head") as HTMLElement;
const imgSearch = document.querySelector(".img-search") as HTMLElement;
const search = document.querySelector(".search") as HTMLElement;
const profile = document.querySelector(".profile") as HTMLElement;
const cards = document.querySelector(".cards") as HTMLElement;
const close = document.querySelector(".close") as HTMLElement;

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

document.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  const closest =
    (target.closest(".head") as HTMLElement) ||
    (target.closest(".toggle") as HTMLElement) ||
    (target.closest(".profile") as HTMLElement);

  const searchClosest =
    (target.closest(".search") as HTMLElement) ||
    (target.closest(".img-search") as HTMLElement);

  if (!closest) {
    header.classList.remove("active");
    head.classList.remove("active");
  }

  if (!searchClosest) {
    search.classList.remove("active");
  }
});

// ========== height color red&blue ===========
const red = document.querySelectorAll(".red") as NodeListOf<HTMLElement>;
const blue = document.querySelectorAll(".blue") as NodeListOf<HTMLElement>;

red.forEach((item: HTMLElement, i: n) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 100);
    item.style.height = `${random}%`;
  }, i * 100);
});

blue.forEach((item: HTMLElement, i: n) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 100);
    item.style.height = `${random}%`;
  }, i * 100);
});

// ========== list Value ===========

const p = document.querySelectorAll(
  ".total-card .text-card p",
) as NodeListOf<HTMLElement>;

interface P {
  max: n;
  suffix: s;
}

const configs: P[] = [
  { max: 120, suffix: "" },
  { max: 100, suffix: "" },
  { max: 100, suffix: "%" },
  { max: 1200, suffix: "" },
];

p.forEach((item: HTMLElement, i: n) => {
  const config: P | undefined = configs[i];
  if (config) {
    const random = Math.floor(Math.random() * config.max) + 1;
    item.textContent = `${random}${config.suffix}`;
  }
});

const time = document.querySelectorAll(".time") as NodeListOf<HTMLElement>;

time.forEach((item: HTMLElement) => {
  const random = Math.floor(Math.random() * 24) + 1;
  const unit = random <= 10 ? "Hour" : "Hours";
  item.textContent = `${random} ${unit} Ago`;
});
