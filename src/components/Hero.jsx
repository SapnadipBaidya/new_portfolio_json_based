import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    "const developer = {",
    "  name: 'Sapnadip Baidya',",
    "  role: 'Full Stack Developer',",
    "  skills: ['React', 'Node.js', 'MongoDB'],",
    "  passion: 'Building digital experiences'",
    "};"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentLine < codeLines.length) {
        if (currentIndex <= codeLines[currentLine].length) {
          setTypedText(codeLines[currentLine].substring(0, currentIndex));
          currentIndex++;
        } else {
          setCurrentLine(prev => prev + 1);
          currentIndex = 0;
          // Add a small delay between lines
          setTimeout(() => {
            setTypedText(prev => prev + '\n');
          }, 200);
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentLine]);

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
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 4, md: 8, lg: 16 },
        pt: 10,
        gap: 4,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)' 
          : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Code Editor Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          flex: 1,
          zIndex: 1,
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
       <Box sx={{
  background: theme.palette.mode === 'dark' ? '#1E1E1E' : '#f8f8f8',
  borderRadius: 2,
  p: 3,
  boxShadow: 3,
  fontFamily: '"Fira Code", monospace',
  position: 'relative',
  minHeight: '300px',
  minWidth: '300px', // Set minimum height
  height: '300px', // Fixed height
  width: '100%', // Full width of parent container
  overflow: 'auto', // Add scroll if content overflows
}}>
          {/* Editor Header */}
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            mb: 2,
            position: 'absolute',
            top: 12,
            left: 12,
          }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FF5F56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FFBD2E' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27C93F' }} />
          </Box>
          
          {/* Code Content */}
          <Box sx={{ 
            mt: 6,
            color: theme.palette.mode === 'dark' ? '#D4D4D4' : '#333',
            whiteSpace: 'pre-wrap',
            fontSize: isMobile ? '0.9rem' : '1rem',
            lineHeight: 1.5,
            fontFamily: '"Fira Code", monospace',
          }}>
            {typedText}
            <Box component="span" sx={{ 
              animation: 'blink 1s step-end infinite',
              borderRight: `2px solid ${theme.palette.primary.main}`,
              '@keyframes blink': {
                'from, to': { borderColor: 'transparent' },
                '50%': { borderColor: theme.palette.primary.main },
              }
            }} />
          </Box>
        </Box>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          flex: 1,
          zIndex: 1,
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Hi, I'm <span style={{ color: theme.palette.primary.main }}>Sapnadip Baidya</span>
        </Typography>
        
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h2" 
          sx={{ 
            fontWeight: 600, 
            mb: 2,
            color: theme.palette.text.secondary,
          }}
        >
          Full Stack Developer
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: '600px', 
            mb: 4,
            fontSize: isMobile ? '1rem' : '1.1rem',
            lineHeight: 1.6,
          }}
        >
          I transform ideas into digital reality through clean, efficient code and thoughtful user experiences.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => scrollTo('contact')}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Contact Me
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => scrollTo('projects')}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            View Projects
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;