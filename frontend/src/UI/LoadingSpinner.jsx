import React from "react";
import './LoadingSpinner.scss';

export const LoadingSpinner = () => {
  return (
    <div className="lds-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
