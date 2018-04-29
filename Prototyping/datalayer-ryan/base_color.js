
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

//ACTUAL CODE STARTS EXECUTING HERE

google.maps.event.addDomListener(window, 'load',function(){
	//get our map
	var map = initializeMap();

	//This timeout is to wait for the map to actually load, this is a hack until I find out
	// how to send a call back function when initializing the map
	//setTimeout(function () {printNamesToConsole(map)},2000);
	var col = "hsl(200.5,50%,50%)";
	//set the color of each feature (county), randomly
	map.data.setStyle(function (feature) { return {fillColor: col,
						       strokeWeight: 1,
						       fillOpacity: 1.0}; })
	});


