//jest.mock(moduleName, factory, options);
/*
 * moduleName 要模擬的模組路徑（相對或絕對路徑）
 * factory	（選填） 回傳模擬實作的工廠函式
 * options	（少用） Mock 設定，例如 { virtual: true }
 */

// 部分模擬資料 (要放在最前面，才能在require時生效)
jest.mock("./domUtils", () => {
  //   const originalModule = jest.requireActual("./domUtils");
  //   return {
  //     ...originalModule, // 保留原有的實作
  //     fetchApi: jest.fn().mockResolvedValue({
  //       name: "Alice",
  //       email: "aaa@example.com",
  //     }), // 將 fetchApi 函式模擬成 jest.fn()
  //   };
});

const domUtils = require("./domUtils");
const { showUserProfile } = require("./profile");

describe("使用者資料顯示功能測試", () => {
  // 模擬 DOM 元素
  beforeEach(() => {
    document.body.innerHTML = `
            <div>
            <h1 id="name"></h1>
            <p id="email"></p>
            </div>`;
  });

  it("應該要正確顯示使用者資料", async () => {
    // 執行 showUserProfile 函式
    const url = "https://api.example.com/user/1";
    await showUserProfile(url);

    //驗證
    expect(domUtils.fetchApi).toHaveBeenCalledWith(url); // 期待 fetchApi 被正確呼叫
    expect(document.querySelector("#name").innerText).toBe("Alice"); // 期待使用者名稱被正確顯示
    expect(document.querySelector("#email").innerText).toBe("aaa@example.com"); // 期待使用者電子郵件被正確顯示
  });

  //   it("應該要正確顯示使用者資料 (用spyOn)", async () => {
  //     const spy = jest
  //       .spyOn(domUtils, "fetchApi")
  //       .mockResolvedValue({ name: "John", email: "bbb@example.com" }); // 小寫，方便測原始 formatUserName 是否有跑
  //     // 執行 showUserProfile 函式
  //     const url = "https://api.example.com/user/1";
  //     await showUserProfile(url);

  //     //驗證
  //     expect(domUtils.fetchApi).toHaveBeenCalledWith(url); // 期待 fetchApi 被正確呼叫
  //     expect(document.querySelector("#name").innerText).toBe("John"); // 期待使用者名稱被正確顯示
  //     expect(document.querySelector("#email").innerText).toBe("bbb@example.com"); // 期待使用者電子郵件被正確顯示

  //     // 恢復原本的 fetchApi 方法
  //     spy.mockRestore();
  //   });
});
