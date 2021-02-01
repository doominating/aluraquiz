/* eslint-disable max-len */
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
function Logo({ className }) {
  return (
    <img
      className={className}
      alt=""
      style={{
        height: "40%",
        objectFit: "cover",
        zIndex: "100",
        position: "absolute",
      }}
      src="/assets/nerdinho.png"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  width: 46%;
  margin-left: 25px;
  top: -180px;
  @media screen and (max-width: 500px) {
    width: 48%;
    margin-left: 70px;
    top: -221px;
  }
`;

export default QuizLogo;
