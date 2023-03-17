
import Image from 'next/image'

import all from 'public/assets/img/all.svg'
import art from 'public/assets/img/art.svg'
import game from 'public/assets/img/game.svg'
import music from 'public/assets/img/music.svg'
import photo from 'public/assets/img/photo.svg'
import populer from 'public/assets/img/populer.svg'
import sports from 'public/assets/img/sports.svg'


const Categories = () => {
    const categories = [
        {catgTitle : "All",imgUrl : all},
        {catgTitle : "Populer",imgUrl : populer},
        {catgTitle : "Photography",imgUrl : photo},
        {catgTitle : "Games",imgUrl : game},
        {catgTitle : "Domains",imgUrl : populer},
        {catgTitle : "Music",imgUrl : music},
        {catgTitle : "Sports",imgUrl : sports},
        {catgTitle : "Art",imgUrl : art}
      ]

    return (
        <>
            <div className='categories'>
                {categories.map((item,i)=>{
                    return(
                        <div className="category" key={i}>
                        <Image src={item.imgUrl} alt={item.catgTitle} width={40} />
                        <span>{item.catgTitle}</span>
                        </div>
                    )
                })}
            </div>
            <div className='more'>
                <div className="category">
                <span>...</span>
                </div>
            </div>
        </>
  )
}

export default Categories