import React, { useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")
  const menuRef = useRef(null);
  return (
    <>
      {/* <Header/> */}
      {/* <ExploreMenu setCategory={setCategory} category={category}/> */}
      <Header scrollToMenu={() => menuRef.current.scrollIntoView({ behavior: "smooth" })} />
     

      <div ref={menuRef}> {/* Step 2: Attach ref here */}
        <ExploreMenu setCategory={setCategory} category={category} />
      </div>

      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
