function loadJSON(file, callback) {   

   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', file, true);
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           callback(xobj.responseText);
         }
   };
   xobj.send(null);  
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
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  
  //map.data.loadGeoJson('google.json');
  
  try{
    var rawJson = loadJson(
    var geojson = JSON.parse(google)
    map.data.addGeoJson('google.json');
  }
  catch(error){
    alert(error);
  }


  /*
  layer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "col4",
      from: "1xdysxZ94uUFIit9eXmnw1fYc6VcQiXhceFd_CVKa",
      where: ""
    },
    options: {
      styleId: 307,
      templateId: 340
    }
  });
  */
      //debug to get center of map after dragging
  //map.addListener('dragend',function() {alert('Lat: ' + map.getCenter().lat() + '\nLng: ' + map.getCenter().lng());});
}

google.maps.event.addDomListener(window, 'load', initializeMap);
