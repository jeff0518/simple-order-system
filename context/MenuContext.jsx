import { useState, createContext } from "react";

export const MenuContext = createContext();

function MenuProvider(props) {
  const { children } = props;

  const [menuData, setMenuData] = useState([]);
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
