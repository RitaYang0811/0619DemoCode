// gallery.js
function renderGallery(imageList) {
  const container = document.querySelector("#gallery");

  if (!imageList || imageList.length === 0) {
    container.innerHTML = `<p>沒有照片可以顯示!</p>`;
    return;
  }

  container.innerHTML = imageList
    .map((src) => `<img src="${src}" alt="image" />`)
    .join("");
}

module.exports = { renderGallery };
