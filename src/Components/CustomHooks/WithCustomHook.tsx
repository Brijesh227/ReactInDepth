import React from 'react';
import customReactQuery from './customReactQuery';

const WithCustomHook: React.FC = () => {
  const { loading,error,data } = customReactQuery(1);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
        </div>
      )}
    </div>
  );
};

export default WithCustomHook;
