import styled from 'styled-components/native'


export const ContainerLogo = styled.View`
    flex: 1;
    margin-top: 6%;
`;
export const Logo = styled.Image`
    width: 270px;
    height: 130px;
    border-radius: 10px;
`;

export const CaixaInfoChamada = styled.View`
    align-items: center;
    flex: 1;
    justify-content: flex-start;
`;
export const InfoChamadaTexto = styled.Text`
    font-size: 30px;
    color: #fff;
    text-shadow: 1.2px 1.2px 4px rgba(0,0,0, 0.8);
`;
export const GrupouTexto = styled.Text`
    font-weight: bold;
`;
    
export const CaixaLogin = styled.View`
    background-color: #fff;
    height: 52%;
    width: 100%;
    padding: 20px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
`;

export const ContainerBtn = styled.View`
    flex-direction: row;
    margin-bottom: 30px;
`;

export const ProfAlunoBtn = styled.TouchableOpacity`
    border-bottom-width: 4px;
    border-bottom-color: ${({lastClick}) => lastClick ? "#ae1b73" : "#fff"};
    height: 45px;
    margin: 0px 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const ProfAlunoTexto = styled.Text`
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
    margin-bottom: 40px;
    margin-right: 4px;
`;
export const EsqueciSenhaTexto = styled.Text`
    font-size: 14px;
    color: #ae1b73;
    align-items: flex-start;
    margin-top: -5px;
`;

export const ContainerCadEnter = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: flex-end;
`;

export const CadEnterBtn = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    height: 60px;
    background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
    border: 2px solid #ae1b73;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-right: ${props => props.invert ? "10px" : "0px"}; 
`;

export const CadEnterTexto = styled.Text`
    color: ${props => props.invert ? "#ae1b73" : "#fff"};
    font-size: 16px;
    font-weight: bold;
`;