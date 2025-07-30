function main() {
  const countEl = document.querySelector("#counter");
  if (!countEl) return;
  createCounter(countEl); //設置計時器
}

function createCounter(element, options = {}) {
  let counter = 0;
  let timer;
  const { initialCount = 3, interval = 1000 } = options; // 定義初始計時器數值和間隔時間
  setCounter(initialCount);

  // 設置計時器數值
  function setCounter(count) {
    counter = count;
    render();
  }
  // 渲染計時器到頁面
  function render() {
    element.innerHTML = `<button>${counter}</button>`;
  }

  // 渲染計時器結束提示
  function renderStopAlert() {
    element.innerHTML = `<h3 style="color:red">Time's Up!</h3>`;
  }
  // 設置倒數計時器
  timer = setInterval(countdownCallback, interval);
  function countdownCallback() {
    if (counter <= 0) {
      renderStopAlert();
      return clearInterval(timer);
    }
    counter--;
    render();
  }
}

module.exports = { main, createCounter };
