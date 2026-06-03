// 第1步 建立context
'use client'; // context與Provider元件是客戶端元件的應用

import { createContext, useState, useContext } from 'react';

interface CartContextType {}

// 使用 null 作為預設值，這是 React Context 的常見做法
const CartContext = createContext<CartContextType | null>(null);
// 設定context的名稱，這是會在react devtools(瀏覽器擴充)上面會看到，方便除錯用(可選的)
CartContext.displayName = 'CartContext';

// 第3-1步，建立Provider元件
export function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

// 自訂名稱鉤子(先包裝useContext+CartContext)
export const useCart = () => {
  // 從context值中解構出value中的值和切換函式
  const context = useContext(CartContext);

  if (!context) {
    throw Error('it must be used within CartProvider');
  }

  return context;
};
