import styled from 'styled-components/native'


export const Container = styled.View`
    background-color: #259cd8;
    flex: 1;
    padding: 10px 10px 0px 10px;
    flex-direction: column;
    align-items: center;
`;

export const CaixaBranca = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #eee;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: 100%;
    border-radius: 20px;
    margin: 35px;
`;

export const InputTexto = styled.Text`
    font-size:25px;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ContainerBtn = styled.View`
    flex-direction: column;
    margin-bottom: 35px;
    margin-top: 20px;
    width: 85%;
`;
export const EnviarBtn = styled.TouchableOpacity`
    height: 15%;
    margin-bottom: 25px;
    background-color: #fff;
    border: 2px solid #ae1b73;
    border-radius: 5px;
    justify-content: center;
    align-items: center; 
`;
export const TextoBtn = styled.Text`
    color: #ae1b73;
    font-size: 18px;
    font-weight: bold;
`;

export const Conversa = styled.View`
    flex: 4;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 65%;
    padding: 25px;
`;
export const Mensagem = styled.Text`
    font-size: 20px;
    text-align: justify;
    padding-top: 5px;
`;

export const Envio = styled.View`
    flex: 1;
    width: 85%;
    margin-top: 15px;
`;
export const Input = styled.TextInput`
    height: 95%;
    border: 1px solid #aaa;
    background-color: #e9e9e9;
    border-radius: 5px;
    padding: 0px 10px;
`;