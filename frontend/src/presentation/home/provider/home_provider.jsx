import { useEffect, useState } from 'react';
import axios from 'axios';

const useHomeProvider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHomeData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8080/api/home'); // Change URL as needed
      setData(response.data);
    } catch (err) {
      console.error('Error fetching home data:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return { data, loading, error };
};

export default useHomeProvider;
