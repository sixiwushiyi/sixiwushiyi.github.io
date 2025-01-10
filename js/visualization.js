// 数据可视化

// 接收数据并可视化
function Data_Visualization() {
  // 接收消息
  server_client.on("message", function (server_topic, message) {
    // 获取事件对象的值
    server_message = message.toString();
    console.log("Success Receive!Data:" + server_message);
    // 保存数据
    data_number += 1;
    data.push(server_message);
    // 拆分数据
    Data_Split();
    // 绘制图表
    Chart_Data();
    // 展示数据与绘制柱状图
    Bar_Chart_Data();
    // 绘制地图
    Map_draw();
    // 绘制表格
    Table_Data();
  });
}

// 拆分数据
function Data_Split() {
  // 尝试解析JSON字符串
  try {
    // 用逗号划分数据
    const dataParts = server_message.split(",");
    // 初始化数据切片索引
    let dataIndex = 0;
    if (dataParts) {
      dataParts.forEach((part, index) => {
        // 选择冒号后的数据片段
        dataIndex = part.lastIndexOf(":");
        const splitData = part.slice(dataIndex + 1);
        // 数据处理与赋值
        if (index === 0) {
          code = splitData.replace(/"/g, "");
        }
        if (index === 1) {
          DT = splitData.replace(/"/g, "");
          if (DT === "1") {
            DT = "当前数据";
          } else if (DT === "2") {
            DT = "历史数据";
          } else {
            DT = "错误";
          }
        }
        if (index === 2) {
          A = splitData;
        }
        if (index === 3) {
          B = splitData;
        }
        if (index === 4) {
          C = splitData.replace(/"/g, "");
        }
        if (index === 5) {
          D = splitData.replace(/"/g, "");
        }
        if (index === 6) {
          E = splitData;
        }
        if (index === 7) {
          F = splitData;
        }
        if (index === 8) {
          G = splitData;
        }
        if (index === 9) {
          H = splitData.replace(/"/g, "");
        }
        if (index === 10) {
          I = splitData;
        }
        if (index === 11) {
          J = splitData;
        }
        if (index === 12) {
          K = splitData;
        }
        if (index === 13) {
          L = splitData;
        }
        if (index === 14) {
          M = splitData;
        }
        if (index === 15) {
          N = splitData;
        }
        if (index === 16) {
          O = splitData;
        }
        if (index === 17) {
          P = splitData;
        }
        if (index === 18) {
          Q = splitData;
        }
        if (index === 19) {
          R = splitData;
        }
        if (index === 20) {
          S = splitData;
        }
        if (index === 21) {
          T = splitData;
        }
        if (index === 22) {
          U = splitData;
        }
        if (index === 23) {
          V = splitData.replace(/}/g, "").replace(/"/g, "");
        }
        if (index === 24) {
          st = splitData;
        }
        if (index === 25) {
          lon = splitData.replace(/"/g, "");
        }
        if (index === 26) {
          lat = splitData.replace(/"/g, "");
        }
        if (index === 27) {
          pos = splitData.replace(/"/g, "");
        }
        if (index === 28) {
          head = splitData.replace(/"/g, "");
        }
      });
    }
  } catch (error) {
    console.error("Invalid JSON:", completeData);
  }
}
// 绘制图表
function Chart_Data() {
  // 鼠标操作处理：等待三秒后才继续图表的更新
  speed_chart.on("dataZoom", function () {
    speed_chart_isZooming = true;
    setTimeout(function () {
      speed_chart_isZooming = false;
    }, 3000);
  });
  motor_chart.on("dataZoom", function () {
    motor_chart_isZooming = true;
    setTimeout(function () {
      motor_chart_isZooming = false;
    }, 3000);
  });
  open_chart.on("dataZoom", function () {
    open_chart_isZooming = true;
    setTimeout(function () {
      open_chart_isZooming = false;
    }, 3000);
  });
  // 更新图表的起始值和终止值
  if (data_number >= 10) {
    speed_chart_startValue += 1;
    speed_chart_endValue += 1;
    motor_chart_startValue += 1;
    motor_chart_endValue += 1;
    open_chart_startValue += 1;
    open_chart_endValue += 1;
  }
  // 更新图表数据
  speed_chart_data = speed_chart.getOption().series[0].data;
  speed_chart_xAxisData = speed_chart.getOption().xAxis[0].data;
  speed_chart_data.push(F);
  speed_chart_xAxisData.push(data_number);
  motor_chart_data = motor_chart.getOption().series[0].data;
  motor_chart_xAxisData = motor_chart.getOption().xAxis[0].data;
  motor_chart_data.push(N);
  motor_chart_xAxisData.push(data_number);
  open_chart_data = open_chart.getOption().series[0].data;
  open_chart_xAxisData = open_chart.getOption().xAxis[0].data;
  open_chart_data.push(E);
  open_chart_xAxisData.push(data_number);
  // 如若没有鼠标操作，更新图表
  if (!speed_chart_isZooming) {
    updateData(
      speed_chart,
      speed_chart_data,
      speed_chart_xAxisData,
      speed_chart_startValue,
      speed_chart_endValue
    );
  }
  if (!motor_chart_isZooming) {
    updateData(
      motor_chart,
      motor_chart_data,
      motor_chart_xAxisData,
      motor_chart_startValue,
      motor_chart_endValue
    );
  }
  if (!open_chart_isZooming) {
    updateData(
      open_chart,
      open_chart_data,
      open_chart_xAxisData,
      open_chart_startValue,
      open_chart_endValue
    );
  }
}

// 更新图表
function updateData(my_chart, data, xAxisData, startValue, endValue) {
  option = {
    xAxis: {
      data: xAxisData,
    },
    series: [
      {
        data: data,
      },
    ],
    dataZoom: [
      {
        startValue: startValue,
        endValue: endValue,
      },
    ],
  };
  my_chart.setOption(option);
}

// 展示数据与绘制柱状图
function Bar_Chart_Data() {
  // 展示信息
  data_number_1.textContent = F;
  data_number_2.textContent = N;
  data_number_3.textContent = E;
  code_data.textContent = "唯一识别码：" + code;
  DT_data.textContent = "数据版本：" + DT;
  st_data.textContent = "时间戳：" + st;
  // 绘制柱状图
  var bar_temp_data = [S + "℃", R + "℃", Q + "℃"];
  var bar_height_data = [L, M, I];
  bar_chart_option = {
    yAxis: [
      {
        data: ["机油  ", "燃油  ", "冷却液  "],
      },
      {
        data: bar_temp_data,
      },
    ],
    series: [
      {
        data: bar_height_data,
      },
    ],
  };
  bar_chart.setOption(bar_chart_option);
}

// 坐标转换
function convertCoordinates(lng, lat, callback) {
  url = `https://restapi.amap.com/v3/assistant/coordinate/convert?key=${apiKey}&locations=${lng},${lat}&coordsys=gps`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "1" && data.locations && data.locations.length > 0) {
        const coords = data.locations.split(" ");
        loc = coords[0];
        callback(loc); // 调用回调函数并传递 loc
      } else {
        console.error("坐标转换失败:", data.info);
      }
    })
    .catch((error) => console.error("请求失败:", error));
}

// 地图绘制
function Map_draw() {
  convertCoordinates(lon, lat, (loc) => {
    // 数据划分
    let lon_gcj = loc.split(",")[0];
    let lat_gcj = loc.split(",")[1];
    // 绘制
    path.push([lon_gcj, lat_gcj]);
    if (path.length >= 2) {
      // 移除旧的路线
      map.clearMap();
      // 创建路线
      var polyline = new AMap.Polyline({
        path: path,
        strokeColor: "#f5a623",
        strokeWeight: 5,
        strokeOpacity: 0.8,
      });
      // 将路线添加到地图上
      map.add(polyline);
      map.setCenter(path[path.length - 1]);
    }
  });
}

// 绘制表格
function Table_Data() {
  A_data.textContent = A;
  B_data.textContent = B;
  C_data.textContent = C;
  D_data.textContent = D;
  E_data.textContent = E;
  F_data.textContent = F;
  G_data.textContent = G;
  H_data.textContent = H;
  I_data.textContent = I;
  J_data.textContent = J;
  K_data.textContent = K;
  L_data.textContent = L;
  M_data.textContent = M;
  N_data.textContent = N;
  O_data.textContent = O;
  P_data.textContent = P;
  Q_data.textContent = Q;
  R_data.textContent = R;
  S_data.textContent = S;
  T_data.textContent = T;
  U_data.textContent = U;
  V_data.textContent = V;
  lon_data.textContent = lon;
  lat_data.textContent = lat;
  pos_data.textContent = pos;
  head_data.textContent = head;
}
