$('#case_anchor').hover( //导航栏选符
    function(){
        $('#case_down').slideDown(200)
    },
    function(){
        $('#case_down').slideUp(200)
    }
)
$('#case_down').hover(
    function(){
        $('#case_down').slideDown()
    },
    function(){
        $('#case_down').slideUp()
    }
)
$('.prise').click(function(){ //点赞
	$(this).toggleClass('on')
})