'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react"
import { Offcanvas} from "react-bootstrap"
import Sidebar from './sidebar'

import options from 'public/assets/img/icon.svg'

const Canvas = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <>
      <button>
        <Link href="#" onClick={handleShow}>
            <Image  src={options} alt="options" width={25}/>
            <span>Options</span>
        </Link>
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <div className="main">
            <div className="main-web">
                <div className="canvas" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Sidebar />
                </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Canvas