import Human, { EmployeeIdentity } from "./human";

let me: Human = new Human();
console.log("Hello, i'm", me.name ? me.name : "?");

me.name = "Adhe";
console.log("Once again. Hello, i'm", me.name);
me.setCitizenRegNumber("3578012301230123");
console.log("My NIK is", me.getCitizenRegNumber());
console.log("My citizenship is", me.getCitizenship());

// ##################################################################
// ###################################################### Inheritance

/**
 * Child class definition.
 */
class Child extends Human {
  /**
   * Hold hobby data.
   */
  protected hobby: string;

  /**
   * Get child's hobby.
   *
   * @return Child's hobby.
   */
  public getHobby(): string {
    return this.hobby;
  }

  /**
   * Set child's hobby.
   *
   * @param hobby - New child's hobby.
   * @return Child's hobby.
   */
  public setHobby(hobby: string): string {
    this.hobby = hobby;
    return this.hobby;
  }
}

let child: Child = new Child("Andi");
child.setCitizenRegNumber("3578111122223333");
console.log("\nHello, i'm", child.name);
console.log("My NIK is", child.getCitizenRegNumber());
console.log("My citizenship is", child.getCitizenship());

// ##################################################################
// ###################################################### Polymophism

class CheckingAccount {
  open(initialAmount: number) {
    // code to open account and save in database
  }
}

class BusinessCheckingAccount extends CheckingAccount {
  open(initialAmount: number) {
    if (initialAmount < 1000) {
      throw new Error(
        "Business accounts must have an initial deposit of 1.000 Euros"
      );
    }
    super.open(initialAmount);
  }
}

class PersonalCheckingAccount extends CheckingAccount {
  open(initialAmount: number) {
    if (initialAmount <= 0) {
      throw new Error(
        "Personal accounts must have an initial deposit of more than zero Euros"
      );
    }
    super.open(initialAmount);
  }
}

console.log("\nOpening business account...");
try {
  const businessAccount = new BusinessCheckingAccount();
  businessAccount.open(100);
  console.log("Success!");
} catch (err) {
  console.warn("Error:", err.message);
}

console.log("Opening personal account...");
try {
  const personalAccount = new PersonalCheckingAccount();
  personalAccount.open(100);
  console.log("Success!");
} catch (err) {
  console.warn("Error:", err.message);
}

// ##################################################################
// ###################################################### Overloading

console.log("\nHello, i'm", me.name);
me.setFullName("Adhe", "Widianjaya");
console.log("Hello, i'm", me.name);
me.setFullName("Adhe", "Budi", "Widianjaya");
console.log("Hello, i'm", me.name);

// ##################################################################
// ######################################################## Interface

let identity: EmployeeIdentity = {
  regNumber: "10001",
  departmentId: "1",
};
console.log("\nMy employee identity:", me.setEmployeeIdentity(identity));
