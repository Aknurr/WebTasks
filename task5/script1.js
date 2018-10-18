var s11,s12,s13,s21,s22,s23,s31,s32,s33,determinant;


function finddeterminant(){
	s11 = document.getElementById("s11").value;
	s12 = document.getElementById("s12").value;
	s13 = document.getElementById("s13").value;
	s21 = document.getElementById("s21").value;
	s22 = document.getElementById("s22").value;
	s23 = document.getElementById("s23").value;
	s31 = document.getElementById("s31").value;
	s32 = document.getElementById("s32").value;
	s33 = document.getElementById("s33").value;
	determinant = (s11*(s22*s33-s23*s32)-s12*(s21*s33-s23*s31)+s13*(s21*s32-s22*s31));
	document.getElementById("result").innerHTML = determinant;
}

document.querySelector("#determinant").addEventListener('click',finddeterminant)


