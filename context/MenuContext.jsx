import { useState, createContext } from "react";

export const MenuContext = createContext();

function MenuProvider(props) {
  const { children } = props;

  const [menuData, setMenuData] = useState([]);

  return (
    <MenuContext.Provider value={{ menuData, setMenuData }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;
