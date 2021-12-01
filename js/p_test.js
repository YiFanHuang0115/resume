$(document).ready(function(){
    $('.timeline2 p').hide();
        $("li:nth-child(1)").click(function(event){
            $('#dialog_1').dialog({width: 375});
        });
        $("li:nth-child(2)").click(function(event){
            $('#dialog_2').dialog({width: 375});
        });
        $("li:nth-child(3)").click(function(event){
            $('#dialog_3').dialog({width: 375});
        });
        $("li:nth-child(4)").click(function(event){
            $('#dialog_4').dialog({width: 375});
            });
    })

