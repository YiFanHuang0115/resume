$(document).ready(function(){
    $('.timeline p, .timeline2 p').hide();
    $(".timeline li:nth-child(1)").click(function(event){
        $('#dialog_1').dialog({width: 640});
    });
    $(".timeline li:nth-child(2)").click(function(event){
        $('#dialog_2').dialog({width: 640});
    });
    $(".timeline li:nth-child(3)").click(function(event){
        $('#dialog_3').dialog({width: 640});
    });
    $(".timeline li:nth-child(4)").click(function(event){
        $('#dialog_4').dialog({width: 640});
    });
    $(".timeline2 li:nth-child(1)").click(function(event){
        $('#dialog_5').dialog({width: 375});
    });
    $(".timeline2 li:nth-child(2)").click(function(event){
        $('#dialog_6').dialog({width: 375});
    });
    $(".timeline2 li:nth-child(3)").click(function(event){
        $('#dialog_7').dialog({width: 375});
    });
    $(".timeline2 li:nth-child(4)").click(function(event){
        $('#dialog_8').dialog({width: 375});
    });

})



const arrswitch = document.querySelector('#switch');
let classList = arrswitch.classList;
let autobiography = document.querySelector(".autobiography p");

arrswitch.addEventListener('click', function(){
    const result = classList.toggle(1);
    console.log(result);
    if(result){
        autobiography.setAttribute("class", "d-block fs-5");
        arrswitch.innerHTML = `<i class="fs-1 fas fa-chevron-circle-up"></i>`;
    } else {
        autobiography.setAttribute("class", "d-none fs-5");
        arrswitch.innerHTML = `<i class="fs-1 fas fa-chevron-circle-down"></i>`;
    }
})

