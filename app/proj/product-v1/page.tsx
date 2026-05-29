'use client';

// 導入時就自動轉為JS資料格式
import products from './_data/products.json';
// 導入next提供的有自動圖片最佳化的元件
import Image from 'next/image';
// 導入css樣式
import './_styles/product-table.css';

export default function ProductTablePage() {
  // console.log(products);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}
