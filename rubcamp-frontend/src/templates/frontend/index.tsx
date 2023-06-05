import * as S from "./styles"

type FrontentProps = {
    children: React.ReactNode
}

const Frontend = ({ children }: FrontentProps) =>{
        return (<S.Container>Teste Frontend {children}</S.Container>)
}

export default Frontend