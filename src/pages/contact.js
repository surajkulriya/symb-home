import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>


      <div style={{ color: `teal` }}>
        <Header />
      </div>


     <div style={{paddingTop:"5%",paddingLeft:"3%"}}>
        <Row>
         <div class="col-md-6">

             <p style={{fontSize:"240%",fontWeight:"bold",color:"#00a86e"}}>Contact us</p>
             <p style={{width:"75%"}}>
                 We'd be trhilled to understand your company's oppurtunities,challenges and goals to explore the various ways by which we can help you soar high 
                 and achieve your goals. Get in touch to your partner with us on your journey to brilliance.
             </p>
             <button class="buttonn buttonn4" style={{fontSize:"90%",fontWeight:"bold"}} >REQUEST A PROPOSAL </button>
         </div>
         <div class="col-md" style={{paddingLeft:"0%"}}>
         <img src="/assets_Contact Us_2020-09-22 /vector-smart-object.jpg" style={{ width: "70%", height: "auto" }} alt="yo"></img>
         </div>
         </Row>
     </div>
    <div style={{padding:"5% 6%"}}>

        <Row>
            <div class="col-md-4">

            <Card style={{ width: '100%',border:"none"  }}>
            <p style={{position:"absolute",fontSize:"270%",padding:"29% 9%",color:"white",fontWeight:"bold",width:"170%"}}>Noida</p>
            <p style={{position:"absolute",fontSize:"120%",padding:"41% 9%",color:"white",width:"170%"}}>May 2nd,2020 7:29:26 pm</p>
            <Card.Img variant="top"  src="/assets_Contact Us_2020-09-22 /layer-8.jpg"/>
            
            <Card.Body>
                
                <Card.Text style={{width:"60%",fontSize:"150%",position:"absolute"}}>
                Lorem ipsum dolor sit amet, consctetur adipiscing elit, sed do eiusmod tempor
                </Card.Text>
               
            </Card.Body>
            </Card>

            </div>

            <div class="col-md-4" >

            <Card style={{ width: '100%',border:"none" }}>
            <p style={{position:"absolute",fontSize:"270%",padding:"29% 9%",color:"white",fontWeight:"bold",width:"170%"}}>Toronto</p>
            <p style={{position:"absolute",fontSize:"120%",padding:"41% 9%",color:"white",width:"170%"}}>May 2nd,2020 7:29:26 pm</p>
            <Card.Img variant="top" src="/assets_Contact Us_2020-09-22 /layer-4.jpg" />
            <Card.Body>
                
                <Card.Text style={{width:"60%",fontSize:"150%"}}>
                4201-10 Navy Wharf Court Toronto On M5V 3V2
                </Card.Text>
               
            </Card.Body>
            </Card>

            </div>


            <div class="col-md-4">

            <Card style={{ width: '100%',border:"none" }}>
            <p style={{position:"absolute",fontSize:"270%",padding:"29% 9%",color:"white",fontWeight:"bold",width:"170%"}}>London</p>
            <p style={{position:"absolute",fontSize:"120%",padding:"41% 9%",color:"white",width:"170%"}}>May 2nd,2020 7:29:26 pm</p>
            <Card.Img variant="top" src="/assets_Contact Us_2020-09-22 /layer-7.jpg" />
            <Card.Body>
                
                <Card.Text style={{width:"60%",fontSize:"150%"}}>
                612, 122 East Ferry Road, London, E14 9ET
                </Card.Text>
               
            </Card.Body>
            </Card>

            </div>
        </Row>

        <Row style={{paddingTop:"7%"}}>
            <div class="col-md-4">

            <Card style={{ width: '100%',border:"none" }}>
            <p style={{position:"absolute",fontSize:"270%",padding:"29% 9%",color:"white",fontWeight:"bold",width:"170%"}}>Milan</p>
            <p style={{position:"absolute",fontSize:"120%",padding:"41% 9%",color:"white",width:"170%"}}>May 2nd,2020 7:29:26 pm</p>
            <Card.Img variant="top"  src="/assets_Contact Us_2020-09-22 /layer-6.jpg" />
            <Card.Body>
                
                <Card.Text style={{width:"60%",fontSize:"150%"}}>
                Lorem ipsum dolor sit amet, consctetur adipiscing elit, sed do eiusmod tempor
                </Card.Text>
               
            </Card.Body>
            </Card>

            </div>

            
        </Row>


    </div>
        <div style={{ color: `teal` }}>
          <Footer />
        </div>

    </div>
    

  );
}
