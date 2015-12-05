/*document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});*/

$("li:first").on("click", function(){
	if(!$(this).parent().hasClass("slideDown")){
		$(this).parent().addClass("slideDown");
	}else{
		$(this).parent().removeClass("slideDown");
	}

});

