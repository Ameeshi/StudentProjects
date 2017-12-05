/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("menu-sidenav").style.width = "250px";
    // document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("menu-sidenav").style.width = "0";
    // document.getElementById("main").style.marginRight = "0";
}


function validateForm() {
    var x = document.forms["searchbar"]["search"].value;
    if (x == "") {
        alert("Form must be filled out");
        return false;
    }
}


var displayedProjects = [];


// Create "Semester" object, which is a dictionary

function Semester(code, sem, year, path) {
	this.code = code;		// HTML address
	this.sem = sem;			// Which semester
	this.year = year;		// Which year
	this.path = path		// The related JSON object
	this.project = {};		// Empty object, which will serve as a dictionary
}

// Create "Project" object

function Project(code, name, img, team, tags, semester) {
	this.code = code;							// HTML address. Also will be used as a key
	this.name = name;							// Project name
	this.img = img;								// Image address/filename
	this.team = team;							// List of people who worked on the team. Should contain the code of people objects
	this.tags = tags;							// List of tags associated with this project
	this.sem = semester;
}

// Create "Student" object
 function Student(code, name, img, proj) {
 	this.code = code;		// HTML address
 	this.name = name;		// Student Name
 	this.img = img;			// Profile picture
 	this.proj = proj;		// Associated project code
 }




















