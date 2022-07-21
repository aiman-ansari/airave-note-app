export const filterFunc = (note, { label, sort, date }) => {
  let sortedNote = note;

  if (sort && sortedNote) {
    sortedNote = sortedNote.filter((item) => item.priority === sort);
  }
  if (label && sortedNote) {
    sortedNote = sortedNote.filter((note) => note.label.includes(label));
    return sortedNote;
  }
  if (date === "new" && sortedNote) {
    sortedNote = [...sortedNote].reverse();
  }
  if (date === "old" && sortedNote) {
    sortedNote = [...sortedNote];
  }
  return sortedNote;
};
