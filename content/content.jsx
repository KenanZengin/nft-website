import Categories from "./categories";
import Cards from "./cards";
import Transition from "./transition";




const Content = () => {

  return (
    <>
      <div className="content-ctgrs">
        <Categories />
      </div>
      <div className="content-cards">
        <Cards />
      </div>
      <div className="content-trnstn">
        <Transition />
      </div>
      
    </>
  )
}

export default Content