export const getChangeInPercentage = (higher, lower) => {
  let percentage = ((higher - lower) / lower) * 100;
  return percentage.toFixed(2);
};
