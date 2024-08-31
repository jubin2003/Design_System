
import React from 'react';
import TypographyPropsType from './type';  // Import the TypographyPropsType interface

const Typography = ({ text, tag,classes,children,style}: TypographyPropsType) => {
  return React.createElement (tag,
    {
        className:classes,
        style:style
    },
    children,
    text,
);
}

export default Typography;
