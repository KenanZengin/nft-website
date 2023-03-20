'use client'

import Link from 'next/link'
import Image from 'next/image'
import {Dropdown,DropdownButton,Form} from 'react-bootstrap'
import Canvas from './canvas'

import search from 'public/assets/img/search.svg'
import all from 'public/assets/img/all.svg'
import art from 'public/assets/img/art.svg'
import game from 'public/assets/img/game.svg'
import music from 'public/assets/img/music.svg'
import photo from 'public/assets/img/photo.svg'
import populer from 'public/assets/img/populer.svg'
import sports from 'public/assets/img/sports.svg'
import options from 'public/assets/img/icon.svg'


const Categories = () => {




    const categories = [
        {catgTitle : "All",imgUrl : all},
        {catgTitle : "Populer",imgUrl : populer},
        {catgTitle : "Other",imgUrl : photo},
        {catgTitle : "Games",imgUrl : game},
        {catgTitle : "Domains",imgUrl : populer},
        {catgTitle : "Music",imgUrl : music},
        {catgTitle : "Sports",imgUrl : sports},
        {catgTitle : "Art",imgUrl : art}
      ]

    return (   
        <div className='categories-populer'>

            <div className="filtersarea">
                <div className='category options'>
                    <Canvas />
                </div>
                
                <div className="filtersearch">
                    <Form>
                        <Form.Control type="text" placeholder="Search by creator, collectible or collection" />
                    </Form>
                    <Image src={search} alt="search" />
                </div>
            </div>
            
            <ul className=" dropMenu">
                <DropdownButton id="dropdown-basic-button" title="All">
                        {categories.map((item,i)=>(
                            <Dropdown.Item href='#'  key={i}>
                                <li className="category">
                                    <Link href="#">
                                        <Image src={item.imgUrl} alt={item.catgTitle} width={30} />
                                        <span>{item.catgTitle}</span>
                                    </Link>
                                </li>
                            </Dropdown.Item>
                        ))}
                </DropdownButton>
            </ul>
            
            <ul className="categories">
                <li className='category options'>
                    <Link href="#">
                        <Image  src={options} alt="options"/>
                        <span>Options</span>
                    </Link>
                </li>
                {categories.map((item,i)=>{
                    return(
                        <li className="category" key={i}>
                            <Link href="#">
                                <Image src={item.imgUrl} alt={item.catgTitle} width={30} />
                                <span>{item.catgTitle}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <ul className='more'>
                <li className="category">
                    <Link href="#">
                    <Dropdown>
                        <Dropdown.Toggle >
                            <span>...</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#"><Image src={populer} alt="/"/>  Popular</Dropdown.Item>
                            <Dropdown.Item href="#"><Image src={populer} alt="/"/> Domains</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                    </Link>
                </li>
            </ul>

        </div> 
  )
}

export default Categories