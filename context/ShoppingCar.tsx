import { useState, createContext } from "react";
import { ShoppingCarProps, ContextProviderProps } from "@/utils/type";

interface ShoppingContextProps {
  shoppingCar: ShoppingCarProps[];
  setShoppingCar: React.Dispatch<React.SetStateAction<ShoppingCarProps[]>>;
  dataUpdated: boolean;
  setDataUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
  shoppingCar: [],
  setShoppingCar: () => {},
  dataUpdated: true,
  setDataUpdated: () => {},
};

export const ShoppingCarContext =
  createContext<ShoppingContextProps>(defaultValue);

function ShoppingCarProvider(props: ContextProviderProps) {
  const { children } = props;

  const [shoppingCar, setShoppingCar] = useState<ShoppingCarProps[]>([]);
  const [dataUpdated, setDataUpdated] = useState(true);

  return (
    <ShoppingCarContext.Provider
      value={{ shoppingCar, setShoppingCar, dataUpdated, setDataUpdated }}
    >
      {children}
    </ShoppingCarContext.Provider>
  );
}

export default ShoppingCarProvider;
