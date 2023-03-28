import "./styles.css";
import { useState } from 'react'
import { RxPaperPlane, RxPlus } from 'react-icons/rx'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CategoryInput } from "../CategoryInput";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
});

export function Form() {
  const [categories, setCategories] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      categories: [],
    }
  });

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="title"
          {...register("title")}
          placeholder="Titulo"
        />
        {errors.title && <span>{errors.title.message}</span>}
        <textarea
          placeholder="descrição"
          id="description"
          {...register("description")}
        />
        {errors.description && <span>{errors.description.message}</span>}
        <CategoryInput categories={categories} setCategories={setCategories} />

        <div className="newTaskCategory">
          {categories.map((category, i) => {
            return (
              <span key={i} onClick={() => handleRemoveCategory(category)}>
                {category}
                <RxPlus className="icone-add" />
              </span>
            );
          })}
          {categories.length === 0 && <small>Adicione pelo menos 1 categoria</small>}
        </div>
        <button type="submit" className="button-form">
          Criar
          <RxPaperPlane size={16} />
        </button>
      </form>
    </>
  );
}
