import { useState, createContext } from "react";
import { ShoppingCarProps, ContextProviderProps } from "@/utils/type";

interface ShoppingContextProps {
  dataBase: ShoppingCarProps[];
  setDataBase: React.Dispatch<React.SetStateAction<ShoppingCarProps[]>>;
}

const defaultValue = {
  dataBase: [],
  setDataBase: () => {},
};

export const ShoppingCarContext =
  createContext<ShoppingContextProps>(defaultValue);

function ShoppingCarProvider(props: ContextProviderProps) {
  const { children } = props;

  const [dataBase, setDataBase] = useState<ShoppingCarProps[]>([]);

  return (
    <ShoppingCarContext.Provider value={{ dataBase, setDataBase }}>
      {children}
    </ShoppingCarContext.Provider>
  );
}

export default ShoppingCarProvider;
