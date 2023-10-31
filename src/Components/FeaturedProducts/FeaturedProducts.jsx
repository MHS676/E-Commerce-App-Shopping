import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';


const FeaturedProducts = ({type}) => {
const data = [
    {
    id: 12345,
    img: "https://i.ebayimg.com/images/g/HncAAOSw5OVjWSzv/s-l1200.webp",
    title:" Men's Classic Blue Jeans",
    isNew: true,
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    img: "https://i.ebayimg.com/images/g/HncAAOSw5OVjWSzv/s-l1200.webp",
    img2:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peterchristian.co.uk%2Fclassic-denim-jeans%2F&psig=AOvVaw0qhcjvCPMHxtjau_h0E_U5&ust=1698858027652000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDmprzhoIIDFQAAAAAdAAAAABAE",
    title:" Men's Classic Blue Jeans",
    isNew: true,
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    img: "https://i.ebayimg.com/images/g/HncAAOSw5OVjWSzv/s-l1200.webp",
    title:" Men's Classic Blue Jeans",
    isNew: true,
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    img: "https://i.ebayimg.com/images/g/HncAAOSw5OVjWSzv/s-l1200.webp",
    title:" Men's Classic Blue Jeans",
    isNew: true,
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
        ratione ipsam rem sint.</p>
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
