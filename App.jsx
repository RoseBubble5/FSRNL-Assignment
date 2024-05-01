import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <div>
      <ProductCard
        productName="Nike Air Max SC"
        price="5499"
        description="With its easy-going lines, heritage athletics look and, of course, visible Air cushioning, the Nike Air Max SC is the perfect finish to any outfit. The rich mixture of materials adds depth while making it a durable and lightweight shoe for everyday wear."
        imageUrl="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/01e956f0-7169-42c4-9f6b-7415be8b94dc/air-max-sc-shoes-FVn5sK.png"
      />
    </div>
  );
};

export default App;
