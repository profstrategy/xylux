
import { heroContent } from "@/contents/hero"
import AnimateText from "@/Ui/AnimateText"
import Button from "@/Ui/Button"
import Heading from "@/utilities/Heading"
import { Layout } from "@/utilities/padding"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="">
      <Navbar />
        <div className={`${Layout.padddingX} ${Layout.subPddingY}`}>
          {heroContent.map((cont1) => (<Heading key={cont1.id} type={'big_heading'} classname='text-[#f69f12] '>{cont1.content1}</Heading>))}

          {heroContent.map((cont2) => (<Heading key={cont2.id} type='h2' classname={'text-[#f69f12]'}>{cont2.content2}</Heading>))}

          {heroContent.map((cont3) => (<Heading key={cont3.id} type='h6'>{cont3.content3}</Heading>))}
          <Heading type={'h1'}><AnimateText /></Heading>
          <Button styles={`transition-colors duration-400 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-[#f69f12] hover:bg-[#f69f12] focus:ring-[#f69f12] border-2 border-[#f69f12]  mt-5`}>Download CV</Button>
        </div>
       
      
    </div>
  )
}

export default Home
