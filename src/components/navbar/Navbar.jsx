import SideBar from '../sidebar/SideBar';
import { motion } from 'framer-motion'
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import './style.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <SideBar />
        <div className="wrapper">
            <motion.span
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            >
              ERIK HARUTYUNYAN
            </motion.span>
            <div className="social">
                <a target='_blank' href='https://github.com/HErikH'><VscGithub /></a>
                <a target='_blank' href='https://www.linkedin.com/in/erik-harutyunyan-2588a9226/'><FaLinkedin /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar