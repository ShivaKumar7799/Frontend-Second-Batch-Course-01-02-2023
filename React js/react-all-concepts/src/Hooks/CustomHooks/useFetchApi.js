import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchApi(url) {
  const [data, setData] = useState([])
  const fetchData = (url) => {
    axios.get(url).then(resp => setData(resp.data))
  }
  useEffect(() => {
      fetchData(url)
  },[url])
  return {
    data
  }
}

export default useFetchApi