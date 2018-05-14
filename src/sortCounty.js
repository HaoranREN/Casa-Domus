// Returns the final results of the survey. It's all countied in one JSON object
// called userResults sorted by their Euclidean distance to the user
//
//   Attributes:
// - state: Abreviation of state where the county lies
// - areaName: County name and state name (eg. "Baltimore County, MD")
// - countyName: Full name of the county
// - medianProperty: The median property value of the county
// - costOfLiving: The cost of living index of the county
// - medianHHIncome: The median house hold income of the county
// - rent1Bed: The 50th percentile cost for renting a 1 bedroom unit in the county
//
//    Usage:
//
//      userResults[n].{attribute}
//
// - Where n is the index of the nth closest matched county 
//   (userResults[0] has the closest match, userResults[1] has the second closest match, etc)
// - Where {attribute} is one of the described attributes listed above
//
//    Examples:
//      userResults[0].areaName; -> County and state name of the closest matched county
//      userResults[3].medianProperty; -> Median property value of the 4th closest matched county

const MIN_PROP = 33000;
const MAX_PROP = 871500;

const MIN_LIVING = 85.1;
const MAX_LIVING = 155.7;

const MIN_INCOME = 22054;
const MAX_INCOME = 134609;

const MIN_RENT = 456;
const MAX_RENT = 2704;

const MIN_JAN = 5.7;
const MAX_JAN = 66.2;

const MIN_JULY = 60.3;
const MAX_JULY = 88.7;

var calculateDistance = function (userIncome, userProperty, userLiving, userRent, userJan, userJuly) {
    // contains candidate county to compare against
    var county = null;
    var userResults = [];

    // Loop through all counties and calculate distances
    for (var key = 0; key < countyList.length; key++) {
        countyToSearch = countyList[key].geoID;
        var county = searchCounty(countyToSearch);
        var dist = 0;

        // Only calculate the distance of those counties that have these values
        if ((county.medianProperty) &&
            (county.costOfLiving) &&
            (county.medianHHIncome) &&
            (county.rent1bed) &&
            (county.jan) &&
            (county.july)) {

            // Euclidean distance
            // var dist = Math.hypot((county.medianProperty - userProperty),
            //     (county.costOfLiving - userLiving),
            //     (county.medianHHIncome - userIncome),
            //     (county.rent1bed - userRent),
            //     (county.jan - userJan),
            //     (county.july - userJuly));

            // // Manhattan Distance
            // var dist = (
            //     Math.abs(county.medianProperty - userProperty) +
            //     Math.abs(county.costOfLiving - userLiving) +
            //     Math.abs(county.medianHHIncome - userIncome) +
            //     Math.abs(county.rent1bed - userRent) +
            //     Math.abs(county.jan - userJan) +
            //     Math.abs(county.july - userJuly)
            // );

            // Normalized Manhattan Distance
            // Normalization Process:
            //   distance component = abs(county.normData - user.normData)
            var dist = (
                Math.abs(county.normProp - ((userProperty - MIN_PROP) / (MAX_PROP - MIN_PROP))) +
                Math.abs(county.normLiving - ((userLiving - MIN_LIVING) / (MAX_LIVING - MIN_LIVING))) +
                Math.abs(county.normIncome - ((userIncome - MIN_INCOME) / (MAX_INCOME - MAX_INCOME))) +
                Math.abs(county.normRent - ((userRent - MIN_RENT) / (MAX_RENT - MIN_RENT))) +
                Math.abs(county.normJan - ((userJan - MIN_JAN) / (MAX_JAN - MIN_JAN))) +
                Math.abs(county.normJuly - ((userJuly - MIN_JULY) / (MIN_JULY - MIN_JULY)))
            );
        }

        // insert county with distance if it has a distance (mostly all counties do)
        if (!Number.isNaN(dist) && dist != 0) {
            userResults.push({
                state: county.state,
                areaName: county.areaName,
                countyName: county.countyName,
                distance: dist,
                medianProperty: county.medianProperty,
                costOfLiving: county.costOfLiving,
                medianHHIncome: county.medianHHIncome,
                rent1Bed: county.rent1bed,
                rent4bed: county.rent4bed,
                costOfGroceries: county.costOfGroceries,
                population: county.population,
                hu2010: county.hu2010,
                geoID: county.geoID,
                fips2010: county.fips2010,
                fipsTxt: county.fipsTxt,
                jan: county.jan,
                july: county.july,
                lat: county.lat,
                long: county.long
            });
        }
    }
    // Sort counties by distance
    userResults.sort(sortByProperty('distance'));

    return userResults;
}