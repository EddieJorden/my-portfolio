import React from 'react';
import styled from 'styled-components';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const FutureSection = styled.div`
  max-width: 800px;
  margin: 0 0 2rem;
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
  
  &:last-child {
    margin-bottom: 0;
  }
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

const EquinePitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Horse Training & Farm Operations',
    greeting: 'Revolutionize Your',
    painPoints: [
      {
        icon: '👁️',
        text: 'You can\'t watch every horse train every day — subtle changes in gait, stride, and form go unnoticed',
      },
      {
        icon: '📝',
        text: 'Training records, diets, medications, and schedules scattered across notebooks and memory',
      },
      {
        icon: '🏇',
        text: 'No objective way to measure training progress — it\'s all gut feel and experience',
      },
      {
        icon: '🌙',
        text: 'Can\'t monitor horses overnight — health issues and behaviors go unseen between barn checks',
      },
      {
        icon: '🚛',
        text: 'Trucking dispatch is manual — hours wasted on load matching and driver comms',
      },
      {
        icon: '📊',
        text: 'No visibility into which horses, training methods, or operations are most profitable',
      },
    ],
    solutions: [
      {
        icon: '📹',
        text: 'AI video analysis of daily training — phone footage of galloping, walking, and workouts analyzed for stride length, gait symmetry, and form changes',
      },
      {
        icon: '📷',
        text: 'Webcams in stalls with 24/7 AI monitoring — detect health issues, restlessness, injury signs, and feeding behavior automatically',
      },
      {
        icon: '🧠',
        text: 'Complete horse profiles: diet, medications, training schedule, workout times, galloping data — all in one AI-powered system',
      },
      {
        icon: '📈',
        text: 'AI-optimized training plans — analyze what\'s working, recommend adjustments, and track progress over weeks and months',
      },
      {
        icon: '🚚',
        text: 'AI-powered trucking dispatch — load matching, route optimization, automated driver communications',
      },
      {
        icon: '⏰',
        text: 'Smart scheduling across training, farm work, and trucking — one unified system',
      },
    ],
    costComparison: {
      current: {
        label: 'Current Admin + Missed Insights',
        amount: '$24,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Operations + Video Analysis',
        amount: '$9,600/year',
        color: '#10b981',
      },
      savings: '$14,400/year + Better Horses',
    },
    deliverables: [
      {
        icon: '📹',
        text: 'AI video analysis system — film training from your phone, get instant breakdowns',
      },
      {
        icon: '📷',
        text: 'Stall webcam monitoring with AI alerts (health, behavior, overnight)',
      },
      {
        icon: '🏇',
        text: 'Complete horse management system: diet, meds, training schedules, workout logs',
      },
      {
        icon: '📊',
        text: 'Performance analytics — track every horse\'s progress with real data, not just instinct',
      },
      {
        icon: '🧬',
        text: 'AI training optimizer — recommends schedule adjustments based on performance trends',
      },
      {
        icon: '🚛',
        text: 'Trucking dispatch + route optimization tool',
      },
      {
        icon: '📱',
        text: 'Mobile app — log workouts, review AI insights, check stall cameras from anywhere',
      },
      {
        icon: '💵',
        text: 'Financial dashboard across training income, farm expenses, and trucking profit',
      },
    ],
    investment: {
      amount: '$800/month',
      details: 'AI-powered horse training optimization + farm & trucking management. See things the human eye misses. Train smarter, not just harder.',
    },
  };

  return (
      <ClientPitchTemplate {...pitchData}>
      <FutureSection>
        <FutureTitle>🔮 Future Project: AI Racing Edge</FutureTitle>
        <FutureIntro>
          Once we have the video analysis system dialed in on your horses, there's a bigger play:
        </FutureIntro>
        <FutureList>
          <FutureItem>
            <FutureIcon>🎥</FutureIcon>
            <FutureText>Film other horses training at the track — build a massive video dataset</FutureText>
          </FutureItem>
          <FutureItem>
            <FutureIcon>🧠</FutureIcon>
            <FutureText>AI analyzes stride patterns, form, conditioning across hundreds of horses</FutureText>
          </FutureItem>
          <FutureItem>
            <FutureIcon>📊</FutureIcon>
            <FutureText>Advanced AI betting agent — data-driven race predictions based on real training footage</FutureText>
          </FutureItem>
          <FutureItem>
            <FutureIcon>💰</FutureIcon>
            <FutureText>Edge that no one else has — actual training data, not just past results</FutureText>
          </FutureItem>
        </FutureList>
        <FutureNote>
          This is a longer-term project we'd build together — but the foundation starts with your training system.
        </FutureNote>
      </FutureSection>
      </ClientPitchTemplate>
  );
};

export default EquinePitch;
