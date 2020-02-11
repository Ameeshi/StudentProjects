console.log("hello world!");

document.write("peoplelist = { <br>");

for (sem in projectlist) {
	for (proj in  projectlist[sem]) {
		for (teammem in projectlist[sem][proj].team) {
			var code = projectlist[sem][proj].team[teammem];
			console.log(code);

			document.write('"' + code + '" : {<br>');

			// Writes code
			document.write('"code":"'+ code + '",<br>')
			

			var name = code.split('-');
			var lname = name.split(',');
			console.log(lname);

			// Writes name
			document.write('"name":"');
			for (var i = 0; i < lname.length; i++) {

				document.write(lname[i].charAt(0).toUpperCase() + lname[i].slice(1));
				if (i < lname.length - 1) {
					document.write(" ");
				}
			}
			document.write('",<br>');

			//Writes image
			document.write('"image":"../images/circle.png",<br>');

			// Writes project code
			document.write('"project-code":"'+ projectlist[sem][proj].code + '",<br>');

			//Writes semester
			document.write('"semester":"'+ projectlist[sem][proj].semester + '",<br>');

			// Writes team
			document.write('"team-codes": [');
			for (partner in projectlist[sem][proj].team) {
				var part = projectlist[sem][proj].team[partner];
				if (part != code ) {
					document.write('"' + part + '", ' );
				}
			}
			document.write(']<br>');


			document.write('},<br><br>');
		}
	}
}

document.write("}");