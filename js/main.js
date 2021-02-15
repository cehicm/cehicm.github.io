//jQuery fallback
if (typeof jQuery === "undefined") {
  document.write(
    unescape(
      "%3Cscript src='/js/jquery-3.5.1.js' type='text/javascript'%3E%3C/script%3E"
    )
  );
}

//fadeToggle
$(function () {
  $(".tech_stack i").on("mouseover", function () {
    $(".tech_stack i").fadeTo("slow", 0.6);
  });
});

// check if jquery is loaded //
// window.onload = function () {
//   if (window.jQuery) {
//     // jQuery is loaded
//     alert("Yeah!");
//   } else {
//     // jQuery is not loaded
//     alert("Doesn't Work");
//   }
// };
