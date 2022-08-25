import $ from 'jquery';
import './Header.css'
import Screenreader from './ScreenReader';



$(document).on("click", "a.zoom-ina", function(e) {
    e.preventDefault();
    updateZoom(0.05);
    $("body").removeClass("zoomOut");
    $(this).addClass('active');
    $('a.zoom-outa').removeClass('active');
    $('a.reseta').removeClass('active');

});
$(document).on("click", "a.zoom-outa", function(e) {
    e.preventDefault();
    updateZoomout(-0.1);
    $("body").removeClass("zoomIn");
    $("body").addClass("zoomOut");
    $(this).addClass('active');
    $('a.zoom-ina').removeClass('active');
    $('a.reseta').removeClass('active');
});
$(document).on("click", "a.reseta", function(e) {
    e.preventDefault();
    zoomLevel = 1;
    $("body").css({
        zoom: zoomLevel,
        transform: "scale(1)"
    });
    $("body").removeClass("zoomOut");
    $("body").removeClass("zoomIn");
    $(this).addClass('active');
    $('a.zoom-ina').removeClass('active');
    $('a.zoom-outa').removeClass('active');
});

var zoomLevel = 1;
var updateZoom = function(zoom) {
    console.log(zoomLevel);
    if (zoomLevel < 1.1) {
        zoomLevel += zoom;

        $("body")
            .css({
                zoom: zoomLevel,
                "-moz-transform": "scale(" + zoomLevel + ")",
                "-ms-transform": "scale(" + zoomLevel + ")"
            })

        .addClass("zoomIn");
    }
};



var updateZoomout = function(zoom) {
    zoomLevel += zoom;
    if (zoomLevel >= 0.8) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');
        console.log(msie);
        console.log(trident);
        if (msie > 0) {
            $("body")
                .css({
                    "-moz-transform": "scale(1," + zoomLevel + ")",
                    "-ms-transform": "scale(1," + zoomLevel + ")"
                })
        } else if (trident > 0) {
            $("body")
                .css({
                    "-moz-transform": "scale(1," + zoomLevel + ")",
                    "-ms-transform": "scale(1," + zoomLevel + ")"
                })
        } else {
            $("body")
                .css({
                    zoom: zoomLevel,
                    "-moz-transform": "scale(1," + zoomLevel + ")",
                    "-ms-transform": "scale(1," + zoomLevel + ")"
                })
        }

    }
};
$(document).ready(function (){
    $("li a#skip").on("click", function(e) {
        e.preventDefault();
        console.log("aa");
        $('html, body').animate({
            scrollTop: $("#scroll").offset().top
        }, 200);
    });
});

// $( document ).ready( function() {
//   var callback = nowPlaying; // catalog, schedule, podcasts, archive or nowPlaying
//   var selector = '#now-playing-div';
//   makeAudioReaderPage(callback, selector); // the callback will append HTML to the element via jquery with the selector as the query term
// });

function Header() {
    return (
      
        <div>
        <div className="social-icons">
            <ul className="menu">
           
           <li className="rounda" id="zoom-outborder">
            <a className="zoom-outa" href="#/"><svg height="16" id="zoom-out" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <defs></defs><path className="cls-1" d="M0,0H16V16H0Z" data-name="Path 30" id="Path_30"></path><path className="cls-2" d="M7,10H5a1,1,0,0,0,0,2H8a1,1,0,0,0,0-2Z" data-name="Path 31" id="Path_31" transform="translate(6 -7.295)"></path><path className="cls-2" d="M15,5a1.137,1.137,0,0,0-1.05.69l-3.88,8.97a.964.964,0,1,0,1.78.74l.66-1.6h5l.66,1.6a.959.959,0,0,0,1.77-.74L16.06,5.69A1.162,1.162,0,0,0,15,5Zm-1.87,7L15,6.98,16.87,12Z" data-name="Path 33" id="Path_33" transform="translate(-7.714 -2.154)"></path></svg></a></li>
           <li className="rounda" id="resetbtn">
            <a className="reseta" href="#/"><svg height="16" id="reset" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <defs></defs><path className="shp0" d="M0 0L16 0L16 16L0 16L0 0Z" id="Path_300"></path><path className="shp1" d="M7.62 2.89C7.72 2.93 7.82 2.97 7.92 3.03C8.01 3.1 8.1 3.17 8.17 3.25C8.24 3.34 8.3 3.43 8.35 3.54L12.23 12.51C12.32 12.74 12.32 13 12.23 13.24C12.13 13.48 11.95 13.66 11.71 13.76C11.48 13.86 11.21 13.86 10.98 13.76C10.74 13.67 10.55 13.48 10.46 13.25L9.8 11.65L4.8 11.65L4.14 13.25C4.04 13.49 3.85 13.68 3.62 13.78C3.38 13.88 3.11 13.88 2.87 13.78C2.63 13.68 2.44 13.49 2.35 13.25C2.25 13.01 2.25 12.74 2.36 12.51L6.24 3.54C6.28 3.43 6.34 3.34 6.41 3.25C6.48 3.17 6.56 3.09 6.66 3.03C6.75 2.97 6.85 2.92 6.96 2.89C7.06 2.86 7.17 2.85 7.29 2.85C7.4 2.85 7.51 2.86 7.62 2.89ZM9.16 9.85L7.29 4.83L5.42 9.85L9.16 9.85Z" fillRule="evenodd" id="Path_331"></path></svg></a></li>
            <li id="zoom-inborder"><a className="zoom-ina" href="#/"><svg height="18" id="zoom-in" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M0 0h18v18H0z" data-name="Path 30" id="prefix__Path_30"></path><path className="prefix__cls-2" d="M6 10V9a1 1 0 0 0-2 0v1H3a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z" data-name="Path 31" id="prefix__Path_31" transform="translate(9 -5.5)"></path><path className="prefix__cls-2" d="M15 5a1.137 1.137 0 0 0-1.05.69l-3.88 8.97a.964.964 0 1 0 1.78.74l.66-1.6h5l.66 1.6a.959.959 0 0 0 1.77-.74l-3.88-8.97A1.162 1.162 0 0 0 15 5zm-1.87 7L15 6.98 16.87 12z" data-name="Path 17372" id="prefix__Path_17372" transform="translate(-7.714 -1.154)"></path></svg></a></li>
            <li>
                <a href="#" id="skip">Skip to Main Content</a>
            </li>
            {/* <Button onClick={()=>{
                <Screenreader/>
            }} >ScreenReader Access</div> */}
           </ul>
               </div>
               <div className=''>
      <div className='mainWrapper'>
                <div className='logoImage'>
                <img className='logoimage2' alt="logo" src="./Images/My_project-removebg-preview.png"/>
                <div className='logotxt'>
                    <h1>ADIP Scheme</h1>
                    <h2>Government Of India</h2>
                </div>
                </div>
                <div className='nav'>
                <ul>
                    <li class="dropdown">
                    <a href="" className="dropbtn">
                        <img src="/Images/logo1.png" className='logo'/>
                    </a>
                    <div className='dropdown-content'>
                        <ul>
                        <li>
                            <a href="">MY GOVERNMENT</a>
                        
                        </li>
                        </ul>
                    </div>
                    </li>
                    <li class="dropdown">
                    <a href="" className="dropbtn">
                        <img src="/Images/logo2.png" className='logo'/>
                    </a>
                    <div className='dropdown-content'>
                        <ul>
                        <li>
                            <a href="">CI CANDIDACY</a>
                            
                        </li>
                        </ul>
                    </div>
                    </li>
                    <li class="dropdown">
                    <a href="" className="dropbtn">
                        <img src="/Images/logo3.png" className='logo'/>
                    </a>
                    <div className='dropdown-content'>
                        <ul>
                        <li>
                            <a href="">GuIDANCE/SUPPORT</a>
                            
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>
                
                </div>
                <div>
                <img src="/Images/adip-removebg-preview.png" alt="logo" className='logoImage2'/>
                </div>
      </div>
    </div>
               </div>

    );
}
export default Header;
              