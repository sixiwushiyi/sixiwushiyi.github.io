//****** 连接按钮事件 ******//
function Server_Connect() {
  // 初始化重连次数与连接按钮，启用输入框
  Server_Connect_ed();
  // 读取输入值
  server_name = server_name_in.value;
  server_address = server_address_in.value;
  server_url = "wss://" + server_address_in.value + "/mqtt/";
  server_clientID = server_ID_in.value;
  server_username = server_user_in.value;
  server_password = server_password_in.value;
  if (!server_name) {
    alert("请输入服务器名称!");
  } else if (!server_address) {
    alert("请输入服务器地址!");
  } else if (!server_clientID) {
    alert("请输入Client ID!");
  } else if (!server_username) {
    alert("请输入用户名!");
  } else if (!server_password) {
    alert("请输入密码!");
  } else {
    // 创建客户端实例并进行mqtt连接
    const options = {
      protocolVersion: 5,
      clean: true,
      clientId: server_clientID,
      username: server_username,
      password: server_password,
    };
    server_client = mqtt.connect(server_url, options);
    // 连接成功
    server_client.on("connect", () => {
      console.log("Successfully Connect!Client connected:" + server_clientID);
      // 初始化重连次数与连接按钮，启用输入框
      Server_Connect_ed();
      // 切换到服务器已连接布局
      server_unconnected_container.style.display = "none";
      server_connected_container.style.display = "flex";
      // 展示信息
      connected_name.textContent = "设备名：" + server_name;
      connected_ID.textContent = "Client_ID:" + server_clientID;
    });
    // 重新连接
    server_client.on("reconnect", (error) => {
      console.log("正在重连:", error);
      // 增加重连次数，禁用连接按钮和输入框
      Server_Connect_ing();
      // 重连次数过多停止尝试连接
      if (Reconnect_Times >= Max_Reconnect_Times) {
        alert("连接失败,请再次尝试!");
        console.log("连接失败:", error);
        server_client.end();
        // 初始化重连次数与连接按钮，启用输入框
        Server_Connect_ed();
        // 清空客户器
        server_client = "";
      }
      // 切换到为未订阅布局
      unsubscribed_container.style.display = "block";
      subscribed_container.style.display = "none";
    });
    // 连接失败
    server_client.on("error", (error) => {
      alert("连接失败,请再次尝试!");
      console.log("连接失败:", error);
      server_client.end();
      // 初始化重连次数与连接按钮，启用输入框
      Server_Connect_ed();
      // 清空客户器
      server_client = "";
    });
  }
}

// 连接进行中事件
function Server_Connect_ing() {
  // 增加重连次数，禁用连接按钮和输入框
  Reconnect_Times += 1;
  connect_button.disabled = true;
  connect_button.style.pointerEvents = "none";
  connect_button_container.style.pointerEvents = "none";
  connect_button.textContent = "正在连接...";
  server_name_in.disabled = true;
  server_address_in.disabled = true;
  server_ID_in.disabled = true;
  server_user_in.disabled = true;
  server_password_in.disabled = true;
}
// 连接结束事件
function Server_Connect_ed() {
  // 初始化重连次数与连接按钮，启用输入框
  Reconnect_Times = 0;
  connect_button.disabled = false;
  connect_button.style.pointerEvents = "auto";
  connect_button_container.style.pointerEvents = "auto";
  connect_button.textContent = "连接设备";
  server_name_in.disabled = false;
  server_address_in.disabled = false;
  server_ID_in.disabled = false;
  server_user_in.disabled = false;
  server_password_in.disabled = false;
}

//****** 断开按钮事件 ******//
function Server_Disconnect() {
  // 断开服务器连接
  server_client.end(true, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully Unconnect");
    }
  });
  // 切换到服务器未连接布局
  server_unconnected_container.style.display = "flex";
  server_connected_container.style.display = "none";
  // 清空输入框
  server_name_in.value = "";
  server_address_in.value = "";
  server_ID_in.value = "";
  server_user_in.value = "";
  server_password_in.value = "";
  // 清空订阅
  list_add_Text.value = "";
  subscribed_list.innerHTML = "";
}

//******  添加订阅事件 ******//
function List_Add() {
  // 获取输入值
  var List_Text = list_add_Text.value;
  console.log(List_Text);
  if (List_Text) {
    // 创建新的列表项
    var listItem = document.createElement("li");
    // 创建订阅名
    var topicItem = document.createElement("div");
    topicItem.className = "Add_Topic";
    topicItem.textContent = List_Text;
    // 创建时间
    var timeItem = document.createElement("div");
    timeItem.className = "Add_Time";
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    timeItem.textContent =
      "创建时间：" +
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
    // 创建删除按钮
    var deleteButton = document.createElement("button");
    deleteButton.className = "Delete_Button";
    deleteButton.textContent = "删除";
    // 创建订阅按钮
    var SubscribeButton = document.createElement("button");
    SubscribeButton.className = "Subscribe_Button";
    SubscribeButton.textContent = "订阅";
    // 将信息添加到列表项
    listItem.appendChild(topicItem);
    listItem.appendChild(timeItem);
    listItem.appendChild(deleteButton);
    listItem.appendChild(SubscribeButton);
    // 将列表项添加到列表中
    document.querySelector(".Subscribe_List").appendChild(listItem);
    // 清空输入框
    list_add_Text.value = "";
    // 删除按钮事件
    deleteButton.onclick = function () {
      var list = document.querySelector(".Subscribe_List");
      list.removeChild(listItem);
      console.log(
        "Successfully Delete Topic:" + listItem.firstChild.textContent
      );
    };
    // 订阅按钮事件
    SubscribeButton.onclick = function () {
      // 获取选择的主题
      server_topic = listItem.firstChild.textContent;
      // 订阅主题
      server_client.subscribe(server_topic, { qos: 0 }, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Successfully Subsribe Topic:" + server_topic);
          console.log("Ready to recieve data from server!");
          // 切换到已订阅布局
          unsubscribed_container.style.display = "none";
          subscribed_container.style.display = "flex";
          // 订阅信息显示
          subscribed_topic.textContent = "主题：" + server_topic;
          // 进行数据的可视化
          Data_Visualization();
        }
      });
    };
  } else {
    alert("请输入文本");
  }
}

//****** 取消订阅事件 ******//
function Server_Dissubscribed() {
  // 取消当前主题的订阅
  server_client.unsubscribe(server_topic, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully Unsubsribe Topic:" + server_topic);
    }
  });
  // 切换到为未订阅布局
  unsubscribed_container.style.display = "block";
  subscribed_container.style.display = "none";
}
