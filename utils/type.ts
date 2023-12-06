export type FormEvent = React.FormEvent<HTMLFormElement>
export type MouseEvent = React.MouseEvent<HTMLButtonElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface EmployeeProps {
  numberId: string,
  name: string,
  jobTitle: string,
  employmentDate?: string,
  phone?: string,
  address?: string,
  dataUpdate?: boolean,
  setDataUpdate?: (prev: boolean) => void,
}