import { useEffect, useState } from "react"
import baseAPI from "../config/baseAPI"
const useFetch = ({ method, params, query, middleware }) => {
  const [ result, setResult] = useState([])
  
  const fetchData = () => {
    setTimeout(() => {
      baseAPI[method](`/api/${query}`).then((res) => {
        return setResult(
          middleware(res.data?.[params])
        );
      });
    }, 1000)
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ method, params, query ])
  return { result, setResult }
}
export default useFetch