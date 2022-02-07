import cancelTodo from '../../cancel';
import { posts } from '../../fetchData/constant';

describe("Test action cancel editing todo", () => {
  it('Set editing todo',  () => {
    const _id = '61d71834451d2f31559fc225';
    const _posts = posts.map(item => {
      if ( item._id === _id ) {
        return {...item, isEdit: false}
      }
      return {...item, isEdit: false}
    });
    const index = _posts.findIndex((item) => item._id === _id);
    expect(cancelTodo(_id, _posts)).toStrictEqual([
      ..._posts.slice(0, index),
      { ..._posts[index], isEdit: false },
      ..._posts.slice(index + 1),
    ])
  });
});