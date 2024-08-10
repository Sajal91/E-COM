import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useEffect, useState } from 'react';

function App() {
  const [products, useData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:8080/home")
      .then(response => response.json())
      .then((products) => {
        useData(products)
        console.log(products)
      })
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center h-52 w-full mt-5">
          <div className="h-44 w-44 border-4 border-black">products {products[0].name}</div>
          <div className="h-44 w-44 border-4 border-black">orders </div>
          <div className="h-44 w-44 border-4 border-black">users </div>
          <div className="h-44 w-44 border-4 border-black">products</div>
        </div>
        <h1 style={{ textAlign: "center" }} className='mt-5'>Product Details</h1>
        <div id="products-display-pannel" className='flex justify-center mt-5'>
          {/* <a href="http://localhost:8080/new-product/">Add Product</a> */}
          <table className='bg-red-200'>
            <tr >
              <th>S no.</th>
              <th>Title</th>
              <th>Price</th>
              <th>Reviews</th>
            </tr>

            <tr>
              <td className='px-28'>1</td>
              <td className='px-28'>
                <img width="100rem" height="100rem" src="" alt="" />

              </td>
              <td className='px-28'>100</td>
              <td className='px-28'>4.5</td>
            </tr>

          </table>
        </div>
      </div>
    </>
  )
}

export default App
