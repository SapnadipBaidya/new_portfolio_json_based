import { Box, Typography, TextField, Button, Grid, Link, useTheme, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, LinkedIn, FileDownload } from '@mui/icons-material';

const GlowButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  padding: '12px 32px',
  borderRadius: '50px',
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || '#6e48aa'})`,
    zIndex: -2,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: theme.palette.background.default,
    zIndex: -1,
    transition: 'all 0.3s ease',
    borderRadius: '50px',
    transform: 'scale(0.95)',
  },
  '&:hover': {
    color: theme.palette.common.white,
    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
    '&:after': {
      transform: 'scale(0)',
    },
  },
}));

const ContactCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 30, 40, 0.7)' : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: '32px',
  boxShadow: theme.shadows[10],
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[16],
  },
}));

const Contact = () => {
  const theme = useTheme();
  
  return (
    <Box 
      id="contact"
      sx={{
        py: 12,
        px: { xs: 4, md: 8, lg: 16 },
        background: theme.palette.mode === 'dark' 
          ? 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
          : 'radial-gradient(circle at center, #f5f7fa 0%, #e4e8f0 50%, #cfd9e6 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '80%',
          height: '80%',
          background: theme.palette.primary.main,
          opacity: 0.1,
          borderRadius: '50%',
          filter: 'blur(80px)',
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            fontWeight: 800, 
            mb: 8, 
            textAlign: 'center',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || '#6e48aa'})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}
        >
          Let's Connect
        </Typography>
        
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={7} lg={6}>
            <ContactCard>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                      },
                    },
                  }}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                      },
                    },
                  }}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                      },
                    },
                  }}
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  InputProps={{
                    sx: {
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: theme.palette.divider,
                      },
                    },
                  }}
                />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <GlowButton type="submit">
                    Send Message
                  </GlowButton>
                  <GlowButton 
                    startIcon={<FileDownload />}
                    onClick={() => window.open('/Abhishek Jana Frontend Developer.pdf', '_blank')}
                    sx={{
                      '&:before': {
                        background: `linear-gradient(45deg, ${theme.palette.secondary?.main || '#6e48aa'}, ${theme.palette.success.main || '#4caf50'})`,
                      }
                    }}
                  >
                    Download CV
                  </GlowButton>
                </Box>
              </Box>
            </ContactCard>
          </Grid>
          
          <Grid item xs={12} md={5} lg={4}>
            <ContactCard sx={{ height: '100%' }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                height: '100%',
              }}>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2, borderRadius: '12px', bgcolor: 'rgba(0,0,0,0.03)' }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || '#6e48aa'})`,
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    <Email fontSize="medium" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                    <Typography variant="body1" fontWeight={500}>
                      abhishekjana.2507@gmail.com
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2, borderRadius: '12px', bgcolor: 'rgba(0,0,0,0.03)' }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || '#6e48aa'})`,
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    <Phone fontSize="medium" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Phone</Typography>
                    <Typography variant="body1" fontWeight={500}>
                      +91 8478909683
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2, borderRadius: '12px', bgcolor: 'rgba(0,0,0,0.03)' }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || '#6e48aa'})`,
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    <LocationOn fontSize="medium" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Location</Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Kolkata, India
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2, borderRadius: '12px', bgcolor: 'rgba(0,0,0,0.03)' }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || '#6e48aa'})`,
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    <LinkedIn fontSize="medium" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">LinkedIn</Typography>
                    <Link 
                      href="https://linkedin.com/in/abhishek-jana" 
                      target="_blank"
                      underline="hover"
                      sx={{ 
                        color: 'inherit',
                        fontWeight: 500,
                        '&:hover': {
                          color: theme.palette.primary.main,
                        }
                      }}
                    >
                      Abhishek Jana
                    </Link>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 'auto', pt: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    Feel free to reach out through any of the channels above. I'll get back to you as soon as possible!
                  </Typography>
                </Box>
              </Box>
            </ContactCard>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Contact;