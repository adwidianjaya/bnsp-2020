package lsptik;

import lsptik.Human;

/**
 * Human class definition
 */
class Lecturer extends Human {
  /**
   * Lecturer registration number
   */
  private String employeeRegNumber;

  /**
   * Constructor. Polymorphism.
   * 
   * @param name Human name
   */
  public Lecturer(String name, String employeeRegNumber) {
    super(name);
    this.name = name;
    this.employeeRegNumber = employeeRegNumber;
    return;
  }

  /**
   * Constructor. Overloading.
   * 
   * @param name Human name
   */
  public Lecturer(String name) {
    super(name);
    this.name = name;
    this.employeeRegNumber = "-";
    return;
  }

  /**
   * Get employee registration number
   * 
   * @return Human employee registration number
   */
  public String getEmployeeRegNumber() {
    return this.employeeRegNumber;
  }

  public static void main(String[] args) {
    // Inheritance and Polymorphism Test
    Lecturer budi = new Lecturer("budi", "123");
    System.out.println("My name is " + budi.name);
    System.out.println("My employee reg number is " + budi.employeeRegNumber);

    // Overloading and Access Type "Private" Test
    Lecturer doni = new Lecturer("doni");
    System.out.println("My name is " + doni.name);
    System.out.println("My employee reg number is " + doni.getEmployeeRegNumber());
  }
}