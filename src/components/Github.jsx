import React from "react";

export default function Github({ github }) {
  return github.map((value) => (
    <div className="container">
      <div
        class="card d-inline-flex mt-3 me-3 text-truncate"
        data-bs-theme="dark"
        style={{
          width: "300px",
          backgroundColor: "#2B3035",
          height: "7rem",
        }}
      >
        <div class="card-body">
          <a
            href={value.html_url}
            target="_blank"
            className="text-decoration-none"
          >
            <h4 class="card-title" style={{ color: "#FFF" }}>
              {value.name}
              <small className="float-end h6">
                {value.stargazers_count}
                <i class="fa-solid fa-star ms-1 h6"></i>
              </small>
            </h4>
          </a>
          <p class="card-text text-truncate" style={{ maxWidth: "16rem" }}>
            {value.description}
          </p>
        </div>
      </div>
    </div>
  ));
}
