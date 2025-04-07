import DocumentTitle from "../../DocumentTitle";
import css from "./HomePage.module.css";
import Waves from "../../components/Waves/Waves";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <h1 className={css.title}>The Best App for your Tasks</h1>

      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </>
  );
};

export default HomePage;
