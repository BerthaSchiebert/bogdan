$(document).ready(function(){
	var header = new Headhesive('.header');

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});
});

function toggleCP() {
	var cp = document.getElementById("cp");
	cp.style.height = window.innerHeight - 0+"px";
	if(cp.style.left == "0px"){
		cp.style.left = "-220px";
	} else {
		cp.style.left = "0px";
	}
}