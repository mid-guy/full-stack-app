import { renderHook } from '@testing-library/react-hooks'
import useFetchData from '../useFetchData';
import baseAPI from '../../../config/baseAPI';
import { posts } from '../constant';

// https://betterprogramming.pub/test-custom-hooks-using-react-hooks-testing-library-a3a37031a9be
// https://levelup.gitconnected.com/testing-a-custom-react-hook-21ae732228b7
// https://www.moxio.com/blog/51/testing-asynchronous-behaviour-in-react
// https://atomizedobjects.com/blog/react/how-to-test-a-custom-react-hook/
// https://betterprogramming.pub/create-and-test-custom-react-hooks-6e0fa4656561
// https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
// https://blog.jimmydc.com/mock-asynchronous-functions-with-jest/#:~:text=Mocking%20is%20a%20fundamental%20skill,is%20not%20capable%20of%20running.

describe("use the fetch", () => {
  it('Call API to get all posts', async () => {
    // equal response
    baseAPI.get = jest.fn().mockResolvedValue({
      data: {
        posts: posts
      }
    })
    const { result , waitForNextUpdate } = renderHook(() => useFetchData())
    // mount
    expect(result.current.state).toStrictEqual([])
    // update
    await waitForNextUpdate();
    expect(result.current.state).toStrictEqual(posts)
    expect(baseAPI.get).toBeCalledWith('/api/posts');
  });

  // it('When get post success', async () => {
  //   // equal === result
  //   baseAPI.get = jest.fn().mockResolvedValue(
  //     {
  //       data: {
  //         success: true,
  //         posts: posts
  //       }
  //     }
  //   );
  //   const output = await callAPI();
  //   console.log(output);
  //   expect(output).toStrictEqual(posts);
  //   expect(baseAPI.get).toBeCalledWith('/api/posts');
  // });
});