const ADDTODO = "todo/ADDTODO" as const;
const DELETETODO = "todo/DELETETODO" as const;

export const addTodo = (id: number, contents: string) => ({ type: ADDTODO, id, contents });
export const deleteTodo = (id: number) => ({ type: DELETETODO, id });

type Action = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo>;

type State = {
  id: number;
  contents: string;
};

const initialState: State[] = [];

function todoing(state: State[] = initialState, action: Action) {
  switch (action.type) {
    case ADDTODO:
      return [...state, { id: action.id, contents: action.contents }];
    case DELETETODO:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
}

export default todoing;
