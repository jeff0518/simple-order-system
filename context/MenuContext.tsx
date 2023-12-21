import { useState, createContext } from "react";
import { MenuProps, ContextProviderProps } from "@/utils/type";

interface MenuContextProps {
  menuData: MenuProps[];
  setMenuData: React.Dispatch<React.SetStateAction<MenuProps[]>>;
  dataUpdated: boolean;
  setDataUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
  menuData: [],
  setMenuData: () => {},
  dataUpdated: true,
  setDataUpdated: () => {},
};

export const MenuContext = createContext<MenuContextProps>(defaultValue);

function MenuProvider({ children }: ContextProviderProps) {
  const [menuData, setMenuData] = useState<MenuProps[]>([]);
  const [dataUpdated, setDataUpdated] = useState(true);

  return (
    <MenuContext.Provider
      value={{ menuData, setMenuData, dataUpdated, setDataUpdated }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;
