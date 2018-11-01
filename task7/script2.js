function onStreamProcessed(data){
	let outerDiv=documnet.querySelector("#text");
	data.forEach((student)=>{
	        let divItem=document.createElemt("div");
	        divItem.textContent=student.name+" "+student.surname;
	        outerDiv.appendChild(divItem);
	});
}
function onSucces(responce){
	    responce.json().then(OnStreamProcessed);
}
function onError(error){

}
function load(){
	fetch("result.txt").then(onSucces,onError);
}