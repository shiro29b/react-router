import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/shiro29b`)
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);

  return (
    <div className=" text-center bg-orange-400  text-3xl ">
      Github Followers :{data.followers}
    </div>
  );
}

export const githubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/shiro29b`);

  return res.json();
};
