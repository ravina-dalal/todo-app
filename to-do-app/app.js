
$('#inp').keypress(function(e){
if(e.which===13){
    const todoText=$('#inp').val();
    $('#list').append(`<li><span>x</span> ${todoText}</li>`)
    $('#inp').val("");
}

});


$('ul').on('click','li',function(){
    $(this).toggleClass('complete')
});

$('#list').on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
        $(this).revome();
    })  
          e.stopPropagation();
});
$('#plus').click(function(){
$('#inp').fadeToggle();
});
