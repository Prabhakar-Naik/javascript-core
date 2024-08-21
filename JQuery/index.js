// $(document).ready(function () {
//   $("h1").css("color", "blue");
//   $("body").css("background-color", "green");
// });

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// $("h2").addClass("margin-50");

// $("h1").text("Bye");
// $("button").text("Don't click me");
// $("button").html("<em>Hey</em>")

// java script
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// jquery
$("button").click(function () {
  $("h1").css("color", "green");
});

// for input
$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("h1").before("<button>new before</button>");
$("h1").after("<button>new before</button>");
$("h1").append("<button>new before</button>");
$("h1").prepend("<button>new before</button>");

// $("h1").hide();
// $("h1").show();

// $("button").on("click", function () {
//   $("h1").toggle();
// });

// $("h1").on("click", function () {
//   $("h1").fadeOut();
// });

// $("h1").on("click", function () {
//   $("h1").fadeToggle();
// });

// $("h1").on("click", function () {
//   $("h1").fadeHide();
// });

$("h1").on("click", function () {
  $("h1").slideUp();
});

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({opacity: 0.7});
});

$("h1").on("click", function () {
  $("h1").slideToggle();
});
