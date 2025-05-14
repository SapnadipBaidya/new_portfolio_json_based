import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const theme = useTheme();
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Box 
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        px: { xs: 4, md: 8, lg: 16 },
        pt: 10,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)' 
          : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          Hi, I'm <span style={{ color: theme.palette.primary.main }}>Abhishek Jana</span>
        </Typography>
        
        <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
          Full Stack Developer
        </Typography>
        
        <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
          I build exceptional digital experiences with modern technologies. Passionate about creating efficient, scalable solutions with great user experiences.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => scrollTo('contact')}
        >
          Contact Me
        </Button>
        <Button 
          variant="outlined" 
          size="large"
          onClick={() => scrollTo('projects')}
        >
          View Projects
        </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;