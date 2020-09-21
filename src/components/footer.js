import React from "react"
import Row from 'react-bootstrap/Row';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Footer() {
return(

    <div >
      <div style={{padding:"3% 3%"}}>
    <div  style={{backgroundColor:"#eff8ff",paddingLeft:"0%"}}>  
      <Row style={{padding:"0% 4%"}}>
<div class="col-md-5" backgroundColor="#eff8ff" style={{padding:"0% 0%"}}>
    
      <div style={{backgroundColor:"#eff8ff",heigth:"80%",padding:"0% 0%"}}>
        <img src="/vector-smart-object.jpg" style={{ width: "80%",padding:"9% 0%"}} alt="yo"></img>  
      </div>
      </div>
      <div class="col-md">
      <div style={{backgroundColor:"#eff8ff",padding:"7% 0%",height:"100%"}}>
        <p style={{color:"green",fontWeight:"bold",fontSize:"130%"}}>Join our team</p>
        <p style={{fontWeight:"bold",fontSize:"150%"}}>come be part of our team and use techonology as a tool to turn ideas into realities.</p> 
        <div style={{paddingTop:"7%"}}>
        <button class="buttonn buttonn3" color="blue" style={{fontSize:"90%",fontWeight:"bold"}} >JOIN OUR TEAM </button>
        </div>
          </div>
      </div>
      </Row>
      </div></div>
      <div style={{backgroundColor:"#ffffff",paddingTop:"0%"}}>
      <div>
      <div style={{textAlign:"center",backgroundColor:"#e6f2ff"}}>
        <div style={{paddingTop:"2%",paddingBottom:"3%"}}>
      <a href="https://www.w3schools.com"><p style={{color:"green",fontWeight:"bold"}}>CONTACT US</p></a>
      <p style={{fontSize:"160%",fontWeight:"bold"}}>Be a part of us and discover the best.</p>
      <br></br>  
      <p style={{fontSize:"120%",textAlign:"center",padding:"0% 33%"}}>
      Get in touch to witness the technological revolution with our tech solutions and to be a part of the revolution with your tech skills.
      </p>
      <button class="buttonn buttonn4" style={{fontSize:"90%",fontWeight:"bold"}} >REQUEST A PROPOSAL </button>
      </div>
      <div>
      </div>
      </div>
      </div>


      <div style={{backgroundColor:"black"}}>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
          <img src="/favicon.ico" style={{ width: "10%", height: "auto" }} alt="yo"></img>
            <p style={{paddingTop:"8%",color:"white",fontWeight:"bold"}}>
              Get official with us
            </p>
            <Row>

            <img src="/010-linkedin.svg" style={{ width: "10%", height: "auto" }} alt="yo"></img>
            <a href="#!" style={{paddingLeft:"7%" ,color:"white",fontWeight:"bold"}}>LinkedIn</a>
            </Row>

            <Row>

            <img src="/001-facebook.svg" style={{ width: "10%", height: "auto" }} alt="yo"></img>
            <a href="#!" style={{paddingLeft:"7%", color:"white",fontWeight:"bold"}}>Facebook</a>
            </Row>

            <Row>

            <img src="/011-instagram.svg" style={{ width: "10%", height: "auto" }} alt="yo"></img>
            <a href="#!" style={{paddingLeft:"7%",color:"white",fontWeight:"bold"}}>Instagram</a>
            </Row>

         
          </MDBCol>
          <MDBCol md="3">
        
            <h5 className="title" ><p style={{color:"white",fontWeight:"bold"}}>Industries</p></h5>
            <ul style={{float:"left"}}>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Healthcare</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Retail</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Nonprofit and Government</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Energy</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Education</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Media and Techonlogy</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Banking and Finance</p></a>
              </li>
              
            </ul>
            
          </MDBCol>
          <MDBCol md="3">
            
          <h5 className="title" ><p style={{color:"white",fontWeight:"bold"}}>Services</p></h5>
            <ul style={{float:"left"}}>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Digital</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Application development and Manaintanence</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Emerging Tech</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>IT Consulting</p></a>
              </li>
              
              
            </ul>

          </MDBCol>

          <MDBCol md="3">
            
          <h5 className="title" ><p style={{color:"white",fontWeight:"bold"}}>Abous Us</p></h5>
            <ul style={{float:"left"}}>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Who are we?</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>What do we do?</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>How do we do it?</p></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Why us?</p></a>
              </li>

              <li className="list-unstyled">
                <a href="#!"><p style={{color:"white"}}>Work with us</p></a>
              </li>
              
              
            </ul>


          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        
      </div>
     </MDBFooter>
    </div>
    </div>
       


</div>


)
}
