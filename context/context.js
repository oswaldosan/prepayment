import React, { useContext, createContext, useState } from "react";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [mainPackage, setPackage] = useState("");
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
  });
  const [addOns, setAddons] = useState([]);

  const values = React.useMemo(
    () => ({
      addOns,
      setAddons,
      guests,
      setPackage,
      setGuests, // Funciones que son exportadas para manejo externo.
    }),
    [mainPackage, guests, setGuests, addOns, setAddons]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;
