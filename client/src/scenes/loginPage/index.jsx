import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      sx={{
        backgroundImage: "url(https://4kwallpapers.com/images/wallpapers/new-york-city-skyline-panorama-sunset-skyscrapers-6144x2781-4645.jpgs)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
       width="100%"
       backgroundColor="rgba(255, 255, 255, 0.5)" 
       p="1rem 6%"
       textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="black">
          DevTown
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Hey you are at DevTown, it's better than B-town!
        </Typography>
        <Form />
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} textAlign="center">
          Made by Taniska Jha with <3
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
