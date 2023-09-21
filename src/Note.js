import React from "react";

const Note = ({ id, title, description, onType, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleTitleChange = (e) => {
    onType(id, "title", e.target.value);
  };

  const handleDescriptionChange = (e) => {
    onType(id, "description", e.target.value);
  };

  return (
    <div className="note">
      <input
        type="text"
        className="note__title"
        placeholder="Note Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="note__description"
        placeholder="Note description..."
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <div className="note__delete" onClick={handleDelete}>
        X
      </div>
    </div>
  );
};

export default Note;
