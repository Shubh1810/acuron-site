"use client";
import React from "react";
import { ProductVariant } from "../lib/productData";

interface ProductSpecTableProps {
  variants: ProductVariant[];
  productName: string;
}

export default function ProductSpecTable({ variants, productName }: ProductSpecTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded">
      {/* Simple Header */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <h3 className="text-base font-semibold text-gray-800">Product Specifications</h3>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-white border-b border-gray-200">
              <th className="text-left py-2 px-3 font-medium text-gray-700 text-sm">Product Code</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700 text-sm">Product Name</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700 text-sm">Packing / Box</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700 text-sm">GST %</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700 text-sm">HSN Code</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant, index) => (
              <tr
                key={variant.productCode}
                className="border-b border-gray-100"
              >
                <td className="py-2 px-3 text-xs font-mono text-gray-800">
                  {variant.productCode}
                </td>
                <td className="py-2 px-3 text-sm text-gray-800">
                  {variant.productName}
                </td>
                <td className="py-2 px-3 text-sm text-gray-600">
                  {variant.packingPerBox}
                </td>
                <td className="py-2 px-3 text-sm text-gray-600">
                  {variant.gstPercentage}
                </td>
                <td className="py-2 px-3 text-xs font-mono text-gray-600">
                  {variant.hsnCode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
