$(document).foundation()

$(".toggle-height").on("click", function(e){
    var $btn = $(this);
    var $target = $($btn.data("target"));
    var initial_height = $target.data('height');

    var isCollapsed = $target.hasClass('collapsed');

    if(!isCollapsed){
        $target.animate({
            height: initial_height + 'px'
        }, 500, 'swing', function(){
            $(this).height(initial_height);
        });
        $target.addClass('collapsed')
        $btn.text('Read More');
    }else{
        $target.animate({
            height: $target.get(0).scrollHeight
        }, 500, 'swing', function(){
            $(this).height('auto');
        });
        $target.removeClass('collapsed')
        $btn.text('Close');
    }
});

$("#contact-me")
.on("submit", function(ev) {
    ev.preventDefault();
})
.on("formvalid.zf.abide", function(ev,frm) {
    Email.send({
        SecureToken : "3e74572e-c6fa-433f-a8c8-1dfaa88adfb5",
        To : 'orenl2007@gmail.com',
        From : "orenl2007@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
});

