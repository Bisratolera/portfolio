import Navbar from "./Navbar"
import Page from "./Page"
import About from "./About"
import Certifications from "./Certifications"
import Footer from "./Footer"
import TestimonialSlider from "./TestimonialSlider"


const Home = () => {
  return (
  <div className="">
    <Navbar />
    <Page />
    <About />
    <Certifications />
    <TestimonialSlider />
    <Footer />
  </div>
  )
}

export default Home