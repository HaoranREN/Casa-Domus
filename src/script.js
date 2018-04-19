/*
    File: script.js
    Description: Main scripting file for CasaDomus
*/

//------------------------globals start------------------------
var COUNTY_INFO_FILEPATH = "./resources/County_Information.txt"
//-------------------------globals end-------------------------

/*
    Class
    Name: County
    Author: Elia Deppe
    Creation Date: 4/18/2018
    Description: The County class holds the information that is relevant to
        this project for a county.
    Variables:
        string name: Name of the county. Initialized to null.
        string state: State the county resides in. Initialized to null.
        double[] coordinates: Central coordinates of the county. Initialized to 
            [null, null].
            
        int medianProperty: Median property value in that area. Initialized to 
            null.
        int medianRent: Median cost of rent in that area. Initialized to null.
        
        int medianIncome: Median Household Income for that county. Initialized 
            to null.
        
        double coli: Cost of Living Index. Initialized to null.
        
        int summerAverage: Average summer temperature (Fahrenheit). Initialized 
            to null.
        int winterAverage: Average winter temperature (Fahrenheit). Initialized 
            to null.
            
        double offset: How far off this particular county is from the users
            choice. Initialized to null.
    Changes:
        Elia Deppe - 4/19/2018: added variable offset along with getters and
            setters
*/

class County {
    constructor() {
        this.name = null;
        this.state = null;
        this.coordinates = [null, null];
    
        this.medianProperty = null;
        this.medianRent = null;

        this.medianIncome = null;
        
        this.coli = null;
        
        this.summerAverage = null;
        this.winterAverage = null;
        
        this.offset = null;
    }
    
    //----------------------setter methods----------------------
    //standard
    set name(value) {
        this.name = value;
    }
    
    set state(value) {
        this.state = value;
    }
    
    set coordinates(value) {
        this.coordinates[0] = value[0];
        this.coordinates[1] = value[1];
    }
    
    set medianProperty(value) {
        this.medianProperty = value;
    }
    
    set medianRent(value) {
        this.medianRent = value;
    }
    
    set medianIncome(value) {
        this.medianIncome = value;
    }
    
    set coli(value) {
        this.coli = value;
    }
    
    set summerAverage(value) {
        this.summerAverage = value;
    }
    
    set winterAverage(value) {
        this.winterAverage = value;
    }
    
    set offset(value) {
        this.offset = value;
    }
    
    //extended
    setID(nameValue, stateValue, coordinatesValue) {
        this.name = nameValue;
        this.state = stateValue;
        this.coordinates[0] = coordinatesValue[0];
        this.coordinates[1] = coordinatesValue[1];
    }
    //--------------------end setter methods--------------------
    
    //----------------------getter methods----------------------
    get name() {
        return this.name;
    }
    
    get state() {
        return this.state;
    }
    
    get coordinates() {
        return this.coordinates;
    }
    
    get medianProperty() {
        return this.medianProperty;
    }
    
    get medianRent() {
        return this.medianRent;
    }
    
    get medianIncome() {
        return this.medianIncome;
    }
    
    get coli() {
        return this.coli;
    }
    
    get summerAverage() {
        return this.summerAverage;
    }
    
    get winterAverage() {
        return this.winterAverage;
    }
    
    get offset() {
        return this.offset;
    }
    //--------------------end getter methods--------------------
}

var countyList = new Array();

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}


//-------------------start read file functions--------------------
/*
    Function
    Name: ReadCountyInformation
    Author(s): Elia Deppe
    Date: 4/18/2018
    Description: Reads from County_Information.txt and stores the counties into
        countyList.
    Sources:
        - https://gist.github.com/Arahnoid/9925725
*/
function ReadCountyInformation() {
    let str = "";
    let txtFile = new File(COUNTY_INFO_FILEPATH);
    let eof = false;
    txtFile.open("r");
    while(!eof) {
        str = txtFile.readln();
        if(str[0] == "#") {
            eof = true;
        }
        else {
            ParseCountyInformation(str);
        }
    }
}

/*
    Function
    Name: ParseCountyInformation
    Author(s): Elia Deppe
    Date: 4/18/2018
    Parameters:
        - String line: Line read from the file.
    Description: Parses the string stored in line to retrieve the county's name,
        state, and geocentrial coordinates.
*/
function ParseCountyInformation(line) {
    var newCounty = new County();
    
}

//--------------------end read file functions--------------------


//-------------------start load html functions-------------------

/*
    Function
    Name: LoadQuestionnaire
    Author(s): Elia Deppe
    Date: 4/18/2018
    Description: Loads questionnaire.html
*/
function LoadQuestionnaire() {
    ReadCountyInformation();
    window.location.href = "questionnaire.html";
}

/*
    Function
    Name: LoadMap
    Author(s): Elia Deppe
    Date: 4/18/2016
    Description: Loads map.html
*/
function LoadMap() {
    window.location.href = "map.html";
}

//--------------------end load html functions--------------------

//Comment Templates

/*
    Class
    Name:
    Author:
    Creation Date:
    Description:
    Variables:
        <type> <name>: <description>
    Sources:
    Changes:
        - <author> <date>: <description>
*/

/*
    Function
    Name:
    Author(s):
    Date:
    Parameters:
        - <type> <name>: <description>
    Returns: <type> <name>: description>
    Description:
    Sources:
    Changes:
        - <author> <date>: <description>
*/