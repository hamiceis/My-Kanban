import "./styles.css"
import { useState } from 'react'
import { RxPlus } from 'react-icons/rx'

export function CategoryInput({ categories, setCategories }) {
  const [category, setCategory] = useState("");

  const handleAddCategory = () => {
    if (category.trim() === "") {
      return;
    }

    if (categories.includes(category)) {
      setCategory("");
    } else {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        list="category"
        placeholder="categoria"
        autoComplete="off"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <datalist id="category">
        {categories.map((category, i) => (
          <option key={category + i} value={category}>
            {category}
          </option>
        ))}
      </datalist>
      <button type="button" title="adicionar categoria" onClick={handleAddCategory}>
        <RxPlus size={24} color="white" />
      </button>
    </div>
  );
}