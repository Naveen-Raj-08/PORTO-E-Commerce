const ReplaceList = () => {
  location.replace("productList2.html");
};

const ReplaceGrid = () => {
  location.replace("productList.html");
};

$(document).ready(function () {
  $("#colorChange").click(function () {
    $("div.color").slideToggle();
  });
});

$(document).ready(function () {
  $("#toggle-btn").click(function () {
    $("div.slow").slideToggle();
  });
});
