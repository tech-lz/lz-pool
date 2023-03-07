import React from 'react';
declare type SeparatorOrientation = 'horizontal' | 'vertical';
interface SeparatorProps {
    orientation?: SeparatorOrientation;
    stretch?: boolean;
}
declare const Separator: React.FC<SeparatorProps>;
export default Separator;
