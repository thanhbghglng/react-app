import instance from "./instance";
export const createCategory = (category) => {
  const url = "/category";
  return instance.post(url, category);
};
export const listCategory = () => {
  const url = "/category";
  return instance.get(url);
};
export const readCategory = (id) => {
  const url = "/category/" + id;
  return instance.get(url);
};
export const removeCategory = (id) => {
  const url = "/category/" + id;
  return instance.delete(url);
};
export const updateCategory = (category) => {
  const url = "/category/" + category.id;
  return instance.put(url, category);
};
