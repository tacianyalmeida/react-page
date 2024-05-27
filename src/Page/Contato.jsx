import Image1 from "../../Image/email.png"
import Image2 from "../../Image/phone-call.png"
import { Campo1, Campo2, DivEmail, DivFone, P1, P3, P2, P4, Titulo, ImgEmail, ImgFone, DivPrincipal, Container2 } from '../Styled-Components/Contato';


const Contato = () => {
  return (<>
    <DivPrincipal>
        <Titulo>Como você pode tirar suas duvidas?</Titulo> 

      <Container2> 
      <DivEmail>
        <ImgEmail src={Image1} />
        <Campo1>E-mail</Campo1>
        <P1>fale com a melhor de química da escola sesi </P1>
        < P2>jeannyneLeite@gmail.com</P2>
      </DivEmail>

   
      <DivFone>  
         <ImgFone src={Image2} />
        <Campo2>Telefone</Campo2>
        <P3>Você pode ligar a qualquer hora </P3>
        <P4>0800 385 2546</P4>
      </DivFone>
     </Container2>
      {/* <Link href="https://phet.colorado.edu/pt_BR/">Aprenda_mais</Link> */}
    </DivPrincipal> </>
  )
}
export default Contato;
