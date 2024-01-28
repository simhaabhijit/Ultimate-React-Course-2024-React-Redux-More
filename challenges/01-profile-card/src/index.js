import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar avatarImg="Minato.jpg" />
      <div className="data">
        <Intro
          name="Minato Namikaze"
          data="Fourth Hokage. Regarded as The Yellow Flash of Leaf.
          Ended 3rd Great Ninja War, Restrained Kurama and saved Konaha,
          Defeated over 1000 Shinobi Single Handedly"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img src={props.avatarImg} alt="Avatar" className="avatar" />
  );
}

function Intro(props) {
  return (
    <div className="data">
      <h1>{props.name}</h1>
      <p>{props.data}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Flying Thunder God" emoji="💨" color="burlywood" />
      <Skill name="Rasengan" emoji="💥" color="lightblue" />
      <Skill name="Space Time " emoji="🌀" color="blueviolet" />
      <Skill name="Sage Mode" emoji="🐸" color="orangered" />
      <Skill name="Shadow Clone" emoji="⚔️" color="beige" />
      <Skill name="Uzumaki Death Reaper" emoji="🗡️" color="sienna" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
