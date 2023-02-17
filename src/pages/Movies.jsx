import React from "react";
import { dummy } from "../movieDummy";
import Movie from "../components/Movie";

export default function Movies() {
  return (
    <div className="movies-container" style={{ fontSize: "32px" }}>
      {dummy.results.map((item) => {
        return <Movie item={item} key={item.id} />;
      })}
    </div>
  );
}
