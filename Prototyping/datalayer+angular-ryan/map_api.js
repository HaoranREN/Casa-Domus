var infoWindow = new google.maps.InfoWindow();

//This funcion is currently a test bed for putting data on features
function printNamesToConsole(map){
	console.log("Before");
	map.data.forEach(function(feature){
		feature.setProperty("test",8080);
		var thing = feature.getId();
		if(thing != null){
		  console.log(feature.getProperty("test"));
		}
		else{
		  console.log("BAD");
		}
	});
	console.log("After");
}

function printLargestArea(map){
	var largest;

	map.data.forEach(function(feature){
		var size = feature.getProperty("ALAND");
		if(!largest){
			largest = feature;
		}else{
			if(size > largest.getProperty("ALAND")){
				largest = feature;
			}
		}
	});
	console.log("Largest County: " + largest.getProperty("NAME"));
	console.log("Size: " + largest.getProperty("ALAND"));
}

function initializeMap(divName) {

  //get the html and set style where the map will be
  var mapDiv = document.getElementById(divName);
  mapDiv.style.width = '100%';
  mapDiv.style.height = '100%';
      
  //Make a map and set some variables for it
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.85873841173884, -95.87495593749996),
    zoom: 5,
        disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  //load shape data into map and identify each feature (county) of the map by their AFFGEOID
  map.data.loadGeoJson('county_shapes_lower_48.json',{idPropertyName: "AFFGEOID"}, function() {
    map.data.addListener('click',function(event){
      var countyName = event.feature.getProperty("NAME");
      
      infoWindow.setPosition(event.latLng);
      infoWindow.setContent("<h1>"+countyName+"</h1>");
      infoWindow.open(map);
    });
  });
  return map;
}

function colorLerp(t){
  var startColor = 0; //hsv works on a circle, so we start at degree 10
  var endColor = 260; //end at degree 350

  return endColor*t + startColor*(1-t);
}

function setGradientColors(map,results){
	var size_of_array = 3220;
	for (var i=0; i < results.length; i++){
		//TODO make sure this is right
		var feature = map.data.getFeatureById(results[i]["geoID"]);
		if(feature){
			feature.setProperty("gradient",1-(i/size_of_array));
		}
	}
}

function getColorOfFeature(feature){
	var gradient = feature.getProperty("gradient");
	if(gradient){
	  var col = colorLerp(gradient);
	  return "hsl(" + col + ",100%,50%)";
	} else {
	  return "hsl(0,0%,0%)";
	}
}



function applyGradient(map){
	map.data.setStyle(function(feature){
	  var col = getColorOfFeature(feature);
	  return { fillColor: col,  strokeWeight: 1, fillOpacity: 1};
	});
}
