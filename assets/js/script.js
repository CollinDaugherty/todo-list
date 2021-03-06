// Check off todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click X to delete todo
$("ul").on("click", ".delete", function(event) {
  $(this).parent().fadeOut(250, function(){
    $(this).remove();
  });
  event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
  if (event.which === 13){
    //grab new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li class='incomplete'> " + todoText + "<span class='delete'><i class='fa fa-trash'></i></span></li>")
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle()
});