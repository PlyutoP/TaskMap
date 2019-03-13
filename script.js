$(function(){

	addPoint();
	
	addImages('firstImg', "askold");
	addImages('secondImg', "armalit");
	addImages('thirdImg', "burevestnik");
	addImages('fourthImg', "skbk");

  	showImages('firstImg', 5000);
	showImages('secondImg', 9000);
	showImages('thirdImg', 13000);
	showImages('fourthImg', 174000);

});

 function addPoint() {
 	   $.getJSON('city.json', function(data) {
           for(var i=0;i<data.cities.length;i++)
           {
               $('#wrapper').append('<div class="PointCity" id="' + data.cities[i].nameCity 
               	+ '"><div class="tooltip">'+ data.cities[i].rusName  +'</div></div> ');
               $("#" + data.cities[i].nameCity).css("top", "" + data.cities[i].top);
  		       $("#" + data.cities[i].nameCity).css("left", "" + data.cities[i].left);
               $(".PointCity").fadeIn("slow");


            }
	});
 }
 
 function addImages(id, region){

 	var nameRegionJSONfile = region + '.json';

 	$.getJSON(nameRegionJSONfile, function(data) {
 		for(var i=0; i< data[""+region].length; i++){

			$('<img class="imgCity" src='+ data[""+region][i].title  +' id="' + i + id +'" >').appendTo($('#wrapper'));
			$('#' + i + id).css("top", "" + data[""+region][i].top);
			$('#' + i + id).css("left", "" + data[""+region][i].left);

		}
	});

}

function showImages(id, time) {
 	var i = -1;	
	setInterval(function(){
			i++;
			$('#' + i + id ).fadeIn(2000);

	}, time);

	setInterval(function(){
				$('#' + i + id).fadeOut(2000);
		
	}, 3000);
}









