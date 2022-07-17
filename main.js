const mapSvg = document.querySelector(".map_inner svg");
const svgPaths = document.querySelectorAll(".svg-container path");
const insetModal = document.querySelector(".inset-modal");
const cityTitle = document.querySelector(".city-title");
const svgHalfWidth = mapSvg.getAttribute("width") / 2;
const svgHalfHeight = mapSvg.getAttribute("height") / 2;

svgPaths.forEach((path) => {
  path.addEventListener("mouseover", function (e) {
    path.classList.add("current");
    cityTitle.innerHTML = path.getAttribute("name");
    insetModal.style.display = "flex";
  });

  path.addEventListener("mouseout", function () {
    path.classList.remove("current");
    cityTitle.innerHTML = "";
    insetModal.style.display = "none";
  });

  // path.addEventListener("mousemove", function (e) {});
});
mapSvg.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX - 0;
  const mouseY = e.clientY - 10;

  //   console.log(mouseX > svgHalfWidth && mouseY > svgHalfHeight);
  // insetModal.style.left = mouseX - insetModal.offsetWidth + "px";
  // insetModal.style.top = mouseY + "px";
  console.log(mouseY < svgHalfHeight, "its true");

  if (mouseX > svgHalfWidth && mouseY < svgHalfHeight) {
    // top right
    insetModal.style.left = mouseX + "px";
    insetModal.style.top = mouseY + "px";
  } else if (mouseX > svgHalfWidth && mouseY > svgHalfHeight) {
    // bottom right
    insetModal.style.left = mouseX + "px";
    insetModal.style.top = mouseY - insetModal.offsetHeight + "px";
  } else if (mouseX < svgHalfWidth && mouseY > svgHalfHeight) {
    // bottom left
    console.log("case true");
    insetModal.style.left = mouseX + "px";
    insetModal.style.top = mouseY - insetModal.offsetHeight + "px";
  } else if (mouseX < svgHalfWidth && mouseY < svgHalfHeight) {
    // top left
    insetModal.style.left = mouseX + "px";
    insetModal.style.top = mouseY + "px";
  }
});
