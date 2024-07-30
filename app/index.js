import { ScrollView,Alert} from "react-native-web";
import { Container, TextExemplo, Logo, ImgLogo,List,RowData, IMC,Classificacao,
    InputForm,BtnEnviar,BtnText } from "./src/custom";
import { useState } from "react";
export default function App(){
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc,setImc] = useState('')

    const calcularImc =()=>{

        //convertendo os dados em numeros reais
         const alturaFloat = parseFloat(altura)
         const pesoFloat = parseFloat(peso)
        //verificando se é numero válido
        if(isNaN(alturaFloat) ||isNaN(pesoFloat)|| alturaFloat<=0|| pesoFloat<=0){
            Alert.alert("OPS Numero inválidos")
            return
    
        }
        //calculando
      const imc = pesoFloat/(alturaFloat*alturaFloat)
      setImc("Seu IMC é: "+imc.toFixed(2))

    }
    
    return(
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <Container>
                <Logo>
                    <ImgLogo source ={require("../assets/images/logo.png")}/>


                <InputForm 
                placeholder="Altura (ex.:1.70)"
                value={altura}
                onChangeText={ text=> setAltura(text)}
                />
               <InputForm 
                placeholder="Peso em Kg"
                value={peso}
                onChangeText={ text=> setPeso(text)}
                />

                <BtnEnviar onPress={calcularImc}>
                    <BtnText>Calcular</BtnText>    
                </BtnEnviar> 

                <InputForm 
                placeholder="Seu IMC"
                value={imc}
                editable= {false}
    
                />

                </Logo>
                <TextExemplo>Bem Vindo</TextExemplo>
                <List>
                    <RowData>
                        <IMC>
                            Menor que 18,5
                        </IMC>
                        <Classificacao>
                            Magreza
                        </Classificacao>
                    </RowData>
                    <RowData>
                        <IMC>
                            Entre 18,5 a 24,9
                        </IMC>
                        <Classificacao>
                            Normal
                        </Classificacao>
                    </RowData>
                    <RowData>
                        <IMC>
                            Entre 25 a 29,9
                        </IMC>
                        <Classificacao>
                            Sobrepeso
                        </Classificacao>
                    </RowData>
                    <RowData>
                        <IMC>
                            Entre 30 a 39,9
                        </IMC>
                        <Classificacao>
                            Obesidade
                        </Classificacao>
                    </RowData>
                    <RowData>
                        <IMC>
                            Acima de 40
                        </IMC>
                        <Classificacao>
                        Obesidade Grave
                        </Classificacao>
                    </RowData>

                </List>
            </Container>
        </ScrollView>

    )
}

