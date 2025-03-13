import React from 'react'
import banner from '../assets/banner.webp'

import '../styles/components/img.sass'

const Image = () => {
    return (
        <section className='section-img'>
            <h2 className='img-title'>As melhores bebidas você encontra aqui!</h2>
            <img src={banner} alt="banner-bebidas" property={true}/>
        </section>
    )
}

export default Image
