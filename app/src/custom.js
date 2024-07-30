import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #07134A;
`
export const Logo = styled.View`
    padding: 4px 0;
    align-items: center;

`
export const ImgLogo = styled.Image`
    width: 180px;
    height: 180px;
`
export const TextExemplo = styled.Text`
    padding: 5px;
    font-size: 26px;
    color: #f5f5f5;
`
export const List = styled.View`
 width: 100%;
`
export const RowData = styled.View`
 background-color: #1d1e31;
 padding: 10px;
 margin: 5px 20px ;
 border-radius: 6px;
 flex-direction: row;
 justify-content: flex-start;
`
export const IMC = styled.Text`
flex: 1;
flex-direction: column;
font-size: 16px;
 color: #f5f5f5;
`

export const Classificacao = styled.Text`
justify-content: flex-end;
 color: #f5f5f5;
`


export const InputForm = styled.TextInput`
    background-color: #f5f5f5;
    width: 90%;
    margin: 15px;
    color: #222;
    font-size: 18px;
    border-radius: 6px;
    padding: 10px;
`
export const BtnEnviar = styled.TouchableOpacity`
    background-color: #eb1555;
    width:90%;
    height: 50px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`
export const BtnText = styled.Text`
color: #f5f5f5;
font-size: 22px;

`