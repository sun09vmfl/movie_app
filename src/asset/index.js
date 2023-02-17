import data from '../movieDummy';
const { dummy } = data;

export function setdummy() {
  return dummy;
}

export default function getItemId(itemId) {
  return dummy.find(result => result.id === itemId);
}
