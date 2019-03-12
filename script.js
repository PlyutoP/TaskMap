
$(function(){
    $.getJSON('city.json', function(data) {
            for(var i=0;i<data.cities.length;i++)
            {
                $('#wrapper').append('<div class="PointCity" id="' + data.cities[i].nameCity 
                	+ '"><div class="tooltip">'+ data.cities[i].rusName  +'</div></div> ');
                $("#" + data.cities[i].nameCity).css("top", "" + data.cities[i].top)
                $("#" + data.cities[i].nameCity).css("left", "" + data.cities[i].left)

            }
    });
});

