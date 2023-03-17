
import { imgData } from "../dataset/imgdata"
import { Row , Col , Card } from "react-bootstrap"


import fvrt from 'public/assets/img/favori.svg'
import like from 'public/assets/img/like.svg'
import Image from "next/image"

const Cards = () => {

    const nfta = [
        {
            title : "Voodoo Doll",
            series : "By Gallery New York",
            point : 3.6,
            id : "Voodoo Doll #107",
            likes : 122,
            price : 1.79
        }]

  return (
   <>
        <Row xxl={5} xl={4} lg={3}  xs={1}>

                {imgData.map((img,i)=>(
                    <Col key={i}>
                        <Card>  
                            <Card.Header >
                                <Image src={img} alt="nftimg" />
                            </Card.Header>
                            <Card.Body >
                                <div className="title">
                                    <div className="title-info">
                                        <Card.Title>{nfta[0].title}</Card.Title>
                                        <span>{nfta[0].point}</span>
                                    </div>
                                    <div className="title-img">
                                        <Image src={fvrt} alt="favorite"/>
                                        <Image src={like} alt="like"/>
                                    </div>
                                </div>
                                <div className="info"> 
                                    <span>{nfta[0].series}</span>
                                    <span>{nfta[0].likes}</span>
                                </div>
                                <div className="prc">
                                    <span>{nfta[0].id}</span>
                                    <span className="value">{nfta[0].price} USDT</span>
                                </div>    
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            

            
        </Row>




    </>
  )
}

export default Cards