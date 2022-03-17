import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import { increment, decrement } from "redux/slices/counterSlice";

import styles from "./styles.module.scss";

const Counter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key == "N") {
        console.log("!");
        setIsOpen(true);
      }
    }

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return (
    <div>
      <h1>Unanote Todoista</h1>

      <p>
        Dica: utilize <kbd>Shift + N</kbd> para criar um novo item.
      </p>

      <div>
        <div className={styles.tasks}>
          {Array(7)
            .fill(0)
            .map((task, index) => (
              <div className={styles.task} key={`task-${index}`}>
                <label htmlFor={`task-input-${index}`}>
                  <input id={`task-input-${index}`} type="checkbox" />
                  <span>Study about Electron</span>
                </label>
                <button>Deletar tarefa</button>
              </div>
            ))}
        </div>
        {isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button onClick={() => setIsOpen(false)}>Fechar modal</button>
              <h1>Adicionar tarefa</h1>
              <form>
                <input type="text"></input>
                <button type="submit">Adicionar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Counter };
