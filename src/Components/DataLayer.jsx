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

  return (
    <div>
      <h1>Product Search</h1>
      <ul>
        {products.map((product, index) => (
          <p key={index}>
            <h3>{product.title}</h3>
            <img style={{ height: 100 }} src={product.image.src} alt="" />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default DataLayer;
