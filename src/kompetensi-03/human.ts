// human.ts
/**
 * Human module.
 * @packageDocumentation
 */

/**
 * EmployeeIdentity interface definition.
 */
export interface EmployeeIdentity {
  /**
   * Hold human employee Registration Number.
   */
  regNumber: string;
  /**
   * Hold human employee Department ID.
   */
  departmentId: string;
}

/**
 * Human class definition.
 */
class Human {
  /**
   * Hold human name.
   */
  public name: string;

  /**
   * Hold citizen registration number.
   */
  private citizenRegNumber: string;

  /**
   * Hold human citizenship.
   */
  private citizenship: string;

  /**
   * Hold employee identity.
   */
  private employeeIdentity: EmployeeIdentity;

  /**
   * Initialize human.
   *
   * @param name - The name for human.
   */
  constructor(name?: string) {
    this.name = name || "";
    this.citizenRegNumber = "";
    this.citizenship = "Indonesian";
  }

  /**
   * Update citizen registration number
   *
   * @param number - New registration number for human.
   * @return New registration number.
   */
  setCitizenRegNumber = (number: string): string => {
    this.citizenRegNumber = number;
    return this.citizenRegNumber;
  };

  /**
   * Get citizen registration number
   *
   * @return Human citizen registration number.
   */
  getCitizenRegNumber = (): string => {
    return this.citizenRegNumber;
  };

  /**
   * Get citizen registration number
   *
   * @return Human citizenship.
   */
  getCitizenship = (): string => {
    return this.citizenship;
  };

  /**
   * Update human full name
   *
   * @param firstName - Human first name.
   * @param lastName - Human last name.
   * @return Human full name.
   */
  setFullName = (...params: any[]): string => {
    if (params.length === 0) {
      let [firstName, lastName] = params;
      this.name = firstName + " " + lastName;
    } else {
      this.name = params.join(" ");
    }
    return this.name;
  };

  /**
   * Update human full name
   *
   * @param identity - New employee identity.
   * @return Human new employee identity.
   */
  setEmployeeIdentity(identity: EmployeeIdentity): EmployeeIdentity {
    this.employeeIdentity = identity;
    return this.employeeIdentity;
  }
}

export default Human;
