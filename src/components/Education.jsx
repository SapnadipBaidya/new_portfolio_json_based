import { Box, Typography, Paper, useTheme, Chip, Avatar, Container, Stack, styled } from '@mui/material';
import { School, WorkspacePremium, EmojiEvents, Code, DataObject } from '@mui/icons-material';
import { motion } from 'framer-motion';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';

const education = [
  {
    degree: 'Bachelor of Technology | Computer Science',
    institution: 'Lovely Professional University',
    specialization: 'Specialization in Data Science',
    duration: '2022 - 2025',
    icon: <DataObject fontSize="small" />,
    skills: ['Machine Learning', 'Big Data', 'Cloud Computing', 'AI'],
    highlights: []
  },
  {
    degree: 'Diploma | Computer Science',
    institution: 'Lovely Professional University',
    specialization: '',
    duration: '2019 - 2022',
    icon: <Code fontSize="small" />,
    skills: ['Algorithms', 'Web Development', 'Database Systems'],
    highlights: []
  }
];

const certifications = [
  {
    name: 'Blockchain Developer Certification',
    issuer: 'Coursera',
    date: '2023',
    credential: 'Credential ID: XYZ123',
    skills: ['Solidity', 'Smart Contracts', 'Ethereum'],
    icon: '/assets/blockchain-icon.svg'
  },
  {
    name: 'Advanced React Specialist',
    issuer: 'Udemy',
    date: '2022',
    credential: 'Credential ID: ABC456',
    skills: ['Hooks', 'Context API', 'Performance Optimization'],
    icon: '/assets/react-icon.svg'
  }
];

const achievements = [
  {
    title: 'Hackathon Champion',
    description: 'Secured 9th rank among 500+ participants in Ineuron Hackathon',
    date: '2022',
    icon: <EmojiEvents />
  },
  {
    title: 'Code Educator in BrightChamps',
    description: 'Tought coding to 100+ International students in BrightChamps',
    date: '2022-2023',
    icon: <WorkspacePremium />
  }
];

// Styled components
const GlowCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    zIndex: 1
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.1,
    clipPath: 'circle(50px at 100px 0px)',
    zIndex: 0
  }
}));

const Education = () => {
  const theme = useTheme();
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  const scaleUp = {
    hover: {
      scale: 1.03,
      boxShadow: theme.shadows[8],
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at center, #1a1a1a 0%, #121212 100%)'
          : 'linear-gradient(to bottom, #f9f9f9 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Section Header */}
          <motion.div variants={item}>
            <Stack alignItems="center" spacing={2} sx={{ mb: 8 }}>
              <Chip 
                label="ACADEMIC BACKGROUND" 
                color="primary" 
                variant="outlined"
                sx={{ 
                  fontWeight: 600,
                  letterSpacing: 1,
                  fontSize: '0.75rem',
                  height: 28
                }}
              />
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  fontWeight: 800, 
                  textAlign: 'center',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2
                }}
              >
                Education & Achievements
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  textAlign: 'center', 
                  maxWidth: '700px',
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                My academic journey and professional milestones that shaped my technical expertise
              </Typography>
            </Stack>
          </motion.div>

          {/* Education Timeline */}
          <Box sx={{ position: 'relative', mb: 10 }}>
            <Box sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' }
            }} />
            
            <Timeline 
              position="alternate" 
              sx={{ 
                maxWidth: '100%',
                p: 0,
                '& .MuiTimelineItem-root:before': {
                  flex: 0,
                  padding: 0
                }
              }}
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <TimelineItem sx={{ mb: 6 }}>
                    <TimelineOppositeContent
                      sx={{ 
                        m: 'auto 0',
                        flex: 0.2,
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: { xs: 'none', md: 'block' }
                      }}
                    >
                      {edu.duration}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot 
                        color="primary" 
                        sx={{ 
                          width: 48, 
                          height: 48,
                          bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                          boxShadow: theme.shadows[4],
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `2px solid ${theme.palette.primary.main}`
                        }}
                      >
                        {edu.icon}
                      </TimelineDot>
                      {index !== education.length - 1 && (
                        <TimelineConnector sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? '#333' : '#eee',
                          height: '40px'
                        }} />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <motion.div whileHover="hover" variants={scaleUp}>
                        <GlowCard 
                          elevation={4} 
                          sx={{ 
                            p: { xs: 2, sm: 3 },
                            borderRadius: '16px',
                            bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                            position: 'relative',
                            overflow: 'hidden',
                            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                          }}
                        >
                          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                            <Box sx={{
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              bgcolor: theme.palette.primary.main,
                              flexShrink: 0
                            }} />
                            <Typography 
                              variant="h5" 
                              component="h3" 
                              sx={{ 
                                fontWeight: 700,
                                color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.dark
                              }}
                            >
                              {edu.degree}
                            </Typography>
                          </Stack>
                          
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 600, 
                              mb: 1,
                              color: 'text.secondary',
                              pl: 4
                            }}
                          >
                            {edu.institution}
                          </Typography>
                          
                          {edu.specialization && (
                            <Chip
                              label={edu.specialization}
                              size="small"
                              sx={{ 
                                mb: 2,
                                ml: 4,
                                bgcolor: theme.palette.mode === 'dark' 
                                  ? 'rgba(25, 118, 210, 0.2)' 
                                  : 'rgba(25, 118, 210, 0.1)',
                                color: theme.palette.primary.main,
                                fontWeight: 500,
                                border: `1px solid ${theme.palette.primary.main}`
                              }}
                            />
                          )}
                          
                          <Box sx={{ pl: 4 }}>
                            <Typography variant="caption" sx={{ 
                              display: 'block',
                              fontWeight: 500,
                              mb: 1.5,
                              color: 'text.secondary'
                            }}>
                              KEY SKILLS GAINED:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {edu.skills.map((skill, i) => (
                                <Chip 
                                  key={i} 
                                  label={skill} 
                                  size="small"
                                  sx={{ 
                                    bgcolor: 'transparent',
                                    fontWeight: 500,
                                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                    '& .MuiChip-label': {
                                      px: 1.2
                                    }
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </GlowCard>
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                </motion.div>
              ))}
            </Timeline>
          </Box>

          {/* Certifications Section */}
          <motion.div variants={item}>
            <Box sx={{ mb: 10 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 6 }}>
                <Box sx={{
                  width: '40px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: '2px'
                }} />
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >
                  <WorkspacePremium color="primary" sx={{ fontSize: '2rem' }} />
                  Professional Certifications
                </Typography>
              </Stack>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 4
              }}>
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={item} whileHover="hover">
                    <GlowCard 
                      elevation={4} 
                      sx={{ 
                        p: 3,
                        borderRadius: '16px',
                        bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                        height: '100%',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                      }}
                    >
                      <Stack direction="row" spacing={3} alignItems="flex-start">
                        <Avatar 
                          src={cert.icon}
                          sx={{ 
                            width: 60, 
                            height: 60,
                            bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
                            border: `2px solid ${theme.palette.primary.main}`,
                            '& img': {
                              objectFit: 'contain',
                              width: '60%',
                              height: '60%'
                            }
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {cert.name}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                            {cert.issuer} • {cert.date}
                          </Typography>
                          {cert.credential && (
                            <Typography variant="caption" color="text.secondary" sx={{ 
                              display: 'inline-block',
                              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: '4px',
                              mb: 2,
                              fontFamily: 'monospace'
                            }}>
                              {cert.credential}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                      
                      <Typography variant="caption" sx={{ 
                        display: 'block',
                        fontWeight: 600,
                        mt: 3,
                        mb: 2,
                        color: 'text.secondary',
                        letterSpacing: 1
                      }}>
                        SKILLS COVERED:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {cert.skills.map((skill, i) => (
                          <Chip 
                            key={i} 
                            label={skill} 
                            size="small"
                            sx={{ 
                              bgcolor: 'transparent',
                              fontWeight: 500,
                              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                              '& .MuiChip-label': {
                                px: 1.2
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </GlowCard>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={item}>
            <Box sx={{ mb: 4 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 6 }}>
                <Box sx={{
                  width: '40px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: '2px'
                }} />
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5
                  }}
                >
                  <EmojiEvents color="primary" sx={{ fontSize: '2rem' }} />
                  Notable Achievements
                </Typography>
              </Stack>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 4
              }}>
                {achievements.map((achievement, index) => (
                  <motion.div key={index} variants={item} whileHover="hover">
                    <GlowCard 
                      elevation={4} 
                      sx={{ 
                        p: 3,
                        borderRadius: '16px',
                        bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                        height: '100%',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                      }}
                    >
                      <Stack direction="row" spacing={3} alignItems="flex-start">
                        <Avatar sx={{ 
                          bgcolor: theme.palette.secondary.main,
                          width: 56, 
                          height: 56,
                          color: '#fff',
                          border: `2px solid ${theme.palette.secondary.dark}`
                        }}>
                          {achievement.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 1 }}>
                            {achievement.title}
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                            {achievement.description}
                          </Typography>
                          <Chip 
                            label={achievement.date} 
                            size="small" 
                            sx={{ 
                              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                              fontWeight: 500
                            }}
                          />
                        </Box>
                      </Stack>
                    </GlowCard>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;