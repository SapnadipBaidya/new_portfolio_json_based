import { Box, Typography, Grid, Paper, LinearProgress, useTheme, useMediaQuery, Chip, Avatar, Tooltip, IconButton, Divider, TextField, InputAdornment, Button } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';

const skills = [
  { name: 'JavaScript', level: 90, category: 'language', favorite: true, icon: 'JS' },
  { name: 'React.js', level: 85, category: 'framework', favorite: true, icon: 'R' },
  { name: 'Node.js', level: 80, category: 'runtime', favorite: true, icon: 'N' },
  { name: 'Express.js', level: 80, category: 'framework', icon: 'E' },
  { name: 'Next.js', level: 75, category: 'framework', icon: 'N' },
  { name: 'TypeScript', level: 80, category: 'language', favorite: true, icon: 'TS' },
  { name: 'HTML/CSS', level: 90, category: 'language', favorite: true, icon: 'HC' },
  { name: 'Material UI', level: 85, category: 'library', icon: 'M' },
  { name: 'Tailwind CSS', level: 80, category: 'library', icon: 'T' },
  { name: 'Git/GitHub', level: 85, category: 'tool', favorite: true, icon: 'G' },
  { name: 'Docker', level: 75, category: 'tool', icon: 'D' },
  { name: 'MySQL', level: 80, category: 'database', icon: 'M' },
  { name: 'MongoDB', level: 75, category: 'database', icon: 'M' },
  { name: 'GraphQL', level: 70, category: 'query', icon: 'G' },
  { name: 'REST API', level: 85, category: 'service', favorite: true, icon: 'R' },
];

const tools = [
  { name: 'React', category: 'framework', icon: 'R' },
  { name: 'Redux', category: 'library', icon: 'R' },
  { name: 'Next.js', category: 'framework', icon: 'N' },
  { name: 'Material UI', category: 'library', icon: 'M' },
  { name: 'Tailwind CSS', category: 'library', icon: 'T' },
  { name: 'Node.js', category: 'runtime', icon: 'N' },
  { name: 'Express.js', category: 'framework', icon: 'E' },
  { name: 'TypeScript', category: 'language', icon: 'TS' },
  { name: 'Prisma', category: 'library', icon: 'P' },
  { name: 'PostgreSQL', category: 'database', icon: 'P' },
  { name: 'MongoDB', category: 'database', icon: 'M' },
  { name: 'Git', category: 'tool', icon: 'G' },
  { name: 'GitHub', category: 'tool', icon: 'G' },
  { name: 'VSCode', category: 'tool', icon: 'V' },
  { name: 'Figma', category: 'tool', icon: 'F' },
  { name: 'Jira', category: 'tool', icon: 'J' },
  { name: 'Docker', category: 'tool', icon: 'D' },
  { name: 'AWS', category: 'service', icon: 'A' },
  { name: 'Firebase', category: 'service', icon: 'F' },
  { name: 'Stripe', category: 'service', icon: 'S' },
];

const categories = [
  { name: 'All', value: 'all', icon: '🧰' },
  { name: 'Languages', value: 'language', icon: '💻' },
  { name: 'Frameworks', value: 'framework', icon: '🛠️' },
  { name: 'Libraries', value: 'library', icon: '📚' },
  { name: 'Databases', value: 'database', icon: '🗄️' },
  { name: 'Tools', value: 'tool', icon: '🔧' },
  { name: 'Services', value: 'service', icon: '🌐' },
  { name: 'Other', value: 'other', icon: '✨' },
];

const SkillItem = ({ skill, theme, toggleFavorite }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${skill.level}%`,
        transition: { duration: 1.5, ease: "easeOut" }
      });
    }
  }, [controls, inView, skill.level]);

  return (
    <Paper 
      elevation={0}
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        p: 3, 
        height: '100%',
        background: theme.palette.mode === 'dark' 
          ? 'rgba(255,255,255,0.03)' 
          : 'rgba(0,0,0,0.03)',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' 
            ? 'rgba(0, 0, 0, 0.3)' 
            : 'rgba(0, 0, 0, 0.1)'}`,
          transition: 'all 0.3s ease'
        },
        transition: 'all 0.3s ease'
      }}
    >
      <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
        <IconButton 
          size="small" 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(skill.name);
          }}
          sx={{
            color: skill.favorite 
              ? theme.palette.warning.main 
              : theme.palette.text.secondary,
            '&:hover': {
              color: theme.palette.warning.main
            }
          }}
        >
          {skill.favorite ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
            width: 40, 
            height: 40,
            fontSize: '1rem',
            fontWeight: 700
          }}
        >
          {skill.icon || skill.name.charAt(0)}
        </Avatar>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {skill.name}
        </Typography>
      </Box>

      <Box sx={{ position: 'relative', mb: 1 }}>
        <LinearProgress 
          variant="buffer" 
          value={0}
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)',
          }} 
        />
        <Box 
          component={motion.div}
          animate={controls}
          initial={{ width: 0 }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          }}
        />
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Chip 
          label={skill.category} 
          size="small" 
          sx={{ 
            textTransform: 'capitalize',
            bgcolor: theme.palette.mode === 'dark' 
              ? 'rgba(255,255,255,0.1)' 
              : 'rgba(0,0,0,0.05)',
            fontWeight: 500
          }}
        />
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {skill.level}%
        </Typography>
      </Box>
    </Paper>
  );
};

const ToolItem = ({ tool, theme, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Tooltip title={tool.category} arrow>
        <Paper
          elevation={0}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 6,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(0, 0, 0, 0.05)',
            border: `1px solid ${theme.palette.divider}`,
            '&:hover': {
              background: `linear-gradient(90deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
              borderColor: theme.palette.primary.main,
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Avatar 
            sx={{ 
              width: 24, 
              height: 24, 
              fontSize: '0.75rem',
              bgcolor: theme.palette.primary.main,
              color: theme.palette.getContrastText(theme.palette.primary.main)
            }}
          >
            {tool.icon || tool.name.charAt(0)}
          </Avatar>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {tool.name}
          </Typography>
        </Paper>
      </Tooltip>
    </motion.div>
  );
};

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [skillsData, setSkillsData] = useState(skills);
  const [toolsData, setToolsData] = useState(tools);

  const toggleFavorite = (skillName) => {
    setSkillsData(prev => prev.map(skill => 
      skill.name === skillName ? { ...skill, favorite: !skill.favorite } : skill
    ));
  };

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesFavorite = !favoritesOnly || skill.favorite;
    return matchesSearch && matchesCategory && matchesFavorite;
  });

  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setFavoritesOnly(false);
  };

  return (
    <Box 
      id="skills"
      sx={{
        py: 12,
        px: { xs: 3, sm: 6, md: 8, lg: 12, xl: 20 },
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
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
      <Box 
        component={motion.div}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: 'absolute',
          bottom: 100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(${theme.palette.secondary.main}30, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      
      <Box position="relative" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 2, 
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2
            }}
          >
            My <span style={{ 
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Skills</span> & <span style={{
              background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Tools</span>
          </Typography>

          <Typography 
            variant="subtitle1" 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              maxWidth: 800,
              mx: 'auto',
              color: 'text.secondary'
            }}
          >
            Technologies I've mastered and tools I use to build exceptional digital experiences
          </Typography>
          
          {/* Search and Filter Bar */}
          <Paper 
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 3,
              bgcolor: theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(0,0,0,0.03)',
              border: `1px solid ${theme.palette.divider}`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row', 
              gap: 2,
              alignItems: 'center'
            }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search skills and tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setSearchTerm('')} size="small">
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    bgcolor: theme.palette.mode === 'dark' 
                      ? 'rgba(255,255,255,0.05)' 
                      : 'rgba(0,0,0,0.03)',
                  }
                }}
              />

              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {categories.map(category => (
                    <Chip
                      key={category.value}
                      label={category.name}
                      onClick={() => setSelectedCategory(category.value)}
                      variant={selectedCategory === category.value ? 'filled' : 'outlined'}
                      color={selectedCategory === category.value ? 'primary' : 'default'}
                      sx={{ 
                        textTransform: 'capitalize',
                        '& .MuiChip-label': {
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }
                      }}
                      icon={<span>{category.icon}</span>}
                    />
                  ))}
                  <Chip
                    icon={<StarIcon />}
                    label="Favorites"
                    onClick={() => setFavoritesOnly(!favoritesOnly)}
                    variant={favoritesOnly ? 'filled' : 'outlined'}
                    color={favoritesOnly ? 'warning' : 'default'}
                  />
                </Box>
              )}

              {isMobile && (
                <Button
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  onClick={() => setShowFilters(!showFilters)}
                  fullWidth
                >
                  Filters
                </Button>
              )}
            </Box>

            {showFilters && isMobile && (
              <Box sx={{ mt: 2 }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1,
                  mb: 2
                }}>
                  {categories.map(category => (
                    <Chip
                      key={category.value}
                      label={category.name}
                      onClick={() => setSelectedCategory(category.value)}
                      variant={selectedCategory === category.value ? 'filled' : 'outlined'}
                      color={selectedCategory === category.value ? 'primary' : 'default'}
                      sx={{ 
                        textTransform: 'capitalize',
                        '& .MuiChip-label': {
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }
                      }}
                      icon={<span>{category.icon}</span>}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  startIcon={<StarIcon />}
                  onClick={() => setFavoritesOnly(!favoritesOnly)}
                  fullWidth
                  color={favoritesOnly ? 'warning' : 'primary'}
                >
                  {favoritesOnly ? 'Showing Favorites' : 'Show Favorites'}
                </Button>
              </Box>
            )}

            {(searchTerm || selectedCategory !== 'all' || favoritesOnly) && (
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  startIcon={<ClearIcon />}
                  onClick={clearFilters}
                  size="small"
                  color="inherit"
                >
                  Clear filters
                </Button>
              </Box>
            )}
          </Paper>

          <Grid container spacing={3}>
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <SkillItem skill={skill} theme={theme} toggleFavorite={toggleFavorite} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Paper sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  bgcolor: 'background.paper',
                  border: `1px dashed ${theme.palette.divider}`,
                  borderRadius: 3
                }}>
                  <Typography variant="h6" color="text.secondary">
                    No skills match your search criteria
                  </Typography>
                  <Button 
                    onClick={clearFilters}
                    sx={{ mt: 2 }}
                    startIcon={<ClearIcon />}
                  >
                    Clear filters
                  </Button>
                </Paper>
              </Grid>
            )}
          </Grid>
          
          <Box sx={{ mt: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                mb: 4,
                flexWrap: 'wrap',
                gap: 2
              }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                  }}
                >
                  Tools & Technologies
                </Typography>
                <Chip 
                  label={`${filteredTools.length} tools`} 
                  variant="outlined"
                  color="primary"
                />
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool, index) => (
                    <ToolItem key={index} tool={tool} theme={theme} index={index} />
                  ))
                ) : (
                  <Paper sx={{ 
                    p: 4, 
                    textAlign: 'center', 
                    width: '100%',
                    bgcolor: 'background.paper',
                    border: `1px dashed ${theme.palette.divider}`,
                    borderRadius: 3
                  }}>
                    <Typography variant="h6" color="text.secondary">
                      No tools match your search criteria
                    </Typography>
                    <Button 
                      onClick={clearFilters}
                      sx={{ mt: 2 }}
                      startIcon={<ClearIcon />}
                    >
                      Clear filters
                    </Button>
                  </Paper>
                )}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Skills;