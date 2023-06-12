import { v4 as getId } from "uuid";

export const todoReducer = (state, { type, payload: { name, id } }) => {
  switch (type) {
    case "ADD": {
      return [...state, { name, id: getId(), isCompleted: false }];
    }
    case "DELETE": {
      return state.filter((item) => id !== item.id);
    }
    case "TOGGLE": {
      return state.map((item) =>
        id === item.id ? { ...item, isCompleted: !item.isCompleted } : item
      );
    }
    case "UPDATE": {
      return state.map((item) => (id === item.id ? { ...item, name } : item));
    }
    default:
      return state;
  }
};
