
export default function cancelTodo(id, result) {
  const index = result.findIndex((item) => item._id === id)
  return [
    ...result.slice(0, index),
    { ...result[index], isEdit: false },
    ...result.slice(index + 1),
  ];
}