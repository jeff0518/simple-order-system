import { ReactNode } from "react";
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

export interface MenuProps {
  productId: string;
  name: string;
  place: string;
  selling: string;
  imageUrl: string | ArrayBuffer;
  isActive: boolean;
}

export interface CheckInProps {
  checkInData: {
    name: string;
    numberId: string;
  };
}

export interface ShoppingCarProps {
  tableId: string;
  items: [{
    productId: string;
    name:string,
    quantity: number;
    selling:string;
  }];
  totalAmount:number;
}

export type ContextProviderProps = {
  children: ReactNode;
};