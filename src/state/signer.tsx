import { Children, createContext, useContext, useEffect, useState } from "react";
import {JsonRpcSigner , Web3Provider} from "@ethersproject/providers"

import Web3Model from 'web3modal';

type SignerContextType = {
    signer?: JsonRpcSigner;
    address?: string;
    loading: boolean;
    connectWallet: () => Promise<void>

}

const SignerContext = createContext<SignerContextType>({} as any)

const useSigner = () => useContext(SignerContext)

 export const SignerProvider = ({children}:{children: ReactNode }) => {

    const [signer, setSigner] = useState<JsonRpcSigner>()
    const [address, setAddress] = useState<string>()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const web3model = new Web3Model();
        if(web3model.cachedProvider) connectWallet();
        window.ethereum.on("accountsChanged", connectWallet);
    }, [])

    const connectWallet = async () => {
        setLoading(true)
        try{
        const web3model = new Web3Model({cacheProvider: true});
        const instance  = await web3model.connect();
        const provider = new Web3Provider(instance)
        const signer =  provider.getSigner();
        const address = await signer.getAddress()
        setSigner(signer)
        setAddress(address)
        }catch(e){
            console.log(e);
        }
        setLoading(false)
     }

    const contexValue = { signer, address, loading, connectWallet };

    return <SignerContext.Provider value={contexValue}> {children}

    </SignerContext.Provider>
}

export default useSigner;