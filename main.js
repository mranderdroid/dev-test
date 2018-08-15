var data='';
  var image_1 = document.getElementById('image-1');
  var title_1 = document.getElementById('title-1');
  var desc_1 = document.getElementById('desc-1');

  var image_2 = document.getElementById('image-2');
  var title_2 = document.getElementById('title-2');
  var desc_2 = document.getElementById('desc-2');

  var image_3 = document.getElementById('image-3');
  var title_3 = document.getElementById('title-3');
  var desc_3 = document.getElementById('desc-3');

  $.ajax({
  url: 'https://api.myjson.com/bins/17ocpi',
  data: data,
  type: 'GET'
}).done(function(response) {
    console.log(response.slide_1);
    var primer_slider_info = response.slide_1;
    var segundo_slider_info = response.slide_2;
    var tercer_slider_info = response.slide_3;

    $(image_1).attr('src',primer_slider_info.image);
    title_1.innerHTML = primer_slider_info.title;
    desc_1.innerHTML = primer_slider_info.text;

    $(image_2).attr('src',segundo_slider_info.image);
    title_2.innerHTML = segundo_slider_info.title;
    desc_2.innerHTML = segundo_slider_info.text;

    $(image_3).attr('src',tercer_slider_info.image);
    title_3.innerHTML = tercer_slider_info.title;
    desc_3.innerHTML = tercer_slider_info.text;
  });

$('.pregunta_sel').change(function(event){
  event.preventDefault();
  pregunta_sel = document.getElementsByClassName('pregunta_sel');
  var length = pregunta_sel.length;
  var counter = 0;
  var falses = 0;
  var start_quest = '%cQuestion Change... :';
  var answer = 'YES';
  while(counter < length){
    if (pregunta_sel[counter].value == 'NO') {falses++;}
    counter++;
  }
  if (falses == length) {answer = 'NO'}
    console.log(start_quest+answer,'background:#5e2697; color:white; font-size:45px; padding: 15px');
});

function onScrollInit( items, trigger ) {
        items.each( function() {
            var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');
            osElement.css({
              '-webkit-animation-delay':  osAnimationDelay,
              '-moz-animation-delay':     osAnimationDelay,
              'animation-delay':          osAnimationDelay
            });
            var osTrigger = ( trigger ) ? trigger : osElement;
            osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
              },{
                  triggerOnce: true,
                  offset: '90%'
            });
        });
    }
onScrollInit( $('.os-animation') );
var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);