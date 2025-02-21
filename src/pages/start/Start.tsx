import './Start.css';
import HeroSection from '../../components/hero section/HeroSection';
import Cards from './../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
function Start() {
  return (
    <div>
      <HeroSection title='Help Center' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus pariatur, possimus iure reprehenderit labore laboriosam tempore architecto expedita doloremque.'/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Start
