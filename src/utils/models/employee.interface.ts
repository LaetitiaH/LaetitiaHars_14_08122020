export interface Employee {
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  startDate: Date | null;
  street: string;
  city: string;
  zipCode: string | null;
  state: string;
  department: string;
}

export interface SelectData {
  value: string;
  label: string;
}

export interface InputData {
  name: string;
  label: string;
}
