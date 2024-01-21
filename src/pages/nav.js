
const { default: styled } = require("styled-components");

const Headerdiv = styled.div` 
  width:100%; 
  display:flex;  
  color:#0d1724 ; 
  position: fixed 
` 
const Navmenu = styled.div` 
    width: 33.3%; 
    background: #EDEBE7 ; 
    display:flex; 
    align-items: center; 
    justify-content: center;   
`

const AA = styled.p` 
    font-size:14px ; 
    padding:10px; 
    margin-left: 1px; 
    cursor: pointer;  
    &:hover{ 
        opacity : 0.4  
     } 
`
function Navigator() { 
    return( 
        <Headerdiv> 
            <Navmenu> 
                <AA href=""> PRODUCT </AA> 
                <AA href=""> PRICING </AA> 
                <AA href=""> ABOUT US </AA> 
                <AA href=""> LEGEND </AA> 
                <AA href=""> DATA CENTER</AA>  
            </Navmenu> 
            <Navmenu> <img src='/logo.svg' style={{cursor: 'pointer ' }}/> </Navmenu> 
            <Navmenu> 
            <AA href=""> CONTACTS </AA> 
                <AA href="" style={{background:'white', padding:'18px' , borderRadius: '8px' }}> JOIN THE WAIT LIST </AA> 
                <AA href=""> EN </AA> 
            </Navmenu> 
        </Headerdiv> 
    ) 
} 

export default Navigator 
