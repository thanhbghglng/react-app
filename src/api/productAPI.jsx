import instance from "./instance";
export const create = (product) => {
  const url = "/product";
  return instance.post(url, product);
};
export const list = () => {
  const url = "/product";
  return instance.get(url);
};
export const read = (id) => {
  const url = "/product/" + id;
  return instance.get(url);
};
export const remove = (id) => {
  const url = "/product/" + id;
  return instance.delete(url);
};
export const update = (product) => {
  const url = "/product/" + product.id;
  return instance.put(url, product);
};
