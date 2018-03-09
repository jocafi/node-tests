import { ClassA } from "./class-a";

export class ClassB {
  constructor(name: string, private myA: ClassA) {
    console.log("Name: " + name);
    myA.show();
  }

  show() {
    console.log("show called on Class B.");
  }
}