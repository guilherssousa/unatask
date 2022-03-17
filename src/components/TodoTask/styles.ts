import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    width: 20,
    height: 20,
    "&:hover": {
      color: "#ee5555",
    },
  },
}));
