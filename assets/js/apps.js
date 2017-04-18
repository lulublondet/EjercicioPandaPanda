
var imgs = document.querySelectorAll(".photo");

imgs.forEach(function(e){
	e.addEventListener("click", hidden);
		function hidden(){
			e.style.display="none";
		}
	})


var liRestore = document.getElementById("js-btn-restore");

liRestore.addEventListener("click", restore);

	function restore() {
 		imgs.forEach(function(e){
 			e.style.display="block";
 		})
 	}

var btOrigen = document.getElementById("js-btn-origen");
	btOrigen.addEventListener("click", hideSectionLeft)
  		function hideSectionLeft(){
  			document.getElementById("js-right-section").style.visibility = "hidden";
  		}


var btExtinsion = document.getElementById("js-btn-extinsion");
	btExtinsion.addEventListener("click", hideSectionRight)
		function hideSectionRight(){
			document.getElementById("js-left-section").style.visibility="hidden";
		}



