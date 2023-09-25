import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoaderComponent = () => {
  return (
    <article>
      <div
        style={{
          height: "150px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              {" "}
              <a href="/" style={{ color: "inherit" }}>
                Home
              </a>{" "}
            </li>
            <li className="breadcrumb-item" aria-current="page">
              {" "}
              <a href="/blog" style={{ color: "#ffb11f" }}>
                Noticias
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div style={{ width: '90%' }}>
        <Skeleton height={700} /> 
        <Skeleton  count={4}  height={30} />  
      </div>
      <div style={{ marginTop: '50px', width: '90%' }}>
        <Skeleton height={300} /> 
        <Skeleton  count={4}  height={30} />  
      </div>
    </article>
  );
};
