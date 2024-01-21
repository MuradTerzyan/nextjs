import styled from "styled-components"


const Menudiv = styled.div` 
    width:100%; 
    height:300px; 
    background: #0d1724 ; 
    display:flex; 
    justify-content: center; 
` 

const Menucontainer = styled.div` 
    width:84%; 
    height:200px; 
    background: #0d1724 ; 
    color:white ; 
    display:flex;  
    justify-content: center; 
` 

const Fivediv = styled.div` 
    width:250px; 
    height:48px; 
    background: #0d1724 ; 
    margin:10px; 
    align-items: center;  
    cursor:pointer ; 
` 

const Imag = styled.img` 
    width:25px; 
    height:25px; 
    margin: 10px ;  
    background: white   
` 

const Fotterinfo = styled.div` 
    width:100%; 
    height:48px ; 
    background: #0d1724 ; 
    margin : 0 ; 
` 

const T = styled.div` 
width:84%; 
height:10px; 
background: #0d1724 ; 
color:white ; 
margin-left: 100px ; 
` 
function Menu() { 
    return( 
        <div> 
        <Menudiv> 
            <Menucontainer> 
                <Fivediv> <h1> Product </h1> <p> Product </p> <p> How it works </p> <p> Pricing </p></Fivediv> 
                <Fivediv> <h1> Company </h1> <p> About us </p> <p> Legend </p> <p> Career </p> <p> Contacts </p></Fivediv> 
                <Fivediv> <h1> Recourses </h1><p> Data center </p> <p> Help center </p> </Fivediv> 
                <Fivediv> <h1> Legal </h1> <p> Terms of Service </p> <p> Privacy Policy </p> <p> Cookies Policy </p> </Fivediv> 
                <Fivediv> <h1> Social media </h1> 
                    <div>   
                        <a href="#">   <Imag src="/youtube.svg"  /> </a>  
                        <a href="#">   <Imag src="/x.svg"  /> </a> 
                        <a href="#">   <Imag src="/instagram.svg"  /> </a> 
                        <a href="#">   <Imag src="/facebook.svg"  /> </a> 
                    </div> 
                </Fivediv> 
            </Menucontainer> 
        </Menudiv> 
        <Fotterinfo> <T>   © 2024 Owner.one, Inc. All rights reserved </T> </Fotterinfo> 
        </div>
    ) 
} 
export default Menu 


