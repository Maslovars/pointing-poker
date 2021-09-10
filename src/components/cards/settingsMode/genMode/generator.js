import { fiboNum, power2, genMethod, CardType } from "../../constants";

export function cardGenerator({name, method, num}) {
  const array = [];
  let sample = [];
  method === genMethod.fibo ? sample = fiboNum :
  method === genMethod.two ? sample = power2: sample = [{ name: 'gen ERROR', type: CardType.playCard }];
  if (!name) { name = method }
  for (let i = 1; i <= num; i += 1) {
    array.push({ type: CardType.playCard, name, value: sample[i - 1]})
  } 
  return array;
}