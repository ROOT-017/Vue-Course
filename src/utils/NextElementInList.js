const nextElementInList = (list, value) => {
  const currentTitleIndex = list.indexOf(value);
  const nextValueIndex = (currentTitleIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
