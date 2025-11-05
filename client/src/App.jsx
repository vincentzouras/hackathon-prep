import { useState } from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import TrashIcon from "@mui/icons-material/Delete";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>

      <Typography variant="h6">Hello</Typography>

      <IconButton onClick={() => alert("Icon button clicked!")}>
        <TrashIcon />
      </IconButton>
    </>
  );
}

export default App;
