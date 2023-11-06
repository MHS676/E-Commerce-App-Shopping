import React from 'react'
import './List.scss'
import Card from '../Card/Card';

const List = () => {

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
    
    <div className='list'>
      {data?.map(item=>(
        <Card item = {item} key={item.id}/>
      ))}
    </div>
  )
}

export default List
