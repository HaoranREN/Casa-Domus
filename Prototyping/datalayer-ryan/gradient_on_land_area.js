
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

function initializeMap() {

  //get the html and set style where the map will be
  var mapDiv = document.getElementById('googft-mapCanvas');
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
  map.data.loadGeoJson('county_shapes_fixed.json',{idPropertyName: "AFFGEOID"});
  return map;
}

function colorLerp(t){
  var startColor = 10;
  var endColor = 350;

  return startColor*t + endColor*(1-t);
}

function setGradientColors(map){
	var MAX_SIZE = 377030936019; //size in area of Yukon-Koyukuk census area
	map.data.forEach(function (feature){
		var countySize = feature.getProperty("ALAND");
		feature.setProperty("gradient",countySize/MAX_SIZE);
	});
}

function getColorOfFeature(feature){
	var col = colorLerp(feature.getProperty("gradient"));
	return "hsl(" + col + ",50%,50%)";
}

//ACTUAL CODE STARTS EXECUTING HERE
google.maps.event.addDomListener(window, 'load',function(){
	//get our map
	var map = initializeMap();

	//This timeout is to wait for the map to actually load, this is a hack until I find out
	// how to send a call back function when initializing the map
	
	setTimeout(function () {
		setGradientColors(map);
		map.data.setStyle(function (feature) { 
		  var col = getColorOfFeature(feature);
		  return {fillColor: col, strokeWeight: 1, fillOpacity: 1.0}; });
		},2000);
});
	


