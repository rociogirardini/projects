import { Container } from "@mui/material";
import CardExperience from "./CardExperience";
import DevicesIcon from '@mui/icons-material/Devices';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function Experience () {
    const experiences = [
        {
            name: 'Frontend Dev',
            desc: "I'm passionate about UI/UX design, with over a year of experience. I work with HTML, CSS, JavaScript, React, and Vue as my primary frameworks.",
            btn: 'See my front experience',
            icon: <DevicesIcon />,
            color: 'purple',
        },
        {
            name: 'Project Manager',
            desc: "I'm enthusiastic about Project Management, with over a year of experience. I excel in overseeing projects, ensuring timely delivery, and fostering effective team collaboration to achieve project goals.",
            btn: 'See my PM experience',
            icon: <AssignmentTurnedInIcon />,
            color: 'cyan',
        }
    ]
 return (
    <Container className="section-wrapper" sx={{height: "100vh", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}} id="experience">
        <p className="text-center heading">My Experience</p>
        <div className="flex experience-wrapper">
        {experiences.map((exp, idx) => (
            <CardExperience key={idx} idx={idx} name={exp.name} desc={exp.desc} btn={exp.btn} icon={exp.icon}  color={exp.color}/>
        ))}
        </div>
    </Container>
 )
}

export default Experience;