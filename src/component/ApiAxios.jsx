import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function ApiAxios() {
    const [post, setPost] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadOrError, setLoadOrError] = useState("Loading.....");

    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts",
    });

    //=============== Using axios without async await ===============

    //   useEffect(() => {
    //     try {
    //       client
    //         .get()
    //         .then((res) => {
    //           console.log(res.data);
    //           setPost(res.data);
    //           setIsLoaded(true);
    //         })
    //         .catch((err) => {
    //           setLoadOrError("Error");
    //         });
    //     } catch (error) {
    //       setLoadOrError("Error");
    //     }
    //   }, []);

    //=============== Using axios with async await ===============

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await client.get();
                setPost(data.data);
                setIsLoaded(true);
            };
            fetchData();
        } catch (error) {
            setLoadOrError("Error");
        }
    }, []);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridGap: 20,
            }}
        >
            {isLoaded ? (
                post.map((p) => {
                    return <Card key={p.id} data={p} />;
                })
            ) : (
                <h1>{loadOrError}</h1>
            )}
        </div>
    );
}

export default ApiAxios;
