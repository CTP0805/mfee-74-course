// 第1步 建立context
'use client'; // context與Provider元件是客戶端元件的應用

import { createContext, useState, useContext } from 'react';

interface UserContextType {}

// 使用 null 作為預設值，這是 React Context 的常見做法
const UserContext = createContext<UserContextType | null>(null);
// 設定context的名稱，這是會在react devtools(瀏覽器擴充)上面會看到，方便除錯用(可選的)
UserContext.displayName = 'UserContext';

// 第3-1步，建立Provider元件
export function UserProvider({ children }: { children: React.ReactNode }) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}

// 自訂名稱鉤子(先包裝useContext+UserContext)
export const useUser = () => {
  // 從context值中解構出value中的值和切換函式
  const context = useContext(UserContext);

  if (!context) {
    throw Error('it must be used within UserProvider');
  }

  return context;
};
