import styled from "styled-components"


const Footerdiv = styled.div` 
    width:100%; 
    height: 280px; 
    background: #0d1724 ; 
    display:flex; 
` 

const Subdiv = styled.div` 
    width:60%; 
    background: #0d1724 ; 
    margin: 48px auto ; 
    text-align:center; 
    justify-content: center; 
    align-items: center; 
     
`
const B = styled.div` 
background-color: #EDEBE7 ; 
border: none;
color: silver ; 
padding: 8px 36px; 
margin: 0 auto ; 
cursor: pointer;  
width: 12%; 
border-radius:10px; 
margin-top: 14px ; 
` 
const Inputstyl = styled.input` 
    color:red ; 
    width:77% ; 
    height:40px ; 
    margin-top:30px ; 
    background: #0d1724 
` 
function Footdiv() { 
    return( 
        <Footerdiv> 
            <Subdiv> 
                <h1 style={{fontSize:'55px' , margin:'0px' , color:'white'}}> Subscribe To Analytics </h1> 
                <Inputstyl type="mail" placeholder="Write your email" style={{borderTop:'unset' , borderRight:'unset' , borderLeft:'unset' }}/> 
                <br /> 
                <B> <a href=""> </a> SUBMIT EMAIL </B> 
            </Subdiv> 
        </Footerdiv> 
    ) 
} 
export default Footdiv 
