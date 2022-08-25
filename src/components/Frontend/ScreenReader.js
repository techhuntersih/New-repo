import React from "react";
import $ from "jquery";
function Sr(){
<div class="play"><button>Play</button></div>
$(document).ready(function() 
{       
    $(".play" ).on("click",function()
     {         var audioElement = document.createElement('audio');
              audioElement.setAttribute('src', 'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3');    
                   audioElement.setAttribute('autoplay', 'autoplay');         //audioElement.load()       
                     $.get();         audioElement.addEventListener("load", function() {         audioElement.play();         }, true);    
                          $('.play').click(function() { audioElement.play(); });         }); });}
export default Sr;