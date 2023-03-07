import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
declare global {
    interface Window {
        ethereum: any;
        location: Location;
    }
}
interface HomeProps {
    theme: string;
    web3: any;
    subPage: string;
    setVisibleWalletModal: any;
    setVisibleUserWalletModal: any;
}
declare const Home: React.FC<HomeProps>;
export default Home;
