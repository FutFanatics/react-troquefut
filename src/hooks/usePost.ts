import { useState } from "react";
/**
 * <T> = Um Tipo generíco de retorno, pode retornar qualquer coisa
 * Funções Assíncronas retornam Promisses
 */
export default function usePost() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [resposta, setResposta] = useState('');

    async function cadastrarDados<T>({url, dados}: {url: string, dados: T }) {
        try{
            const response = await fetch(`http://localhost:8080/${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            setSuccess(true);
            const respostaConvertida = await response.json();
            setResposta(respostaConvertida.token);

        } catch(error) {
            setError('Não foi possível enviar os dados')
        }
    }

    return { cadastrarDados, success, error, resposta };
}