import React from 'react';
import Whitedeep from '../whitedeep.png';
import Soso from '../images/soso.jpg';
import Sso from '../images/sso.jpg';
import Sign from '../images/sign.jpg';
import Sss from '../images/sss.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const aboutContent =()=>{
    return(
        <div className="about-motto">
            <div className="card">
                <div className="card-body">
                    <img src={Whitedeep} height= "220" width= "250"/>
                    <h5 className="card-title"><h1>Africa's No.1 Platform Connecting People With<br/>
                    Qualified Sign Language Tutors Interpreters 
                    <br/> and Sign Buddies Across The Globe
                </h1> </h5>
                    
                </div>
                
            </div>
            <div className="container aboutUs">
                <Row className='about-row'>
                    <Col md='5'><hr/></Col>
                    <Col md='2'><span className="badge  badge1" >ABOUT US</span></Col>
                    <Col md='5'><hr/></Col>
                        <Col><img src={Sss}height='500' width="500" className='card-img'/>
                            
                        </Col>
                    <Col><p className='aboutP'>For so many so many years now, the barrier of communication between the hearing  and  the hearing impaired  has been an undisputed challenge, causing the deaf to be misunderstood and mistreated. All of us share a need to be understood , yet  Parents with deaf children have been  unable to exchange meaningful ideas, emotions , thoughts and love with them , leaving the parents with great  worry and  and  discomfort , allowing the deaf to feel neglected and isolated .
                            This problem  has  passed on from generation to generation , not  only in homes  but  in schools , workplaces , religious gatherings , etc . As the deaf population increased , the desire for them to be understood and accepted   has increased as well .Sign Language has come to the rescue of both the deaf and  the  hearing and  opened  an opportunity for  both to understand each other  .. 
                            As deaf population increases  in the  world , the demand for  sign language to be learned and  embraced  in the society  has risen , since the association of the hearing and the deaf is inevitable.
                            This brought up the establishment of siGn Connekt , a platform powered by Nakwa Arms Foundation . </p></Col>
                </Row>
                <Row className='mission-row'>
                    <Col md='5'><hr/></Col>
                    <Col md='2'><span className="badge  badge2" >Our Mission</span></Col>
                    <Col md='5'><hr/></Col>
                    
                    <Col md='6'><p className='mission'>Our prime goal is to promote and encourage the use of sign Language  in a larger scale to overcome the challenges
                         encountered when dealing with the deaf  or hearing impaired. This platform creates  an avenue for people to connect with qualified  sign language tutors  and  interpreters  not  only to learn sign language , but also to render other services  like job recruitment to suit various fields in the work industry and  also to connect  with sign buddies around the continent and hangout . Interpreters get the chance to be employed  , where on the other hand  , the employer get the chance to add value  to their lives,work and culture through , creating an environment where  both the hearing and deaf can live together without discrimination and limited abilities .</p></Col>
                    <Col md='6'>
                            <img className="card-img" src={Sso} width='400' height='500' />
                            
                    </Col>
                </Row>
                <Row className='vision-row'>
                    <Col md='5'><hr/></Col>
                    <Col md='2'><span className="badge  badge3" >Our Vision</span></Col>
                    <Col md='5'><hr/></Col>
                    
                    <Col>
                    <img className="card-img" src={Sign} width='400' height='500' />
                    </Col>
                    <Col><p className='vision'>The Vision of this platform is to make sign language a common language in schools , homes and  organisations , breaking the barrier between the deaf and hearing ,uniting them ,creating  job opportunities for both parties through sign language   and empowering them  as they are  being understood  well and  their talents  are being unleashed . You can support this vision by  joining the SIGN TO SHINE campaign by Nakwa Arms Foundation, with just a Click. 
                        Enjoy your Stay on Sign Connekt and be free to Contact Us  on any concerns on your Experience here .</p></Col>
                </Row>
            </div>
        </div>
    )
}





export default aboutContent;


