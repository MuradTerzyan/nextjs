"use strict" 
import styles from '@/styles/Home.module.css'

import styled from 'styled-components' 
import List from './list'
import Bigdiv from './info'
import Footdiv from './fotter'
import Menu from './menu'
import View from './view'
import Navigator from './nav'



const Container = styled.div` 
  width:100%; 
  height:100px; 
  background: #EDEBE7 ;  
` 
const Aa = styled.div` 
  display:flex; 
` 
export default function Home( ) {  
  return ( 
    <> 
    <Container> 
      <Navigator />  
        <Bigdiv /> 
        <List  />  
        <View /> 
        <Footdiv /> 
        <Menu /> 
    </Container>
    </>
  )
} 

