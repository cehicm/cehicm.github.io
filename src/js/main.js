//jQuery fallback
if (typeof jQuery === "undefined") {
  document.write(
    unescape(
      "%3Cscript src='/js/jquery-3.5.1.js' type='text/javascript'%3E%3C/script%3E"
    )
  );
}

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

//don't forget to compile

// Typewritter

let i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

const textArray = [
  " Aspiring front-end developer. | Based in Novi Sad",
  " Love coding| & learning new skills",
  " Looking for new challenges | & ways to improve my code",
  " NaNaNaNa| - Batman",
];

let speedForward = 100,
  speedWait = 500,
  speedBetweenLines = 500,
  speedBackspace = 25;

const typeWriter = (className, ar) => {
  const element = $("." + className),
    aString = ar[a],
    eHeader = element.children("h1"),
    eParagraph = element.children("p");

  if (!isBackspacing) {
    if (i < aString.length) {
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(() => {
          typeWriter(className, ar);
        }, speedBetweenLines);
      } else {
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(() => {
          typeWriter(className, ar);
        }, speedForward);
      }
    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(() => {
        typeWriter(className, ar);
      }, speedWait);
    }
  } else {
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      if (eParagraph.text().length > 0) {
        eParagraph.text(
          eParagraph.text().substring(0, eParagraph.text().length - 1)
        );
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(() => {
        typeWriter(className, ar);
      }, speedBackspace);
    } else {
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length;
      setTimeout(() => {
        typeWriter(className, ar);
      }, 50);
    }
  }
};
typeWriter("typewriter-output", textArray);

//Change based on screen size
// $(document).ready(function(){
//   if(window.innerWidth < 1340){
//     $('.btn-group').addClass('backup-btn-group').removeClass('btn-group');
//   }
// });

// $(window).resize(function(){
//   if(window.innerWidth < 1340){
//     $('.btn-group').addClass('backup-btn-group').removeClass('btn-group');
//   }else{
//     $('.backup-btn-group').addClass('btn-group').removeClass('backup-btn-group');
//   }
// });
