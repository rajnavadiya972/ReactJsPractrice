import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [post, setPost] = useState(null);

    const client = axios.create({
        baseURL: url
    });

    useEffect(() => {
        try {
            const fetchData = async () => {
                console.log("1");
                const data = await client.get();
                console.log("2");
                setPost(data.data);
                console.log("3");
            };
            fetchData();
        } catch (error) {
            console.log("Error..");
        }
    }, [url]);
    console.log("4");
    return [post];
};

export default useFetch;
