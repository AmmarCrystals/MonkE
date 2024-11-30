import React, { useEffect, useState } from 'react';

const DataLayer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('x-api-key', '72njgfa948d9aS7gs5');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://stageapi.monkcommerce.app/task/products/search?search=Hat&page=2&limit=2',
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the API returns JSON
      })
      .then((result) => {
        setProducts(result); // Assuming 'result' contains the products array
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  console.log(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // return (
  //   <div className='flex gap-8 bg-gray-100 items-center justify-center pt-10 ' >
     
     

  //       {products.map((product, index) => (
  //         <div className="flex flex-col gap-2 " key={index}>
  //           <img style={{ height: 100 }} src={product.image.src} alt="" />
  //           <h3>Name : {product.title}</h3>
  //           <p>Price: {product.price}</p>
  //           <p>Description: {product.description}</p>
  //         </div>
  //       ))}
  //   </div>
  // );
};

export default DataLayer;
