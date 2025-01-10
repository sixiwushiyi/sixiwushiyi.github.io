//**************** 变量声明与初始化 ****************//

//****** 页面模块 ******//
var top_container = document.querySelector(".Top_Container");
var nav_container = document.querySelector(".Nav_Container");
var server_container = document.querySelector(".Server_Container");
var visualization_container = document.querySelector(
  ".Visualization_Container"
);

//****** 顶部中模块 ******//
var top_time = document.querySelector(".Top_Time");
var save_data_button = document.querySelector(".Save_Data_Button");

//****** 导航栏模块 ******//
var nav_colums = document.querySelectorAll(".Nav_Colums");

//****** 服务器未连接 ******//
var server_unconnected_container = document.querySelector(
  ".Server_Unconnected_Container"
);
var server_name_in = document.querySelector(".Server_Name_in");
var server_address_in = document.querySelector(".Server_Address_in");
var server_ID_in = document.querySelector(".Server_ID_in");
var server_user_in = document.querySelector(".Server_User_in");
var server_password_in = document.querySelector(".Server_Password_in");
var connect_button_container = document.querySelector(
  ".Connect_Button_Container"
);
var connect_button = document.querySelector(".Connect_Button");
var Reconnect_Times;
var Max_Reconnect_Times = 10;
var server_name;
var server_address;
var server_url;
var server_clientID;
var server_username;
var server_password;
var server_client;
var server_topic;
var server_message;

//****** 服务器已连接 ******//
// 服务器信息 //
var server_connected_container = document.querySelector(
  ".Server_Connected_Container"
);
var connected_name = document.querySelector(".Connected_Name");
var connected_ID = document.querySelector(".Connected_ID");
// 服务器未订阅 //
var unsubscribed_container = document.querySelector(".Unsubscribed_Container");
var list_add_Text = document.querySelector(".List_Add_Text");
// 服务器已订阅 //
var subscribed_container = document.querySelector(".Subscribed_Container");
var subscribed_topic = document.querySelector(".Subscribed_Topic");
var subscribed_list = document.querySelector(".Subscribe_List");

//****** 可视化模块 ******//
var map_colums = document.querySelector(".Map_Colums");
var data = [];
// 第一列 //
var picture_speed_chart = document.querySelector(".Picture_Speed_Chart");
var picture_motor_chart = document.querySelector(".Picture_Motor_Chart");
var picture_open_chart = document.querySelector(".Picture_Open_Chart");
var picture_bar_chart = document.querySelector(".Bar_Chart");
var speed_chart = echarts.init(picture_speed_chart);
var motor_chart = echarts.init(picture_motor_chart);
var open_chart = echarts.init(picture_open_chart);
var bar_chart = echarts.init(picture_bar_chart);
var data_number = -1;
var speed_chart_option;
var speed_chart_startValue;
var speed_chart_endValue;
var speed_chart_isZooming = false;
var speed_chart_data;
var speed_chart_xAxisData;
var motor_chart_option;
var motor_chart_startValue;
var motor_chart_endValue;
var motor_chart_isZooming = false;
var motor_chart_data;
var motor_chart_xAxisData;
var open_chart_option;
var open_chart_startValue;
var open_chart_endValue;
var open_chart_isZooming = false;
var open_chart_data;
var open_chart_xAxisData;
var bar_chart_option;
var bar_chart_data;
var bar_chart_xAxisData;
// 第二列 //
var data_number_1 = document.querySelector(".Data_Number_1");
var data_number_2 = document.querySelector(".Data_Number_2");
var data_number_3 = document.querySelector(".Data_Number_3");
var code_data = document.querySelector(".Code_Data");
var DT_data = document.querySelector(".DT_Data");
var code;
var DT;
const apiKey = "5d41ab6e0846de229879e67b50e1516a"; // 替换为你的高德地图API Key
var map;
var url;
var loc;
var path = [];
// 第三列 //
var A_data = document.querySelector(".A_Data");
var B_data = document.querySelector(".B_Data");
var C_data = document.querySelector(".C_Data");
var D_data = document.querySelector(".D_Data");
var E_data = document.querySelector(".E_Data");
var F_data = document.querySelector(".F_Data");
var G_data = document.querySelector(".G_Data");
var H_data = document.querySelector(".H_Data");
var I_data = document.querySelector(".I_Data");
var J_data = document.querySelector(".J_Data");
var K_data = document.querySelector(".K_Data");
var L_data = document.querySelector(".L_Data");
var M_data = document.querySelector(".M_Data");
var N_data = document.querySelector(".N_Data");
var O_data = document.querySelector(".O_Data");
var P_data = document.querySelector(".P_Data");
var Q_data = document.querySelector(".Q_Data");
var R_data = document.querySelector(".R_Data");
var S_data = document.querySelector(".S_Data");
var T_data = document.querySelector(".T_Data");
var U_data = document.querySelector(".U_Data");
var V_data = document.querySelector(".V_Data");
var st_data = document.querySelector(".st_Data");
var lon_data = document.querySelector(".lon_Data");
var lat_data = document.querySelector(".lat_Data");
var pos_data = document.querySelector(".pos_Data");
var head_data = document.querySelector(".head_Data");
var A;
var B;
var C;
var D;
var E;
var F;
var G;
var H;
var I;
var J;
var K;
var L;
var M;
var N;
var O;
var P;
var Q;
var R;
var S;
var T;
var U;
var V;
var st;
var lon;
var lat;
var pos;
var head;
