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
$(document).ready(function () {
  var $desmagic = $(".desmagic"),
    desmagicWHalf = $desmagic.width() / 2;
  $(document).on("mousemove", function (e) {
    $desmagic.css({
      left: e.pageX - desmagicWHalf,
      top: e.pageY - desmagicWHalf,
    });
  });
});

$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
