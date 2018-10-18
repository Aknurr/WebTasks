let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

for (let c of countries) {

	let newCountry = document.createElement("option");
	newCountry.textContent = c;
	document.querySelector("#countries").appendChild(newCountry);
}
function selectCity(){
	let c = document.querySelectorAll("#cities option");
	for(let c2 of c){
		c2.remove();
	}
	for (let c in cities_by_country){
		let coun = document.getElementById("countries").value;
		
		if(coun==c){
			for(let city of cities_by_country[coun]){
				let newCity = document.createElement("option");
				newCity.textContent = city;
				document.querySelector("#cities").appendChild(newCity);
				
			}
		}
	}

	
}

document.querySelector('#countries').addEventListener('change', selectCity);