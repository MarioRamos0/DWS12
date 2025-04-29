
import { Children } from "react";
import "./Form.css";

interface FormProps {
  formName: string;
  children: React.ReactNode;
  size: string;
 
}

export const Form = (params: FormProps) => {
  const className = params.size === 'small' ? 'form-small' : params.size === 'large' ? 'form-large' : 'form-middle';

  return (
    <form className={className}>
      <h3>{params.formName}</h3>
      {params.children}
    </form>
  );
};