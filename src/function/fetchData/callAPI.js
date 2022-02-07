import axios from "axios";

import baseAPI from "../../config/baseAPI";

// async function callAPI() {
//   try {
//     const result = await baseAPI.get('/api/posts');
//     return result.data.posts
//   } catch (err) {
//     return 2;
//   }
// }

async function callAPI() {
  const result = await baseAPI.get('/api/posts');
  return result.data.posts
}

export default callAPI