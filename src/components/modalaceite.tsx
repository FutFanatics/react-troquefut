import React from "react";
import Modal from "react-modal";
import { SH1, STextParagraph } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import IconProduct from "../componentsStyled/icon/iconproduct";

import SlidesProducts from "./slidesproducts";




interface ModalAceiteProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
  
}



const ModalAceite: React.FC<ModalAceiteProps> = ({
  isOpen,
  onRequestClose,  
  
}) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="c-modal_aceite"
    >
      <div className="container">
        <SH1 fontSize="18px">Atenção!</SH1>
        <div className="row justify-content-center">
        <SlidesProducts></SlidesProducts>
        </div>
        
        <Box typeBox="termos">
          <div className="box-content">
            <>
              <STextParagraph
                fontWeight={700}
                padding="0px 0px 8px 0px"
                typeParagraph="termos"
                fontSize="18px"
              >
                Sobre a nossa{" "}
                <a href="https://www.futfanatics.com.br/politica-de-trocas-e-devolucoes">
                  Política de Trocas e devolução{" "}
                </a>
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                A futFanatics, trabalha para que você fique satisfeito com suas
                compras, no entanto, caso você precise trocar ou devolver algum
                produto, conheça nossa Política de Trocas e Devoluções.
              </STextParagraph>

              <STextParagraph
                fontWeight={700}
                padding="0px 0px 8px 0px"
                typeParagraph="termos"
                fontSize="18px"
              >
                <a href="https://www.futfanatics.com.br/portal-de-ajuda">
                  Central de Atendimento
                </a>
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                O canal Direto está disponível para te ajudar em caso de trocas
                e devoluções de suas compras. Entre em contato conosco de
                segunda a sexta-feira das 7:15 as 19:45 horas pelo telefone
                (11)4858-3500. você também poderá nos contatar acessando nosso
                site www.futfanatics.com.br em contato via Chat ou Email:
                contato@futfanatics.com.br
              </STextParagraph>
              <STextParagraph
                fontWeight={700}
                padding="0px 0px 8px 0px"
                typeParagraph="termos"
                fontSize="18px"
              >
                <a href="https://www.futfanatics.com.br/politica-de-privacidade">
                  Política de Privacidade
                </a>
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                A FutFanatics tem o compromisso de zelar pela segurança e
                privacidade dos dados pessoais de seus clientes, protegendo
                essas informações de perda, uso impróprio ou acesso não
                autorizado. Por isso, apresentamos nossa Política de
                Privacidade, que tem por objetivo esclarecer o uso dessas
                informações. Ao visitar a www.futfanatics.com.br e fornecer seus
                dados, o usuário declara conhecer e aceitar os termos da
                presente política, que encontra-se de acordo com as novas
                diretrizes trazidas pela Lei Federal nº 13.709/2018 (Lei Geral
                de Proteção de Dados Pessoais).
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                Certificações de segurança
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                A FutFanatics utiliza tecnologia de criptografia de dados para
                que a transação de suas informações esteja sempre segura. Todos
                os dados processados durante a compra são gerenciados em
                ambiente seguro e codificados. No mercado digital desde 2009,
                possuímos diversos certificados de segurança e confiabilidade
                para que você faça suas compras sem preocupação: O certificado
                'Authentic Site Secured by SSL' garante que toda transação
                envolvendo pagamento, seja por cartão de crédito ou não, esteja
                encriptada com a tecnologia SSL (Secure Socket Layer). Outra
                ferramenta importante na administração e detecção de fraudes em
                vendas pela internet é o "Clearsale Antifraude", um sofisticado
                sistema capaz de detectar e coibir fraudes em tempo real, cuja
                finalidade é proteger o usuário. Assim, os dados do usuário
                serão tratados por esta ferramenta com o intuito de "proteção do
                crédito", o que é autorizado pelo art. 7º, X da Lei nº
                13.709/18. Já a certificação fornecida pelo E-bit é um selo dado
                às lojas que são avaliadas de forma positiva em quesitos como
                facilidade na compra, cumprimento do prazo de entrega, manuseio
                e informações sobre produtos, entre outros. Atualmente possuímos
                a 'medalha Ouro', que classifica a loja como 'Ótima'. Você
                encontra o selo da E-bit no rodapé de todas as nossas páginas.
                Basta clicá-lo para conferir nossa certificação.
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                Segurança da Informação
              </STextParagraph>
              <STextParagraph typeParagraph="termos">
                Ao se cadastrar, o cliente informa dados pessoais como nome,
                e-mail, endereço de entrega e cobrança, telefone de contato,
                CPF, RG e data de nascimento, os quais são necessários e
                indispensáveis para o faturamento dos pedidos. Qualquer
                informação fornecida pelo usuário será obtida e armazenada de
                acordo com rígidos padrões de segurança e confiabilidade. A
                FutFanatics não irá vender, alugar ou transferir estes dados
                para terceiros em hipótese alguma. Entretanto, essas informações
                podem ser agrupadas e utilizadas, internamente, como
                estatísticas genéricas, visando obter um melhor entendimento do
                perfil de nossos usuários, o que também é permitido pela Lei
                Geral de Proteção de Dados. E-mail de ofertas e serviços O seu
                endereço de e-mail também é tratado com sigilo, não sendo
                fornecido a ninguém. Apenas quem se inscreveu para receber
                nossos lançamentos e promoções receberá boletins e ofertas
                especiais via e-mail. Ao se cadastrar em nosso site, você poderá
                escolher se deseja ou não receber e-mails com informações e
                promoções. A FutFanatics é contra o envio de e-mails sem
                autorização prévia (conhecidos como SPAM). Nenhum cliente
                receberá em seu correio eletrônico mensagens indesejadas e não
                solicitadas. Você poderá cancelar o envio de nossos boletins há
                qualquer momento através do link de descadastramento existente
                em cada newsletter. Histórico de Produtos Visualizados A
                FutFanatics recebe e armazena automaticamente, por meio de
                cookies, informações sobre as atividades do navegador, incluindo
                o endereço IP e as páginas acessadas. Estes registros de
                atividade serão utilizados apenas para reconhecer um visitante
                constante, melhorar a experiência de compra e viabilizar
                recursos personalizados, como recomendações de produtos,
                publicidade virtual e itens salvos anteriormente no carrinho de
                compras, por exemplo. Os cookies são pequenos arquivos de dados
                transferidos de um site da web para o disco do seu computador e
                não armazenam dados pessoais como nome, endereço ou o número do
                seu cartão de crédito. Você também pode desabilitar o salvamento
                de cookies em seu browser, deletá-los e gerenciar sua utilização
                por meio da configuração do navegador que utiliza para acessar o
                site da FutFanatics. Responsabilidade dos usuários É
                responsabilidade do usuário guardar as informações de senha e
                login de acesso. Não é recomendada a utilização de senhas
                óbvias, como datas especiais, nomes ou sequências numéricas.
                Caso o usuário tome conhecimento ou apenas suspeite que sua
                senha foi descoberta, ele deverá alterá-la em sua página de
                cadastro. Da solicitação de cancelamento de cadastro e retenção
                dos dados Seguindo as novas determinações da Lei Geral de
                Proteção de Dados Pessoais, a FutFanatics criou um canal
                específico e direto para que usuários requeiram a exclusão de
                seus dados pessoais, que é o e-mail
                cancelamento@futfanatics.com.br. Entretanto, a FutFanatics
                poderá reter alguns ou todos os dados pessoais do usuário por
                períodos adicionais, para cumprimento de obrigações legais ou
                regulatórias, eventuais ações judiciais, além de outros motivos
                fundamentados em lei que justifiquem a retenção destes dados.
                Propriedade das informações Todas as informações contidas neste
                site são propriedade da FutFanatics, portanto, não poderão ser
                alteradas, copiadas, extraídas ou de qualquer forma utilizadas
                sem a prévia e expressa autorização por escrito. Desta forma, ao
                acessar o site www.futfanatics.com.br, o usuário fica ciente que
                a utilização indevida das informações aqui contidas pode
                acarretar sanções civis e criminais. Esta Política de
                Privacidade está sujeita a constantes melhorias e
                aprimoramentos. Desse modo, recomendamos sua periódica consulta.
              </STextParagraph>
            </>
          </div>
        </Box>

        <div className="d-flex align-items-center mt-4 check">
          <input type="checkbox" required></input>
          <STextParagraph fontSize="14px" padding="0px 0px 0px 8px">
            Eu declaro que li e concordo com os Termos e Condições{" "}
          </STextParagraph>
        </div>
      </div>

      <button onClick={onRequestClose} className="btn-close"></button>

      <Button
        path="/Devolution"
        borderRadius="10px"
        width="280px"
        height="40px"
        margin="16px auto 0px auto"
      >
        Concluir pedido de Devolução
      </Button>
    </Modal>
  );
};

export default ModalAceite;
