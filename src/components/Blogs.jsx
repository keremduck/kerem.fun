import React from "react";

export default function Blogs({ blog }) {
  return (
    <div className="container mt-5 ps-4">
      <h3>Blogs</h3>
      {blog.map((value) => (
        <div
          data-bs-theme="dark"
          class="card d-inline-flex mt-3 me-3 text-truncate"
          style={{
            backgroundColor: "#2B3035",
            width: "300px",
            height: "7rem",
          }}
        >
          <div class="card-body">
            <a className="text-decoration-none">
              <h4 class="card-title text-info">{value.blogName}</h4>
            </a>
            <p class="card-text text-truncate" style={{ maxWidth: "16rem" }}>
              {value.blogDesc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
