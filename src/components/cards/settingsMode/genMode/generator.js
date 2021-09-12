import { fiboNum, power2, genMethod, CardType } from "../../constants";

export default function cardGenerator({ name, method, num }) {
  const array = [];
  let sample = [];
  let newName = "";
  if (method === genMethod.fibo) {
    sample = fiboNum;
  } else if (method === genMethod.two) {
    sample = power2;
  } else {
    sample = [{ name: "gen ERROR", type: CardType.playCard }];
  }
  if (!name) {
    newName = method;
  }
  for (let i = 1; i <= num; i += 1) {
    array.push({
      type: CardType.playCard,
      name: newName,
      value: String(sample[i - 1]),
    });
  }
  return array;
}
