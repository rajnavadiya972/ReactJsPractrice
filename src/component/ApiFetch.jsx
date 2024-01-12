import React, { useEffect, useState } from "react";
import Card from "./Card";

function ApiFetch() {
  const [post, setPost] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadOrError, setLoadOrError] = useState("Loading.....");

  //=============== Using Fetch with async await ============

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoadOrError("Loading.....");
  //       const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const posts = await data.json();
  //       setPost(posts);
  //       setIsLoaded(true);
  //     } catch (err) {
  //       setLoadOrError("Error");
  //     }
  //   };
  //   fetchData();
  // }, []);

  //=============== Using Fetch without async await ===============

  useEffect(() => {
    const fetchData = () => {
      setLoadOrError("Loading.....");
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.json();
        })
        .then(
          (data) => {
            const posts = data;
            setPost(posts);
            setIsLoaded(true);
          },
          (err) => {
            setLoadOrError("Error1");
          }
        )
        .catch((err) => {
          setLoadOrError("Error2");
        });
    };
    fetchData();
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

export default ApiFetch;
