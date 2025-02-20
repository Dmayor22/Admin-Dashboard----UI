// Select menu icon and close icon
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.getElementById("close");

// Seleect sidebar
const sidebar = document.getElementById("sidebar");

// eleemnt for opening sidebar
let sidebarOpen = false;

// Object Values for sidebar if on large and small Screen
let sidebarBg = {
  display: {
    largeScreen: "block",
    smallScreen: "none",
  },
  position: "absolute",
};
// function for openSidebar
const openSidebar = () => {
  if (!sidebarOpen) {
    sidebar.style.display = sidebarBg?.display?.largeScreen;
    sidebar.style.position = sidebarBg.position;
    // sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
};

// funvtion for closeSidebar
const closeSidebar = () => {
  if (sidebarOpen) {
    sidebar.style.display = sidebarBg?.display?.smallScreen;
    // sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
};

// onClick action for menu icon
menuIcon.addEventListener("click", openSidebar);
closeIcon.addEventListener("click", closeSidebar);

// Apex Chart
var barChartOptions = {
  series: [
    {
      name: "Actual",
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      horizontal: false,
      borderRadius: 4,
      columnWidth: "40%",
    },
  },
  colors: ["#245dec", "#cc3c43", "#f5b74f", "#4f35a1"],
  dataLabels: {
    enabled: true,
  },
  legend: {
    show: false,
  },

  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "HeadPhones", "Camera"],
  },

  yaxis: {
    title: {
      text: "Count",
    },
  },
};

var barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

// Line chart
var areaChartOptions = {
  series: [
    {
      name: "Purchase Orders",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Orders",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],

  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },

  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

  yaxis: [
    {
      title: {
        text: "Purchase Orders",
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
      },
    },
  ],

  tooltips: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();
