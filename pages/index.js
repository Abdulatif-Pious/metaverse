
import { Navbar, Footer  } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insight, WhatsNew, World } from '../sections';

export default function Home() {
  return (
    <main >
        <Navbar />
        <div className='flex flex-col justify-evenly min-h-screen'>
          <Hero />
          <About />
        </div>
        <div className="relative">
          {/* // gradient */}
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          {/* gradient */}
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insight />
          {/* gradient*/}
          <Feedback />
        </div>
        <div>
          <Footer />
        </div>
        
    </main>
  )
}
