// Globally defined, contains the csv data in JSON (see console log)
var incomeJSON;
var propertyJSON;
var livingJSON;
var rentJSON;
var climateJSON;

// Array with county list
var countyList = [];

function parseCountyData() {
    // Papa Parse Median Income Values
    Papa.parse(incomeData,
        {
            header: true,
            dynmicTyping: true,
            complete: function (results) {
                incomeJSON = JSON.parse(JSON.stringify(results.data));
            }
        });

    // Papa Parse Median Property Values
    Papa.parse(propertyData,
        {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                propertyJSON = JSON.parse(JSON.stringify(results.data));
            }
        });

    // Papa Parse Cost of Living Values
    Papa.parse(livingData,
        {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                livingJSON = JSON.parse(JSON.stringify(results.data));
            }
        });

    // Papa Parse 50th percentile Rent Values
    Papa.parse(rentData,
        {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                rentJSON = JSON.parse(JSON.stringify(results.data));
            }
        });

    // Papa Parse 50th percentile Rent Values
    Papa.parse(climateData,
        {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                climateJSON = JSON.parse(JSON.stringify(results.data));
                console.log(climateJSON);
            }
        });

    // Push all county names into one list
    for (var key = 0; key < propertyJSON.length; key++) {
        countyList.push({
            state: propertyJSON[key].geo_name.substr(-2),
            areaName: propertyJSON[key].geo_name,
            countyName: propertyJSON[key].geo_name.slice(0, -4)
        });
    }
    console.log("county list");
    console.log(countyList);

}

function searchCounty(countyToSearch, stateToSearch) {

    var areaToSearch = countyToSearch + ", " + stateToSearch;
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
    var hu2010 = null;
    var population = null;
    var geoID = null;
    var jan = null;
    var july = null;

    // Find area name in rentJSON
    for (var key = 0; key < rentJSON.length; key++) {
        if (angular.lowercase(areaToSearch) === angular.lowercase(rentJSON[key].cntyname + ", " + rentJSON[key].state_alpha)) {
            state = rentJSON[key].state_alpha;
            areaName = rentJSON[key].cntyname + ", " + rentJSON[key].state_alpha;
            countyName = countyToSearch;
            rent1bed = rentJSON[key].rent50_1;
            rent4bed = rentJSON[key].rent50_4;

            fips2010 = rentJSON[key].fips2010;
            hu2010 = rentJSON[key].hu2010;
            population = rentJSON[key].pop2010;
        }
    }

    // match the name found in rentJSON with information in incomeJSON
    for (var key = 0; key < incomeJSON.length; key++) {
        if (areaName === incomeJSON[key].Area_name || countyName === incomeJSON[key].Area_name) {
            medianHHIncome = incomeJSON[key].Median_Household_Income_2016;

            fipsTxt = incomeJSON[key].FIPStxt;
        }
    }

    // match the name found in the rentJSON with the information in propertyJSON
    for (var key = 0; key < propertyJSON.length; key++) {
        if (areaName === propertyJSON[key].geo_name) {
            medianProperty = propertyJSON[key].Median_Property_Value_2016;

            geoID = propertyJSON[key].geo_id;
        }
    }

    // Loop through states in living JSON until current state is found
    for (var key in livingJSON) {
        if (livingJSON[key].State === state) {
            costOfLiving = livingJSON[key].Index;
            costOfGroceries = livingJSON[key].Grocery;
        }
    }

    // match the name found in the climateJSON with the information in propertyJSON
    for (var key = 0; key < climateJSON.length; key++) {
        if (countyToSearch === (climateJSON[key].county + ' County') && stateToSearch === climateJSON[key].state) {
            jan = climateJSON[key].Jan;
            july = climateJSON[key].July;
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
        july: july
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