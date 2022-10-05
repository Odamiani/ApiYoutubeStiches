import { HeaderContainer, InputSearch, Button } from "./styles"

function Header() {
    return (
        <HeaderContainer>
            <InputSearch type="text" placeholder="Buscar" />
            <Button>
                Search            
            </Button>
        </HeaderContainer>
    )
}
  
export default Header