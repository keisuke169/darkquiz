import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
// function Title(props){

//   return <h1>{props.children}</h1>
// }

export const QuizContainer = styled.div`
width:100%;
max-width:350px;
padding-top:45px;
margin:auto  10%;
@media screen and (max-width:500px){
margin:   auto;
padding:  15px;
}
//margin-left:-200px;
//margin-top:-200px
`;
/* const BackgroundImage= styled.div`
background-image:url(${db.bg});
flex:1;
background-size: cover;
background-position: center;
padding:30%;
//height: 100%;
`; */
export default function Home() {

  return (
<QuizBackground  backgroundImage={db.bg}>
  <QuizContainer>
    <Widget>
    <Widget.Header>
    <h1> Dark Quiz</h1>
    </Widget.Header>
    <Widget.Content>
    
    <p>lorem ipsum sit amet.</p>
    </Widget.Content>
    </Widget>
    <Widget>
    <Widget.Content>
    <h1> Quizes da Galera</h1>

  <p>lorem ipsum sit amet.</p>
    </Widget.Content>
  </Widget>
  
  </QuizContainer>
  <Footer/>
</QuizBackground>
  )
}
