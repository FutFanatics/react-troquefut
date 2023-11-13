import React, { useState } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import DetailsDevolution from "./detailsdevolution";
import StatusDevolution from "./statusdevolution";

interface ProgressDevolutionProps {
 data?:DataFollow[];
 className?:string;
}

const ProgressDevolution: React.FC<ProgressDevolutionProps> = ({ data , className}) => {    

 return (
    <>
        <Box typeBox="container-devolution" className="col-md-8">
            <StatusDevolution></StatusDevolution>
            <DetailsDevolution></DetailsDevolution>
        </Box>
    </>
 );
};

export default ProgressDevolution;