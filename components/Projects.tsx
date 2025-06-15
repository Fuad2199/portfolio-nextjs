'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { amber } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const categories = [
  'All',
  'Landing Page',
  'Rest API',
  'Authentication',
  'Forms',
  'Simple Website',
];

const projectsData = [
  {
    id: 1,
    category: 'Landing Page',
    title: 'Agency Landing Page',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749851316/agency-landing-page_ufebj2.png',
    url: 'https://virtual-agency.vercel.app/',
  },
  {
    id: 2,
    category: 'Simple Website',
    title: 'Github User Info',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749851701/github-userinfo_fwkbvu.png',
    url: 'https://github-userinfo.vercel.app/',
  },
  {
    id: 3,
    category: 'Front End Development',
    title: 'Rock Paper Scissors game',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749851835/rock-paper-scissors_omhyww.png',
    url: 'https://rock-paper-scissors-game-mu-five.vercel.app/',
  },
  {
    id: 4,
    category: 'Front End Development',
    title: 'Old Portfolio',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749933634/old-portfolio_vr2vjt.png',
    url: 'https://portfolio-website-orpin-gamma.vercel.app/',
  },
  {
    id: 5,
    category: 'Landing Page',
    title: 'New Portfolio',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749978360/new-portfolio_eudzva.png',
    url: 'https://portfolio-nextjs-rho-one.vercel.app/',
  },
  {
    id: 6,
    category: 'Landing Page',
    title: 'Admin Dashboard',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749936160/admin-panel_jxtu92.jpg',
    url: 'https://admin-dashboard-javascript-bootstra.vercel.app/',
  },
  {
    id: 7,
    category: 'Landing Page',
    title: 'Responsive Coffee Website',
    imageUrl:
      'https://res.cloudinary.com/dhzekqgvu/image/upload/v1749937707/coffe-website_i4yrz2.png',
    url: 'https://responsive-coffee-website-javascrip.vercel.app/',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState('All');
  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(
          p => p.category === selectedCategory
        );
  return (
    <section id='projects' className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: amber[600] }}
            >
              My Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'slategray' }}
              mt={1}
            >
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Accusantium eos,
              exercitationem iusto laboriosam ipsam commodi.
            </Typography>
          </Box>
          <Box textAlign={'center'} mb={4}>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={
                  cat === selectedCategory
                    ? 'contained'
                    : 'outlined'
                }
                sx={{
                  m: 1,
                  borderColor: amber[600],
                  color:
                    cat === selectedCategory
                      ? '#000'
                      : amber[600],
                  backgroundColor:
                    cat === selectedCategory
                      ? amber[600]
                      : 'transparent',
                  '&:hover': {
                    backgroundColor:
                      cat === selectedCategory
                        ? amber[700]
                        : amber[50],
                    borderColor: amber[600],
                  },
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
            <Grid container spacing={4}>
              {filteredProjects.map(project => (
                <Grid key={project.id}>
                  <Card
                    component="a"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: 'transparent',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.imageUrl}
                      alt={project.title}
                      sx={{
                        height: 180,
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{ color: amber[600] }}
                      >
                        {project.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        mt={1}
                        sx={{ color: 'slategray' }}
                      >
                        {project.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
