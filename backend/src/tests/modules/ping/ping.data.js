export const generatePings = (amount) => {
  const data = [];
  for (let i = 0; i < amount; i++) {
    data.push({ message: `Ping ${i + 1}` });
  }
  return data;
};
