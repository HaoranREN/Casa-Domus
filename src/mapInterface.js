var infoWindow = new google.maps.InfoWindow();

function addInfoWindows(map,userResults=null){
  map.data.addListener('click',function(event){
    
    //we collect feature data here so we could technically pass in user results and display them here as well, would need to compare with GeoId again.
    var countyName = event.feature.getProperty("NAME");
    
    //Set the position of the window on the map
    infoWindow.setPosition(event.latLng);
    


    //set the html of the window TODO: needs to be fixed
    var featureData = null;
   
    if(userResults){
      for(var i = 0; i < userResults.length; i++){
         if (userResults[i]["geoID"] == event.feature.getId()){
           featureData = userResults[i];
           break;
         }
      }
    }
	
    if (!featureData){
      infoWindow.setContent("<h2>"+countyName+"</h2>");
    }
    else{
      infoWindow.setContent("<h2>" +countyName + "</h2><table border='1'>" +
	                      "<tr><td>Median Income</td><td>$" + parseFloat(featureData['medianHHIncome']).toFixed(2) + "</td></tr>" + 
                              "<tr><td>Median Property Value</td><td>$" + parseFloat(featureData['medianProperty']).toFixed(2) + "</td></tr>" +
                              "<tr><td>Cost of Living</td><td>" + featureData['costOfLiving'] + "</td></tr>" +
	                      "<tr><td>Rent Cost</td><td>$" + parseFloat(featureData['rent1Bed']).toFixed(2) + "</td></tr>" +
	                      "<tr><td>Winter Temperature</td><td>" + featureData['jan'] + "&deg;</td></tr>" +
	                      "<tr><td>Summer Temperature</td><td>" + featureData['july'] + "&deg;</td></tr>" + 
	                    "</table>");
    }



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
    zoom: 4,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  //load shape data into map and identify each feature (county) of the map by their AFFGEOID
  map.data.loadGeoJson('county_shapes_lower_48.json',{idPropertyName: "AFFGEOID"}, function(){
    if(userResults){
      setGradientColors(map,userResults);
      applyGradient(map);	    
      addInfoWindows(map,userResults);
    }
    else {
      addInfoWindows(map);
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
	var sizeOfArray = results.length;
	for (var i=0; i < sizeOfArray; i++){
		//TODO make sure this is right
		var feature = map.data.getFeatureById(results[i]["geoID"]);
		if(feature){
			feature.setProperty("gradient",1-(i/sizeOfArray));
		}
	}
}

//Returns the proper hsv string needed by CSS3 to give color to feature (county)
function getColorOfFeature(feature){
	var gradient = feature.getProperty("gradient");
	if(gradient){
	  var col = colorLerp(gradient);
	  return "hsl(" + col + ",100%,50%)"; //gradient with 100% saturation
	} else {
	  return "hsl(0,0%,0%)"; //black
	}
}


//Applys the gradients of each county to the map
function applyGradient(map){
	//sets style of entire map
	map.data.setStyle(function(feature){
	  var col = getColorOfFeature(feature);
	  return { fillColor: col,  strokeWeight: 1, fillOpacity: 1};
	});
}
