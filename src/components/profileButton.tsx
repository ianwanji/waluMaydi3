import { useRouter } from "next/router";
import { user_acc } from "../types";

type CardProps = {
  user: user_acc;
};

const ProfileButton: React.FC<CardProps> = ({ user }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/profilePage/${user.user_id}`);
  };

  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
      View Profile
    </button>
  );
};

export default ProfileButton;
