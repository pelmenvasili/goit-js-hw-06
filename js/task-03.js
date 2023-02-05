const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulRef = document.querySelector(".gallery");
images.forEach((el) => {
  ulRef.insertAdjacentHTML(
    "afterbegin",
    `<li><img src = "${el.url}" alt = "${el.alt}"  width = "100%" height = "auto" /></li>`
  );
});
ulRef.style.display = "flex";
ulRef.style.listStyle = "none";
ulRef.style.gap = "20px";
ulRef.style.justifyContent = "center";
ulRef.style.padding = "0px";
ulRef.style.margin = "0px";
