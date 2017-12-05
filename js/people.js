function loadPerson() {
	var url = window.location.href;
	var bits = url.split("/");
	var code = bits[bits.length - 1].split(".")[0];
	console.log(url);
	console.log(bits);
	console.log(code);

	var person = peoplelist[code];

	var target = document.getElementById("mainpicture");
	console.log(target);
	target.src = person["image"];

	target = document.getElementById("name");
	target.innerHTML = person["name"];

	target = document.getElementById("text");
	var temp = person["semester"].replace("s", "spring").replace("f", "fall");
	text.innerHTML = "Project: " + projectlist[temp][person["project-code"]]["name"] + "</br>Project Term: " + person["semester"].replace("s", "Spring ").replace("f", "Fall ");

	target = document.getElementById("teamrow");
	console.log(person["team-codes"]);

	for (member in person["team-codes"]) {
		console.log(member);
		var wrapper = document.createElement("div");
 		wrapper.className = "person col-xs-3";
 		
 		var panel = document.createElement("a");
 		var pic = document.createElement("img");
 		pic.className = "img-circle";
 		pic.src = peoplelist[person["team-codes"][member]]["image"];
 		console.log(pic.src);	
 		panel.href = peoplelist[person["team-codes"][member]]["code"] + ".html";
 		panel.appendChild(pic);

 		var desc = document.createElement("p");
 		desc.innerHTML = peoplelist[person["team-codes"][member]]["name"];

 		panel.appendChild(desc);

 		wrapper.appendChild(panel);
 		target.appendChild(wrapper);
	}
}

loadPerson();