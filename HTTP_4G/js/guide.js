// 显示实时时间
setInterval(updateClock, 1000);
function updateClock() {
  var dt = new Date();
  var year = dt.getFullYear();
  var month = dt.getMonth() + 1;
  var day = dt.getDate();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
  var second = dt.getSeconds();
  top_time.textContent =
    "当前时间：" +
    year +
    "年" +
    month +
    "月" +
    day +
    "日-" +
    hour +
    "时" +
    minute +
    "分" +
    second +
    "秒";
}

// 数据保存
function Save_Data() {
  // 文件名
  var dt = new Date();
  var year = dt.getFullYear();
  var month = dt.getMonth() + 1;
  var day = dt.getDate();
  var name = "data_" + year + month + day + ".json";
  // 将数组转换为 JSON 字符串
  var jsonString = JSON.stringify(data, null, 2);
  // 创建 Blob 对象
  var blob = new Blob([jsonString], { type: "application/json" });
  // 创建下载链接
  const url = URL.createObjectURL(blob);
  const data_a = document.createElement("a");
  data_a.href = url; // 指定下载文件名
  data_a.download = name; // 将链接添加到文档中
  data_a.click(); // 模拟点击下载
  URL.revokeObjectURL(url); // 释放 URL 对象
  alert("数据已保存到本地");
}

// 导航栏样式切换
CCS_Switch();
function CCS_Switch() {
  // 为每个导航栏链接添加点击事件监听器
  nav_colums.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // 当点击发生时，移除所有链接的 'Nav_Colums_clicked' 和 'Nav_Colums_default' 类
      nav_colums.forEach(function (otherLink) {
        otherLink.classList.remove("Nav_Colums_clicked");
        otherLink.classList.remove("Nav_Colums_default");
      });
      // 为当前点击的链接切换 'Nav_Colums_clicked' 类
      this.classList.toggle("Nav_Colums_clicked");
    });
  });
}

// 功能模块布局切换
function Server_html() {
  server_container.style.display = "block";
  visualization_container.style.display = "none";
}
function Visualization_html() {
  server_container.style.display = "none";
  visualization_container.style.display = "flex";
}
