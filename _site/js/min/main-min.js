function openModal(){document.getElementById("myModal").style.display="block"}function closeModal(){document.getElementById("myModal").style.display="none"}function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,l=document.getElementsByClassName("mySlides"),t=document.getElementsByClassName("demo"),d=document.getElementById("caption");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),n=0;n<l.length;n++)l[n].style.display="none";for(n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");l[slideIndex-1].style.display="block",t[slideIndex-1].className+=" active",d.innerHTML=t[slideIndex-1].alt}jQuery(document).ready(function($){$(document).ready(function(){$("#menu").click(function(e){e.stopPropagation(),$("#main_nav").toggleClass("active")}),$(document).click(function(){$("#main_nav").removeClass("active")})})}),jQuery(document).ready(function($){$(document).ready(function(){$("#menu").click(function(e){e.stopPropagation(),$("#menu").toggleClass("active")}),$(document).click(function(){$("#menu").removeClass("active")})})});var slideIndex=1;showSlides(slideIndex);