export type FormEvent = React.FormEvent<HTMLFormElement>
export type MouseEvent = React.MouseEvent<HTMLButtonElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface EmployeeProps {
  jobTitle: string;
  name: string;
  numberId: string;
}