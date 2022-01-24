export default (slider) => {
  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }
  function mouseIn() {
    mouseOver = true;
    clearNextTimeout();
  }
  function mouseOut() {
    mouseOver = false;
    nextTimeout();
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", mouseIn);
    slider.container.addEventListener("mouseout", mouseOut);
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
  slider.on("destroyed", () => {
    clearTimeout(timeout);
    slider.container.removeEventListener("mouseover", mouseIn);
    slider.container.removeEventListener("mouseout", mouseOut);
  });
};
