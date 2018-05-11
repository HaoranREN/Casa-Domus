// Globally defined, contains the csv data in JSON (see console log)
var everythingJSON;

// Array with county list
var countyList = [];

function parseCountyData() {
    // Papa Parse Median Income Values
    Papa.parse(everythingData,
        {
            header: true,
            dynmicTyping: true,
            complete: function (results) {
                everythingJSON = JSON.parse(JSON.stringify(results.data));
                console.log(everythingJSON)
            }
        });


    // Push all county names into one list
    for (var key = 0; key < everythingJSON.length; key++) {
        countyList.push({
            state: everythingJSON[key].state,
            areaName: everythingJSON[key].areaName,
            countyName: everythingJSON[key].countyName,
            geoID: everythingJSON[key].geoID
        });
    }
    console.log(countyList)

}

function searchCounty(countyToSearch) {

    var resultsJSON;

    // Reset Variables
    var state = null;
    var countyName = null;
    var areaName = null;
    var medianHHIncome = null;
    var medianProperty = null;
    var propName = null;
    var rent1bed = null;
    var rent4bed = null;
    var costOfLiving = null;
    var costOfGroceries = null;
    var fips2010 = null;
    var fipsTxt = null;
    var hu2010 = null;
    var population = null;
    var geoID = null;
    var jan = null;
    var july = null;
    var lat = null;
    var long = null;

    // Find area name in rentJSON
    for (var key = 0; key < everythingJSON.length; key++) {
        if (countyToSearch === everythingJSON[key].geoID) {
            state = everythingJSON[key].state;
            countyName = everythingJSON[key].countyName;
            areaName = everythingJSON[key].areaName;
            medianHHIncome = everythingJSON[key].medianHHIncome;
            medianProperty = everythingJSON[key].medianProperty;
            propName = everythingJSON[key].propName;
            rent1bed = everythingJSON[key].rent1Bed;
            rent4bed = everythingJSON[key].rent4bed;
            costOfLiving = everythingJSON[key].costOfLiving;
            costOfGroceries = everythingJSON[key].costOfGroceries;
            fips2010 = everythingJSON[key].fips2010;
            fipsTxt = everythingJSON[key].fipsTxt;
            hu2010 = everythingJSON[key].hu2010;
            population = everythingJSON[key].population;
            geoID = everythingJSON[key].geoID;
            jan = everythingJSON[key].jan;
            july = everythingJSON[key].july;
            lat = everythingJSON[key].lat;
            long = everythingJSON[key].long;
            break;
        }
    }

    resultsJSON = {
        state: state,
        countyName: countyName,
        areaName: areaName,
        medianHHIncome: medianHHIncome,
        medianProperty: medianProperty,
        rent1bed: rent1bed,
        rent4bed: rent4bed,
        costOfLiving: costOfLiving,
        costOfGroceries: costOfGroceries,
        population: population,
        hu2010: hu2010,
        geoID: geoID,
        fips2010: fips2010,
        fipsTxt: fipsTxt,
        jan: jan,
        july: july,
        lat: lat,
        long: long
    };

    return resultsJSON;
}

// From https://davidsimpson.me/2014/05/22/how-to-sort-an-array-of-json-arrays/
// Sorts a JSON array by a property
var sortByProperty = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
};