document.getElementById("thebutton").addEventListener("click", function(e) {
	alert("GOOD JOB, YOU NAILED IT!");
	e.stopPropagation();
});