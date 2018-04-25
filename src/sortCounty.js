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
        // insert county with distance if it has a distance (mostly all counties do)
        if (!Number.isNaN(dist) && dist != 0) {
            userResults.push({
                state: countyList[key].state,
                areaName: countyList[key].areaName,
                countyName: countyList[key].countyName,
                distance: dist,
                medianProperty: county.medianProperty,
                costOfLiving: county.costOfLiving,
                medianHHIncome: county.medianHHIncome,
                rent1Bed: county.rent1bed,
                isNull: false
            });
        }

        // for the few counties that didn't get a distance, insert them but with a null distance
        else {
            console.log(countyList[key]);
            userResults.push({
                state: countyList[key].state,
                areaName: countyList[key].areaName,
                countyName: countyList[key].countyName,
                distance: 999999999,
                medianProperty: county.medianProperty,
                costOfLiving: county.costOfLiving,
                medianHHIncome: county.medianHHIncome,
                rent1Bed: county.rent1bed,
                isNull: true
            });
        }
    }
    // Sort counties by distance
    userResults.sort(sortByProperty('distance'));

    return userResults;
}