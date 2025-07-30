const { createCounter } = require("./countdown");

jest.useFakeTimers();
let countEl;
const initialCount = 20;
const interval = 1000;

beforeEach(() => {
  //建立假的DOM元素並取得該元素
  document.body.innerHTML = `<div id="counter"></div>`;
  countEl = document.querySelector("#counter");
  createCounter(countEl, { initialCount, interval });
});

describe("倒數計時器功能測試", () => {
  it("經過2秒後還有18秒", () => {
    expect(countEl.innerHTML).toBe("<button>20</button>");
    jest.advanceTimersByTime(2000); // 模擬經過2秒
    expect(countEl.innerHTML).toBe("<button>18</button>"); // 期待計時器顯示18秒
  });

  it("倒數計時完畢後顯示結束提示", () => {
    jest.advanceTimersByTime(21000); // 模擬經過21秒
    expect(countEl.innerHTML).toBe(`<h3 style="color:red">Time's Up!</h3>`); // 期待計時器顯示結束提示
  });

  it("倒數計時完畢有啟動清除timer", () => {
    const spyOnClearInterval = jest.spyOn(global, "clearInterval");
    jest.advanceTimersByTime(21000); // 模擬經過21秒
    expect(spyOnClearInterval).toHaveBeenCalled(); // 確認清除計時器被呼叫
    expect(spyOnClearInterval).toHaveBeenCalledTimes(1); // 確認清除計時器被呼叫一次
    spyOnClearInterval.mockRestore(); // 恢復原本的clearInterval方法
  });
});
