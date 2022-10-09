import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own pokedex filled with all kinds of pokemons"
        description="Start learning about pokemons from all generations"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Beautiful UI"
        description="Experience smooth constant
        colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Pokemon app is built using Expo
        which runs natively on all users
        devices. You can easily get your hands on this app"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the app"
        description="The app contains three screens.
        The first screen is the menu screen where you
        can select different options.
        The second one shows a list of all the pokemons.
        On the third one you can view more details of
        the selected pokemon"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">TheRealBrallis</span>
        </p>
      </div>
    </>
  );
};

export default App;
