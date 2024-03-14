import React, { useState } from "react";
import Toast from "./Toast";

const ToastContainer = () => {
  return (
    <div className="absolute bottom-4 right-4">
      <Toast message="Success Message" />
    </div>
  );
};

export default ToastContainer;
