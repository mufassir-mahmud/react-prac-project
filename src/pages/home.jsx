import React from "react";
import Nav from "../layout/navbar/Nav";

import FurnitureCArd from "../component/furniture/FurnitureCArd";

const Home = () => {
    const furnitureData = [ 
        {
           name : 'Living Romm Sofa',
           id: 201,
           price: 2000
        },
        {
           name : 'Living Romm Sofa',
           id: 202,
           price: 2000
        },
        {
           name : 'Living Romm Sofa',
           id: 203,
           price: 2000
        },
        {
           name : 'Living Romm Sofa',
           id: 204,
           price: 2000
        },
        {
           name : 'Living Romm Sofa',
           id: 205,
           price: 2000
        },
        {
           name : 'Living Romm Sofa',
           id: 206,
           price: 2000
        },
       
    ]
return(
    <>
    <Nav/>
    
    <div className="grid grid-cols-3 gap-4  mt-5 ">
    {
        furnitureData.map((a)=>{
            return(
                <FurnitureCArd
                name={a.name}
                id={a.id}
                price={a.price}
                
                ></FurnitureCArd>
            )
        })
    }
    </div>
    
    
    
    </>

)
}
export default Home
