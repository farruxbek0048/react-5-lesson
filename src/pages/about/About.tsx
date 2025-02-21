import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../components/hero section/HeroSection'
import './About.css'
function About() {
  const title: string = 'Careers'
  const description: string ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus pariatur, possimus iure reprehenderit labore laboriosam tempore architecto expedita doloremque.'
  return (
    <div>
      <HeroSection title={title} description={description}/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default About
