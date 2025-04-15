import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list,searchQuery} = useContext(StoreContext);
  console.log("food_list", food_list);
  
  const filteredFoods = food_list.filter((item) => {
    const matchesCategory = category === "All" || item.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
  
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {/* {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })} */}
{filteredFoods.map((item) => (
  <FoodItem 
    key={item._id} 
    image={item.image} 
    name={item.name} 
    desc={item.description} 
    price={item.price} 
    id={item._id} 
  />
))}


      </div>
    </div>
  )
}

export default FoodDisplay
