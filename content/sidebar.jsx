'use client'
import Image from 'next/image'
import { ToggleButton , ButtonGroup , Form , Collapse   } from 'react-bootstrap';
import { useState } from 'react';

import icon from 'public/assets/img/icon.svg'
import leftarrow from 'public/assets/img/leftarrow.svg'
import uparrow from 'public/assets/img/uparrow.svg'
import botharrow from 'public/assets/img/botharrow.svg'
import heart from 'public/assets/img/heart.svg'
import collection_icon from 'public/assets/img/collection_icon.svg'
import favorite from 'public/assets/img/favorite.png'

const Sidebar = () => {
 
  const [bg,setBg] = useState(true)
  const [open, setOpen] = useState(true);
  
  return (
    <> 
      <div className="sidebar-ptns">
        <div className="left">
          <Image src={icon} alt="options" />
          <h2 className='h4'>Options</h2>
        </div>
        <div className="right">
          <Image src={leftarrow} alt="options" />
        </div>
      </div>
      <div className="sidebar-prc">
        <div className="prc-typ">
        <ButtonGroup>
          <ToggleButton type="radio"  name="radio" onClick={()=>setBg(!bg)} style={{"backgroundColor":`${bg ? "white" : "#C3C3C3"}`}} >
            USDT
          </ToggleButton>
          <ToggleButton type="radio"  name="radio" onClick={()=>setBg(!bg)} style={{"backgroundColor":`${bg ? "#C3C3C3" : "white"}`}}>
            AVAX
          </ToggleButton>
        </ButtonGroup>
        </div> 
        <div className="info">         
            <div className="symbl">
              <p>Price</p>
              <span>(USDT)</span>
            </div>
            
              <div className="prc">
                <Form>
                  <Form.Control type="text" placeholder="Min" />
                  <span>to</span>
                  <Form.Control type="text" placeholder="Max" />
                </Form>
              </div>
              <div className="sell">
                <button>Sell</button>
              </div>
              
            
        </div>
      </div>
      <div className="sidebar-optns">
        <Form>
          <Form.Check  type="switch"  label="Has list price" />
          <Form.Check  type="switch"  label="Owned by create" />
          <Form.Check  type="switch"  label="Owned by create" />
          <Form.Check  type="switch"  label="Owned by create" />
        </Form>
        <Form>
          <Form.Check  type="switch"  label="Has open offer" />
          <Form.Check  type="switch"  label="Owned by create" />
          <Form.Check  type="switch"  label="Owned by create" />
          <Form.Check  type="switch"  label="Owned by create" />
        </Form>
      </div>
      <div className="sidebar-fvrts">
        <div className="top">
          <div>
            <Image src={heart} alt="favorites" />
            <span>Favorites</span>
          </div>
          <Image src={botharrow} alt="options" />
        </div>

      </div>
      <div className="sidebar-cllctns">
        <div className="top">
          <div>
            <Image src={collection_icon} alt="favorites" />
            <span>Collection</span>
          </div>
          <Image src={open ? uparrow : botharrow} alt="options"  onClick={() => setOpen(!open)}/>
        </div>
        <Collapse in={open}>
          <div className="fvrt-items" >
            <div className="item">
              <Image src={favorite} alt="favorite1" />
              <span>Bored Ape Yacht Club</span>
            </div>
            <div className="item">
              <Image src={favorite} alt="favorite2" />
              <span>Bored Ape Yacht Club</span>
            </div>
            <div className="item">
              <Image src={favorite} alt="favorite3" />
              <span>Bored Ape Yacht Club</span>
            </div>
            <div className="item">
              <Image src={favorite} alt="favorite4" />
              <span>Bored Ape Yacht Club</span>
            </div>
          </div>
        </Collapse>

      </div>
    </>
  )
}

export default Sidebar