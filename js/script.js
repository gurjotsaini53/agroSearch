const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Seeds";
  }, 0);
  setTimeout(() => {
    text.textContent = "Fertilizers";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Machines";
  }, 8000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);