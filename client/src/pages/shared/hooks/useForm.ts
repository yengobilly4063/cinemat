import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [input, setInput] = useState<Object>();
  const [addType, setAddType] = useState<"movie" | "serie">("movie");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(input);
  };

  const switchAddType = () => {
    addType === "movie" ? setAddType("serie") : setAddType("movie");
  };

  return { input, handleInputChange, switchAddType, addType };
};

export default useForm;
