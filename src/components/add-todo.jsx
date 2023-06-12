import { memo, useCallback, useState } from "react";

export const AddTodo = memo(({ onAdd }) => {
  const [text, setText] = useState("");

  const onChange = useCallback(({ target: { value } }) => {
    setText(value);
  }, []);

  const onClick = () => {
    onAdd(text);
    setText("");
  };

  return (
    <label>
      Add todo: <input type="text" value={text} onChange={onChange} required />{" "}
      <button onClick={onClick}>Add</button>
    </label>
  );
});
