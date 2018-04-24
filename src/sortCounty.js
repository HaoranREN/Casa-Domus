var calculateDistance = function (userIncome, userProperty, userLiving, userRent) {
    // contains candidate county to compare against
    var county = null;
    var userResults = [];

    // Loop through all counties and calculate distances
    for (var key = 0; key < countyList.length; key++) {
        countyToSearch = countyList[key].countyName;
        stateToSearch = countyList[key].state;
        var county = searchCounty(countyToSearch, stateToSearch);
        var dist = 0;

        // Only calculate the distance of those counties that have these values
        if ((county.medianProperty) &&
            (county.costOfLiving) &&
            (county.medianHHIncome) &&
            (county.rent1bed)) {
            var dist = Math.hypot((county.medianProperty - userProperty),
                (county.costOfLiving - userLiving),
                (county.medianHHIncome - userIncome),
                (county.rent1bed - userRent)
            );
        }
        // only insert if the distance exists
        if (!Number.isNaN(dist) && dist != 0) {
            userResults.push({
                state: rentJSON[key].state_alpha,
                areaName: rentJSON[key].cntyname + ", " + rentJSON[key].state_alpha,
                countyName: rentJSON[key].cntyname,
                distance: dist,
                medianProperty: county.medianProperty,
                costOfLiving: county.costOfLiving,
                medianHHIncome: county.medianHHIncome,
                rent1Bed: county.rent1bed
            });
        }
    }
    // Sort counties byt distance
    userResults.sort(sortByProperty('distance'));

    return userResults;
}