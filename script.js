//your JS code here. If required.
const panels = document.getElementsByClassName("panel"); // html collection []

let curr = 0;
for(let i=0 ; i< panels.length ; i++){
	panels[i].addEventListener("click" , function(e){
		console.log(curr);
		if(curr > -1 ){ panels[curr].classList.remove("active");
		}
		panels[i].classList.add("active");
		curr = i;
	} );
}