import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
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
    <div>

        <Row>
            <div class="col-md-4">

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            </div>

            <div class="col-md-4">

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            </div>


            <div class="col-md-4">

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
