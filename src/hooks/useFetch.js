import { useEffect, useState } from "react"
import baseAPI from "../config/baseAPI"

const useFetch = ({ method, params, query, middleware }) => {
  const [ result, setResult] = useState({
    value: [],
    isLoading: true
  })

  const fetchData = () => {
    if ( result.isLoading === false ) {
      setResult({...result, isLoading: true})
    }
    setTimeout(() => {
      baseAPI[method](`/api/${query}`).then((res) => {
        return setResult({
          value: middleware(res.data?.[params]),
          isLoading: false
        })
      });
    }, 1500)
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ method, params, query ])
  return { result, fetchData }
}
export default useFetch