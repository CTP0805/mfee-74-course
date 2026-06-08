'use client';

import { useState } from 'react';

export default function MyChecklist() {
  const [pets, setPets] = useState([
    {
      id: 1,
      label: '狗',
      checked: false,
    },
    {
      id: 2,
      label: '貓',
      checked: false,
    },
    {
      id: 3,
      label: '金魚',
      checked: false,
    },
  ]);

  // 處理核取方塊的勾選
  const onToggleChecked = (petId: number) => {
    const nexPets = pets.map((pet) => {
      // 對符合條件的物件作修改
      if (pet.id === petId) {
        // 用展開運算子進行複製物件，並修改它的checked值(true <--> false
        return { ...pet, checked: !pet.checked };
      } else {
        return pet;
      }
    });
    // 設定回狀態
    setPets(nexPets);
  };

  return (
    <>
      <h2>核取方塊群組</h2>
      <hr />
      {pets.map((pet) => {
        return (
          <label key={pet.id}>
            <input
              type="checkbox"
              checked={pet.checked}
              value={pet.label}
              onChange={() => {
                onToggleChecked(pet.id);
              }}
            />
            {pet.label}
          </label>
        );
      })}
    </>
  );
}
