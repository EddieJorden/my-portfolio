import React from 'react';
import styled from 'styled-components';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const FutureSection = styled.div`
  max-width: 800px;
  margin: -1rem auto 2rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 12px;
  color: #e5e7eb;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const FutureTitle = styled.h3`
  color: #a855f7;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FutureIntro = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const FutureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FutureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  &:last-child { margin-bottom: 0; }
`;

const FutureIcon = styled.span`
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const FutureText = styled.span`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const FutureNote = styled.p`
  font-size: 0.85rem;
  color: #a855f7;
  margin-top: 1rem;
  font-style: italic;
`;

const TravelPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Luxury Travel Agency',
    greeting: 'Automate Your',
    painPoints: [
      {
        icon: '✈️',
        text: 'Finding luxury award seats is a needle-in-a-haystack — manually checking dozens of airline sites',
      },
      {
        icon: '⏰',
        text: 'Award availability appears and disappears in minutes — you can\'t monitor 24/7',
      },
      {
        icon: '🏦',
        text: 'Miles scattered across dozens of accounts — lose track of balances, expiration dates, and which accounts are "hot"',
      },
      {
        icon: '🚨',
        text: 'Use the same accounts too often and airlines get suspicious — risk getting blocked and losing miles permanently',
      },
      {
        icon: '🌍',
        text: 'Different airlines show different availability by region — no single view of what\'s actually bookable',
      },
      {
        icon: '❓',
        text: 'Same questions over and over from clients: "How many miles?" "What fees?" — eats your time',
      },
    ],
    solutions: [
      {
        icon: '🏦',
        text: 'AI Miles Bank — tracks every account, every balance, every expiration date. Knows which accounts are safe to use and which need to cool down.',
      },
      {
        icon: '🧠',
        text: 'Intelligent account rotation — AI spreads bookings across accounts to avoid airline detection, maximizing success rate and protecting your miles',
      },
      {
        icon: '🤖',
        text: 'AI flight search agent runs 24/7 — logs into airline sites, searches award availability across all programs automatically',
      },
      {
        icon: '🌐',
        text: 'VPN rotation to search from different regions — catches hidden inventory other agents miss',
      },
      {
        icon: '🔔',
        text: 'Instant alerts when premium cabin award seats open up — first-class, business on hard-to-find routes',
      },
      {
        icon: '💬',
        text: 'AI chatbot pre-qualifies leads and answers common miles/points questions 24/7',
      },
    ],
    costComparison: {
      current: {
        label: 'Manual Search + Lost Miles + VA Fees',
        amount: '$42,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Search + Miles Bank + Automation',
        amount: '$7,200/year',
        color: '#10b981',
      },
      savings: '$34,800/year + Protected Miles',
    },
    deliverables: [
      {
        icon: '🏦',
        text: 'AI Miles Bank — full account management with balances, expiration tracking, and risk scoring per account',
      },
      {
        icon: '🔄',
        text: 'Smart account rotation system — AI decides which accounts to use for each booking to minimize detection risk',
      },
      {
        icon: '✈️',
        text: '24/7 AI flight search agent — scans award availability across all major programs',
      },
      {
        icon: '🌐',
        text: 'Multi-region VPN search — finds hidden inventory from different geographic endpoints',
      },
      {
        icon: '🔔',
        text: 'Real-time alert system — text/email when premium seats become available',
      },
      {
        icon: '💬',
        text: 'Website chatbot trained on miles/points knowledge base',
      },
      {
        icon: '🧮',
        text: 'Points optimization calculator for client consultations',
      },
      {
        icon: '✍️',
        text: 'AI content writer for SEO blog posts and destination guides',
      },
    ],
    investment: {
      amount: '$600/month',
      details: 'AI-powered miles management + 24/7 award search + lead automation. Protect your miles, find seats faster, close more bookings.',
    },
  };

  return (
    <>
      <ClientPitchTemplate {...pitchData} />
      <FutureSection>
        <FutureTitle>🔮 Future Project: Miles Bank as a Service</FutureTitle>
        <FutureIntro>
          Once we build the miles management system for your operation, there's a much bigger play:
        </FutureIntro>
        <FutureList>
          <FutureItem>
            <FutureIcon>🏦</FutureIcon>
            <FutureText>Open the Miles Bank to other brokers and travel agents — they pay a fee to store and manage their miles through your platform</FutureText>
          </FutureItem>
          <FutureItem>
            <FutureIcon>🤖</FutureIcon>
            <FutureText>Multi-agent system manages thousands of accounts across multiple brokers — intelligent rotation at scale</FutureText>
          </FutureItem>
          <FutureItem>
            <FutureIcon>📊</FutureIcon>
            <FutureText>Dashboard for each client showing balances, risk levels, booking history, and account health</FutureText>
          </FutureItem>
          <FutureItem>
            <FutureIcon>💰</FutureIcon>
            <FutureText>Recurring SaaS revenue — monthly fees per account managed, percentage of miles protected</FutureText>
          </FutureItem>
        </FutureList>
        <FutureNote>
          You'd be the first to market with an AI-powered miles banking platform — built on the system we create for your business first.
        </FutureNote>
      </FutureSection>
    </>
  );
};

export default TravelPitch;
