//should return an array of strings ['a','b'...'z']

export const getAlphabet = () => {
  let alp = [];
  for (let i = 97; i <= 122; i++) {
    alp.push(String.fromCharCode(i));
  }
  return alp;
};
