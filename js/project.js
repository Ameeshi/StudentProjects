function loadProject() {
	var url = window.location.href;
	var bits = url.split("/");
	var code = bits[bits.length - 1].split(".")[0];
	console.log(url);
	console.log(bits);
	console.log(code);

	var s = bits[bits.length-2].replace("s", "spring").replace("f", "fall");
	var proj = projectlist[s][code];
	console.log(s);
	console.log(proj);

	var target = document.getElementsByClassName("project-name")[0];
	console.log(target);
	target.innerHTML = proj["name"];

	target = document.getElementsByClassName("photo")[0];
	target.src = "../" + proj["image"];

	
	target = document.getElementsByClassName("project-team")[0];
	console.log(proj["team"]);

	if (peoplelist[proj["team"][0]] != undefined){
			target.innerHTML = "";
		}

	for (member in proj["team"]) {
		var person = peoplelist[proj["team"][member]];
		console.log(person);
		console.log(member);
		var wrapper = document.createElement("div");
 		wrapper.className = "person col-xs-3";
 		
 		var panel = document.createElement("a");
 		var pic = document.createElement("img");
 		pic.className = "img-circle";
 		pic.src = person["image"];
 		if(person["image"] === "../images/circle.png") {
 			pic.src = pic.src.replace("circle", "circle"+((member + 1)%3));
 		}
 		panel.href = "../people/" + person["code"] + ".html";
 		panel.appendChild(pic);

 		var desc = document.createElement("p");
 		desc.innerHTML = person["name"];

 		panel.appendChild(desc);

 		wrapper.appendChild(panel);
 		target.appendChild(wrapper);

 		if(person != undefined) {
 			//target.innerHTML = "";
 		}
	}
}

loadProject();