import React from "react";
import { Navigate } from "react-router";
import useStorage from "../../hooks/useStorage";

const Progress = ({ name, description, file }) => {
  const { progress, error } = useStorage(name, description, file);
  return (
    <>
      <h1>{progress}</h1>
      {error && <div className="bg-red-500 p-4">{error}</div>}
      {!error && <Navigate to="/my-account" />}
    </>
  );
};

export default Progress;
