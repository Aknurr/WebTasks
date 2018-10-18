var buttons = document.querySelectorAll("#tasks button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', f);
}
function f() {
	this.parentNode.setAttribute("data-status", "done");
}