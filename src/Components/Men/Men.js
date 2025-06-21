// Men.js
import React, { useState } from 'react';
import MenBreadCrumbs from './MenBreadCrumbs';
import MenLayout from './MenLayout';
import MenCard from './MenCard';
import { MenProduct } from './MenProduct';

function Men() {
  const [selectedRange, setSelectedRange] = useState(null);

  const filteredProducts = selectedRange
    ? MenProduct.filter((p) => p.price >= selectedRange.min && p.price <= selectedRange.max)
    : MenProduct;

  return (
    <div>
      <MenBreadCrumbs />
      <div className="flex">
        <div className="w-1/4 p-4">
          <MenLayout selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
        </div>
      </div>
    </div>
  );
}

export default Men;
