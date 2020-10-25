import styled from 'styled-components/native'


export const ContainerLogo = styled.View`
    flex: 1;
    margin-top: 10%;
`;
export const Logo = styled.Image`
    width: 270px;
    height: 130px;
    border-radius: 10px;
`;

export const CaixaLogin = styled.View`
    background-color: #fff;
    height: 52%;
    width: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    padding: 20px;
`;

export const ContainerBtn = styled.View`
    flex-direction: row;
    margin-bottom: 30px;
`;

export const Btn = styled.TouchableOpacity`
    border-bottom-width: 4px;
    border-bottom-color: ${({lastClick}) => lastClick ? "#ae1b73" : "#fff"};
    height: 45px;
    margin: 0px 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const BtnTexto = styled.Text`
    font-size:20px;
    color: ${({lastClick}) => lastClick ? "#673f66" : "#b6b6b6"};
`;

export const Input = styled.TextInput`
    border: 1px solid #aaa;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 0 20px;
    color: #aaa;
`;
export const InputTexto = styled.Text`
    font-size:17px;
    color: #aaa;
`;

export const EsqueciSenhaBtn = styled.TouchableOpacity`
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 25px;
`;
export const EsqueciSenhaTexto = styled.Text`
    font-size: 13px;
    color: #ae1b73;
    margin-top: -7px;
`;

export const CadastrarBtn = styled.TouchableOpacity`
    border-width: 2px;
    border-color: #ae1b73;
    border-radius: 5px;
    height: 60px;
    flex: 1;
    margin: 0px 5px;
    justify-content: center;
    align-items: center;
`;
export const CadastrarTexto = styled.Text`
    font-size: 16px;
    color: #ae1b73;
    font-weight: 700;
`;

export const EntrarBtn = styled.TouchableOpacity`
    background: #ae1b73;
    border-radius: 5px;
    flex: 1;
    height: 60px;
    margin: 0px 5px;
    justify-content: center;
    align-items: center;
`;
export const EntrarTexto = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: 700;
`;

