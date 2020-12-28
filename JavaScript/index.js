$(".collection").click(function () {
  $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
});

$(document).ready(function () {
  $("#item-1").mouseenter(function () {
    $("button.cart01").toggle("fast");
  });
  $("#item-1").mouseleave(function () {
    $("button.cart01").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-2").mouseenter(function () {
    $("button.cart02").toggle("fast");
  });
  $("#item-2").mouseleave(function () {
    $("button.cart02").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-3").mouseenter(function () {
    $("button.cart03").toggle("fast");
  });
  $("#item-3").mouseleave(function () {
    $("button.cart03").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-4").mouseenter(function () {
    $("button.cart04").toggle("fast");
  });
  $("#item-4").mouseleave(function () {
    $("button.cart04").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-5").mouseenter(function () {
    $("button.cart05").toggle("fast");
  });
  $("#item-5").mouseleave(function () {
    $("button.cart05").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-6").mouseenter(function () {
    $("button.cart06").toggle("fast");
  });
  $("#item-6").mouseleave(function () {
    $("button.cart06").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-7").mouseenter(function () {
    $("button.cart07").toggle("fast");
  });
  $("#item-7").mouseleave(function () {
    $("button.cart07").toggle("fast");
  });
});

$(document).ready(function () {
  $("#item-8").mouseenter(function () {
    $("button.cart08").toggle("fast");
  });
  $("#item-8").mouseleave(function () {
    $("button.cart08").toggle("fast");
  });
});

$(document).ready(function () {
  $("#colorChange").click(function () {
    $("div.color").slideToggle();
  });
});

$(document).ready(function () {
  $("#carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
});

$(document).ready(function () {
  $("#carousel2").owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      960: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
});
function openTab(ProductDetail) {
  var i;
  var x = document.getElementsByClassName("product_details");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(ProductDetail).style.display = "block";
}
