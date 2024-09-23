import { Footer } from "../../components/Footer";
import { FavoriteMusic } from "../../components/FavoriteMusic";
import { Header } from "../../components/Header";

export default function Home() {
  return (
    <div className="font-montserrat bg-background">
      <Header />
      <h1 className="ml-6 text-3xl text-primary mt-6">Home</h1>

      <div className="flex w-full justify-between px-10 my-3 text-lg text-primary">
        <h2>Favorite Music</h2>
        <i className="ri-add-line text-secondary border-[1px] rounded-full px-1" />
      </div>
      <FavoriteMusic />
      <Footer />
    </div>
  );
}
