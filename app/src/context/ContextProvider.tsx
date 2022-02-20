
import { createContext, useContext, useMemo, useState } from "react";

const WalletContext = createContext(undefined);

export function ContextProvider({ children }) {
   const [walletState, setWalletState] = useState(null);

   const wcValue = useMemo(() => {
      return [walletState, setWalletState];
   }, [walletState, setWalletState]);

   return (
      <WalletContext.Provider value={wcValue} >
         {children}
      </WalletContext.Provider>
   );
}

export function useWalletContext() {
   return useContext(WalletContext);
}

export default ContextProvider;