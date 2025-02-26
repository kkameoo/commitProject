import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryButton = styled.button`
  padding: 12px 20px;
  background: ${(props) => (props.active ? "#007bff" : "#ddd")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const OptionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  white-space: nowrap; /* 버튼들이 한 줄에 유지되도록 함 */
`;

const OptionButton = styled.button`
  padding: 8px 12px;
  background: ${(props) => (props.active ? "#ff4d4d" : "#eee")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const categories = [
  {
    id: 1,
    title: "나이",
    name: "age",
    value: ["20대 초반", "20대 후반", "30대 초반", "30대 후반"],
  },
  // 직업: ["법조계", "의료계", "IT", "예술", "공무원", "자영업"],
  // 결혼여부: ["초혼", "재혼"],
  // 취미: ["운동", "독서", "게임", "등산", "여행", "바이크", "요리"],
  { id: 2, title: "성별", name: "gender", value: ["남성", "여성"] },
];

function AdminFilter({ selectedFilters, setSelectedFilters }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category.name ? null : category.name);
  };
  const toggle = () => {
    console.log(categories);
  };

  const toggleOption = (category, value) => {
    const newFilters = { ...selectedFilters };
    if (newFilters[category]?.includes(value)) {
      newFilters[category] = newFilters[category].filter(
        (item) => item !== value
      );
    } else {
      newFilters[category] = [...(newFilters[category] || []), value];
    }
    setSelectedFilters(newFilters);
  };

  return (
    <FilterContainer>
      {/* 1차 선택 (카테고리) */}
      <CategoryWrapper>
        {/* {categories?.map((category) => (
          <CategoryButton
            key={category.id}
            active={activeCategory === category}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </CategoryButton>
        ))} */}
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            active={activeCategory === category.name}
            onClick={() => toggleCategory(category)}
          >
            {category.title}
          </CategoryButton>
        ))}
      </CategoryWrapper>

      <button onClick={() => toggle()} />

      {/* 2차 선택 (세부 옵션) */}
      {activeCategory && (
        <OptionsWrapper>
          {categories[activeCategory]?.map((option) => (
            <OptionButton
              key={option}
              active={selectedFilters[activeCategory]?.includes(option)}
              onClick={() => toggleOption(activeCategory, option)}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsWrapper>
      )}
    </FilterContainer>
  );
}

export default AdminFilter;
