'use client'
import Image from "next/image"
import Link from "next/link"
import { Container , Form } from "react-bootstrap"
import {BsFacebook,BsTwitter,BsInstagram,BsTelegram,BsYoutube} from "react-icons/bs"

import circle from 'public/assets/img/circle.png'
 

const Footer = () => {

  return (
    <div className="footer">
        <Container fluid>
            <div className="footer-web">    
                <div className="footer-web-center">
                    <div className="title">
                        <h2>Auction</h2>
                        <Form>
                            <Form.Control type="text" placeholder="Email Adress" />
                            <button>Subscribe</button>
                        </Form>
                    </div>
                    <div className="abouts">
                        <ul className="first">
                            <li><Link href="#">News</Link><Image src={circle} alt="/" /> </li>
                            <li><Link href="#">Create</Link><Image src={circle} alt="/" /></li>
                            <li><Link href="#">Market</Link><Image src={circle} alt="/" /></li>
                            <li><Link href="#">Play</Link><Image src={circle} alt="/" /></li>
                            <li><Link href="#">Whitepaper</Link><Image src={circle} alt="/" /></li>
                            <li><Link href="#">FAQ</Link><Image src={circle} alt="/" /></li>
                        </ul>
                        <ul className="second">
                            <li><Link href="#">Map</Link></li>
                            <li><Link href="#">Send</Link></li>
                            <li><Link href="#">Press</Link></li>
                            <li><Link href="#">Terms of use</Link></li>
                            <li><Link href="#">One Pager</Link></li>
                            <li><Link href="#">About us</Link></li>
                        </ul>
                    </div>
                    <div className="social">
                        <BsFacebook />
                        <BsTwitter />
                        <BsInstagram />
                        <BsYoutube />
                        <BsTelegram />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer