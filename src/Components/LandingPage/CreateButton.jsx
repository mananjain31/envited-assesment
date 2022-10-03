import { useNavigate } from "react-router";
import "./CreateButton.css";

const CreateButton = ({ fullWidth }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/event");
  };
  return (
    <button
      className={`create-button ${fullWidth && "w-full"}`}
      onClick={handleClick}
    >
      🎉 Create My Event
    </button>
  );
};

export default CreateButton;
