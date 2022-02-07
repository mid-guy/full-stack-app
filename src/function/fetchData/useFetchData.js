import { useState, useEffect } from "react";
import baseAPI from "../../config/baseAPI";

export default function useFetchData() {
    const [ state, setState ] = useState([]);
    const callAPI = () => {
        baseAPI.get('/api/posts')
            .then((res) => setState(res.data?.posts))
            .catch((err) => console.log(err))
    }
    useEffect(() => { 
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return { state }
}
