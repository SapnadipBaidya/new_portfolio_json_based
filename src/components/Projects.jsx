import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, useTheme, Container, Avatar, Tabs, Tab, Paper, Divider, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, Sensors, Description, GitHub, Visibility, Close, ArrowBack, ArrowForward, Star, StarBorder, Share, DataArray } from '@mui/icons-material';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'iot', label: 'IoT Projects' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'data', label: 'Data Processing' }
];

const projects = [
  {
    id: 1,
    title: 'Jail Luxury Ecommerce Platform',
    date: 'Mar 2025',
    description: 'Developed a full-stack e-commerce platform with React, Next.js, Node.js, Express, and Sequelize. Implemented user authentication, product management, cart functionality, order processing, RazorPay payment gateway, and wishlist functionality.',
    longDescription: 'This project involved building a complete e-commerce solution from scratch. The platform features a responsive frontend built with React and Next.js, a RESTful API backend with Node.js and Express, and a MySQL database managed with Sequelize ORM. Key features include JWT authentication, product search and filtering, cart persistence, order tracking, and integration with RazorPay for secure payments. The admin dashboard allows for inventory management, order processing, and sales analytics.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'RazorPay'],
    category: 'ecommerce',
    links: {
      demo: 'https://jail-luxruy-next-app.vercel.app/',
      github: 'https://github.com/HorizonDevil/Jail-Luxuary-Frontend'
    },
    icon: <ShoppingCart />,
    accentColor: '#FF6B6B',
    images: ['/project1-1.jpg', '/project1-2.jpg']
  },
  {
    id: 2,
    title: 'Under Water Torpedo Detection',
    date: 'Sept 2024',
    description: 'Developed a real-time torpedo detection system using React, Node.js, Express, Embedded C++, Arduino, and ESP8266. Integrated ultrasonic sensors with Arduino to detect underwater objects and transmit data wirelessly.',
    longDescription: 'This IoT project combines hardware and software to create a torpedo detection system. The hardware consists of Arduino boards with ultrasonic sensors submerged underwater, communicating via ESP8266 WiFi modules. The web dashboard, built with React, displays real-time sensor data and alerts. The Node.js backend processes the data and triggers alarms when objects are detected within a certain range. The system was tested in controlled underwater environments with promising detection accuracy.',
    technologies: ['React', 'Node.js', 'Express', 'C++', 'Arduino', 'ESP8266'],
    category: 'iot',
    links: {
      demo: '#',
      github: '#'
    },
    icon: <Sensors />,
    accentColor: '#4ECDC4',
    images: ['/project2-1.jpg', '/project2-2.jpg']
  },
  {
    id: 3,
    title: 'Data Pipeline Generator',
    date: 'Jan 2024',
    description: 'Developed a responsive company website using HTML, CSS, JavaScript, and PHP. Designed interactive UI/UX for showcasing company information and services with a PHP backend contact form.',
    longDescription: 'A responsive marketing website for Addlens, featuring modern design principles and smooth animations. The frontend was built with vanilla JavaScript, CSS3 animations, and responsive layouts. The PHP backend handles form submissions and includes basic security measures against spam. The site features a CMS-like admin panel for content updates without code changes. Performance optimizations resulted in 95+ Lighthouse scores across all metrics.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    category: 'web',
    links: {
demo: 'https://github.com/SapnadipBaidya/datapipelineui',
      github: 'https://github.com/SapnadipBaidya/datapipelineui'
    },
    icon: <Code />,
    accentColor: '#FFD166',
    images: ['/project3-1.jpg']
  },
  {
    id: 4,
    title: 'Smart Contract Signer',
    date: 'Ongoing',
    description: 'Developed a PDF form builder with dynamic field creation and template management. Integrated PDF.js for rendering and jsPDF + HTML2Canvas for exporting filled forms as downloadable PDFs.',
    longDescription: 'A document management system that allows users to create, sign, and manage smart contracts. The platform features a drag-and-drop form builder, template system, and digital signature capabilities. PDF.js renders documents in the browser, while jsPDF and HTML2Canvas handle PDF generation. The backend uses Node.js with MongoDB for document storage and user management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PDF.js', 'jsPDF'],
    category: 'web',
    links: {
      demo: 'https://drive.google.com/file/d/19VAAt_xBJVtncUv9wQfjvxywToj4ZRlx/view?usp=sharing',
      github: 'https://github.com/HorizonDevil/Smart-Contract-Signer'
    },
    icon: <Description />,
    accentColor: '#06D6A0',
    images: ['/project4-1.jpg', '/project4-2.jpg', '/project4-3.jpg']
  },
  {
    id: 5,
    title: 'Real-Time Data Processing Using Kafka',
    date: 'Jan 2024',
    description: 'Constructed a real-time data processing system using Kafka and Node.js, enabling processing of over 10,000 train activation events per hour and improving response time by 30%.',
    longDescription: 'Developed a high-performance data processing pipeline using Apache Kafka and Node.js. The system processes over 10,000 train activation events per hour with a 35% reduction in data latency compared to batch processing. Created interactive visualization tools with React and Chart.js for real-time monitoring, reducing issue detection time by 6 hours weekly. Optimized MySQL queries through indexing and JOIN optimizations, achieving 2x faster analytics response times. Refactored API endpoints to reduce response times by 60%, supporting 50+ daily active users with low-latency interactions.',
    technologies: ['Kafka', 'Node.js', 'React', 'Chart.js', 'MySQL', 'REST API'],
    category: 'data',
    links: {
      demo: '#',
      github: '#'
      
    },
    icon: <DataArray />,
    accentColor: '#A78BFA',
    images: ['/project5-1.jpg', '/project5-2.jpg']
  },
  {
    id: 6,
    title: 'Personal Portfolio Website',
    date: 'May 2025',
    description: 'Designed and developed a dynamic personal portfolio website using React, Node.js, JavaScript, and Framer Motion. Showcases projects, skills, and contact information with responsive design and smooth animations.',
    longDescription: 'This project is a modern developer portfolio built using React for the frontend and Node.js for basic backend functionality. It includes sections like Hero, About, Projects, Skills, and Contact. Framer Motion is used extensively for animations, providing smooth transitions and interactive effects. The design is fully responsive, ensuring optimal viewing across devices. The portfolio also features a custom-built typing animation, theme-aware styling, and interactive project modals.',
    technologies: ['React', 'Node.js', 'JavaScript', 'Framer Motion', 'MUI'],
    category: 'portfolio',
    links: {
      demo: 'https://vercel.com/sapnadipbaidyas-projects/new-portfolio-json-based',
      github: 'https://github.com/SapnadipBaidya/new_portfolio_json_based'
      
    },
    icon: <Code />,
    accentColor: '#7F5AF0',
    images: ['/portfolio1.jpg', '/portfolio2.jpg']
  }
];

const ProjectCard = ({ project, theme, openModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => openModal(project)}
      style={{ cursor: 'pointer', height: '100%' }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
          boxShadow: isHovered ? theme.shadows[8] : theme.shadows[4],
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: project.accentColor,
            zIndex: 1
          }
        }}
      >
        <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
          <IconButton 
            size="small" 
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            sx={{
              color: isFavorite ? theme.palette.warning.main : theme.palette.text.secondary,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.7)' : 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                color: theme.palette.warning.main,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)'
              }
            }}
          >
            {isFavorite ? <Star /> : <StarBorder />}
          </IconButton>
        </Box>

        <CardContent sx={{ 
          flexGrow: 1,
          pt: 4,
          pb: 2,
          px: 3
        }}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            mb: 3,
            gap: 2
          }}>
            <Avatar sx={{ 
              bgcolor: `${project.accentColor}20`,
              color: project.accentColor,
              width: 48,
              height: 48,
              border: `2px solid ${project.accentColor}`
            }}>
              {project.icon}
            </Avatar>
            <Box>
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary
                }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 500,
                  color: 'text.secondary'
                }}
              >
                {project.date}
              </Typography>
            </Box>
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
            }}
          >
            {project.description}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1,
            mt: 'auto'
          }}>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <Chip 
                key={i} 
                label={tech} 
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
            {project.technologies.length > 4 && (
              <Tooltip title={project.technologies.slice(4).join(', ')}>
                <Chip 
                  label={`+${project.technologies.length - 4}`} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'transparent',
                    fontWeight: 500,
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                  }} 
                />
              </Tooltip>
            )}
          </Box>
        </CardContent>
        
        <CardActions sx={{ 
          px: 3,
          pb: 3,
          pt: 0
        }}>
          <Button 
            variant="outlined"
            size="medium"
            href={project.links.demo}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            startIcon={<Visibility />}
            sx={{ 
              color: project.accentColor,
              borderColor: `${project.accentColor}80`,
              '&:hover': {
                borderColor: project.accentColor,
                backgroundColor: `${project.accentColor}10`
              }
            }}
          >
            Live Demo
          </Button>
          <Button 
            variant="text"
            size="medium"
            href={project.links.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            startIcon={<GitHub />}
            sx={{ 
              color: 'text.secondary',
              ml: 1
            }}
          >
            Code
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const ProjectModal = ({ project, open, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
          backgroundImage: 'none'
        }
      }}
    >
      <DialogTitle sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pr: 2
      }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {project.date}
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3
        }}>
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            minHeight: '300px',
            bgcolor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5'
          }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`Project screenshot ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />
            </AnimatePresence>
            
            {project.images.length > 1 && (
              <>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  sx={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </>
            )}
            
            <Box sx={{ 
              position: 'absolute',
              bottom: 10,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 1
            }}>
              {project.images.map((_, index) => (
                <Box
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: currentImageIndex === index ? project.accentColor : theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {project.longDescription}
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Technologies Used
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {project.technologies.map((tech, i) => (
                <Chip 
                  key={i} 
                  label={tech} 
                  sx={{ 
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    fontWeight: 500
                  }} 
                />
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ 
        borderTop: `1px solid ${theme.palette.divider}`,
        justifyContent: 'space-between',
        px: 3,
        py: 2
      }}>
        <Button 
          variant="outlined"
          href={project.links.caseStudy}
          target="_blank"
          sx={{ 
            color: project.accentColor,
            borderColor: `${project.accentColor}80`,
            '&:hover': {
              borderColor: project.accentColor
            }
          }}
        >
          View Case Study
        </Button>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="contained"
            href={project.links.demo}
            target="_blank"
            startIcon={<Visibility />}
            sx={{ 
              bgcolor: project.accentColor,
              color: '#fff',
              '&:hover': {
                bgcolor: `${project.accentColor}90`
              }
            }}
          >
            Live Demo
          </Button>
          <Button 
            variant="outlined"
            href={project.links.github}
            target="_blank"
            startIcon={<GitHub />}
          >
            View Code
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

const Projects = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Box 
      id="projects"
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
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 800, 
                mb: 2, 
                textAlign: 'center',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  margin: '16px auto 0',
                  borderRadius: '2px'
                }
              }}
            >
              My Projects
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                textAlign: 'center', 
                maxWidth: '700px', 
                mx: 'auto',
                mb: 6,
                color: 'text.secondary'
              }}
            >
              A collection of my most significant projects showcasing my full-stack development capabilities
            </Typography>
          </motion.div>

          {/* Category Tabs */}
          <Paper 
            elevation={0}
            sx={{ 
              mb: 4,
              p: 1,
              borderRadius: '12px',
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={(e, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-indicator': {
                  height: '100%',
                  borderRadius: '8px',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                }
              }}
            >
              {projectCategories.map((category) => (
                <Tab
                  key={category.id}
                  value={category.id}
                  label={category.label}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    minHeight: '48px',
                    '&.Mui-selected': {
                      color: theme.palette.text.primary
                    }
                  }}
                />
              ))}
            </Tabs>
          </Paper>

          {/* All Projects */}
          <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 700 }}>
            {selectedCategory === 'all' ? 'All Projects' : projectCategories.find(c => c.id === selectedCategory)?.label}
          </Typography>
          
          {filteredProjects.length > 0 ? (
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <ProjectCard project={project} theme={theme} openModal={openModal} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                No projects found in this category
              </Typography>
            </Paper>
          )}

          {/* View More Button */}
          <motion.div 
            variants={itemVariants}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            {/* <Button 
              variant="contained"
              size="large"
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 600,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              View All Projects
            </Button> */}
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          open={modalOpen} 
          onClose={closeModal} 
        />
      )}
    </Box>
  );
};

const itemVariants = {
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

export default Projects;