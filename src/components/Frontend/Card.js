import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Card.css';
function Card() {
  const history = useNavigate();
  return (
    // <div className=''>
    //   <div className='mainWrapper'>
    //     <div className='logoImage'>
    //       <img className='logoimage2' alt="logo" src=""/>
    //       <div className='logotxt'>
    //         <h1>ADIP Schemr</h1>
    //         <h2>Adip Scheme</h2>
    //       </div>
    //     </div>
    //     <div className='nav'>
    //       <ul>
    //         <li class="dropdown">
    //           <a href="" className="dropbtn">
    //             <img src="" className='logo'/>
    //           </a>
    //           <div className='dropdown-content'>
    //             <ul>
    //               <li>
    //                 <a href="">one</a>
    //                 <a href="">one</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="dropdown">
    //           <a href="" className="dropbtn">
    //             <img src="" className='logo'/>
    //           </a>
    //           <div className='dropdown-content'>
    //             <ul>
    //               <li>
    //                 <a href="">one</a>
    //                 <a href="">one</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="dropdown">
    //           <a href="" className="dropbtn">
    //             <img src="" className='logo'/>
    //           </a>
    //           <div className='dropdown-content'>
    //             <ul>
    //               <li>
    //                 <a href="">one</a>
    //                 <a href="">one</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //       </ul>
    //       <img src="" alt="logo" className='logoImage2'/>
    //     </div>
    //   </div>
    // </div>
    
    <div className='mainCard'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>ADIP Scheme</h4>
              <div class="button">
                <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4> Enrollment for Cochlear Implant Surgery</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./application")
                }}>Click to apply</Button>
                {/* <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Pre And Post cochlear Implant Services</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./prepostservices")
                }}>Click to apply</Button>
                {/* <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Request For Services Of Audiologist/Speech Therapist</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./request")
                }}>Click to apply</Button>
                {/* <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Empanelment Of Hospitals And Professionals</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./hospitalempalenment")
                }}>Click to apply</Button>
                {/* <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h5>Approved/Empanelled List Of Hospitals. Audiologists and Speech Therapists</h5>
              <div class="button">
                <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Surgical Report</h4>
              <div class="button">
                <Button onClick={()=>{
                  history("./hospitallogin")
                }}>Click to apply</Button>
                {/* <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a> */}
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Activation And Mapping</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./activationmapping")
                }}>Click to apply</Button>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Post Operative Rehabilitation</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./postrehabilation")
                }}>Click to apply</Button>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12">
            <div class="single-feature">
            <div class="icon-head">
									<i class="fa fa-address-card-o" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>                  </i>
								</div>
              <h4>Check Application Status</h4>
              <div class="button">
              <Button onClick={()=>{
                  history("./checkapplicationstatus")
                }}>Click to apply</Button>
                {/* <a href="newA.html" class="bizwheel-btn" target="_blank"><i class="fa fa-arrow-circle-o-right"></i>Click to Apply</a> */}
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
}

export default Card;