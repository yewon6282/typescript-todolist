import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import { RootState } from "./store";
import { addTodo } from "./store/todo";

export type ListType = {
  id: number;
  contents: string;
  done: boolean;
};

const App: React.FC = () => {
  const todo: ListType[] = useSelector((state: RootState) => state.todoing.list);
  const dispatch = useDispatch();

  const [data, setData] = useState<string>();

  const todoValue = (e: string) => {
    setData(e);
  };

  const addTodoList = () => {
    if (data !== undefined) {
      dispatch(addTodo(data, false));
    }
    setData("");
  };

  return (
    <>
      <input type="text" onChange={(e) => todoValue(e.target.value)} value={data || ""} />
      <button onClick={addTodoList}>추가</button>
      {todo.length > 0 && todo.map((list) => <TodoList key={list.id} list={list} />)}
    </>
  );
};

export default App;
