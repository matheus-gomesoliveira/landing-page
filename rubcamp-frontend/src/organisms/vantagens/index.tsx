import * as S from "./styles"

const Vantagens = ()=>{
    return(
        <S.Container id="beneficios">
            <S.Content>
                <S.StyledWhiteTitle>VANTAGENS DE SER RUBBANK</S.StyledWhiteTitle>
                <S.Box1>
                    <S.StyledWhiteTitle>EXCLUSIVIDADE</S.StyledWhiteTitle>
                    <S.Description>Tenha acesso à uma loja personalizada com produtos e benefícios que só o RubBank pode te oferecer</S.Description>
                </S.Box1>
                <S.Box2>
                    <S.StyledWhiteTitle>LIBERDADE</S.StyledWhiteTitle>
                    <S.Description>Faça transferências no app você escolhe o melhor uso para suas RubCoins </S.Description>
                </S.Box2>
                <S.Box1>
                    <S.StyledWhiteTitle>PRATICIDADE</S.StyledWhiteTitle>
                    <S.Description>Proteja suas informações de forma íntegra e segura sem a burocracia dos bancos convencionais</S.Description>
                </S.Box1>
            </S.Content>
        </S.Container>
    )
}

export default Vantagens