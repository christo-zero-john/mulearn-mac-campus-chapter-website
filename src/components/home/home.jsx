import NavBar from "../common/nav-bar";
import Hero from "./hero-section";
import MuTopics from "./mu-topics";
import OfficialLinks from "./official-links";
import WhatsMulearn from "./whats-mulearn";
import KeyPoints from "./key-points";
import ConnectCompeteLearn from "./connect-compete-learn";
import LearnAndGrow from "./learn-grow";
import FAQList from "../frequently-asked-questions/faq-list";
import Footer from "../common/footer";
import WhatsMulearnCampusChapters from "./whats-campus-chapters";

function Home() {
  return (
    <div className="en-Oxanium">
      <NavBar />
      <Hero />
      <MuTopics />
      <OfficialLinks />
      <WhatsMulearn />
      <WhatsMulearnCampusChapters />
      <KeyPoints />
      <ConnectCompeteLearn />
      <LearnAndGrow />
      <FAQList />
      <Footer />
    </div>
  );
}

export default Home;
