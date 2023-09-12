import TroqueFut from "../componentsStyled/icon/LogoTroqueFut";
import Options from "./options";
import React from 'react';

interface MenuProps {
    typeOption: string;
    children?: React.ReactNode;
  }

const Menu: React.FC<MenuProps> = ({ typeOption , children }) => {
    return(
        <section className="c-menu"> 
            <div className="container d-flex align-items-center">
                <TroqueFut width={250}></TroqueFut>
                {children}
            </div>
        </section>
    )
    
}
export default Menu;