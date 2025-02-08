import Bot from "../component/Bot";
import Footer from "../component/Footer";
import Header from "../component/Header";
import LeadersBoard from "../component/LeadersBoard";
import Menu from "../component/Menu";
import ProfileCard from "../component/ProfileCard";
import Trade from "../component/Trade";

function Home() {
  return (
    <>
      <Header />
      <div className="pb-24">
        <ProfileCard />
        <Menu />
        <Trade />
        <Bot />
        <LeadersBoard />
      </div>
      <Footer />
    </>
  );
}

export default Home;
