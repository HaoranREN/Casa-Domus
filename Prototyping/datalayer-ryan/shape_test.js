function printNamesToConsole(map){
	console.log("Before");
	map.data.forEach(function(feature){
		console.log(feature.getProperty("Name"));
	});
	console.log("After");
}

function initializeMap() {

  var mapDiv = document.getElementById('googft-mapCanvas');
  mapDiv.style.width = '100%';
  mapDiv.style.height = '100%';
      
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.85873841173884, -95.87495593749996),
    zoom: 5,
        disableDefaultUI: true,
        maxZoom: 6,
        minZoom: 5,
	draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  
  map.data.loadGeoJson('geojsondata_v1.json');
  return map;
  //debug to get center of map when drag finishes
  //map.addListener('dragend',function() {alert('Lat: ' + map.getCenter().lat() + '\nLng: ' + map.getCenter().lng());});
}

google.maps.event.addDomListener(window, 'load',function(){
	var map = initializeMap();
	setTimeout(function () {printNamesToConsole(map)},2000);
	map.data.setStyle(function (feature) { return {fillColor: randomColor(),
						       strokeWeight: 1}; })
	});


