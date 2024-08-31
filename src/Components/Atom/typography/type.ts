

interface TypographyPropsType {
    text: string;
    tag: keyof JSX.IntrinsicElements;
    classes?:string; 
    children?:React.ReactNode;
    style?:React.CSSProperties; // ? optional 
  }
  
  export default TypographyPropsType;
  