import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { addTodo, deleteTodo } from "./store/todo";

function App() {
  const todo = useSelector((state : RootState) => state.todoing)
  const dispatch = useDispatch();

  const [data, setData] = useState<string>();
  const [count, setCount] = useState<number>(1);

  const todoValue = (e: string) => {
    setData(e);
  };

  const addTodoList = () => {
    if (data !== undefined) {
      dispatch(addTodo(count, data))
    }
    setCount(count + 1);
    setData("");
  };

  const deleteTodoList = (e : number) => {
    dispatch(deleteTodo(e));
  }

  return (
    <>
      <input type="text" onChange={(e) => todoValue(e.target.value)} value={data || ""} />
      <button onClick={addTodoList}>추가</button>
      {todo.map((list) => (
        <div key={list.id} onClick={() =>deleteTodoList(list.id)}>{list.contents}</div>
      ))}
    </>
  );
}

export default App;
