import styled from "styled-components"



const Viewcont = styled.div` 
    width:100%; 
    display:flex; background: #EDEBE7  ; 
`

const Viwediv = styled.div` 
    width:100%; 
    margin-top:104px; 
` 

const F = styled.img` 
    width:100%; 
`
function View() { 
    return(
        <Viewcont> 
            <Viwediv> 
                <F src="https://ownerone.concepttest.club/_next/image/?url=https%3A%2F%2Fownerone-api.concepttest.club%2Fstorage%2Fhero.png&w=1920&q=75" /> 
            </Viwediv> 
        </Viewcont> 
    ) 
} 
export default View 