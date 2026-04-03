import React from 'react'

const Features = () => {
  return (
    <section>
        <div>
            <h2 className='text-4xl font-bold text-center'>Features</h2>
        </div>

        <div className='grid grid-cols-3'>
            <div>
                <h3>Real Time Response</h3>
                <p>Get instant feedback on your actions and decisions.</p>
            </div>
            <div>
                <h3>Advanced Analytics</h3>
                <p>Gain insights from your  data with our powerful analytics tools.</p>
            </div>            
            <div>
                <h3>Personalized Experience</h3>
                <p>Enjoy a tailored experience that adapts to your needs and preferences.</p>
            </div>
        </div>
    </section>
  )
}

export default Features