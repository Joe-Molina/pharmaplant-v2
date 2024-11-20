
import { BannerCarrusel } from "./inicio/banner/Banner";
import { Menu } from "./inicio/menu/Menu";



export default function Home() {

  //font-[family-name:var(--font-geist-sans)] usar una tipografia 
  return (
    <div className="">
      <BannerCarrusel/>
      <Menu/>
    </div>
  );
}
