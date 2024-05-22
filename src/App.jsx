import { CoverTemplate } from "./components/CoverTemplate"
import { FooterDevTemplate } from "./components/FooterDevTemplate"
import { FooterTemplate } from "./components/FooterTemplate"
import { GalleryTemplate } from "./components/GalleryTemplate"
import { HeaderTemplate } from "./components/HeaderTemplate"
import { Services } from "./components/Services"
import { TestimonialCntnrTemplate } from "./components/TestimonialCntnrTemplate"

TestimonialCntnrTemplate;
function App () {
  return (
    <main className="max-w-[1280px] min-w-[320px] mx-auto">
      <HeaderTemplate />
      <CoverTemplate />
      <Services />
      <TestimonialCntnrTemplate />
      <GalleryTemplate />
      <FooterTemplate />
      <FooterDevTemplate />
    </main>
  )
}

export default App;
