import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"
import Row from 'react-bootstrap/Row';

export default function About(){
    return(
        <div style={{backgroundColor:"#ffffff"}}>
            <div>
                <Header></Header>
            </div>
            <div style={{textAlign:"center", paddingTop:"3%"}}>
                <p style={{fontSize:"250%",fontWeight:"bold"}}>Services</p>
                <p style={{width:"75%",paddingLeft:"25%",paddingBottom:"1%"}}>Providing complete digital and technical solutions to our clients, we have left no stone unturned. Our expertise and excellence in our work 
                    remains constant along the entire spectrum of all the services we provide to our beloved clients. Choose what suits you the best from our plethora
                    of our service, aimed to boost up your bussiness and help you achieve your goals.
                </p>

                <button class="buttonn buttonn4" style={{fontSize:"90%",fontWeight:"bold"}} >REQUEST A PROPOSAL </button>
            </div>

            <div style={{paddingTop:"8%",paddingLeft:"8%"}}>

<div>
  <Row>

    <div class="col-md-3"> <img src="/assets_services_main_page_2020-09-21/web-devices-rafiki.png" style={{ width: "120%",paddingLeft:"25%" }} alt="yo"></img></div>
    <div class="cod-md-9" style={{width:"60%",paddingLeft:"14%"}}>
      <p style={{padding:"0% 0%",color:"#00a86e"}}>
        <p style={{fontSize:"210%",fontWeight:"bold"}}>Application Development & Maintanence </p>
      </p>
      
      <p style={{width:"60%"}}>To take your bussiness soaring high and provide you with the best tools to create an impact with your ideas, we provide the most efficient website....</p>
      
        <a href="https://www.w3schools.com" style={{color:"#00a86e",fontWeight:"bold"}}>Explore our services</a>
    </div>
  </Row>

</div>

<div style={{padding:"7% 0%"}}>
  <Row>

   
    <div class="cod-md-9" style={{width:"60%",paddingLeft:"14%"}}>
      <p style={{padding:"0% 0%",color:"#00a86e"}}>
        <p style={{fontSize:"210%",fontWeight:"bold"}}>Emerging Technology </p>
      </p>
      
      <p style={{width:"70%"}}>With new technological advancements stepping up every minute, our world is crammed with thousands of options to choose from ....</p>
      
        <a href="https://www.w3schools.com" style={{color:"#00a86e",fontWeight:"bold"}}>Explore our services</a>
    </div>

    <div class="col-md-3"> <img src="/assets_services_main_page_2020-09-21/artificial-intelligence-amico.png" style={{ width: "100%",paddingLeft:"0%" }} alt="yo"></img></div>
  </Row>

</div>


<div style={{paddingBottom:"7%"}}>
  <Row>

    <div class="col-md-3"> <img src="/assets_services_main_page_2020-09-21/interaction-design-rafiki@3x.png" style={{ width: "120%",paddingLeft:"25%" }} alt="yo"></img></div>
    <div class="cod-md-9" style={{width:"60%",paddingLeft:"14%"}}>
      <p style={{padding:"0% 0%",color:"#00a86e"}}>
        <p style={{fontSize:"210%",fontWeight:"bold"}}>Digital Services </p>
      </p>
      
      <p style={{width:"80%"}}>As it's rightly said that those who fail to innovate, fail to survive. In this digital age, tinkering at the edge is not enough, our digital world is 
      pervasive and so are our solutions....
      </p>
      
        <a href="https://www.w3schools.com" style={{color:"#00a86e",fontWeight:"bold"}}>Explore our services</a>
    </div>
  </Row>



</div>

<div style={{padding:"0% 0%"}}>
  <Row>

   
    <div class="cod-md-9" style={{width:"60%",paddingLeft:"14%"}}>
      <p style={{padding:"0% 0%",color:"#00a86e"}}>
        <p style={{fontSize:"210%",fontWeight:"bold"}}>IT Consulting </p>
      </p>
      
      <p style={{width:"70%"}}>We nurture and support the company from the very beginning of the project until the end, and deliver quality results not only in the scope....</p>
      
        <a href="https://www.w3schools.com" style={{color:"#00a86e",fontWeight:"bold"}}>Explore our services</a>
    </div>

    <div class="col-md-3"> <img src="/assets_services_main_page_2020-09-21/pie-chart-bro.png" style={{ width: "80%",paddingLeft:"0%" }} alt="yo"></img></div>
  </Row>

</div>

</div>

            <div>
                <Footer></Footer>
            </div>
        
    </div>
    );
}