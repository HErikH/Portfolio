import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

function ToggleButton({ open, setOpen }) {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      {!open ?
      <RxHamburgerMenu /> : 
      <TfiClose />}       
    </button>
  )
}
export default ToggleButton