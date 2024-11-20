
import { About } from "./inicio/about/About";
import { BannerCarrusel } from "./inicio/banner/Banner";
import { Menu } from "./inicio/menu/Menu";
import NotiSalud from "./inicio/notisalud/NotiSalud";



export default function Home() {

  //font-[family-name:var(--font-geist-sans)] usar una tipografia 
  return (
    <>
      <BannerCarrusel />
      <Menu />
      <NotiSalud />
      <About />
    </>
  );
}
