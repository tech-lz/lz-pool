import React from 'react';
interface ModalsContext {
    content?: React.ReactNode;
    isOpen?: boolean;
    onPresent: (content: React.ReactNode, key?: string) => void;
    onDismiss: () => void;
}
export declare const Context: React.Context<ModalsContext>;
declare const Modals: React.FC;
export default Modals;
