$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
		
        if (position >= target) {
			$('#navbarNav > ul > li > a').removeClass('active'); 
            $(`#navbarNav > ul > li > a[href='#${id}']`).addClass('active');
        }
    });
});

