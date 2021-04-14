import { useState, useEffect } from "react";

const API= "http://localhost:3000/initialState";
const useInitialState = () =>{
    const [videos, setVideos]= useState([]);
    const [categories, setCategories]= useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {setVideos(data);
                        setCategories(Object.keys(data));
                    });
    }, []);
    return [videos, categories];
}
export default useInitialState;