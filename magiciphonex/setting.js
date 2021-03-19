var plane = 0;

$("div.program > div.psetting.papp > div > table > tbody > tr:nth-child(1)").click(function () {
    $(".plane").attr('style', 'visibility:visible;');


    if (plane == 0) {
        $(".plane").attr('style', 'visibility: visible;');
        plane += 1;

    } else

    {
        $(".plane").attr('style', 'visibility: hidden;');
        plane = 0;
    }


});