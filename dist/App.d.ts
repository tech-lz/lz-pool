import React from 'react';
interface AppProps {
    theme: string;
    web3: any;
    subPage: string;
    setVisibleWalletModal: any;
    setVisibleUserWalletModal: any;
    xStorageClient?: any;
}
declare const App: React.FC<AppProps>;
export default App;
