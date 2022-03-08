



$(document).ready(function () {
//smooth scrolling
$("a").on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hasg;

        //using jquery animate method
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        })
    }
});

});
