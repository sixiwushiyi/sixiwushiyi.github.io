// 初始化各可视化图表
Speed_Chart_Init();
Motor_Chart_Init();
Open_Chart_Init();
Bar_Chart_Init();
Map_Init();

// 速度图表
function Speed_Chart_Init() {
  // 指定配置项
  speed_chart_startValue = 0;
  speed_chart_endValue = 10;
  speed_chart_option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      name: "接收次数",
      type: "category",
      data: [],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        data: [],
        type: "line",
        itemStyle: {
          color: "#fff",
        },
      },
    ],
    dataZoom: [
      {
        type: "inside", // 内置型 dataZoom 组件
        xAxisIndex: 0, // 关联到x轴
        // yAxisIndex: 0, // 关联到y轴
        zoomOnMouseWheel: true, // 启用鼠标滚轮缩放
        zoomOnMouseDrag: true, // 启用鼠标拖拽缩放
        moveOnMouseMove: true, // 启用鼠标移动时的滑块移动
        startValue: speed_chart_startValue,
        endValue: speed_chart_endValue,
      },
    ],
  };
  speed_chart.setOption(speed_chart_option); // 使用刚指定的配置项和数据显示图表。
}

// 发动机转速图表
function Motor_Chart_Init() {
  // 指定配置项
  motor_chart_startValue = 0;
  motor_chart_endValue = 10;
  motor_chart_option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      name: "接收次数",
      type: "category",
      data: [],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        data: [],
        type: "line",
        itemStyle: {
          color: "#fff",
        },
      },
    ],
    dataZoom: [
      {
        type: "inside", // 内置型 dataZoom 组件
        xAxisIndex: 0, // 关联到x轴
        // yAxisIndex: 0, // 关联到y轴
        zoomOnMouseWheel: true, // 启用鼠标滚轮缩放
        zoomOnMouseDrag: true, // 启用鼠标拖拽缩放
        moveOnMouseMove: true, // 启用鼠标移动时的滑块移动
        startValue: motor_chart_startValue,
        endValue: motor_chart_endValue,
      },
    ],
  };
  motor_chart.setOption(motor_chart_option); // 使用刚指定的配置项和数据显示图表。
}

// 油门踏板开度图表
function Open_Chart_Init() {
  // 指定配置项
  open_chart_startValue = 0;
  open_chart_endValue = 10;
  open_chart_option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      name: "接收次数",
      type: "category",
      data: [],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        data: [],
        type: "line",
        itemStyle: {
          color: "#fff",
        },
      },
    ],
    dataZoom: [
      {
        type: "inside", // 内置型 dataZoom 组件
        xAxisIndex: 0, // 关联到x轴
        // yAxisIndex: 0, // 关联到y轴
        zoomOnMouseWheel: true, // 启用鼠标滚轮缩放
        zoomOnMouseDrag: true, // 启用鼠标拖拽缩放
        moveOnMouseMove: true, // 启用鼠标移动时的滑块移动
        startValue: open_chart_startValue,
        endValue: open_chart_endValue,
      },
    ],
  };
  open_chart.setOption(open_chart_option); // 使用刚指定的配置项和数据显示图表。
}

// 油/液位图表
function Bar_Chart_Init() {
  var bar_chart_color = ["#1089E7", "#F57474", "#56D0E3"];
  bar_chart_option = {
    grid: {
      left: "5%",
      right: "4%",
      bottom: "0%",
      top: "0%",
      containLabel: true,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        data: ["机油  ", "燃油  ", "冷却液  "],
        axisLine: {
          show: false,
        },
        inverse: true,
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontsize: 10,
          color: "#fff",
        },
      },
      {
        show: true,
        data: [],
        axisLine: {
          show: false,
        },
        inverse: true,
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 10,
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [],
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            var num = bar_chart_color.length;
            return bar_chart_color[params.dataIndex % num];
          },
        },
        barCategoryGap: 15,
        barWidth: 10,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%",
          color: "#fff",
        },
        yAxisIndex: 0,
      },
      {
        name: "框",
        type: "bar",
        data: [100, 100, 100],
        barCategoryGap: 15,
        barWidth: 10,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 1,
          barBorderRadius: 15,
        },
        yAxisIndex: 1,
      },
    ],
  };
  bar_chart.setOption(bar_chart_option);
}

// 地图图表
function Map_Init() {
  // // 实验室经纬度参考
  // let lon_i = 126.634302;
  // let lat_i = 45.732859;
  map = new AMap.Map(map_colums, {
    resizeEnable: true,
    zoom: 17,
    center: [126.634302, 45.732859], // 初始地图中心为实验室经纬度
  });
}
