import React from 'react';
interface TopBarProps {
    showMenu: boolean;
    onClickMenu: () => void;
}
declare const TopBar: React.FC<TopBarProps>;
export default TopBar;
