import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const EquinePitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Horse Training & Trucking',
    greeting: 'Streamline Your',
    painPoints: [
      {
        icon: '📝',
        text: 'Training records scattered across notebooks, spreadsheets, and memory',
      },
      {
        icon: '🏇',
        text: 'Hard to track performance trends across multiple horses',
      },
      {
        icon: '🚛',
        text: 'Trucking dispatch is manual - wasting time on load matching',
      },
      {
        icon: '📞',
        text: 'Driver communications eat up hours every week',
      },
      {
        icon: '📅',
        text: 'Scheduling training, farm work, and trucking is a juggling act',
      },
      {
        icon: '📊',
        text: 'No visibility into which operations are most profitable',
      },
    ],
    solutions: [
      {
        icon: '📋',
        text: 'Digital training log with performance tracking and analytics',
      },
      {
        icon: '📈',
        text: 'Automated performance reports showing trends over time',
      },
      {
        icon: '🚚',
        text: 'AI-powered load matching for trucking (best routes, rates, timing)',
      },
      {
        icon: '⏰',
        text: 'Smart scheduling system coordinates training, farm, and trucking',
      },
      {
        icon: '💬',
        text: 'Automated driver communications (dispatch, updates, confirmations)',
      },
      {
        icon: '💰',
        text: 'Financial dashboard tracking revenue across all operations',
      },
    ],
    costComparison: {
      current: {
        label: 'Time Lost to Admin Work',
        amount: '$18,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Operations Management',
        amount: '$7,200/year',
        color: '#10b981',
      },
      savings: '$10,800/year',
    },
    deliverables: [
      {
        icon: '🏇',
        text: 'Horse training records system (mobile-friendly)',
      },
      {
        icon: '📊',
        text: 'Performance analytics with trend visualization',
      },
      {
        icon: '🚛',
        text: 'Trucking dispatch optimization tool',
      },
      {
        icon: '📍',
        text: 'Route planning with fuel cost calculations',
      },
      {
        icon: '📱',
        text: 'Automated driver SMS updates',
      },
      {
        icon: '📅',
        text: 'Unified calendar for training, farm tasks, and loads',
      },
      {
        icon: '💵',
        text: 'Financial dashboard (training income, farm expenses, trucking profit)',
      },
      {
        icon: '🔧',
        text: 'Custom setup for your specific workflow',
      },
    ],
    investment: {
      amount: '$600/month',
      details: 'Manage three businesses with one system. More time with horses, less time on paperwork.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default EquinePitch;
