import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ListType } from "../App";
import { deleteTodo, doneTodo } from "../store/todo";

type ListProps = {
  list: ListType;
};

const TodoList = ({ list }: ListProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { id, contents, done } = list;

  const doneList = (e: boolean) => {
    dispatch(doneTodo(id, e));
  };

  const deleteList = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoListDiv>
      <div>{contents}</div>
      <input type="checkbox" onChange={() => doneList(!done)} checked={done} />
      <button onClick={deleteList}>삭제</button>
    </TodoListDiv>
  );
};

export default TodoList;

const TodoListDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
