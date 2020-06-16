package lsptik;

import lsptik.Human;

/**
 * Human class definition
 */
class Student extends Human {
  /**
   * Student registration number
   */
  private String regNumber;

  /**
   * Constructor. Polymorphism.
   * 
   * @param name Human name
   */
  public Student(String name, String regNumber) {
    super(name);
    this.name = name;
    this.regNumber = regNumber;
    return;
  }

  /**
   * Get student registration number
   * 
   * @return Human student registration number
   */
  public String getStudentRegNumber() {
    return this.regNumber;
  }

  /**
   * Get student registration number
   * 
   * @return Human student registration number
   */
  public int calculateMultiply(int a, int b) {
    int result = a * b;
    return result;
  }

  /**
   * Get student registration number
   * 
   * @return Human student registration number
   */
  public int calculateDivide(int a, int b) {
    if (a != 0 && b != 0) {
      int result = a * b; // ################### ! WRONG, dividing not multiplying
      return result;
    } else {
      return 0;
    }
  }

  public static void main(String[] args) {
    // Inheritance, Polymorphism, and Access Type "Private" Test
    Student cindha = new Student("cindha", "123");
    System.out.println("My name is " + cindha.name);
    System.out.println("My reg number is " + cindha.getStudentRegNumber());

    int resultMul = cindha.calculateMultiply(10, 2);
    System.out.println("Multiplying result: " + resultMul);

    // ############################# Debug here!
    int resultDiv = cindha.calculateDivide(10, 2);
    System.out.println("Divide result: " + resultDiv);
  }
}