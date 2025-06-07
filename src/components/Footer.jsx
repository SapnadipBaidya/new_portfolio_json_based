import { Box, Typography, IconButton, Divider, useTheme } from '@mui/material';
import { GitHub, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{
        py: 6,
        px: { xs: 4, md: 8, lg: 16 },
        background: theme.palette.background.default,
        textAlign: 'center',
      }}
    >
      <Divider sx={{ mb: 4 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
        <IconButton href="https://github.com/HorizonDevil" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton href="https://twitter.com/yourusername" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton href="https://www.instagram.com/n0t_s0__comm0n" target="_blank">
          <Instagram />
        </IconButton>
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Sapnadip Baidya. All rights reserved.
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Designed and built with ❤️ by Sapnadip Baidya
      </Typography>
    </Box>
  );
};

export default Footer;