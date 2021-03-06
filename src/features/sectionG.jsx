import React,{useLayoutEffect} from 'react';
import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, Container, Grid, Typography, Divider, Paper } from '@material-ui/core';
import {  withController,useController,Parallax,ParallaxProvider } from 'react-scroll-parallax';
import ImageLoader from '../components/imageLoader';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
      const handler = () => parallaxController.update();
      window.addEventListener('load', handler);
      return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return null;
};
const useStyles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(10, 0),
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0),
    },
  },
  textSection: {
    maxWidth: 450,
    margin: 'auto',
  },
  caption: {
    color: '#FEA82E',
    fontWeight: 600,
  },
  divider: {
    margin: theme.spacing(4, 0),
  },
  imageWrapper: {
    maxWidth: 135,
    margin: 'auto',
    padding: theme.spacing(3, 0),
  },
  paper: {
    borderRadius: 12,
    padding: theme.spacing(5, 7),
    maxWidth: 366,
    minHeight: 500,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 3),
      minHeight: 'unset',
    },
  },
  card_1: {
    backgroundColor: '#EEF4FE',
  },
  card_2: {
    backgroundColor: ' rgba(206, 250, 232, 0.85)',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      bottom: 60,
    },
  },
  card_3: {
    backgroundColor: '#FFF6E8',
  },
  cardContainer: {
    [theme.breakpoints.up('md')]: {
      paddingTop: 120,
    },
  },
}));

export default function SectionG() {
  const classes = useStyles();

  const { contentfulSectionG } = useStaticQuery(graphql`
    {
      contentfulSectionG {
        caption
        title
        paragraph_a {
          paragraph_a
        }
        paragraph_b {
          paragraph_b
        }
        title_1
        paragraph_1 {
          paragraph_1
        }
        title_2
        paragraph_2 {
          paragraph_2
        }
        cardImage_1 {
          file {
            contentType
            url
            details {
              image {
                height
                width
              }
            }
          }
          localFile {
            childImageSharp {
              fluid(maxWidth: 160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        cardTitle_1
        cardText_1 {
          cardText_1
        }
        cardImage_2 {
          file {
            contentType
            url
            details {
              image {
                height
                width
              }
            }
          }
          localFile {
            childImageSharp {
              fluid(maxWidth: 160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        cardTitle_2
        cardText_2 {
          cardText_2
        }

        cardImage_3 {
          file {
            contentType
            url
            details {
              image {
                height
                width
              }
            }
          }
          localFile {
            childImageSharp {
              fluid(maxWidth: 160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        cardTitle_3
        cardText_3 {
          cardText_3
        }
      }
    }
  `);
  const matches = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const between = useMediaQuery(theme2 => theme2.breakpoints.between('sm', 'lg'));
  const ParrallaxG = ({a,b})=>{
    return (
      <Parallax className="custom-class" x={[a,b]} tagOuter="figure">
              <div className={classes.textSection}>
                <Typography variant="body2" paragraph className={classes.caption}>
                  {contentfulSectionG.caption}
                </Typography>
                <Typography variant="h2" paragraph className={classes.title}>
                  {contentfulSectionG.title}
                </Typography>
                <Typography variant="body2" paragraph className={classes.text}>
                  {contentfulSectionG.paragraph_a.paragraph_a}
                </Typography>
                <Typography variant="body2" paragraph className={classes.text}>
                  {contentfulSectionG.paragraph_b.paragraph_b}
                </Typography>
              </div>
              </Parallax>
    )
  }
  const ParallaxGg= ({a,b}) =>{
    return(
      <Parallax className="custom-class" x={[a, b]} tagOuter="figure">
              <Grid container>
                {[...Array(2).keys()].map(ele => (
                  <Grid key={ele} item xs={12}>
                   
                    <div className={classes.textSection}>
                      <Typography variant="h3" paragraph>
                        {contentfulSectionG[`title_${ele + 1}`]}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {contentfulSectionG[`paragraph_${ele + 1}`][`paragraph_${ele + 1}`]}
                      </Typography>
                      {ele === 0 && <Divider className={classes.divider} />}
                    </div>
                    
                  </Grid>
                ))}
              </Grid>
      </Parallax>
    )
  }
  return (
    <>
    <ParallaxProvider>
      <ParallaxCache />
      <section className={classes.section}>
        <Container>
          <Grid container>
          
            <Grid item xs={12} md={6}>
            {matches?(
              <ParrallaxG a={-20} b={5}/>
            ):(
              between?(
               <ParrallaxG a={0} b={5}/>
              ):
              (
               <ParrallaxG a={-10} b={10}/>
              )
            )}
            </Grid>
           
            <Grid item xs={12} md={6}>
            {matches?(
            <ParallaxGg a={30} b={-5} />
              ):(
                between?(
                  <ParallaxGg a={10} b={-5} />
                 ):
                 (
                  <ParallaxGg a={5} b={-5} />
                 )
            
              )}
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.cardContainer}>
          
            {[...Array(3).keys()].map(ele => (

              <Grid key={ele} item xs={12} md={4}>
                <Paper className={clsx(classes.paper, classes[`card_${ele + 1}`])}>
                  <div className={classes.imageWrapper}>
                    <ImageLoader {...contentfulSectionG[`cardImage_${ele + 1}`]} />
                  </div>
                  <Typography variant="h5" align="center" paragraph>
                    {contentfulSectionG[`cardTitle_${ele + 1}`]}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {contentfulSectionG[`cardText_${ele + 1}`][`cardText_${ele + 1}`]}
                  </Typography>
                </Paper>
              </Grid>

            ))}
            
          </Grid>
        </Container>
      </section>
      <Divider />
      </ParallaxProvider>
    </>
  );
}
