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




// Create "Semester" object, which is a dictionary

function Semester(code, sem, year) {
	this.code = code;		// HTML address
	this.sem = sem;			// Which semester
	this.year = year;		// Which year
	this.project = {};		// Empty object, which will serve as a dictionary
}

// Create "Project" object

function Project(code, name, partners, img, team, tags) {
	this.code = code;							// HTML address. Also will be used as a key
	this.name = name;							// Project name
	this.partners = partners;					// List of partners
	this.img = img;								// Image address/filename
	this.team = team;							// List of people who worked on the team. Should contain the code of people objects
	this.tags = tags;							// List of tags associated with this project
}

// Create "Student" object
 function Student(code, name, img, proj) {
 	this.code = code;		// HTML address
 	this.name = name;		// Student Name
 	this.img = img;			// Profile picture
 	this.proj = proj;		// Associated project code
 }