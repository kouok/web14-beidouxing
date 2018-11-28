var but=document.getElementById('but');
var top_ul=document.getElementsByClassName('top_ul')[0];
var top_li=document.getElementsByClassName('top_ul')[0].getElementsByTagName("li");

but.onclick=function(){
	// console.log("111");
	if(top_ul.style.display=='none'){
		top_ul.style.display='block'
	}else{
		top_ul.style.display='none'
	}
}


for (var i=0;i<top_li.length;i++){
	top_li[i].onclick=function(){
		for(var x=0;x<top_li.length;x++){
			top_li[x].style.background="#fff"
		}
		this.style.background='#183884';
		this.style.color='red';
	}	
}




