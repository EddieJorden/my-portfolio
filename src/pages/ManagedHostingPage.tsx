import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
`;
const Hero = styled.section`text-align:center;margin-bottom:3rem;`;
const Eyebrow = styled.div`display:inline-block;margin-bottom:1rem;padding:0.45rem 0.9rem;border-radius:999px;background:rgba(0,150,255,0.12);border:1px solid rgba(0,150,255,0.25);color:#8fd0ff;font-size:0.9rem;letter-spacing:0.04em;text-transform:uppercase;`;
const Title = styled(motion.h1)`font-size:clamp(2.8rem,6vw,4.8rem);margin-bottom:1rem;background:linear-gradient(135deg,#0096ff 0%,#0066cc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`;
const Subtitle = styled(motion.p)`max-width:820px;margin:0 auto;font-size:1.15rem;line-height:1.8;color:rgba(255,255,255,0.78);`;
const Grid = styled.div`display:grid;grid-template-columns:1.1fr 0.9fr;gap:2rem;@media (max-width:920px){grid-template-columns:1fr;}`;
const Card = styled(motion.section)`background:rgba(255,255,255,0.05);backdrop-filter:blur(12px);border-radius:24px;padding:2rem;border:1px solid rgba(255,255,255,0.1);`;
const Heading = styled.h2`font-size:1.8rem;margin-bottom:1rem;color:white;`;
const Body = styled.p`color:rgba(255,255,255,0.78);line-height:1.75;margin-bottom:1rem;`;
const List = styled.ul`margin:0;padding-left:1.2rem;`;
const Item = styled.li`color:rgba(255,255,255,0.84);margin-bottom:0.8rem;line-height:1.55;`;
const Price = styled.div`font-size:2.2rem;font-weight:800;color:#8fd0ff;margin-bottom:1rem;`;
const Button = styled(motion.a)`display:inline-block;padding:1rem 1.5rem;border-radius:999px;background:linear-gradient(135deg,#0096ff 0%,#0066cc 100%);color:white;font-weight:700;text-decoration:none;margin-top:1rem; &:hover{box-shadow:0 16px 40px rgba(0,150,255,0.3);}`;

const ManagedHostingPage: React.FC = () => (
  <PageContainer>
    <Hero>
      <Eyebrow>Managed service</Eyebrow>
      <Title initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Managed Hosting + AI Operations</Title>
      <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>
        For businesses that want the leverage from AI systems without babysitting the stack, the monitoring, or the ugly maintenance work.
      </Subtitle>
    </Hero>
    <Grid>
      <Card initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
        <Heading>What’s included</Heading>
        <List>
          <Item>Managed hosting and environment upkeep</Item>
          <Item>Monitoring, maintenance, and updates</Item>
          <Item>Backup and recovery planning</Item>
          <Item>Operational support for day-to-day reliability</Item>
          <Item>Ongoing AI systems oversight instead of one-off setup only</Item>
        </List>
      </Card>
      <Card initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08, duration: 0.45 }}>
        <Heading>Pricing</Heading>
        <Price>Starting at $249/mo</Price>
        <Body>Good fit when you want the outcome, not another fragile system you have to own, patch, and debug yourself every week.</Body>
        <Button href="https://calendar.app.google/fB8YJ6Zj6WHjo9Hc9" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>Talk through options</Button>
      </Card>
    </Grid>
  </PageContainer>
);

export default ManagedHostingPage;
