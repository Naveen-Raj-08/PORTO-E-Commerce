const ReplaceList = () => {
  location.replace("productList2.html");
};

const ReplaceGrid = () => {
  location.replace("productList.html");
};

$(".collection").click(function () {
  $(this).find("i").toggleClass("fas fa-angle-down fas fa-angle-up");
});
