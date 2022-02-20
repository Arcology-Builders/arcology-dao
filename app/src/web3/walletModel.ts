import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState } from "react";

export default function WalletModel() {
   const [loading, setLoading] = useState(false);
   return {
      get web3Loading() {
         return loading
      },
      async getweb3() {
         setLoading(true);
         let web3Modal;
         let provider;
         let web3;
         let providerOptions;
         providerOptions = {
            metamask: {
               id: 'injected',
               name: 'MetaMask',
               type: 'injected',
               check: 'isMetaMask'
            },
            walletconnect: {
               package: WalletConnectProvider, // required
               options: {
                  infuraId: '52d1c0917e7541b88780e5cafc9a7a8f', // Required
                  network: 'rinkeby',
                  qrcodeModalOptions: {
                     mobileLinks: [
                        'rainbow',
                        'metamask',
                        'argent',
                        'trust',
                        'imtoken',
                        'pillar'
                     ]
                  }
               }
            },
         };

         web3Modal = new Web3Modal({
            network: 'rinkeby',
            cacheProvider: false,
            providerOptions
         });
         provider = await web3Modal.connect();
         console.log('w3(provider) : ', provider);
         web3 = new Web3(provider);
         console.log('w3 : ', web3);
         setLoading(false);
         return [web3Modal, web3];
      },
   }
}