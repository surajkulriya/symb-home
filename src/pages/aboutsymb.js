import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"
import Row from 'react-bootstrap/Row';

export default function About(){
    return(
        <div style={{backgroundColor:"#ffffff"}}>

    <div style={{ color: `teal` }}>
      <Header />
      </div>
    <div style={{textAlign:"center",paddingTop:"2%"}}>
      <p style={{color:"black",fontSize:"280%",fontWeight:"bold"}}> About SYMB</p>
      <p style={{padding:"0% 25%"}}>We provide complete digital solution to our clients from diverse sectors to help ventures and ideas become big names in the industry.
        We help agencies, startups, SMEs and large enterprises turn their dreams into reality by delivering solution turn-key results on time and within budget.
      </p>
      <div style={{padding:"2% 0%"}}>
      <button class="buttonn buttonn4" style={{fontSize:"90%",fontWeight:"bold"}} >REQUEST A PROPOSAL </button>
      </div>

    </div>  


    <div style={{paddingTop:"8%",paddingLeft:"12%"}}>

      <div>
        <Row>

          <div class="col-md-3"> <img src="/folder1/vector-smart-object_2@3x.jpg" style={{ width: "75%",paddingLeft:"25%" }} alt="yo"></img></div>
          <div class="cod-md-9" style={{width:"60%",paddingLeft:"7%"}}>
            <p style={{padding:"0% 0%",color:"#00a86e",fontWeight:"bold"}}>
              <p >OUR MISSION</p>
            </p>
            <p style={{fontSize:"120%",padding:"0% 0%",fontWeight:"bold"}}>Why do we exist and what to expect from us?</p>
            <p style={{width:"60%"}}>To become the world leaders of top-notch digital and techonological solutions through consistent delivery of world-class services to our clients.</p>
          </div>
        </Row>

      </div>


      <div style={{paddingTop:"13%"}}>
        <Row>

         
          <div class="cod-md-9" style={{width:"60%",paddingLeft:"7%"}}>
            <p style={{padding:"0% 0%",color:"#00a86e",fontWeight:"bold"}}>
              <p >OUR VISION</p>
            </p>
            <p style={{fontSize:"120%",padding:"0% 0%",fontWeight:"bold",width:"60%"}}>What do we seek to do and what catalyzes our actions?</p>
            <p style={{width:"60%"}}>Create and provide high-quality digital solutions in order to provide maximum value for money to our customers and to realise the dreams 
              and ideas of our clients in a viable manner.</p>
          </div>
          <div class="col-md-3"> <img src="/folder1/vector-smart-object.jpg" style={{ width: "85%",paddingRight:"25%",paddingTop:"8%" }} alt="yo"></img></div>
        </Row>

      </div>
      

      <div style={{paddingTop:"13%"}}>
        <Row>

          <div class="col-md-3"> <img src="/folder1/vector-smart-object_3.jpg" style={{ width: "85%",paddingLeft:"25%" }} alt="yo"></img></div>
          <div class="cod-md-9" style={{width:"60%",paddingLeft:"7%"}}>
            <p style={{padding:"0% 0%",color:"#00a86e",fontWeight:"bold"}}>
              <p >OUR VALUES</p>
            </p>
            <p style={{fontSize:"120%",padding:"0% 0%",fontWeight:"bold",width:"70%"}}>What drives our services and what we never compromise with?</p>
            <p style={{width:"60%"}}>We belive in delivering top notch quality products laced with innovation and integrity, constucted by the commited team of our professional 
              technical experts who believe in perspiration, perfection and persistence.</p>
          </div>
        </Row>

      </div>

</div>
    

            {/* hello world */}
            <div style={{ color: `teal` }}>
      <Footer />
    </div>               
    </div>
    );
}