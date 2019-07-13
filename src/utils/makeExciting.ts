/**
 * Makes the passed message more exciting!
 * @param {string} message - The message you want to make exciting
 * @return {string} The message made exciting
 */
const makeExciting = (message: string): string => {
  if (!message) return '';
  return `${message}!`;
};

export default makeExciting;
