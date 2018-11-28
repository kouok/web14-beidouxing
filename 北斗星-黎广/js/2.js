
var cpx=document.getElementsByClassName("cp_top")[0].getElementsByTagName("div");
var cp1=document.getElementsByClassName("cp1")[0];
var cp2=document.getElementsByClassName("cp2")[0];
var cp3=document.getElementsByClassName("cp3")[0];

for(var i=0;i<cpx.length;i++){
	cpx[i].onclick=function(){
			
		for(var f=0;f<cpx.length;f++){
			cpx[f].classList.remove("cpx");
		}
		this.classList.add("cpx");
	}
}
