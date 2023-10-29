import { ButtonContainer } from "./button-contact.styles";

export default function ButtonContact({text}:{text: string}){
    return (
        <ButtonContainer 
            href='https://api.whatsapp.com/send?phone=5548999406153&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20pel%C3%ADculas.'
            target="_blank"
        >
            {text}
        </ButtonContainer>
    )
}