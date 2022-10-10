import axios from "axios";

export const getPostsRequest = async () => await axios.get("http//:localhost/api/post");

export const getPostRequest = async (id) => await axios.get("http//:localhost/api/post/" + id);

export const deletePostRequest = async (id) =>
  await axios.delete("http//:localhost/api/post/" + id);

export const createPostRequest = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("http//:localhost/api/post", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  const form = new FormData();
  for (let key in newPostFields) {
    form.append(key, newPostFields[key]);
  }
  return axios.put("http//:localhost/api/post/" + id, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
