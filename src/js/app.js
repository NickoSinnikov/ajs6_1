// TODO: write your code here
export default function orderByProps(obj, order) {
  const orderSort = [];
  for (let i = 0; i < order.length; i += 1) {
    if (order[i] in obj) {
      orderSort.push(order[i]);
    }
  }
  const result = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result.push({ key: prop, value: obj[prop] });
    }
  }
  result.sort((prev, next) => (prev.key > next.key ? 1 : -1));
  for (let i = 0; i < orderSort.length; i += 1) {
    const index = result.findIndex((item) => item.key === orderSort[i]);
    result.splice(i, 0, result.splice(index, 1)[0]);
  }
  return result;
}
