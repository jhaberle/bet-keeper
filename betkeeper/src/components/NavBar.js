import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.div``;

const NavBar = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="/">
            Bet Keeper
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">
                <span className="sr-only">(current)</span>
              </a>
              <a
                className="nav-item nav-link"
                href="/members
                  "
              >
                Portfolio
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
