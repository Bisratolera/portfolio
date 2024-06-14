import Navbar from "./Navbar"
import Page from "./Page"
import About from "./About"
import Certifications from "./Certifications"
import Footer from "./Footer"
import TestimonialSlider from "./TestimonialSlider"
import Tools from "./Tools"
import Promo from "./Promo"
import BlogPage from "./BlogPage"


const Home = () => {
  return (
  <div className="">
    <Navbar />
    <Page />
    <About />
    <BlogPage />
    <Tools />
    <Certifications />
    <Promo />
    <TestimonialSlider />
    <Footer />
  </div>
  )
}

export default Home