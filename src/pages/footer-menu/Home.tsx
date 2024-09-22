import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Home() {
  const [Home, setHome] = useState(true);
  return (
    <div>
      <Header Home={Home} />
      <Footer />
    </div>
  );
}
