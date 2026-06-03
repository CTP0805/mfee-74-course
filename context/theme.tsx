// 第1步 建立context
'use client';

import { createContext, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// 使用 null 作為預設值，這是 React Context 的常見做法
const ThemeContext = createContext<ThemeContextType | null>(null);
// 設定context的名稱，這是會在react devtools(瀏覽器擴充)上面會看到，方便除錯用(可選的)
ThemeContext.displayName = 'ThemeContext';

// 第3-1步，建立Provider元件
function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 宣告狀態
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // 切換佈景狀態的函式
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 導出Context和Provider元件(名稱導出)
export { ThemeContext, ThemeProvider };
