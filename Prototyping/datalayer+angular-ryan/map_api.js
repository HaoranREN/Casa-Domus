var infoWindow = new google.maps.InfoWindow();

function addInfoWindows(map){
  map.data.addListener('click',function(event){
    
    //we collect feature data here so we could technically pass in user results and display them here as well, would need to compare with GeoId again.
    var countyName = event.feature.getProperty("NAME");
    
    //Set the position of the window on the map
    infoWindow.setPosition(event.latLng);
    
    //set the html of the window TODO: needs to be fixed
    infoWindow.setContent("<h1>"+countyName+"</h1>");

    //open's the window on the map
    infoWindow.open(map);
  });
}

function initializeMap(divName, userResults = null) {

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
  map.data.loadGeoJson('county_shapes_lower_48.json',{idPropertyName: "AFFGEOID"}, function(){
    addInfoWindows(map);
    if(userResults){
      setGradientColors(map,results);
      applyGradient(map);
    }
  });
  
  return map;
}


//Simple linear interpolation of hue value of hsv
//t = 1 -> endColor
//t = 0 -> startColor
function colorLerp(t){
  var startColor = 0;
  var endColor = 260;

  return endColor*t + startColor*(1-t);
}


//Collects each feature (county) and sets a property in it called gradient
//Sets the gradient by the position in the array
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

//Returns the proper hsv string needed by CSS3 to give color to feature (county)
function getColorOfFeature(feature){
	var gradient = feature.getProperty("gradient");
	if(gradient){
	  var col = colorLerp(gradient);
	  return "hsl(" + col + ",100%,50%)";
	} else {
	  return "hsl(0,0%,0%)";
	}
}


//Applys the gradients of each county to the map
function applyGradient(map){
	map.data.setStyle(function(feature){
	  var col = getColorOfFeature(feature);
	  return { fillColor: col,  strokeWeight: 1, fillOpacity: 1};
	});
}
