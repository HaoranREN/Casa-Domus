/*
    File: script.js
    Description: Main scripting file for CasaDomus
*/

//------------------------globals start------------------------
var COUNTY_INFO_FILEPATH = "https://cdn.rawgit.com/WillyWonkaCocoa/Casa-Domus/master/src/County_Information.txt";
var slider = document.getElementById("slider");
if(slider) {
    slider.addEventListener('input', sliderChange);
}

function sliderChange() {
    display.innerHTML = this.value;
}

var display = document.getElementById("sliderAmount");
//-------------------------globals end-------------------------

/*
    Class
    Name: County
    Author: Elia Deppe
    Creation Date: 4/18/2018
    Description: The County class holds the information that is relevant to
        this project for a county.
    Variables:
        string name: Name of the county. Initialized to 0.
        string state: State the county resides in. Initialized to 0.
        
        int FIPS: FIPS number of the county. Initialized to 0.
        
        double[] coordinates: Central coordinates of the county. Initialized to 
            [0, 0].
            
        int medianProperty: Median property value in that area. Initialized to 
            0.
        int medianRent: Median cost of rent in that area. Initialized to null.
        
        int medianIncome: Median Household Income for that county. Initialized 
            to 0.
        
        double coli: Cost of Living Index. Initialized to 0.
        
        int summerAverage: Average summer temperature (Fahrenheit). Initialized 
            to 0.
        int winterAverage: Average winter temperature (Fahrenheit). Initialized 
            to 0.
            
        double offset: How far off this particular county is from the users
            choice. Initialized to 0.
    Changes:
        Elia Deppe - 4/19/2018: added variable offset along with getters and
            setters
        Elia Deppe - 4/21/2018: added variable FIPS along with getters and
            setters. Changed initializations to emptpy strings/0s
*/

class County {
    constructor() {
        this.name = "";
        this.state = "";
        this.FIPS = 0;
        
        this.coordinates = [0, 0];
    
        this.medianProperty = 0;
        this.medianRent = 0;

        this.medianIncome = 0;
        
        this.coli = 0;
        
        this.summerAverage = 0;
        this.winterAverage = 0;
        
        this.offset = 0;
    }
    
    //----------------------setter methods----------------------
    //standard
    set name(value) {
        this.name = value;
    }
    
    set state(value) {
        this.state = value;
    }
    
    set FIPS(value) {
        this.FIPS = value;
    }
    
    set coordinates(value) {
        this.coordinates[0] = value[0];
        this.coordinates[1] = value[1];
    }
    
    set medianProperty(value) {
        this.medianProperty = value;
    }
    
    set medianRent(value) {
        this.medianRent = value;
    }
    
    set medianIncome(value) {
        this.medianIncome = value;
    }
    
    set coli(value) {
        this.coli = value;
    }
    
    set summerAverage(value) {
        this.summerAverage = value;
    }
    
    set winterAverage(value) {
        this.winterAverage = value;
    }
    
    set offset(value) {
        this.offset = value;
    }
    
    //extended
    setID(nameValue, stateValue, coordinatesValue) {
        this.name = nameValue;
        this.state = stateValue;
        this.coordinates[0] = coordinatesValue[0];
        this.coordinates[1] = coordinatesValue[1];
    }
    //--------------------end setter methods--------------------
    
    //----------------------getter methods----------------------
    get name() {
        return this.name;
    }
    
    get state() {
        return this.state;
    }
    
    get FIPS() {
        return this.FIPS;
    }
    
    get coordinates() {
        return this.coordinates;
    }
    
    get medianProperty() {
        return this.medianProperty;
    }
    
    get medianRent() {
        return this.medianRent;
    }
    
    get medianIncome() {
        return this.medianIncome;
    }
    
    get coli() {
        return this.coli;
    }
    
    get summerAverage() {
        return this.summerAverage;
    }
    
    get winterAverage() {
        return this.winterAverage;
    }
    
    get offset() {
        return this.offset;
    }
    //--------------------end getter methods--------------------
}

var countyList = new Array();

/*var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}*/


//-------------------start read file functions--------------------
/*
    Function
    Name: ReadCountyInformation
    Author(s): Elia Deppe
    Date: 4/18/2018
    Description: Reads from County_Information.txt and stores the counties into
        countyList.
    Sources:
        - https://gist.github.com/Arahnoid/9925725
*/
function ReadCountyInformation() {
    let str = "";
    let txtFile = new File("County_Information.txt", 'r');
    let eof = false;
    txtFile.open("r");
    while(!eof) {
        str = txtFile.readln();
        console.log(str);
        //ParseCountyInformation(str);
    }
}

/*
    Function
    Name: ParseCountyInformation
    Author(s): Elia Deppe
    Date: 4/18/2018
    Parameters:
        - String line: Line read from the file.
    Description: Parses the string stored in line to retrieve the county's name,
        state, and geocentrial coordinates.
*/
function ParseCountyInformation(line) {
    var newCounty = new County();
    let switchCount = 0;
    var i;
    var string;
    for(i = 0; i < line.length; i++) {
        if(line[i] == " ") {
            switchCount++;
        }
        else {
            if(switchCount == 1) {
                i = i;
            }
            
            else if(switchCount == 2) {
                i = i;
            }
            
            else if(switchCount == 3) {
                i = i;
            }
            
            else if(switchCount == 4) {
                i = i;
            }
            
            else if(switchCount == 5) {
                i = i;
            }
        }
    }
    
    
}

//--------------------end read file functions--------------------


//-------------------start load html functions-------------------

/*
    Function
    Name: LoadQuestionnaire
    Author(s): Elia Deppe
    Date: 4/18/2018
    Description: Loads questionnaire.html
*/
function LoadQuestionnaire() {
    ReadCountyInformation();
    window.location.href = "questionnaire.html";
}

/*
    Function
    Name: LoadMap
    Author(s): Elia Deppe
    Date: 4/18/2016
    Description: Loads map.html
*/
function LoadMap() {
    window.location.href = "map.html";
}

//--------------------end load html functions--------------------

//Comment Templates

/*
    Class
    Name:
    Author:
    Creation Date:
    Description:
    Variables:
        <type> <name>: <description>
    Sources:
    Changes:
        - <author> <date>: <description>
*/

/*
    Function
    Name:
    Author(s):
    Date:
    Parameters:
        - <type> <name>: <description>
    Returns: <type> <name>: description>
    Description:
    Sources:
    Changes:
        - <author> <date>: <description>
*/

function myFunction() {
        window.location.href = "survey.html";
        function2();
        console.log("hi");
    }

function showMap(){
    window.location.href = "../Prototyping/datalayer+angular-ryan/index.html";
}

function function2() {
    var txtFile = new XMLHttpRequest();
    txtFile.open('GET', COUNTY_INFO_FILEPATH, false);
    txtFile.send(null);
    console.log("In function 2");
    txtFile.onreadystatechange = function() {
        console.log("here")
        
        console.log(txtFile.readyState, txtFile,status, txtFile);
        if(txtFile.readyState === 3) {
            console.log("Downloading file.")
        }
        
        else if(txtFile.readyState === 4) {
            console.log("hey");
            allText = txtFile.responseText;
            console.log(allText);
        }
    }
}

function SwitchToSurvey() {
    window.location.href = "test2.html"
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        alert('Supported');
    }
    else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

//slider javascript
/*! rangeslider.js - v2.0.2 | (c) 2015 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
  "use strict";

  function b() {
    var a = document.createElement("input");
    return a.setAttribute("type", "range"), "text" !== a.type
  }

  function c(a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function() {
      return a.apply(null, c)
    }, b)
  }

  function d(a, b) {
    return b = b || 100,
      function() {
        if (!a.debouncing) {
          var c = Array.prototype.slice.apply(arguments);
          a.lastReturnVal = a.apply(window, c), a.debouncing = !0
        }
        return clearTimeout(a.debounceTimeout), a.debounceTimeout = setTimeout(function() {
          a.debouncing = !1
        }, b), a.lastReturnVal
      }
  }

  function e(a) {
    return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1)
  }

  function f(a) {
    for (var b = [], c = a.parentNode; e(c);) b.push(c), c = c.parentNode;
    return b
  }

  function g(a, b) {
    function c(a) {
      "undefined" != typeof a.open && (a.open = a.open ? !1 : !0)
    }
    var d = f(a),
      e = d.length,
      g = [],
      h = a[b];
    if (e) {
      for (var i = 0; e > i; i++) g[i] = d[i].style.cssText, d[i].style.display = "block", d[i].style.height = "0", d[i].style.overflow = "hidden", d[i].style.visibility = "hidden", c(d[i]);
      h = a[b];
      for (var j = 0; e > j; j++) d[j].style.cssText = g[j], c(d[j])
    }
    return h
  }

  function h(a, b) {
    var c = parseFloat(a);
    return Number.isNaN(c) ? b : c
  }

  function i(a) {
    return a.charAt(0).toUpperCase() + a.substr(1)
  }

  function j(b, e) {
    if (this.$window = a(window), this.$document = a(document), this.$element = a(b), this.options = a.extend({}, n, e), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = o.orientation[this.orientation].dimension, this.DIRECTION = o.orientation[this.orientation].direction, this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle, this.COORDINATE = o.orientation[this.orientation].coordinate, this.polyfill && m) return !1;
    this.identifier = "js-" + k + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = a('<div class="' + this.options.fillClass + '" />'), this.$handle = a('<div class="' + this.options.handleClass + '" />'), this.$range = a('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      opacity: "0"
    }), this.handleDown = a.proxy(this.handleDown, this), this.handleMove = a.proxy(this.handleMove, this), this.handleEnd = a.proxy(this.handleEnd, this), this.init();
    var f = this;
    this.$window.on("resize." + this.identifier, d(function() {
      c(function() {
        f.update()
      }, 300)
    }, 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function(a, b) {
      if (!b || b.origin !== f.identifier) {
        var c = a.target.value,
          d = f.getPositionFromValue(c);
        f.setPosition(d)
      }
    })
  }
  Number.isNaN = Number.isNaN || function(a) {
    return "number" == typeof a && a !== a
  };
  var k = "rangeslider",
    l = 0,
    m = b(),
    n = {
      polyfill: !0,
      orientation: "horizontal",
      rangeClass: "rangeslider",
      disabledClass: "rangeslider--disabled",
      horizontalClass: "rangeslider--horizontal",
      verticalClass: "rangeslider--vertical",
      fillClass: "rangeslider__fill",
      handleClass: "rangeslider__handle",
      startEvent: ["mousedown", "touchstart", "pointerdown"],
      moveEvent: ["mousemove", "touchmove", "pointermove"],
      endEvent: ["mouseup", "touchend", "pointerup"]
    },
    o = {
      orientation: {
        horizontal: {
          dimension: "width",
          direction: "left",
          directionStyle: "left",
          coordinate: "x"
        },
        vertical: {
          dimension: "height",
          direction: "top",
          directionStyle: "bottom",
          coordinate: "y"
        }
      }
    };
  j.prototype.init = function() {
    this.update(!0, !1), this.$element[0].value = this.value, this.onInit && "function" == typeof this.onInit && this.onInit()
  }, j.prototype.update = function(a, b) {
    a = a || !1, a && (this.min = h(this.$element[0].getAttribute("min"), 0), this.max = h(this.$element[0].getAttribute("max"), 100), this.value = h(this.$element[0].value, this.min + (this.max - this.min) / 2), this.step = h(this.$element[0].getAttribute("step"), 1)), this.handleDimension = g(this.$handle[0], "offset" + i(this.DIMENSION)), this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, b)
  }, j.prototype.handleDown = function(a) {
    if (a.preventDefault(), this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), !((" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
      var b = this.getRelativePosition(a),
        c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
        d = this.getPositionFromNode(this.$handle[0]) - c,
        e = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
      this.setPosition(e), b >= d && b < d + this.handleDimension && (this.grabPos = b - d)
    }
  }, j.prototype.handleMove = function(a) {
    a.preventDefault();
    var b = this.getRelativePosition(a),
      c = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
    this.setPosition(c)
  }, j.prototype.handleEnd = function(a) {
    a.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$element.trigger("change", {
      origin: this.identifier
    }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
  }, j.prototype.cap = function(a, b, c) {
    return b > a ? b : a > c ? c : a
  }, j.prototype.setPosition = function(a, b) {
    var c, d;
    void 0 === b && (b = !0), c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos)), d = this.getPositionFromValue(c), this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = d + "px", this.setValue(c), this.position = d, this.value = c, b && this.onSlide && "function" == typeof this.onSlide && this.onSlide(d, c)
  }, j.prototype.getPositionFromNode = function(a) {
    for (var b = 0; null !== a;) b += a.offsetLeft, a = a.offsetParent;
    return b
  }, j.prototype.getRelativePosition = function(a) {
    var b = i(this.COORDINATE),
      c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
      d = 0;
    return "undefined" != typeof a["page" + b] ? d = a["client" + b] : "undefined" != typeof a.originalEvent["client" + b] ? d = a.originalEvent["client" + b] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0]["client" + b] ? d = a.originalEvent.touches[0]["client" + b] : a.currentPoint && "undefined" != typeof a.currentPoint[this.COORDINATE] && (d = a.currentPoint[this.COORDINATE]), d - c
  }, j.prototype.getPositionFromValue = function(a) {
    var b, c;
    return b = (a - this.min) / (this.max - this.min), c = Number.isNaN(b) ? 0 : b * this.maxHandlePos
  }, j.prototype.getValueFromPosition = function(a) {
    var b, c;
    return b = a / (this.maxHandlePos || 1), c = this.step * Math.round(b * (this.max - this.min) / this.step) + this.min, Number(c.toFixed(this.toFixed))
  }, j.prototype.setValue = function(a) {
    a !== this.value && this.$element.val(a).trigger("input", {
      origin: this.identifier
    })
  }, j.prototype.destroy = function() {
    this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + k), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
  }, a.fn[k] = function(b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var d = a(this),
        e = d.data("plugin_" + k);
      e || d.data("plugin_" + k, e = new j(this, b)), "string" == typeof b && e[b].apply(e, c)
    })
  }
});

//custom slider javascript
var $element = $('input[type="range"]');
var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
    }
  })
  .on('input', function() {
    updateHandle($handle[0], this.value);
  });

function updateHandle(el, val) {
  el.textContent = " " + "$" + val + " ";
}

$(document).ready(function(){
  
  //when slider changes, hide start message
$("input").on("change", function() {
  $("#helper").fadeOut("slow");
});

//promo-box
$("#js-promo-box").hide();
$("#promo-link").on("click", function(){
  $("#js-promo-box").slideToggle();
  return false;
});
  
});

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}

$(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
});

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}