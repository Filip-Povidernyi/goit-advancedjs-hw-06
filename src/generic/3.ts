/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

class Person {
  private name: string;
}
class Pilot extends Person {
  getName(n: string) {
    console.log(`Name: ${n}`);
  };
};

let pilot = new Pilot;
pilot.getName('Fil');



export {}