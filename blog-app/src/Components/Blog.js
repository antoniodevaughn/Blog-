import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Soccer',
  description:
    "The most popular sport in the world which you and 10 other players are on a team to try and score againt your opponents by using teamwork to move around other defenders to try and get the ball in the goal",
  image: 'https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg?q=60',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/166862272_252338859893659_2896898753894081236_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=yAARWWLKki0AX_aqiQr&_nc_ht=scontent-lga3-1.xx&oh=00_AT_VCcUErwOzXpVUmaYGzukt_KtPooXIgkV0Dzr0BcA3oQ&oe=62FE066C',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/24852308_1539819896128446_3144690897970919535_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=973b4a&_nc_ohc=bWpd9XVtQnMAX_rBPcl&_nc_ht=scontent-lga3-1.xx&oh=00_AT-k6jDrBm3Rxzj2IW7dXLPmxxWzpWUeJA1vZLjqCZmSfA&oe=62FD8109',
    imageLabel: 'Image Text',
  },
];

const posts = ["Soccer"];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="I've played soccer since I was 2 years old and have since fallen in love with the sport and do not plan on stopping anytime soon! Go out and give soccer a try!"
      />
    </ThemeProvider>
  );
}