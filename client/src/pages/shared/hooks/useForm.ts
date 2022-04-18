import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [input, setInput] = useState<Object>();

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

  return { input, handleInputChange };
};

export default useForm;
