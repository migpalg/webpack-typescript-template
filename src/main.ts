class Person {
  constructor(public name: string, public age: number) {}

  public getNameAsync(): Promise<string> {
    return new Promise((resolve) => {
      resolve(this.name);
    });
  }
}

async function main() {
  const person = new Person('Miguel', 21);

  const name = await person.getNameAsync();

  console.log(`Person name: ${name}`);
}

main();
