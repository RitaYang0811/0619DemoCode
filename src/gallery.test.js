const { renderGallery } = require("./gallery");

describe("圖片列表顯示功能", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="gallery"></div>`;
  });

  it("有資料時應該顯示圖片項目", () => {
    const images = ["a.jpg", "b.jpg"];
    renderGallery(images);

    // Debug DOM 狀態
    // console.log("有資料時的 DOM：", document.body.innerHTML);

    const imgEls = document.querySelectorAll("img");
    expect(imgEls.length).toBe(2);
    expect(imgEls[0].getAttribute("src")).toBe("a.jpg");

    // 快照檢查
    // expect(document.body.innerHTML).toMatchSnapshot();
  });

  it("沒有資料時應顯示提示文字", () => {
    renderGallery([]); // 傳空陣列

    // console.log("沒有資料時的 DOM：", document.body.innerHTML);

    const msgEl = document.querySelector("p");
    expect(msgEl.textContent).toBe("沒有照片可以顯示!");

    // 快照檢查
    // expect(document.body.innerHTML).toMatchSnapshot();
  });
});
