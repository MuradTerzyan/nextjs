

import styled from "styled-components" 

const Containerinfo = styled.div` 
    width:100%; 
    height:230px; 
    display:flex; 
    background: #EDEBE7 ; 
    color: #0d1724; 
    justify-content: center;  
    ` 

    
const Divwrap = styled.div` 
    width:50%; 
    text-align:center ; 
    justify-content: center; 
    align-items: center; 
    color: #0d1724; margin-top:100px; 
 `
function Bigdiv() {  
    return( 
        <Containerinfo> 
            <Divwrap> 
                <h1 style={{fontSize:'60px', marginBottom:'0'}}> Get in touch </h1>  
                <h4 style={{fontSize:'15px'}}> Owner.One operates on a WTaaS (Wealth-Transfer-as-a-Service) model, 
                    allowing capital founders to <br /> keep their assets transfer-ready at any 
                    point in time with minimal effort. Owner.One keep all of the capital owner's 
                    data on their personal server, inaccessible to anyone, including Owner.One.Currently, 
                    it is a risk-free and instant one-stop solution for transferring asset information 
                    to family and loved <br /> ones. </h4> 
            </Divwrap> 
        </Containerinfo> 
    ) 
} 



export default Bigdiv 