const ADDTODO = "todo/ADDTODO" as const;
const DONETODO = "todo/DONETODO" as const;
const DELETETODO = "todo/DELETETODO" as const;

export const addTodo = (contents: string, done: boolean) => ({ type: ADDTODO, contents, done });
export const doneTodo = (id: number, done: boolean) => ({ type: DONETODO, id, done });
export const deleteTodo = (id: number) => ({ type: DELETETODO, id });

type Action = ReturnType<typeof addTodo> | ReturnType<typeof doneTodo> | ReturnType<typeof deleteTodo>;

type State = {
  id: number;
  contents: string;
  done: boolean;
};

type ListState = {
  count: number;
  list: State[];
};

const initialState: ListState = { count: 0, list: [] };

function todoing(state: ListState = initialState, action: Action) {
  switch (action.type) {
    case ADDTODO:
      const addCount = state.count + 1;
      return { count: addCount, list: [...state.list, { id: addCount, contents: action.contents, done: action.done }] };
    case DONETODO:
      const copyList = [...state.list];
      console.log(copyList);
      for (let i = 0; i < copyList.length; i++) {
        if (copyList[i].id === action.id) {
          copyList[i].done = action.done;
        }
      }
      return { count: state.count, list: copyList };
    case DELETETODO:
      return { count: state.count, list: state.list.filter((el) => el.id !== action.id) };
    default:
      return state;
  }
}

export default todoing;
