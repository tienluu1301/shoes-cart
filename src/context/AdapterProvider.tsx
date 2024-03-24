import { createContext } from "react";

import shoeService from "../services/shoes";
import { ShoeAdapter, createShoeAdapter } from "./ShoeAdapter";

interface Props {
  children: React.ReactNode;
}

export const AdapterContext = createContext<ShoeAdapter | undefined>(undefined);

const AdapterProvider = ({ children }: Props) => {
  const shoeAdapter = createShoeAdapter(shoeService);
  return (
    <AdapterContext.Provider value={shoeAdapter}>
      {children}
    </AdapterContext.Provider>
  );
};

export default AdapterProvider;
