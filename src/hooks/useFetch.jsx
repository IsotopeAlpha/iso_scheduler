import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, token) =>{
    const [respond, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
      try{
        const res = await axios.get(url, {headers:{'Authorization':token}})
        setData(res.data.data)
      }catch(err){
        setError(err)
      }
      setLoading(false)
      };
      fetchData();
    }, [url])

  
    const reFetch = async () => {
    setLoading(true)
  try{
    const res = await axios.get(url)
    setData(res.data)
  }catch(err){
      setError(err)
  }
  setLoading(false) 
  };

  return {respond, loading, error, reFetch}
}

export default useFetch;