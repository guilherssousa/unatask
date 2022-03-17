import { useTasks } from "redux/store";

import { Container, Center, Title } from "@mantine/core";
import useStyles from "./styles";

import { TodoTask } from "components/TodoTask";
import { TaskInput } from "components/TaskInput";

const Home: React.FC = () => {
  const { classes } = useStyles();
  const tasks = useTasks();

  return (
    <div className={classes.wrapper}>
      <Container py={"xl"} px={"sm"}>
        <Center>
          <div className={classes.container}>
            <Center>
              <Title mb={"xl"}>Unatask</Title>
            </Center>
            <div>
              {tasks.map((task) => (
                <TodoTask task={task} key={task.id} />
              ))}
            </div>
            <TaskInput />
          </div>
        </Center>
      </Container>
    </div>
  );
};

export { Home };
