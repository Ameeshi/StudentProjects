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

 function LoadAllProjectsPage() {
 	displayedProjects = [];

 	for (sem in allproj) {
 		var temp = ParseSemester(allproj[sem]);
 		for (name in temp) {
 			displayedProjects.push (temp[name]);
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

 		console.log(displayedProjects[i])

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
	console.log(target);
}

LoadPage();
