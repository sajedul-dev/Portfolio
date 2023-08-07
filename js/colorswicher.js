$(function(){
    $('#blueviolet').click(blueviolet);
    $('#red').click(red);
    $('#yellow').click(yellow);
    
    function blueviolet() {
        $('body').attr('class', 'blueviolet');
    }
    function red() {
        $('body').attr('class', 'red');
    }
    function yellow() {
        $('body').attr('class', 'yellow');
    }
    
})