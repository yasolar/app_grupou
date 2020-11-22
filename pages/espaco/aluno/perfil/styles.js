import styled from 'styled-components/native'


export const Container = styled.View`
    background-color: #259cd8;
    flex: 1;
    padding: 10px 10px 0px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Texto = styled.Text`
    font-size: 24px;
`;

export const ContainerBtn = styled.View`
    flex-direction: row;
    width: 90px;
    height: 60px;
`;

export const SairBtn = styled.TouchableOpacity`
    flex: 1;
    background-color: #fff;
    border: 2px solid yellow;
    border-radius: 5px;
    justify-content: center;
    align-items: center; 
`;

export const TextoBtn = styled.Text`
    color: #ae1b73;
    font-size: 20px;
    font-weight: bold;
`;