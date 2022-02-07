import baseAPI from "../../config/baseAPI";

export default function deleteTodo(id, result) {
  const index = result.findIndex((item) => item._id === id);
  delete result[index].isEdit
  baseAPI.delete(`/api/posts/${id}`).then((res) => {
    // add local property " isEdit "
    return [
      ...result.slice(0, index),
      ...result.slice(index + 1),
    ];
  });
}