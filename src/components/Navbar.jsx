import React from "react";

export default function Navbar({ discord }) {
  return (
    <div className="mt-4">
      <div className="container">
        <nav
          class="navbar bg-dark navbar-expand-lg bg-body-tertiary rounded shadow"
          data-bs-theme="dark"
          aria-label="Thirteenth navbar example"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample11"
              aria-controls="navbarsExample11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse d-lg-flex"
              id="navbarsExample11"
            >
              <a class="navbar-brand col-lg-3 me-0 p-2" href="#">
                kerem.fun
              </a>
              <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                <li class="nav-item">
                  <a class="nav-link disabled" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    About me
                  </a>
                </li>
              </ul>
              <div class="d-lg-flex col-lg-3 justify-content-lg-end p-2">
                {discord.map((value) =>
                  value.data.spotify ? (
                    <button class="btn btn-dark">
                      <i class="fa-brands fa-spotify"></i>{" "}
                      {value.data.spotify.song}
                    </button>
                  ) : (
                    <button class="btn btn-dark">
                      <i class="fa-brands fa-spotify"></i> I'm not listening
                      anything.
                    </button>
                  )
                )}{" "}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
