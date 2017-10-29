export default (value, enums) =>
  enums.find(item => item.value == value).label;
