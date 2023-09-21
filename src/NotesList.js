const NotesList = ({ notes, onType, onDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          onType={onType}
          onDelete={onDelete}
  
              </div>
            );
    
        
        export default NotrList;
        
