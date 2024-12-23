//On Scroll Functionality
$(window).scroll(() => {
  var windowTop = $(window).scrollTop();
  windowTop > 100
    ? $("nav").addClass("navShadow")
    : $("nav").removeClass("navShadow");
  windowTop > 100 ? $("ul").css("top", "100px") : $("ul").css("top", "160px");
});

//Smooth Scrolling Using Navigation Menu
$('a[href*="#"]').on("click", function (e) {
  $("html,body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 100,
    },
    500
  );
  e.preventDefault();
});

/**
 * recursively get all text nodes as an array for a given element
 */
function getTextNodes(node) {
  var childTextNodes = [];

  if (!node.hasChildNodes()) {
    return;
  }

  var childNodes = node.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType == Node.TEXT_NODE) {
      childTextNodes.push(childNodes[i]);
    } else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
      Array.prototype.push.apply(childTextNodes, getTextNodes(childNodes[i]));
    }
  }

  return childTextNodes;
}

/**
 * given a text node, wrap each character in the
 * given tag.
 */
function wrapEachCharacter(textNode, tag) {
  var text = textNode.nodeValue;
  var parent = textNode.parentNode;

  var characters = text.split("");
  var elements = [];
  var i = 0;
  characters.forEach(function (character) {
    i++;
    var element = document.createElement(tag);
    var characterNode = document.createTextNode(character);

    element.appendChild(characterNode);

    parent.insertBefore(element, textNode);
  });

  parent.removeChild(textNode);
}

//loader animation
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("loader").style.display = "none";

  // trying to play with transitions ---
  //window.setTimeout(function(){ document.getElementById("loader").style.display="none"; }, 2000);
}

// background spotlight thing
$(document).ready(function () {
  var $magic = $(".magic"),
    magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function (e) {
    $magic.css({ left: e.pageX - magicWHalf, top: e.pageY - magicWHalf });
  });
});
