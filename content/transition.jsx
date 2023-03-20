import Image from 'next/image'

import leftarrow from 'public/assets/img/leftarrow.svg'
import rightarrow from 'public/assets/img/rightarrow.png'

const Transition = () => {
  return (
    <>
        <span><Image src={leftarrow} alt="arrow" /><Image src={leftarrow} alt="arrow" /></span>
        <span><Image src={leftarrow} alt="arrow"  /></span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span><Image src={rightarrow} alt="arrow" /></span>
        <span><Image src={rightarrow}  alt="arrow"/><Image src={rightarrow} alt="arrow" /></span>
    </>
  )
}

export default Transition