import React, { FormEvent, useState } from 'react';
import { SspanText } from '../componentsStyled/Text';
import Button from '../componentsStyled/Button';
import { Box } from '../componentsStyled/Box';
import { useNavigate } from 'react-router-dom';

interface User {
 email: string;
 password: string;
}

interface Dados {
  customerId: number;
 }

const Validation: React.FC = () => {
 const [user, setUser] = useState<User>({ email: 'silvio_cbsj@hotmail.com', password: 'Ambul@ncia001' });
 const [success, setSuccess] = useState(false);
 const navigate = useNavigate();

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 
  try {
     const response = await fetch('https://api.troquefuthomologacao.futfanatics.com.br/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(user),
     });
 
    if (response.ok) {
      const { token } = await response.json();
       
      const dados: Dados = {
        customerId: 335
      };

      localStorage.setItem('token', token);
      localStorage.setItem('dados', JSON.stringify(dados));

      setSuccess(true);
      navigate('/order');
     } else {
       alert('Não foi possível realizar o login. Por favor, verifique seus dados.');
     }
  } catch (error) {
     console.error('Ocorreu um erro:', error);
  }
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
 };


 return (
    <form onSubmit={handleSubmit} className='col-md-6'>

      <Box typeBox="login" className="d-flex flex-column" margin='32px 0px'>
        <label>Login</label>
        <input type="text" placeholder="Insira seu e-mail ou CPF" value={user.email} onChange={handleChange} />
      </Box>
      <Box typeBox="login" className="d-flex flex-column" margin='32px 0px'>
        <label>Senha</label>
        <input type="password" placeholder="Insira sua senha" value={user.password} onChange={handleChange}></input>
      </Box>
      <div className="d-flex justify-content-end">
        <SspanText fontSize="14px" color="#192c53" fontWeight={600} >Esqueci a senha</SspanText>
      </div>
      
      <Button margin="32px auto 0px auto" type="submit">Confirmar</Button>

    </form>
 );
};

export default Validation;