import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PainPoint {
  icon: string;
  text: string;
}

interface Solution {
  icon: string;
  text: string;
}

interface Deliverable {
  icon: string;
  text: string;
}

interface CostComparison {
  current: {
    label: string;
    amount: string;
    color?: string;
  };
  withAI: {
    label: string;
    amount: string;
    color?: string;
  };
  savings: string;
}

export interface ClientPitchProps {
  industry: string;
  greeting: string;
  painPoints: PainPoint[];
  solutions: Solution[];
  deliverables: Deliverable[];
  costComparison: CostComparison;
  investment: {
    amount: string;
    details: string;
  };
}

const Container = styled.div`
  min-height: 100vh;
  background: #050b0f;
  color: #ffffff;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Greeting = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Industry = styled.span`
  color: #10b981;
`;

const Section = styled(motion.section)`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
`;

const Text = styled.span`
  font-size: 1rem;
  line-height: 1.6;
  color: #e5e7eb;
`;

const CostSection = styled(Section)`
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.3);
`;

const CostBar = styled.div`
  margin-bottom: 2rem;
`;

const CostLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CostAmount = styled.span<{ color?: string }>`
  color: ${props => props.color || '#10b981'};
  font-size: 1.25rem;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled(motion.div)<{ percentage: number; color?: string }>`
  height: 100%;
  background: ${props => props.color || '#10b981'};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
`;

const Savings = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.15);
  border-radius: 8px;
  margin-top: 1.5rem;
`;

const SavingsAmount = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

const SavingsLabel = styled.div`
  font-size: 1rem;
  color: #e5e7eb;
`;

const InvestmentSection = styled(Section)`
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
  text-align: center;
`;

const InvestmentAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

const InvestmentDetails = styled.p`
  font-size: 1rem;
  color: #e5e7eb;
  line-height: 1.6;
`;

const AIPersonaSection = styled(Section)`
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-color: rgba(6, 182, 212, 0.3);
`;

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ChannelBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
  color: #e5e7eb;
`;

const BetaBadge = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.15);
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CTASection = styled(motion.section)`
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%);
  border: 2px solid #10b981;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const CTATitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #10b981;
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  color: #e5e7eb;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: #10b981;
  color: #050b0f;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #059669;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const ClientPitchTemplate: React.FC<ClientPitchProps> = ({
  industry,
  greeting,
  painPoints,
  solutions,
  deliverables,
  costComparison,
  investment,
}) => {
  // Calculate percentage for progress bars (assuming current is 100%)
  const currentPercentage = 100;
  const aiAmount = parseFloat(costComparison.withAI.amount.replace(/[^0-9.]/g, ''));
  const currentAmount = parseFloat(costComparison.current.amount.replace(/[^0-9.]/g, ''));
  const aiPercentage = (aiAmount / currentAmount) * 100;

  return (
    <Container>
      <ContentWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <Greeting {...fadeInUp}>
            {greeting} <Industry>{industry}</Industry>
          </Greeting>
        </Header>

        <Section {...fadeInUp}>
          <SectionTitle>😓 The Problems You're Facing</SectionTitle>
          <List>
            {painPoints.map((point, index) => (
              <ListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon>{point.icon}</Icon>
                <Text>{point.text}</Text>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section {...fadeInUp}>
          <SectionTitle>✨ How AI Solves This</SectionTitle>
          <List>
            {solutions.map((solution, index) => (
              <ListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon>{solution.icon}</Icon>
                <Text>{solution.text}</Text>
              </ListItem>
            ))}
          </List>
        </Section>

        <CostSection {...fadeInUp}>
          <SectionTitle>💰 The Numbers</SectionTitle>
          
          <CostBar>
            <CostLabel>
              <span>{costComparison.current.label}</span>
              <CostAmount color={costComparison.current.color || '#ef4444'}>
                {costComparison.current.amount}
              </CostAmount>
            </CostLabel>
            <ProgressBarContainer>
              <ProgressBar
                percentage={currentPercentage}
                color={costComparison.current.color || '#ef4444'}
                initial={{ width: 0 }}
                animate={{ width: `${currentPercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {currentPercentage}%
              </ProgressBar>
            </ProgressBarContainer>
          </CostBar>

          <CostBar>
            <CostLabel>
              <span>{costComparison.withAI.label}</span>
              <CostAmount color={costComparison.withAI.color || '#10b981'}>
                {costComparison.withAI.amount}
              </CostAmount>
            </CostLabel>
            <ProgressBarContainer>
              <ProgressBar
                percentage={aiPercentage}
                color={costComparison.withAI.color || '#10b981'}
                initial={{ width: 0 }}
                animate={{ width: `${aiPercentage}%` }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {Math.round(aiPercentage)}%
              </ProgressBar>
            </ProgressBarContainer>
          </CostBar>

          <Savings>
            <SavingsAmount>{costComparison.savings}</SavingsAmount>
            <SavingsLabel>Potential Annual Savings</SavingsLabel>
          </Savings>
        </CostSection>

        <Section {...fadeInUp}>
          <SectionTitle>🎁 What You'd Get</SectionTitle>
          <List>
            {deliverables.map((deliverable, index) => (
              <ListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon>{deliverable.icon}</Icon>
                <Text>{deliverable.text}</Text>
              </ListItem>
            ))}
          </List>
        </Section>

        <AIPersonaSection {...fadeInUp}>
          <SectionTitle style={{ color: '#06b6d4' }}>🧠 Your Own AI — Trained to Be You</SectionTitle>
          <List>
            <ListItem {...fadeInUp}>
              <Icon>🎯</Icon>
              <Text><strong>Knows your industry inside-out</strong> — trained on your specific domain, terminology, and best practices</Text>
            </ListItem>
            <ListItem {...fadeInUp}>
              <Icon>🗣️</Icon>
              <Text><strong>Talks like you</strong> — matches your tone, style, and personality so customers feel like they're talking to you</Text>
            </ListItem>
            <ListItem {...fadeInUp}>
              <Icon>👥</Icon>
              <Text><strong>Knows all your customers</strong> — remembers preferences, history, and context for every client relationship</Text>
            </ListItem>
            <ListItem {...fadeInUp}>
              <Icon>💬</Icon>
              <Text><strong>Every channel, one AI</strong> — handles communication across all platforms your customers use</Text>
            </ListItem>
          </List>
          <ChannelGrid>
            <ChannelBadge whileHover={{ scale: 1.05 }}>📱 Text/SMS</ChannelBadge>
            <ChannelBadge whileHover={{ scale: 1.05 }}>📧 Email</ChannelBadge>
            <ChannelBadge whileHover={{ scale: 1.05 }}>💬 Website Chat</ChannelBadge>
            <ChannelBadge whileHover={{ scale: 1.05 }}>📘 Social DMs</ChannelBadge>
            <ChannelBadge whileHover={{ scale: 1.05 }}>📞 Phone Calls</ChannelBadge>
            <ChannelBadge whileHover={{ scale: 1.05 }}>🎤 Voice <BetaBadge>Beta</BetaBadge></ChannelBadge>
          </ChannelGrid>
        </AIPersonaSection>

        <InvestmentSection {...fadeInUp}>
          <SectionTitle>💵 Your Investment</SectionTitle>
          <InvestmentAmount>{investment.amount}</InvestmentAmount>
          <InvestmentDetails>{investment.details}</InvestmentDetails>
        </InvestmentSection>

        <CTASection
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CTATitle>🚀 Ready to Get Started?</CTATitle>
          <CTAText>
            Let's hop on a quick call to discuss your specific needs. 
            If this makes sense, I'll draft a simple Letter of Intent and we can move forward.
          </CTAText>
          <CTAButton
            href="mailto:eddie@eddiemoger.com?subject=Let's Talk About AI for My Business"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Email Eddie
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </Container>
  );
};
