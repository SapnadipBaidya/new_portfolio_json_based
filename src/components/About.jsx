import { Box, Typography, Avatar, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();
  
  return (
    <Box 
      id="about"
      sx={{
        py: 10,
        px: { xs: 4, md: 8, lg: 16 },
        background: theme.palette.background.paper,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        sx={{
          position: 'absolute',
          top: 100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(${theme.palette.primary.main}30, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      
      <Box position="relative" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              textAlign: 'center',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                borderRadius: '2px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              }
            }}
          >
            About <span style={{ 
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Me</span>
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: 6 
          }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                position: 'relative',
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
              }}
            >
              <Avatar
                src="/myLinkedPicture.jpeg" // Make sure image is in public folder
                sx={{ 
                  width: '100%',
                  height: '100%',
                  border: `4px solid ${theme.palette.primary.main}`,
                  position: 'relative',
                  zIndex: 2,
                }}
              />
              <Box 
                sx={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  right: '-10px',
                  bottom: '-10px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  zIndex: 1,
                  animation: 'rotate 8s linear infinite',
                  '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  }
                }}
              />
            </Box>
            
            <Paper 
              component={motion.div}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              elevation={3} 
              sx={{ 
                p: 4, 
                flex: 1,
                background: theme.palette.mode === 'dark' 
                  ? 'rgba(30, 30, 30, 0.8)' 
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                Who am I?
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm Sapnadip Baidya, a passionate Full Stack Developer based in Pune, India. 
                I specialize in building modern web applications using technologies like React, Node.js, and Next.js.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                With expertise in both front-end and back-end development, I create seamless, performant digital 
                experiences. My background in Data Science allows me to bring data-driven approaches to my projects.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                When I'm not coding, you can find me participating in hackathons (I secured 9th rank in one organized 
                by Ineuron!), learning new technologies, or contributing to open-source projects.
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2, 
                  mt: 3 
                }}
              >
                {[
                  { label: "Phone", value: "+91 8013687055" },
                  { label: "Email", value: "sapnadip.baidya.official@gmail.com" },
                  { label: "Location", value: "Pune, India" },
                  { label: "Languages", value: "English, Hindi, Bengali" }
                ].map((item, index) => (
                  <Box
                    component={motion.div}
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      p: 1,
                      borderRadius: 1,
                      background: theme.palette.mode === 'dark' 
                        ? 'rgba(110, 69, 226, 0.1)' 
                        : 'rgba(110, 69, 226, 0.05)',
                    }}
                  >
                    <Typography variant="body2">
                      <strong>{item.label}:</strong> {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;