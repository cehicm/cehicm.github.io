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
  " Some text | below",
  "WDA|dada",
  "dadada ?|cdcsa",
  "cjjajda ?|vavaC",
  "Nananannaan|Batman",
];

let speedForward = 150,
  speedWait = 1000,
  speedBetweenLines = 1000,
  speedBackspace = 25;

const typeWriter = (id, ar) => {
  const element = $("#" + id),
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
          typeWriter(id, ar);
        }, speedBetweenLines);
      } else {
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(() => {
          typeWriter(id, ar);
        }, speedForward);
      }
    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(() => {
        typeWriter(id, ar);
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
        typeWriter(id, ar);
      }, speedBackspace);
    } else {
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length;
      setTimeout(() => {
        typeWriter(id, ar);
      }, 50);
    }
  }
};
typeWriter("output", textArray);
