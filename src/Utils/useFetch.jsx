import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import UserContext from '../Utils/UserContext';

const useFetch = (inputChange) => {
  const [products, setProducts] = useState("car");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(''); // Default empty search
  const [page, setPage] = useState(0); // Default page
  const [totalPages, setTotalPages] = useState(10); // Assuming API returns total pages

  const {isPopUpVisible,setIsPopUpVisible,searchParam, setSearchParam } = useContext(UserContext)

  console.log(products)

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response =await axios.get(`https://stageapi.monkcommerce.app/task/products/search?search=${searchParam}&page=1&limit=20`, {
      // const response = await axios.get('http://stageapi.monkcommerce.app/task/products/search?search=Hat&page=2&limit=1', {

        headers: {
          'x-api-key': '72njgfa948d9aS7gs5',
        },
        params: {
          search: search,
          page: page,
          limit: 10, // Optional: Adjust the limit per page
        },
      });

      setProducts(response.data || []); // Assuming API returns a 'products' array
      setTotalPages(response.data.totalPages || 1); // Assuming API returns 'totalPages'
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when search or page changes
  useEffect(() => {
    fetchProducts();
  }, [searchParam]);

  return products;
};

export default useFetch;
