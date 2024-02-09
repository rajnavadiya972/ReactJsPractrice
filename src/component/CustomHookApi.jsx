import React from "react";
import useFetch from "../customHook/useFetch";
import Card from "./Card";

const CustomHookApi = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: 20,
        }}
      >
        {data &&
          data.map((p) => {
            return <Card key={p.id} data={p} />;
          })}
      </div>
    </>
  );
};

export default CustomHookApi;
