// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	if(($(this).hasClass(""))){	
	$(this).toggleClass("pending");
	}
	else if(( $(this).hasClass("listt"))){
	 $(this).removeClass('listt').addClass('pending');

	}
	else if($(this).hasClass("pending"))	{	
	$(this).removeClass('pending').addClass('completed');
}
	else if($(this).hasClass("completed"))	{	
	$(this).removeClass('pending').addClass('listt');
}
	
	
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$(".first").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".first").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".second").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".second").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".third").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".third").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fourth").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$(".fourth").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});