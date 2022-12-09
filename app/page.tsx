import Link from 'next/link';
import React from 'react'
import Feature from './Feature';
import Featuretwo from './Featuretwo';
import Logo from './Logo';


function Home() {
    return (
       <>
       <Logo/>
       <Feature/>
       <Featuretwo/>
       </>
);
}

export default Home