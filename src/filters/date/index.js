export default (value) => {
  const time = new Date(value);
  return `${time.getFullYear()}Y ${time.getMonth() + 1}M ${time.getDate()}D`;
};
