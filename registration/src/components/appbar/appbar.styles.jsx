import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';

export const ImageLogo = ({ src, alt = "Logo" }) => (
  <Avatar
    src={src}
    alt={alt}
    component={Link}  
    to="/registration"
    sx={{
      width: "56px",  // Adjust size
      height: "56px",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
    }}
  />
);

