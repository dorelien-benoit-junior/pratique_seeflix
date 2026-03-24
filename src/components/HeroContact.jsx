import React from 'react'
import "./heroContactStyle.css"

const HeroContact = () => {
  return (
    <>
        <div className='heroContactStyle'>
            <h1>Contact us!!!</h1>
            {/* <a href="mailto:dorelienjunior@yahoo.fr"><button>Email us</button></a>
            
            <a href="tel:+50937788210">
                <button>📞 Call Us!!</button>
            </a> */}

            <button onClick={() => window.location.href = 'tel:+50937788210'}>
                📞 Call now...
            </button>

        </div>
    </>
  )
}

export default HeroContact