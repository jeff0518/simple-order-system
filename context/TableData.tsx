import { useState, createContext } from "react";
import { ContextProviderProps } from "@/utils/type";

interface TableContextProps {
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  totalAmount: 0,
  setTotalAmount: () => {},
};

export const TableContext = createContext<TableContextProps>(defaultValue);

function TableProvider(props: ContextProviderProps) {
  const { children } = props;

  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <TableContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}
    </TableContext.Provider>
  );
}

export default TableProvider;
