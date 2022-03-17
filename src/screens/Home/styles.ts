import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  wrapper: {
    position: "relative",
    zIndex: 4,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.sm,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    height: "100vh",
  },
  container: {
    width: 400,
  },
}));
