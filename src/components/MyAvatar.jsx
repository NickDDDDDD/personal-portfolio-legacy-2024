import { Avatar } from "@mui/material";
import photo from "../assets/images/avatar/photo.png";

const MyAvatar = () => {
  return (
    <Avatar
      variant="circular"
      src={photo}
      alt="Ultraman"
      sx={{
        width: "20%",
        height: "auto",
        marginTop: "2em",
        boxShadow: "0px 0px 15rem rgba(255, 175, 27, 0.5)", // 添加阴影
      }}
    />
  );
};

export default MyAvatar;
