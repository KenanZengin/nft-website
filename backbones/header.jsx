'use client'
import Image from "next/image"
import Link from "next/link"
import { Container , Navbar , Nav ,Form, Dropdown } from "react-bootstrap"

import logo from 'public/assets/img/logo.png'
import user from 'public/assets/img/user.png'
import search from 'public/assets/img/search.svg'

const Header = () => {

    const headNavMenu = [
        {
            navTitle : "Marketplace",
            navUrl   : "#"
        },
        {
            navTitle : "My NFTs",
            navUrl   : "#"
        },
        {
            navTitle : "Blog",
            navUrl   : "#"
        },        {
            navTitle : "Help Center",
            navUrl   : "#"
        }
    ]
  return (
    <div className="header">
        <Container fluid> 
            <div className="header-web">
                <div className="header-web-left">
                    <div className="header-logo">
                        <Image src={logo} alt="logo" />
                    </div>
                </div>
                <div className="header-web-center ">
                    <div className="headerGroup">
                        <div className="headerNav " >
                            <Navbar     >
                                <Nav>   
                                    {headNavMenu.map((item,i)=>{
                                        return(
                                            <Nav.Item key={i}>
                                                <Link href={item.navTitle}>
                                                    {item.navTitle}
                                                </Link>
                                            </Nav.Item>
                                        )
                                    })}
                                </Nav>
                            </Navbar>
                            
                        </div>
                        <div className="headerSearch">
                            <Form>
                            <Form.Control type="text" placeholder="Search by creator, collectible or collection" />
                            </Form>
                            <Image src={search} alt="search" />
                        </div>
                    </div>
                </div>
                <div className="header-web-right">
                    <div className="userinfo">
                        <Image src={user} alt="user" />
                        <Dropdown>
                            <Dropdown.Toggle>
                                <p>Michael Fassbenfbbaaabasaaa</p>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>
                    <div className="lang">
                        <Dropdown>
                            <Dropdown.Toggle>
                                EN
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header


