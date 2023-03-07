import React from 'react';
interface MenuProps {
    onDismiss?: () => void;
    visible?: boolean;
    onClickMenu: () => void;
    showMenu: boolean;
}
declare const Menu: React.FC<MenuProps>;
export default Menu;
