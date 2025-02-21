import Navbar from '../navbar/Navbar';
import './HeroSection.css'

interface HeroTypes{
    title: string;
    description: string;
}

function HeroSection({title, description}: HeroTypes) {
  return (
    <div className='hero-section'>
      <div className="container">
        <Navbar/>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HeroSection
