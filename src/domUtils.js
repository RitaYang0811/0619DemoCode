// 設定文字
function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.innerText = text;
}

// 取得文字
function getText(selector) {
  const el = document.querySelector(selector);
  return el ? el.innerText : "";
}

// 呼叫API
function fetchApi(url) {
  return fetch(url).then((res) => res.json());
}

module.exports = { setText, getText, fetchApi };
