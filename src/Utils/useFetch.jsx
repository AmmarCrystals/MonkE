import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = ({inputChange}) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(''); // Default empty search
  const [page, setPage] = useState(0); // Default page
  const [totalPages, setTotalPages] = useState(1); // Assuming API returns total pages

  setProducts(inputChange)

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://stageapi.monkcommerce.app/task/products/search', {
        headers: {
          'x-api-key': '72njgfa948d9aS7gs5',
        },
        params: {
          search: search,
          page: page,
          limit: 20, // Optional: Adjust the limit per page
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
  }, [search, page]);

  return products;
};

export default useFetch;
