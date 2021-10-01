import React from 'react'
import styled from 'styled-components'
import {IoIosArrowForward} from "react-icons/io"

const SideBar = ({toggle, setToggle}) => {
    return (
        <Container>
            <Content 
            onClick={()=>{
            setToggle(false);
            console.log(toggle);
            }}
            >
               <Holder>
               <span>Platform <Icon1/></span>
                <hr/>
               </Holder>
               <Holder>
               <span>Products <Icon1/></span>
                <hr/>
               </Holder>
               <Holder>
               <span>Resources <Icon1/></span>
                <hr/>
               </Holder>
               <Holder>
               <span> For Individuals</span>
                <hr/>
               </Holder>
              
            </Content>
           
        </Container>
    )
}

export default SideBar


const Container = styled.div`
width: 400px;
height: 80vh;
background-color: #e7472c;
`

const Content = styled.div`
padding-top: 30px;
height: 45%;
width: 90%;
display: flex;
justify-content: center;
flex-direction: column;
`
const Holder = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

span{
    font-size: 20px;
    font-weight: bold;
    font-family: poppins;
    margin-left: 20px;
}

 hr{
   
/* width: 90%;  */
} 
`

const Icon1 = styled(IoIosArrowForward)`
font-size:20px;
font-weight:bold;
`

