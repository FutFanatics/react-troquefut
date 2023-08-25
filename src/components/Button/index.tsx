import { useNavigate } from "react-router-dom"
import styled from "styled-components";

interface IButton {
    path?: string;
    children: React.ReactNode;
}

const SButton = styled.button`
    background-color: #0B3B60;
    border-radius: 8px;
    color: #FFF;
`

export default function Button({ children, path = ""}: IButton) {

    const navigate = useNavigate();

    const handleClick = () => {

        if(path) {
            navigate(path);
        }
    };

    return (
        <SButton onClick={handleClick}>{ children }</SButton>
    )

}