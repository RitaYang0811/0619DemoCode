const domUtils = require("./domUtils");

// 從API取得資料後顯示
async function showUserProfile(url) {
  try {
    const user = await domUtils.fetchApi(url);
    domUtils.setText("#name", user.name);
    domUtils.setText("#email", user.email);
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
}

module.exports = { showUserProfile };
