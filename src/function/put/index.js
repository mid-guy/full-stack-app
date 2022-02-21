import baseAPI from "../../config/baseAPI";

export default async function putTodo(index, result) {
    delete result[index].isEdit
    try {
      const response = await baseAPI.put(`/api/posts/${id}`, result[index])
      // return response.data?.post
      // add local property " isEdit "
      return [
        ...result.slice(0, index),
        { ...response.data.post, isEdit: false },
        ...result.slice(index + 1),
      ]
    }
    catch (error) {
      return error.response.data.message
    }
};