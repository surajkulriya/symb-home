import React from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Footer from "../components/footer"
import Header from "../components/header"
export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div style={{ color: `teal` }}>
        <Header />
      </div>
      <Row>
        <div class="col-md">
          <div style={{ margin: "auto", paddingTop: "9%" }}>
            <h1 style={{ color: "green", textAlign: "left", fontSize: "320%", padding: "2% 9%", fontWeight: "bold" }}>People Making Techonology Work</h1>
            <p style={{ textAlign: "left", color: "black", padding: "1% 10%", fontSize: "120%" }}>With an experience of 5+ years and a track record of building 100+ techonology product, we deliver nothing but the best.</p>
            <div style={{ width: "10%", padding: "1% 10%" }}>
              <Button variant="primary">Explore</Button>{' '}
            </div>
          </div>
        </div>
        <div class="col-md">
          <img src="fff.svg" style={{ width: "80%", padding: "1% 2%" }} alt="yo"></img>
          <br></br>


        </div>
      </Row>
      <div>
        <div style={{ backgroundColor: "#97D778", padding: "1% 2%" }}>
          <Container style={{ padding: "2% 2%" }}>


            <Row>
              <Col><img src="favicon.ico" style={{ width: "20px", height: "auto" }} alt="yo"></img></Col>
              <Col><img src="favicon.ico" style={{ width: "20%", height: "auto" }} alt="yo"></img></Col>
              <Col><img src="favicon.ico" style={{ width: "20%", height: "auto" }} alt="yo"></img></Col>
              <Col><img src="favicon.ico" style={{ width: "20%", height: "auto" }} alt="yo"></img></Col>
              <Col><img src="favicon.ico" style={{ width: "20%", height: "auto" }} alt="yo"></img></Col>
            </Row>
            <p style={{ textAlign: "center", color: "white", width: "80%", height: "auto", fontSize: "100%", paddingTop: "3%" }}>With our team of talented techies, we are all set to change the digital world dynamics,one solution at a time.</p>
          </Container>
        </div>
        <div style={{ padding: "3% 3%" }}>
          <div style={{ backgroundColor: "#C7F0F9", padding: "2% 2%" }}>
            <Row>
              <Col> <p style={{ fontSize: "200%", color: "green", textAlign: "left", paddingTop: "10%", paddingLeft: "5%", width: "46%", fontWeight: "bold" }}>Let the numbers speak for themselves</p>
                <Col><img src="shape-7@3x.jpg" style={{ width: "30%", height: "90%", paddingTop: "15%" }} alt="yo"></img></Col>

              </Col>
              <Col>
                <div style={{ paddingLeft: "0%" }}>
                  <div style={{ backgroundColor: "blue", width: "113%" }}>
                    <Row style={{ color: "white", fontWeight: "bold" }}>

                      <Col><p style={{ fontSize: "370%", padding: "0% 19%", fontWeight: "bold" }}>5+</p>
                        <p style={{ padding: "0% 19%" }}>Years</p></Col>

                      <Col><p style={{ fontSize: "370%", padding: "0% 5%", fontWeight: "bold" }}>5+</p>
                        <p style={{ padding: "0% 5%" }}>Big Comapanies</p></Col>
                    </Row>

                    <Row style={{ color: "white", fontWeight: "bold" }}>

                      <Col><p style={{ fontSize: "370%", padding: "0% 19%", fontWeight: "bold" }}>150+</p>
                        <p style={{ padding: "0% 19%" }}>Websites</p></Col>

                      <Col><p style={{ fontSize: "370%", padding: "0% 5%", fontWeight: "bold" }}>50+</p>
                        <p style={{ padding: "0% 5%" }}>Startups</p></Col>
                    </Row>


                    <Row style={{ color: "white", fontWeight: "bold" }}>

                      <Col><p style={{ fontSize: "370%", padding: "0% 19%", fontWeight: "bold" }}>50+</p>
                        <p style={{ padding: "0% 19%" }}>Apps</p></Col>

                      <Col><p style={{ fontSize: "370%", padding: "0% 5%", fontWeight: "bold" }}>200+</p>
                        <p style={{ padding: "0% 5%" }}>Happy customers</p></Col>
                    </Row>

                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>




          <h5 style={{ padding: "1% 4%", width: "75%" }}><Row>
            How we create the <h5 style={{ color: "green", padding: "0% .31%" }}> best solutions </h5> ,precisely tailored for all your digital and bussiness needs.
        </Row>
          </h5>
        </div>
        <div class="col-md-12">
          <Row style={{ padding: "2% 2%" }}>
            <div class="col-md-4">
            <Card class="col-md-4" style={{ padding: "1% 1%", border: "none" }}>
              <Card.Img variant="top" src="seo-and-web.svg" style={{ width: "180px", height: "100px", border: "none" }} />
              <Card.Body>
                <Card.Title>Analyse</Card.Title>
                <p style={{ padding: "0px 0px", color: "#647B80", fontSize: "110%" }}>Getting a deep understanding.</p>
                <Card.Text>
                  In our initial stage of development, we try to gather deep insights about our clients,right from their vision to the objectives,they wish to achieve their product which infulces almost everyything coming after.
    </Card.Text>
                <a href="https://www.w3schools.com">Learn more</a>
              </Card.Body>
            </Card>
            </div>
            <div class="col-md-4">
            <Card class="col-md-4" style={{ padding: "1% 1%", border: "none" }}>
              <Card.Img variant="top" src="pencil.svg" style={{ width: "180px", height: "100px" }} />
              <Card.Body>
                <Card.Title>Create</Card.Title>
                <p style={{ padding: "0px 0px", color: "#647B80", fontSize: "110%" }}>Getting the development going.</p>
                <Card.Text >
                  Once we gain insights about your needs, we start of working on it by first analyzing and brainstroming the prototype and get our team of smart techies to work on it as soon as possible, making sure that the client is updated with everything.
     </Card.Text>
                <a href="https://www.w3schools.com">Learn more</a>
              </Card.Body>
            </Card>
            </div>
            <div class="col-md-4">
            <Card class="col-md-4" style={{  padding: "1% 1%", border: "none" }}>
              <Card.Img variant="top" src="vehicle.svg" style={{ width: "180px", height: "100px", border: "none" }} />
              <Card.Body>
                <Card.Title>Deliver</Card.Title>
                <p style={{ padding: "0px 0px", color: "#647B80", fontSize: "110%" }}>Keeping us with your expectations.</p>
                <Card.Text >
                  After taking all the input and processing it, comes the output and we make sure that every bit of it resonates with what our client had expected of the output, and we shall furish it further until they get what they once visualised.
     </Card.Text>
                <a href="https://www.w3schools.com">Learn more</a>
              </Card.Body>
            </Card>
</div>
          </Row>

        </div>
        <div>

          <p style={{ fontSize: "320%", textAlign: "center", fontWeight: "bold" }}>Trusted by Customers</p>

          <h5 style={{ fontsize: "110%", textAlign: "center", color: "#7B9196" }}> Let's see what our clients have to tell about us.</h5>

        </div>


        <div style={{ color: `teal` }}>
          <Footer />
        </div>

      </div>
    </div>

  );
}
