import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "Flying Thunder God", level: "S-Rank", color: "burlywood" },
  { skill: "Rasengan", level: "S-Rank", color: "lightblue" },
  { skill: "Guiding Thunder ", level: "S-Rank", color: "blueviolet" },
  { skill: "Sage Mode", level: "S-Rank", color: "orangered" },
  { skill: "Shadow Clone", level: "A-Rank", color: "beige" },
  { skill: "Uzumaki Reaper Death Seal", level: "S-Rank", color: "sienna" },
  { skill: "Summoning", level: "A-Rank", color: "beige" },
  { skill: "Sensing", level: "B-Rank", color: "beige" }
];

function App() {
  const skillList = skills;

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
        {skillList.length > 0 ? <SkillList skills={skillList} /> : null}
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

function SkillList({ skills }) {
  // console.log(skills);
  return (
    <div className="skill-list">
      {/* <Skill name="Flying Thunder God" emoji="💨" color="burlywood" />
      <Skill name="Rasengan" emoji="💥" color="lightblue" />
      <Skill name="Space Time " emoji="🌀" color="blueviolet" />
      <Skill name="Sage Mode" emoji="🐸" color="orangered" />
      <Skill name="Shadow Clone" emoji="⚔️" color="beige" />
      <Skill name="Uzumaki Death Reaper" emoji="🗡️" color="sienna" /> */}

      {/* {skills.map((skill) => {
        return < Skill skillObj={skill} key={skill.skill} />;
      }
      )} */}

      {skills.map((skill) => <Skill skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill} />)}
    </div>
  );
}

function getLevelEmoji(level) {
  let emoji = "";
  switch (level) {
    case 'S-Rank':
      emoji = "💥";
      break;
    case 'A-Rank':
      emoji = "🔥";
      break;
    case 'B-Rank':
      emoji = "⚔️";
      break;
    case 'C-Rank':
      emoji = "🗡️";
      break;
    default:
      emoji = "🌀";
      break;
  }

  return emoji;
}

// function Skill({ skillObj }) {
function Skill({ skill, level, color }) {

  // const emoji = getLevelEmoji(skillObj.level);

  return (
    // <div className="skill" style={{ backgroundColor: skillObj.color }}>
    //   <span>{skillObj.skill}</span>
    //   <span>{emoji}</span>
    // </div>
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'S-Rank' && "💥"}
        {level === 'A-Rank' && "🔥"}
        {level === 'B-Rank' && "⚔️"}
        {level === 'C-Rank' && "🗡️"}
      </span>
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
