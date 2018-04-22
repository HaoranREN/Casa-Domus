/*
    File: script.js
    Description: Main scripting file for CasaDomus
*/

//------------------------globals start------------------------
var COUNTY_INFO_FILEPATH = "file:///C:/Users/zerof/Documents/Coding%20Projects/Websites/Casa-Domus/src/County_Information.txt"
//-------------------------globals end-------------------------

/*
    Class
    Name: County
    Author: Elia Deppe
    Creation Date: 4/18/2018
    Description: The County class holds the information that is relevant to
        this project for a county.
    Variables:
        string name: Name of the county. Initialized to 0.
        string state: State the county resides in. Initialized to 0.
        
        int FIPS: FIPS number of the county. Initialized to 0.
        
        double[] coordinates: Central coordinates of the county. Initialized to 
            [0, 0].
            
        int medianProperty: Median property value in that area. Initialized to 
            0.
        int medianRent: Median cost of rent in that area. Initialized to null.
        
        int medianIncome: Median Household Income for that county. Initialized 
            to 0.
        
        double coli: Cost of Living Index. Initialized to 0.
        
        int summerAverage: Average summer temperature (Fahrenheit). Initialized 
            to 0.
        int winterAverage: Average winter temperature (Fahrenheit). Initialized 
            to 0.
            
        double offset: How far off this particular county is from the users
            choice. Initialized to 0.
    Changes:
        Elia Deppe - 4/19/2018: added variable offset along with getters and
            setters
        Elia Deppe - 4/21/2018: added variable FIPS along with getters and
            setters. Changed initializations to emptpy strings/0s
*/

class County {
    constructor() {
        this.name = "";
        this.state = "";
        this.FIPS = 0;
        
        this.coordinates = [0, 0];
    
        this.medianProperty = 0;
        this.medianRent = 0;

        this.medianIncome = 0;
        
        this.coli = 0;
        
        this.summerAverage = 0;
        this.winterAverage = 0;
        
        this.offset = 0;
    }
    
    //----------------------setter methods----------------------
    //standard
    set name(value) {
        this.name = value;
    }
    
    set state(value) {
        this.state = value;
    }
    
    set FIPS(value) {
        this.FIPS = value;
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
    
    get FIPS() {
        return this.FIPS;
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

/*var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}*/


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
    let txtFile = new File("County_Information.txt", 'r');
    let eof = false;
    txtFile.open("r");
    while(!eof) {
        str = txtFile.readln();
        console.log(str);
        //ParseCountyInformation(str);
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
    let switchCount = 0;
    var i;
    var string;
    for(i = 0; i < line.length; i++) {
        if(line[i] == " ") {
            switchCount++;
        }
        else {
            if(switchCount == 1) {
                i = i;
            }
            
            else if(switchCount == 2) {
                i = i;
            }
            
            else if(switchCount == 3) {
                i = i;
            }
            
            else if(switchCount == 4) {
                i = i;
            }
            
            else if(switchCount == 5) {
                i = i;
            }
        }
    }
    
    
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

function myFunction() {
        window.location.href = "survey.html";
        function2();
        console.log("hi");
    }
    
function function2() {
    var rawfile = new XMLHttpRequest();
    rawfile.open("GET", COUNTY_INFO_FILEPATH, false);
    rawfile.onreadystatechange = function() {
        if(rawfile.readyState === 4) {
            if(rawfile.status === 200 || rawfile.status == 0) {
                var allText = rawfile.responseText;
                console.log(allText);
            }
        }
    }
    rawfile.send(null);
}