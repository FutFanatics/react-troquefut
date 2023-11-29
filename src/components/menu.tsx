import TroqueFut from "../componentsStyled/icon/LogoTroqueFut";
import React from 'react';

interface MenuProps {
    typeOption: string;
    children?: React.ReactNode;
  }

const Menu: React.FC<MenuProps> = ({ typeOption , children }) => {
    return(
        <section className="c-menu"> 
            <div className="container">
                <TroqueFut width={130} className="logo-troque-menu"></TroqueFut>
                {children}
            </div>
        </section>
    )
    
}
export default Menu;