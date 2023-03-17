'use client'

import Content from "@/content/content";
import Sidebar from "@/content/sidebar";
import { Container } from "react-bootstrap";



export default function Home() {
  return (
    <div className="main">
      <Container fluid>
        <div className="main-web">
          <div className="web-sidebar">
            <Sidebar />
          </div>
          <div className="web-content">
             <Content />
          </div>
        </div>
      </Container>
    </div>

  )
}
