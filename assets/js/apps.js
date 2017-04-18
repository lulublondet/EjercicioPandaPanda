
var imgs = document.querySelectorAll(".photo");


imgs.forEach(function(e){
	e.addEventListener("click", hidden);
		function hidden(){
			e.style.display="none";
		}
	})


var li = document.getElementById("js-btn-restore");
li.addEventListener("click", restore);

function restore() {
 imgs.forEach(function(e){
 	e.style.display="block";
 })

}






