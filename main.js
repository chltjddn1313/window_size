function updatetag() {
  const tag = document.querySelector(".tag");
  tag.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height} <br/>
  window.outer: ${window.outerWidth}, ${window.outerHeight} <br/>
  window.inner: ${window.innerWidth}, ${window.innerHeight} <br/>
  window.documentElement.client: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `;
}

window.addEventListener("resize", ()=> {
  updatetag();
});

updatetag();