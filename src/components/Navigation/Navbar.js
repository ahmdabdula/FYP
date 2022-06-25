import React from "react";
import SelectSearch from "react-select-search";
import Select from "react-select";

function Navigation(props) {
  const options = [
    { label: "glasses", value: "glasses" },
    { label: "cell phone", value: "cell phone" },
    { label: "laptop", value: "laptop" },
    { label: "sofa", value: "sofa" },
    { label: "lamp", value: "lamp" },
  ];
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            AR Based Advertisement
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  onClick={() => props.home()}
                  class="nav-link active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <Select
                options={options}
                onChange={(e) => {
                  console.log(e.value);
                  props.SetAdobject(e.value);
                  props.SetAdpop(true);
                }}
              />
              <button class="btn btn-outline-success" type="submit">
                Search for Items
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
