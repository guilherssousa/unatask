import { ChangeEvent, useState } from "react";

import { TextInput, Button } from "@mantine/core";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/todoSlice";

const TaskInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    console.log("Hello world");
    dispatch(
      addTask({
        id: Math.random(),
        label: inputValue,
        done: false,
      })
    );

    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <TextInput
        mt="lg"
        placeholder="Nome da sua tarefa"
        size="lg"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        fullWidth={true}
        mt={"sm"}
        size={"md"}
        onClick={handleAddTask}
        disabled={!inputValue}
      >
        Adicionar
      </Button>
    </div>
  );
};

export { TaskInput };
