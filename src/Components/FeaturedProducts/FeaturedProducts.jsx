import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';


const FeaturedProducts = ({type}) => {
const data = [
    {
    id: 12345,
    Image: "https://ae01.alicdn.com/kf/H39e6d1daefde46ce8edbe7260241c409n/2021-New-Mens-Fashion-Black-Blue-Jeans-Men-Casual-Slim-Stretch-Jeans-Classic-Denim-Pants-Trousers.jpg",
    title:" Men's Classic Blue Jeans",
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    Image: "https://ae01.alicdn.com/kf/H39e6d1daefde46ce8edbe7260241c409n/2021-New-Mens-Fashion-Black-Blue-Jeans-Men-Casual-Slim-Stretch-Jeans-Classic-Denim-Pants-Trousers.jpg",
    title:" Men's Classic Blue Jeans",
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    Image: "https://ae01.alicdn.com/kf/H39e6d1daefde46ce8edbe7260241c409n/2021-New-Mens-Fashion-Black-Blue-Jeans-Men-Casual-Slim-Stretch-Jeans-Classic-Denim-Pants-Trousers.jpg",
    title:" Men's Classic Blue Jeans",
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    Image: "https://ae01.alicdn.com/kf/H39e6d1daefde46ce8edbe7260241c409n/2021-New-Mens-Fashion-Black-Blue-Jeans-Men-Casual-Slim-Stretch-Jeans-Classic-Denim-Pants-Trousers.jpg",
    title:" Men's Classic Blue Jeans",
    oldprice: 50,
    price: 39,
    },
];


  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products </h1>
        <p>Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Beatae dolores, cupiditate 
        delectus facere in, iusto consequuntur ab tenetur 
        dolorem quasi dicta non dolore odio, neque ea 
        exercitationem? A sunt corrupti quod quae in facere 
        hic ullam maxime iste laboriosam animi repellendus 
        porro, repellat praesentium. Amet voluptatum 
        ratione ipsam rem sint?</p>
      </div>
      <div className="bottom">
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
