import putTodo from '../../put';
import { posts } from '../../fetchData/constant';
import baseAPI from '../../../config/baseAPI';

describe("Test action cancel editing todo", () => {
  it('Success editing todo', async () => {
    const _id = '61d71834451d2f31559fc225';
    const title = 'new todo edited';
    const index = posts.findIndex((item) => item._id === _id);
    const newTodo = { ...posts[index], title: title };
    // equal response
    baseAPI.put = jest.fn().mockResolvedValue({
      data: {
        post: newTodo
      }
    });
    const result = await putTodo(_id, posts)
    expect(result).toStrictEqual(newTodo);
    expect(baseAPI.put).toBeCalledWith(`/api/posts/${_id}`);
  });
  it('Failed editing todo', async () => {
    const _id = '61d71834451d2f31559fc225';
    // equal response
    baseAPI.put = jest.fn().mockRejectedValue({
      response: {
        data: {
          message: 'Title failed'
        }
      }
    });
    const result = await putTodo(_id, posts)
    expect(result).toStrictEqual('Title failed');
    expect(baseAPI.put).toBeCalledWith(`/api/posts/${_id}`);
  });
});