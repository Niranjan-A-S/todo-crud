import { memo, useCallback, useState } from "react";

export const TodoItem = memo(
  ({ name, isCompleted, id, onDelete, onToggle, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);

    const onDeleteAction = useCallback(() => {
      onDelete(id);
    }, [id, onDelete]);

    const onChange = useCallback(() => {
      onToggle(id);
    }, [id, onToggle]);

    const onEditAction = useCallback(() => {
      setIsEditing(!isEditing);
    }, [isEditing]);

    const onSaveAction = useCallback(() => {
      setIsEditing(!isEditing);
    }, [isEditing]);

    const onUpdateAction = useCallback(
      ({ target: { value } }) => {
        onUpdate({ id, name: value });
      },
      [id, onUpdate]
    );

    return (
      <div>
        {isEditing ? (
          <>
            <input type="checkbox" value={isCompleted} onChange={onChange} />
            <input type="text" value={name} onChange={onUpdateAction} />
            <button onClick={onSaveAction}>Save</button>
          </>
        ) : (
          <>
            <span
              style={{ textDecoration: isCompleted ? "line-through" : "unset" }}
            >
              {name}
            </span>
            <button onClick={onEditAction}>Edit</button>
          </>
        )}
        <button onClick={onDeleteAction}>Delete</button>
      </div>
    );
  }
);
