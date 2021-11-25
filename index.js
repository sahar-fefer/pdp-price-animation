let isActive = false;
const details = document.getElementsByClassName("details")[0];
const button = document.getElementsByClassName("play")[0];

function counting() {
  let from = parseInt(fullPrice.innerHTML.replace("$", ""));
  let to = parseInt(discountPrice.innerHTML.replace("$", ""));
  let decimal = parseFloat(discountPrice.innerHTML.replace("$", ""));

  let countAnimation = setInterval(() => {
    discountPrice.innerHTML = --from + "$";

    if (from === to) {
      if (decimal !== to) discountPrice.innerHTML = "$" + decimal;
      to = parseFloat(discountPrice.innerHTML);
      clearInterval(countAnimation);
    }
  }, 0.6);
}

button.addEventListener("click", function () {
  isActive = !isActive;
  if (isActive) {
    details.classList.add("open");
    counting();
  } else {
    details.classList.remove("open");
  }
});
