// ErrorBoundary.jsx
import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true);
    console.error(error, errorInfo);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

export default ErrorBoundary;
