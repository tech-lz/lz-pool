import React from 'react';
declare global {
    interface Window {
        ethereum: any;
        location: Location;
    }
}
declare const Referral: React.FC;
export default Referral;
