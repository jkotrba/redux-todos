import { ADD_TODO, TOGGLE_TODO } from '../actions'

const someTodos = [
  { id: 1, text: 'do work', comments: 'Quit slackin!', completed: false },
  {
    id: 2,
    text: 'go shopping',
    comments: 'Buy all the things',
    completed: false
  },
  { id: 3, text: 'workout', completed: false },
  { id: 4, text: 'call mom', completed: false }
];

const getNextId = todos => {
  let next = 1;
  if (todos && todos.length > 0) {
    const max = todos.reduce(
      (acc, todo) => (todo.id > acc ? todo.id : acc),
      next
    );
    next = max + 1;
  }
  return next;
};

function todos(state = someTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: getNextId(state),
          text: action.todo.text,
          comments: action.todo.comments,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default todos
