package lsptik;

/**
 * Human class definition
 */
class Human {
  /**
   * Human name
   */
  public String name;

  /**
   * Constructor.
   * 
   * @param name Human name
   */
  public Human(String name) {
    this.name = name;
    return;
  }

  public static void main(String[] args) {
    Human budi = new Human("budi");
    System.out.println("My name is " + budi.name);
  }
}