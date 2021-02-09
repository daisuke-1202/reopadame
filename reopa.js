var pos = 300;
$(function(){
    setInterval(function(){
        var random = Math.floor(Math.random()*4);
        if(random == 0){
            pos = pos + 20;
            $("#reopa").animate({left:pos});
        }
        if(random == 1){
            pos = pos - 20;
            $("#reopa").animate({left:pos});
        }
        if(random == 2){
            pos = pos + 20;
            $("#reopa").animate({top:pos});
        }
        if(random == 3){
            pos = pos - 20;
            $("#reopa").animate({top:pos});
        }
    },500);
});