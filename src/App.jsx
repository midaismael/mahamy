import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";
import { TodoContext } from "./assets/contexts/todoContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import TodosProvider from "./assets/contexts/todoContext";
import { ToastProvider } from "./assets/contexts/ToastContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});
const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "يسشي يش شي شي شي شي",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "يسشي يش شي شي شي شي",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "يسشي يش شي شي شي شي",
    isCompleted: false,
  },
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <ToastProvider>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#191b1f",
              height: "100vh",
              direction: "rtl",
            }}
          >
            <TodoList />
          </div>
        </ToastProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}
