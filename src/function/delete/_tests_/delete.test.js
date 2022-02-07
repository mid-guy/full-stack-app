import { renderHook } from '@testing-library/react-hooks'
import baseAPI from '../../../config/baseAPI';

describe("use the fetch", () => {
  it('Call API to get all posts', async () => {
    // equal response
    // baseAPI.delete = jest.fn().mockResolvedValue({
    //   data: {
    //     posts: posts
    //   }
    // })
    const { result , waitForNextUpdate } = renderHook(
      // () => useFetchData()
    )
  });
});