
import styled from "styled-components"

const Rowdiv = styled.div` 
    width:100%; 
    height:500px; 
    background: #EDEBE7 ; 
    display:flex;  
` 
const Aaaa = styled.div` 
    display:flex; 
    width:85%; 
    margin: 0 auto; margin-top:140px; 
` 
const Threedivdiv = styled.div` 
    width:32%; 
    background: #EDEBE7 ; 
    display: flex; 
    margin: 15px;    
    text-align:center; 
     
    border:1px solid; 
    border-radius:10%; 
` 

const Containerdiv = styled.div` 
    margin-top: 30px; 
    text-align:center; 
` 

const Btndiv = styled.div` 
    color:silver ;  
    width:45px; 
    height:45px; 
    border:1px solid ; 
    margin: 0 auto; 
    text-align: center; 
    justify-content: center;
    align-items: center ; 
    border-radius: 14%; 
    display: flex; 
    margin-top: 84px; 
    background:white; 
` 

const B = styled.div` 
    &:hover{ 
       opacity : 0.4 
    } 
` 
const Imag = styled.img` 
    width:25px; 
    height:25px; 
    margin: 10px ;  
    background: white  ; 
` 
function List( {a} ) { 
    return( 
        <Rowdiv > 
        <Aaaa className="aaaa"> 
            <Threedivdiv className="threediv">
                <Containerdiv className="container"> 
                        <h1  >  Sales </h1> 
                        <p style={{color:'silver' , margin:'30px'}} > Your success is our success. 
                            We are dedicated to understanding and prioritizing 
                            your unique goals, providing personalized solutions 
                            that stand the test of time. 
                        </p> 
                            <Btndiv className="btn"> 
                            <B> <a href="#">   <Imag src="/arrow-right.svg"  /> </a>    </B> 
                            </Btndiv>
                </Containerdiv>    
            </Threedivdiv> 

            <Threedivdiv style={{background:'#0d1724', color:'white'}} > 
                <Containerdiv className="container"  > 
                        <h1> Support </h1> 
                        <p style={{margin:'30px'}}> 
                        Your success is our success. We are dedicated    to understanding and prioritizing your unique 
                        goals, providing personalized solutions that stand the test of time. 
                        </p> 
                            <Btndiv style={{background:'white'}}> 
                                <B> <a href="#">   <Imag src="/arrow-right.svg"  /> </a>    </B> 
                            </Btndiv>
                </Containerdiv>  
            </Threedivdiv> 
            
            <Threedivdiv className="threediv">
                <Containerdiv className="container"> 
                        <h1> Press </h1> 
                        <p style={{color:'silver' , margin:'30px'}} >
                        Your success is our success. We are dedicated to understanding and prioritizing your unique goals, 
                        providing personalized solutions that stand the test of time.
                        </p> 
                            <Btndiv className="btn"> 
                            <B> <a href="#">   <Imag src="/arrow-right.svg"  /> </a>    </B> 
                            </Btndiv>
                </Containerdiv>    
            </Threedivdiv> 
            </Aaaa> 
        </Rowdiv>
    ) 
} 
export default List 
////////////////////// 

// div row 1 
// div coll4 info divw 
// div container 
// 2 p hat 
// div button 

// function Stat(  ) { 
//     return( 
//         <div> 
//             <Prop name='Joy' lastNam='Smit' age={14} img={nkar1} /> 
//             <Prop name='Bill' lastNam='Brow' age={18} img={nkar2} />  
//         </div> 
//     ) 
// } 
// export default Stat 




// function Prop( {name, lastNam, age, img } ) { 
//     return( 
//       <div > 
//         <div style={{width:'220px' , height:'270px', border:'1px solid black', margin:'10px', float:'left' }}> 
//         <h4> barev </h4> 
//         <p>  im anunn {name} </p> 
//         <p> isk azganunn {lastNam} </p> 
//         <img src={img} style={{width:'140px', height:'44px'}} /> 
//         <p>  tariqsss {age} </p>  
//         <button> add </button>
//         </div> 
//       </div> 
//     ) 
//   } 
//   export default Prop 