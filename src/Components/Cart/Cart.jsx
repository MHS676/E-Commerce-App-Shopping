import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

        const data = [
    {
    id: 12345,
    img: "https://i.ebayimg.com/images/g/HncAAOSw5OVjWSzv/s-l1200.webp",
    title:" Men's Classic Blue Jeans",
    desc:" Men's Classic Blue Jeans",
    isNew: true,
    oldprice: 50,
    price: 39,
    },
    {
    id: 12345,
    img: "https://i.ebayimg.com/images/g/HncAAOSw5OVjWSzv/s-l1200.webp",
    img2:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peterchristian.co.uk%2Fclassic-denim-jeans%2F&psig=AOvVaw0qhcjvCPMHxtjau_h0E_U5&ust=1698858027652000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDmprzhoIIDFQAAAAAdAAAAABAE",
    title:" Men's Classic Blue Jeans",
    desc:" Men's Classic Blue Jeans",
    isNew: true,
    oldprice: 50,
    price: 39,
    },
];

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item=> (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
