import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
        </>
    );
};

export default Home
