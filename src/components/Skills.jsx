import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  TextField, 
  Chip, 
  Button, 
  IconButton, 
  Card, 
  CardContent, 
  LinearProgress,
  useMediaQuery,
  useTheme,
  Collapse,
  Divider,
  Tooltip,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Close as CloseIcon,
  FilterList as FilterListIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Clear as ClearIcon,
  BarChart as BarChartIcon,
  Compare as CompareIcon,
  Timeline as TimelineIcon,
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radar, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, BarElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, BarElement, CategoryScale, LinearScale, PointElement, Filler, ChartTooltip, Legend);

const skillsData = [
  { 
    name: 'JavaScript', 
    level: 90, 
    category: 'language', 
    favorite: true, 
    icon: 'JS', 
    since: 2018,
    projects: 25,
    lastUsed: '2023',
    expertise: ['ES6+', 'Async Programming', 'Functional Programming', 'DOM Manipulation'],
    certifications: ['JavaScript Algorithms and Data Structures (freeCodeCamp)']
  },
  { 
    name: 'React.js', 
    level: 85, 
    category: 'framework', 
    favorite: true, 
    icon: 'R', 
    since: 2019,
    projects: 18,
    lastUsed: '2023',
    expertise: ['Hooks', 'Context API', 'Performance Optimization', 'Component Lifecycle'],
    certifications: ['Front End Libraries (freeCodeCamp)']
  },
  { 
    name: 'Node.js', 
    level: 80, 
    category: 'runtime', 
    favorite: true, 
    icon: 'N', 
    since: 2019,
    projects: 12,
    lastUsed: '2023',
    expertise: ['REST APIs', 'Middleware', 'Error Handling', 'File System'],
    certifications: []
  },
 
  { 
    name: 'HTML/CSS', 
    level: 95, 
    category: 'language', 
    favorite: true, 
    icon: 'HC', 
    since: 2018,
    projects: 30,
    lastUsed: '2023',
    expertise: ['Semantic HTML', 'CSS Grid', 'Flexbox', 'Responsive Design'],
    certifications: ['Responsive Web Design (freeCodeCamp)']
  },
  { 
    name: 'Material UI', 
    level: 85, 
    category: 'library', 
    icon: 'M', 
    since: 2020,
    projects: 15,
    lastUsed: '2023',
    expertise: ['Theme Customization', 'Component Overrides', 'Responsive Layouts', 'Dark Mode'],
    certifications: []
  },
  { 
    name: 'Git/GitHub', 
    level: 90, 
    category: 'tool', 
    favorite: true, 
    icon: 'G', 
    since: 2018,
    projects: 40,
    lastUsed: '2023',
    expertise: ['Branching Strategies', 'Pull Requests', 'Rebasing', 'CI/CD Integration'],
    certifications: []
  },
  { 
    name: 'MongoDB', 
    level: 70, 
    category: 'database', 
    icon: 'M', 
    since: 2020,
    projects: 5,
    lastUsed: '2022',
    expertise: ['Schema Design', 'Query Optimization', 'Indexing', 'Joins'],
    certifications: []
  },
  {
    name: 'C++',
    level: 80,
    category: 'language',
    icon: 'C++',
    since: 2020,
    projects: 0,
    lastUsed: '2025',
    expertise: ['Object-Oriented Programming', 'Memory Management', 'STL', 'Multithreading'],
    certifications: []
  },
  {
    name: 'Java',
    level: 75,
    category: 'language',
    icon: 'J',
    since: 2021,
    projects: 0,
    lastUsed: '2024',
    expertise: ['OOP', 'Spring Boot Basics', 'Multithreading', 'Exception Handling'],
    certifications: []
  },
  {
    name: 'Tableau',
    level: 85,
    category: 'data-visualization',
    icon: 'T',
    since: 2022,
    projects: 5,
    lastUsed: '2025',
    expertise: ['Dashboard Design', 'Data Blending', 'Calculated Fields', 'Interactive Filters'],
    certifications: []
  },
  {
    name: 'Excel',
    level: 80,
    category: 'data-analysis',
    icon: 'E',
    since: 2021,
    projects: 6,
    lastUsed: '2025',
    expertise: ['Pivot Tables', 'VLOOKUP & XLOOKUP', 'Conditional Formatting', 'Macros'],
    certifications: []
  },
  {
    name: 'Scala',
    level: 70,
    category: 'language',
    icon: 'S',
    since: 2023,
    projects: 2,
    lastUsed: '2025',
    expertise: ['Functional Programming', 'Akka Basics', 'Pattern Matching', 'JVM Integration'],
    certifications: []
  },
  {
    name: 'Kafka.js',
    level: 85,
    category: 'streaming',
    icon: 'K',
    since: 2023,
    projects: 3,
    lastUsed: '2025',
    expertise: ['Producer/Consumer Setup', 'Real-time Event Processing', 'Topic Partitioning', 'Kafka with Node.js'],
    certifications: []
  },
  { 
    name: 'MySQL', 
    level: 80, 
    category: 'database', 
    icon: 'M', 
    since: 2019,
    projects: 10,
    lastUsed: '2023',
    expertise: ['Schema Design', 'Query Optimization', 'Indexing', 'Joins'],
    certifications: []
  },
  { 
    name: 'REST API', 
    level: 85, 
    category: 'service', 
    favorite: true, 
    icon: 'R', 
    since: 2019,
    projects: 15,
    lastUsed: '2023',
    expertise: ['Endpoint Design', 'Authentication', 'Rate Limiting', 'Documentation'],
    certifications: []
  },
];

const categories = [
  { name: 'All', value: 'all', icon: '🧰' },
  { name: 'Languages', value: 'language', icon: '💻' },
  { name: 'Frameworks', value: 'framework', icon: '🛠️' },
  { name: 'Libraries', value: 'library', icon: '📚' },
  { name: 'Databases', value: 'database', icon: '🗄️' },
  { name: 'Tools', value: 'tool', icon: '🔧' },
  { name: 'Services', value: 'service', icon: '🌐' },
];

const proficiencyLevels = [
  { level: 'Novice', range: [0, 40], description: 'Basic understanding, can perform simple tasks' },
  { level: 'Intermediate', range: [41, 70], description: 'Can work independently, needs help with complex tasks' },
  { level: 'Advanced', range: [71, 90], description: 'Strong proficiency, can handle most tasks and mentor others' },
  { level: 'Expert', range: [91, 100], description: 'Deep expertise, can architect solutions and solve complex problems' }
];

const generateSkillDescription = (skill) => {
  const descriptions = {
    'JavaScript': 'Extensive experience building interactive web applications and implementing modern ES6+ features.',
    'React.js': 'Proficient in building component-based UIs, hooks, context API, and performance optimization.',
    'Node.js': 'Experience in building server-side applications, REST APIs, and working with various Node frameworks.',
    'Kafka.js': 'A modern Kafka client for Node.js enabling real-time event streaming and scalable data pipelines.',
    'MongoDB': 'A flexible NoSQL database for high-performance applications with dynamic schema and powerful querying.',
    'HTML/CSS': 'Semantic HTML and modern CSS techniques including Flexbox, Grid, and responsive design.',
    'Material UI': 'Implemented design systems and custom themes for consistent UI across applications.',
    'Git/GitHub': 'Version control and collaborative development workflows including branching strategies.',
    'C++': 'High-performance programming language used for systems development, real-time applications, and embedded systems.',

    'Java': 'Object-oriented language widely used for building cross-platform enterprise applications and backend systems.',

    'Tableau': 'Powerful data visualization tool for creating interactive dashboards and uncovering business insights.',

    'Excel': 'Versatile spreadsheet software for data analysis, automation, and reporting using formulas and pivot tables.',

    'Scala': 'Functional and object-oriented language built on the JVM, ideal for scalable data processing and backend systems.',
    'MySQL': 'Designed and optimized relational database schemas and complex queries.',
    'REST API': 'Designed and consumed RESTful APIs with proper authentication and documentation.',
  };
  
  return descriptions[skill.name] || `Proficient in ${skill.name} with ${skill.level}% confidence based on project experience.`;
};

const SkillDetailDialog = ({ skill, open, onClose, toggleFavorite }) => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getProficiencyLevel = (level) => {
    return proficiencyLevels.find(l => level >= l.range[0] && level <= l.range[1]);
  };

  const proficiency = getProficiencyLevel(skill.level);

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          boxShadow: theme.shadows[10]
        }
      }}
    >
      <DialogTitle sx={{ borderBottom: `1px solid ${theme.palette.divider}`, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24
              }}
            >
              {skill.icon || skill.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight="bold">{skill.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {skill.category} • Since {skill.since} • {skill.projects} projects
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={() => {
              toggleFavorite(skill.name);
            }}
            sx={{
              color: skill.favorite ? 'warning.main' : 'action.active',
              '&:hover': {
                color: 'warning.main'
              }
            }}
          >
            {skill.favorite ? <StarIcon fontSize="large" /> : <StarBorderIcon fontSize="large" />}
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          sx={{ 
            mb: 3,
            '& .MuiTabs-indicator': {
              height: 4,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
            }
          }}
        >
          <Tab label="Overview" icon={<InfoIcon />} />
          <Tab label="Proficiency" icon={<TimelineIcon />} />
          <Tab label="Expertise" icon={<CheckCircleIcon />} />
          
        </Tabs>
        
        {tabValue === 0 && (
          <Box>
            <Typography variant="body1" paragraph>
              {generateSkillDescription(skill)}
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Proficiency Level: {proficiency.level}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {proficiency.description}
              </Typography>
              <Slider
                value={skill.level}
                aria-labelledby="skill-level-slider"
                valueLabelDisplay="on"
                valueLabelFormat={(value) => `${value}%`}
                sx={{
                  '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: theme.palette.primary.main,
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0 0 0 8px ${theme.palette.primary.light}40`,
                    },
                    '&.Mui-active': {
                      boxShadow: `0 0 0 14px ${theme.palette.primary.light}40`,
                    },
                  },
                  '& .MuiSlider-valueLabel': {
                    lineHeight: 1.2,
                    fontSize: 12,
                    background: 'unset',
                    padding: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50% 50% 50% 0',
                    backgroundColor: theme.palette.primary.main,
                    transformOrigin: 'bottom left',
                    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                    '&:before': { display: 'none' },
                    '&.MuiSlider-valueLabelOpen': {
                      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                    },
                    '& > *': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              />
            </Box>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    
                  </Typography>
                 
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SchoolIcon color="primary" /> Certifications
                  </Typography>
                  {skill.certifications.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {skill.certifications.map((cert, index) => (
                        <li key={index}>
                          <Typography variant="body2">{cert}</Typography>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No formal certifications
                    </Typography>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}
        
        {tabValue === 1 && (
          <Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Proficiency Breakdown
              </Typography>
              <Bar
                data={{
                  labels: ['Knowledge', 'Experience', 'Projects', 'Problem Solving', 'Mentoring'],
                  datasets: [{
                    label: 'Skill Level',
                    data: [
                      skill.level,
                      skill.level * 0.9,
                      Math.min(skill.level * 1.1, 100),
                      skill.level * 0.85,
                      skill.level * 0.7
                    ],
                    backgroundColor: [
                      theme.palette.primary.main,
                      theme.palette.secondary.main,
                      theme.palette.success.main,
                      theme.palette.warning.main,
                      theme.palette.info.main
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                  }]
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      ticks: {
                        callback: function(value) {
                          return value + '%';
                        }
                      }
                    }
                  },
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return context.parsed.y + '%';
                        }
                      }
                    }
                  }
                }}
              />
            </Box>
            
            <Typography variant="h6" gutterBottom>
              Compared to Other Skills
            </Typography>
            <Radar
              data={{
                labels: skillsData.slice(0, 6).map(s => s.name),
                datasets: [{
                  label: 'Your Skills',
                  data: skillsData.slice(0, 6).map(s => s.level),
                  backgroundColor: `${theme.palette.primary.main}40`,
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                  pointBackgroundColor: theme.palette.primary.main,
                  pointRadius: 4
                }]
              }}
              options={{
                responsive: true,
                scales: {
                  r: {
                    angleLines: {
                      color: theme.palette.divider
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                      backdropColor: 'transparent',
                      color: theme.palette.text.secondary,
                      stepSize: 20
                    },
                    grid: {
                      color: theme.palette.divider
                    },
                    pointLabels: {
                      color: theme.palette.text.primary
                    }
                  }
                }
              }}
            />
          </Box>
        )}
        
        {tabValue === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Key Areas of Expertise
            </Typography>
            <Grid container spacing={2}>
              {skill.expertise.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper elevation={0} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon color="primary" fontSize="small" />
                      <Typography fontWeight="medium">{item}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        
        {tabValue === 3 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Project Experience
            </Typography>
            <Typography paragraph>
              This skill has been utilized in <strong>{skill.projects} projects</strong> since {skill.since}, 
              with the most recent usage in {skill.lastUsed}.
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              maxHeight: 300,
              overflowY: 'auto',
              pr: 1,
              '&::-webkit-scrollbar': {
                width: 6,
              },
              '&::-webkit-scrollbar-track': {
                background: theme.palette.divider,
                borderRadius: 3,
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme.palette.primary.main,
                borderRadius: 3,
              }
            }}>
              {Array.from({ length: skill.projects }, (_, i) => (
                <Paper key={i} elevation={0} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.paper' }}>
                  <Typography fontWeight="medium">Project {i + 1}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.name} was used for {['frontend development', 'backend services', 'data processing', 'API integration'][i % 4]}.
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        )}
      </DialogContent>
      
      <DialogActions sx={{ borderTop: `1px solid ${theme.palette.divider}`, p: 2 }}>
        <Button onClick={onClose} sx={{ borderRadius: 2 }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const SkillCard = ({ skill, index, toggleFavorite, openSkillDialog }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const getProficiencyColor = (level) => {
    if (level >= 90) return theme.palette.success.main;
    if (level >= 70) return theme.palette.primary.main;
    if (level >= 50) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[8]
          },
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={() => openSkillDialog(skill)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: expanded 
              ? `linear-gradient(135deg, ${theme.palette.primary.light}10, ${theme.palette.secondary.light}10)`
              : 'none',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        
        <CardContent sx={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  boxShadow: theme.shadows[2]
                }}
              >
                {skill.icon || skill.name.charAt(0)}
              </Box>
              <Box>
                <Typography variant="h6" component="h3">
                  {skill.name}
                </Typography>
                {skill.since && (
                  <Typography variant="caption" color="text.secondary">
                    Since {skill.since} • {skill.projects} projects
                  </Typography>
                )}
              </Box>
            </Box>
            
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(skill.name);
              }}
              sx={{
                color: skill.favorite ? 'warning.main' : 'action.active',
                '&:hover': {
                  color: 'warning.main'
                }
              }}
            >
              {skill.favorite ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Box>

          <Box sx={{ mb: 2 }}>
            <LinearProgress
              variant="determinate"
              value={inView ? skill.level : 0}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: `linear-gradient(90deg, ${getProficiencyColor(skill.level)}, ${theme.palette.secondary.main})`,
                  boxShadow: theme.shadows[1]
                }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Chip
              label={skill.category}
              size="small"
              sx={{ 
                textTransform: 'capitalize',
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'
              }}
            />
            <Typography variant="body2" fontWeight="medium" color={getProficiencyColor(skill.level)}>
              {skill.level}%
            </Typography>
          </Box>

          <Collapse in={expanded}>
            <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
              <Typography variant="body2" color="text.secondary">
                {generateSkillDescription(skill)}
              </Typography>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [skills, setSkills] = useState(skillsData);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleFavorite = (skillName) => {
    setSkills(prev => prev.map(skill => 
      skill.name === skillName ? { ...skill, favorite: !skill.favorite } : skill
    ));
  };

  const openSkillDialog = (skill) => {
    if (compareMode) {
      if (selectedSkills.some(s => s.name === skill.name)) {
        setSelectedSkills(selectedSkills.filter(s => s.name !== skill.name));
      } else if (selectedSkills.length < 3) {
        setSelectedSkills([...selectedSkills, skill]);
      }
    } else {
      setSelectedSkill(skill);
    }
  };

  const toggleCompareMode = () => {
    setCompareMode(!compareMode);
    if (!compareMode) {
      setSelectedSkills([]);
    }
  };

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesFavorite = !favoritesOnly || skill.favorite;
    return matchesSearch && matchesCategory && matchesFavorite;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setFavoritesOnly(false);
  };

  const getCategoryStats = () => {
    const stats = {};
    categories.forEach(cat => {
      if (cat.value !== 'all') {
        const categorySkills = skills.filter(s => s.category === cat.value);
        const count = categorySkills.length;
        const avgLevel = count > 0 
          ? Math.round(categorySkills.reduce((acc, curr) => acc + curr.level, 0) / count)
          : 0;
        
        stats[cat.value] = {
          count,
          avgLevel
        };
      }
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <Box 
      id="skills"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        overflow: 'hidden',
        backgroundColor: 'background.default'
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          filter: 'blur(40px)',
          background: `radial-gradient(${theme.palette.primary.light}30, transparent 70%)`,
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          filter: 'blur(40px)',
          background: `radial-gradient(${theme.palette.secondary.light}30, transparent 70%)`,
          zIndex: 0
        }}
      />
      
      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', sm: '3rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: 2,
                  width: '60%',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 2
                }
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                mb: 2,
                position: 'relative'
              }}
            >
              Technologies I've mastered and tools I use daily to build exceptional digital experiences
            </Typography>
          </Box>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card 
            sx={{ 
              mb: { xs: 4, md: 6 },
              borderRadius: 2,
              boxShadow: theme.shadows[2],
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            <CardContent>
              <Box sx={{ position: 'relative', mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                    ),
                    endAdornment: (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {searchTerm && (
                          <IconButton
                            onClick={() => setSearchTerm('')}
                            sx={{ mr: 1 }}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        )}
                        <Tooltip title={compareMode ? "Exit comparison mode" : "Compare skills"}>
                          <IconButton
                            onClick={toggleCompareMode}
                            color={compareMode ? "primary" : "default"}
                          >
                            <CompareIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                      backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)'
                    }
                  }}
                />
              </Box>

              {compareMode && selectedSkills.length > 0 && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Comparing {selectedSkills.length} skills (max 3)
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {selectedSkills.map(skill => (
                      <Chip
                        key={skill.name}
                        label={skill.name}
                        onDelete={() => setSelectedSkills(selectedSkills.filter(s => s.name !== skill.name))}
                        deleteIcon={<CloseIcon />}
                        sx={{
                          '& .MuiChip-deleteIcon': {
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'text.primary'
                            }
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {!isMobile && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                  {categories.map(category => (
                    <motion.div
                      key={category.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Tooltip title={`${categoryStats[category.value]?.count || 0} skills • Avg ${categoryStats[category.value]?.avgLevel || 0}%`}>
                        <Chip
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <span>{category.icon}</span>
                              {category.name}
                            </Box>
                          }
                          onClick={() => setSelectedCategory(category.value)}
                          sx={{
                            cursor: 'pointer',
                            backgroundColor: selectedCategory === category.value 
                              ? theme.palette.primary.main 
                              : theme.palette.mode === 'light' 
                                ? 'rgba(0, 0, 0, 0.05)' 
                                : 'rgba(255, 255, 255, 0.05)',
                            color: selectedCategory === category.value ? 'white' : 'text.primary',
                            '&:hover': {
                              borderColor: theme.palette.primary.main
                            }
                          }}
                          variant={selectedCategory === category.value ? 'filled' : 'outlined'}
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Chip
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <StarIcon fontSize="small" />
                          Favorites
                        </Box>
                      }
                      onClick={() => setFavoritesOnly(!favoritesOnly)}
                      sx={{
                        cursor: 'pointer',
                        backgroundColor: favoritesOnly 
                          ? theme.palette.warning.main 
                          : theme.palette.mode === 'light' 
                            ? 'rgba(0, 0, 0, 0.05)' 
                            : 'rgba(255, 255, 255, 0.05)',
                        color: favoritesOnly ? 'white' : theme.palette.warning.main,
                        borderColor: favoritesOnly ? 'transparent' : theme.palette.warning.main,
                        '&:hover': {
                          borderColor: theme.palette.warning.main
                        }
                      }}
                      variant={favoritesOnly ? 'filled' : 'outlined'}
                    />
                  </motion.div>
                </Box>
              )}

              {isMobile && (
                <>
                  <Button
                    fullWidth
                    startIcon={<FilterListIcon />}
                    endIcon={showFilters ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    onClick={() => setShowFilters(!showFilters)}
                    sx={{
                      justifyContent: 'space-between',
                      mb: showFilters ? 1 : 0
                    }}
                  >
                    Filters
                  </Button>
                  
                  <Collapse in={showFilters}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                      {categories.map(category => (
                        <motion.div
                          key={category.value}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Tooltip title={`${categoryStats[category.value]?.count || 0} skills • Avg ${categoryStats[category.value]?.avgLevel || 0}%`}>
                            <Chip
                              label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                  <span>{category.icon}</span>
                                  {category.name}
                                </Box>
                              }
                              onClick={() => setSelectedCategory(category.value)}
                              sx={{
                                cursor: 'pointer',
                                backgroundColor: selectedCategory === category.value 
                                  ? theme.palette.primary.main 
                                  : theme.palette.mode === 'light' 
                                    ? 'rgba(0, 0, 0, 0.05)' 
                                    : 'rgba(255, 255, 255, 0.05)',
                                color: selectedCategory === category.value ? 'white' : 'text.primary',
                                '&:hover': {
                                  borderColor: theme.palette.primary.main
                                }
                              }}
                              size="small"
                              variant={selectedCategory === category.value ? 'filled' : 'outlined'}
                            />
                          </Tooltip>
                        </motion.div>
                      ))}
                    </Box>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Chip
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <StarIcon fontSize="small" />
                            {favoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
                          </Box>
                        }
                        onClick={() => setFavoritesOnly(!favoritesOnly)}
                        sx={{
                          cursor: 'pointer',
                          backgroundColor: favoritesOnly 
                            ? theme.palette.warning.main 
                            : theme.palette.mode === 'light' 
                              ? 'rgba(0, 0, 0, 0.05)' 
                              : 'rgba(255, 255, 255, 0.05)',
                          color: favoritesOnly ? 'white' : theme.palette.warning.main,
                          borderColor: favoritesOnly ? 'transparent' : theme.palette.warning.main,
                          '&:hover': {
                            borderColor: theme.palette.warning.main
                          }
                        }}
                        size="small"
                        variant={favoritesOnly ? 'filled' : 'outlined'}
                      />
                    </motion.div>
                  </Collapse>
                </>
              )}

              {(searchTerm || selectedCategory !== 'all' || favoritesOnly) && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {filteredSkills.length} skills found
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      startIcon={<ClearIcon fontSize="small" />}
                      onClick={clearFilters}
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                    >
                      Clear filters
                    </Button>
                  </motion.div>
                </Box>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <>
            {compareMode && selectedSkills.length > 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ mb: 4, borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CompareIcon /> Skill Comparison
                    </Typography>
                    <Box sx={{ height: 300 }}>
                      <Bar
                        data={{
                          labels: selectedSkills.map(s => s.name),
                          datasets: [
                            {
                              label: 'Proficiency Level',
                              data: selectedSkills.map(s => s.level),
                              backgroundColor: selectedSkills.map(s => 
                                s.level >= 90 ? theme.palette.success.main :
                                s.level >= 70 ? theme.palette.primary.main :
                                s.level >= 50 ? theme.palette.warning.main :
                                theme.palette.error.main
                              ),
                              borderWidth: 0,
                              borderRadius: 4
                            },
                            {
                              label: 'Years of Experience',
                              data: selectedSkills.map(s => new Date().getFullYear() - s.since),
                              backgroundColor: theme.palette.secondary.main,
                              borderWidth: 0,
                              borderRadius: 4
                            },
                            {
                              label: 'Projects',
                              data: selectedSkills.map(s => s.projects),
                              backgroundColor: theme.palette.info.main,
                              borderWidth: 0,
                              borderRadius: 4
                            }
                          ]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              grid: {
                                color: theme.palette.divider
                              },
                              ticks: {
                                color: theme.palette.text.secondary
                              }
                            },
                            x: {
                              grid: {
                                display: false
                              },
                              ticks: {
                                color: theme.palette.text.secondary
                              }
                            }
                          },
                          plugins: {
                            legend: {
                              position: 'top',
                              labels: {
                                color: theme.palette.text.primary
                              }
                            },
                            tooltip: {
                              backgroundColor: theme.palette.background.paper,
                              titleColor: theme.palette.text.primary,
                              bodyColor: theme.palette.text.secondary,
                              borderColor: theme.palette.divider,
                              borderWidth: 1,
                              padding: 12,
                              boxShadow: theme.shadows[3],
                              callbacks: {
                                label: function(context) {
                                  let label = context.dataset.label || '';
                                  if (label) {
                                    label += ': ';
                                  }
                                  if (context.dataset.label === 'Years of Experience') {
                                    label += context.raw + ' years';
                                  } else if (context.dataset.label === 'Projects') {
                                    label += context.raw + ' projects';
                                  } else {
                                    label += context.raw + '%';
                                  }
                                  return label;
                                }
                              }
                            }
                          }
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            )}
            
            <Grid container spacing={3}>
              {filteredSkills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <SkillCard 
                    skill={skill} 
                    index={index}
                    toggleFavorite={toggleFavorite}
                    openSkillDialog={openSkillDialog}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card 
              sx={{ 
                textAlign: 'center', 
                p: 6,
                border: `1px dashed ${theme.palette.divider}`,
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No skills match your search criteria
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  startIcon={<ClearIcon />}
                  onClick={clearFilters}
                  sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                >
                  Clear filters
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        )}
      </Box>

      {/* Skill Detail Dialog */}
      {selectedSkill && (
        <SkillDetailDialog 
          skill={selectedSkill} 
          open={!!selectedSkill} 
          onClose={() => setSelectedSkill(null)}
          toggleFavorite={toggleFavorite}
        />
      )}
    </Box>
  );
};

export default Skills;