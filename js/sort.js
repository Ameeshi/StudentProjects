 var displayedProjects;

 var allproj = {};
 allproj ["s17"] = new Semester("s17", "spring", "2017", "spring17");
 allproj ["s16"] = new Semester("s16", "spring", "2016", "spring16");


function LoadSemesterPage(sem) {

 	var projects = ParseSemester(sem);

 	sem.project = projects;

 	displayedProjects = [];

 	var index = 0;
 	for (proj in projects ) {
 		displayedProjects.push(proj);
 		var source = projects[proj].img;

 		var card = document.getElementById("card" + index);

 		card.childNodes[1].childNodes[0].src = projects[proj].img;
 		card.childNodes[1].childNodes[2].innerHTML = projects[proj].name;
 		card.childNodes[1].href = sem.code + "/" + projects[proj].code + ".html"
 		index++;
 	}
}

function LoadAllProjectsPage(){
 	displayedProjects.length = 0;

 	for (sem in allproj) {
 		var temp = ParseSemester(allproj[sem]);
 		var i = 0;
 		for (name in temp) {
 			displayedProjects.push (temp[name]);
 			i++;
 		}
 	}

 	var index = 0;
 	var currentRow;
 	for (; index < displayedProjects.length; index++) {
 		if (index % 3 === 0) {
 			currentRow = AddRow();
 		}
 		AddPage(currentRow, index);
 	}

 	for (var i = 0; i < displayedProjects.length; i++) {

 		// console.log(displayedProjects[i])

 		var card = document.getElementById("card" + i);
 		//console.log(card);

 		card.childNodes[0].childNodes[0].src = displayedProjects[i].img;
 		card.childNodes[0].childNodes[1].innerHTML = displayedProjects[i].name;
 		card.childNodes[0].href = sem.code + "/" + displayedProjects[i].code + ".html"
 	}

 	console.log(displayedProjects);
 	return displayedProjects;
}

function LoadSearchPage() {
	displayedProjects = [];
	var target = window.location.pathname;
	var termsAll = target.split("="); 			//Always disregard first and last index
	var terms = termsAll.split("+");

	for (sem in allproj) {
 		var temp = ParseSemester(allproj[sem]);
 		for (name in temp) {
 			var valid = false;
 			for (var i = 0; i < terms.length; i++) {   // itterating through tag list
 				for (var j = 0; j < temp[name].tags.length; j++) { // itterating through all of the tags
 					if (/temp[name].tags[j]/i.search(/terms[i]/i) != -1) {  // Case insensitive search of partial tags
 						valid = true;
 					}
 				} 
 			}
 			if (valid){
 				displayedProjects.push (temp[name]);
 			}
 		}
 	}

 	for (var i = 0; i < displayedProjects.length; i++) {

 		//console.log(displayedProjects[i])

 		var card = document.getElementById("card" + i);
 		console.log(card);

 		card.childNodes[0].childNodes[0].src = displayedProjects[i].img;
 		card.childNodes[0].childNodes[1].innerHTML = displayedProjects[i].name;
 		card.childNodes[0].href = sem.code + "/" + displayedProjects[i].code + ".html"
 	}
}

function ParseSemester(sem) {
 	var data = {};
 	var projects = {};

	$.each(projectlist[sem.path], function(key, value) {
		projects[key] = new Project(value.code, value.name,  value.image, value.team, value.tags);

	});

	return projects;
}

function AddRow() {
 	var toCreate = document.createElement("div");
 	toCreate.className = "row";

 	document.getElementById("layout").appendChild(toCreate);

 	return toCreate;
}

function AddPage (rownode, index) {
 	var wrapper = document.createElement("div");
 	wrapper.className = "col-xs-4 project-icon";
 	wrapper.id = "card" + index;

 	

 	var panel = document.createElement("a");
 	var pic = document.createElement("img");
 	pic.className = "img-circle";
 	panel.appendChild(pic);

 	var desc = document.createElement("p");
 	desc.innerHTML = "Project Name";

 	panel.appendChild(desc);

 	wrapper.appendChild(panel);
 	rownode.appendChild(wrapper);

 	return wrapper;
}

function LoadPage() {
	var target = window.location.pathname;
	if (target.includes(allproj.s17.code)) {

		 LoadSemesterPage(allproj.s17);

	}else if (target.includes(allproj.s16.code))  {

		LoadSemesterPage(allproj.s16);

	} else {
		LoadAllProjectsPage();
	}
	// console.log(target);
	return displayedProjects;
}

function SortAlphabetical() {

	sort (0, displayedProjects.length);
	// displayedProjects.sort();
	for (var i = 0; i < displayedProjects.length; i++) {

 		//console.log(displayedProjects[i])

 		var card = document.getElementById("card" + i);
 		console.log(card);

 		card.childNodes[0].childNodes[0].src = displayedProjects[i].img;
 		card.childNodes[0].childNodes[1].innerHTML = displayedProjects[i].name;
 		card.childNodes[0].href = sem.code + "/" + displayedProjects[i].code + ".html"
 	}

 	console.log(displayedProjects);
}

function merge(lower, mid, upper) {
	// console.log(displayedProjects[lower].code);
	// console.log(lower + ", " + mid + ", " + upper)
	var temp = [];
	var index = 0;
	var a = lower;
	var b = mid;
	while (a < mid && b < upper) {
		if (displayedProjects[a].name < displayedProjects[b].name) {
			temp[index] = displayedProjects[a];
			a++;
		} else {
			temp[index] = displayedProjects[b];
			b++;
		}
		index++;
	}
	while (a < mid) {
		temp[index] = displayedProjects[a];
		a++;
		index++;
	}
	while (b < upper) {
		temp[index] = displayedProjects[b];
		b++;
		index++;
	}

	index = 0;
	j = lower;
	while (j < upper) {
		displayedProjects[j] = temp [index];
		j++;
		index++;
	}
}

function sort(lower, upper) {
	// console.log(lower + ", " + upper)
	if (upper - lower <= 1) {
		return;
	}

	mid = Math.floor((upper + lower) / 2);


	sort(lower, mid);
	sort(mid, upper);
	merge(lower, mid, upper);
}

LoadPage();
