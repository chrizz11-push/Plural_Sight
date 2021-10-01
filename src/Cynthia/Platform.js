import React from 'react'
import styled from "styled-components"
import {RiDashboardLine} from "react-icons/ri"
import {FiMapPin} from "react-icons/fi"
import {AiOutlineCloud} from "react-icons/ai"
import { HiOutlineDocumentText} from "react-icons/hi"
import { IoIosHand} from "react-icons/io"
import { GiTeamDowngrade} from "react-icons/gi"


const Platform = () => {
    return (
        <Contaner>
          <Wrapper>
<One>
<First>
    <Icon/> <Span>Courses</Span>
</First>
<First>
    <Icon1/> <Span> Skill assessments</Span>
</First>
<First>
    <Icon2/> <Span>Labs</Span>
</First>
<First>
    <Icon3/> <Span> Hands-on learning</Span>
</First>
<First>
    <Icon4/> <Span> Certification prep</Span>
</First>
<First>
    <Icon5/> <Span> Team efficiency</Span>
</First>
</One>
          </Wrapper>
        </Contaner>
    )
}

export default Platform

const Contaner = styled.div`
width: 90%;
height: 90vh;
background-color:#161616;
padding: 20px;
`

const Wrapper = styled.div`
width: 90%;
height: 90%;
display: flex;
`
const First = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content:space-between;
background-color:blue;
`

const One = styled.div`
display: flex;
flex-direction: column;
width: 20%;
height: 60%;
background-color:red;
`

const Icon = styled(RiDashboardLine)`
font-size:20px;
font-weight:bold;
`
const Icon1 = styled(FiMapPin)`
font-size:20px;
font-weight:bold;
`
const Icon2 = styled(AiOutlineCloud)`
font-size:20px;
font-weight:bold;
`
const Icon3 = styled(IoIosHand)`
font-size:20px;
font-weight:bold;
`
const Icon4 = styled(HiOutlineDocumentText)`
font-size:20px;
font-weight:bold;
`
const Icon5 = styled(GiTeamDowngrade)`
font-size:20px;
font-weight:bold;
`
const Span = styled.div`
font-size:20px;
font-weight:bold;
/* margin-left: 10px; */

`