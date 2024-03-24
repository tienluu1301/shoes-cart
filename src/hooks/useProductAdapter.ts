import { useContext } from "react";

import { ShoeAdapter } from "../context/ShoeAdapter";
import { AdapterContext } from "../context/AdapterProvider";

type IAdapter = ShoeAdapter;

const useProductAdapter = (): IAdapter => {
  const adapterContext = useContext(AdapterContext);
  if (!adapterContext) {
    throw new Error("useShoeAdapter must be used within AdapterProvider");
  }

  return adapterContext;
};

export default useProductAdapter;
