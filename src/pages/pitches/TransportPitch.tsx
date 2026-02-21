import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const TransportPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Transport Brokerage',
    greeting: 'Automate Your',
    painPoints: [
      {
        icon: '📞',
        text: 'Manually matching loads with carriers wastes hours every day',
      },
      {
        icon: '🔍',
        text: 'Vetting carriers is time-consuming and risky',
      },
      {
        icon: '💰',
        text: 'Hard to know if you\'re getting competitive rates',
      },
      {
        icon: '📋',
        text: 'BOLs, PODs, and paperwork pile up - tracking is a nightmare',
      },
      {
        icon: '😤',
        text: 'Constant back-and-forth with customers and carriers',
      },
      {
        icon: '📊',
        text: 'No real-time visibility into your margin per load',
      },
    ],
    solutions: [
      {
        icon: '🤖',
        text: 'AI-powered load matching finds best carriers instantly',
      },
      {
        icon: '✅',
        text: 'Automated carrier vetting (insurance, safety scores, reviews)',
      },
      {
        icon: '💵',
        text: 'Real-time rate analysis shows market rates vs your offers',
      },
      {
        icon: '📄',
        text: 'Digital document management for BOLs, PODs, invoices',
      },
      {
        icon: '💬',
        text: 'Automated customer and carrier communications',
      },
      {
        icon: '📈',
        text: 'Live dashboard showing margins, delays, and performance',
      },
    ],
    costComparison: {
      current: {
        label: 'Time + Inefficiency Costs',
        amount: '$30,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Brokerage System',
        amount: '$9,600/year',
        color: '#10b981',
      },
      savings: '$20,400/year',
    },
    deliverables: [
      {
        icon: '🚚',
        text: 'Load board integration with AI matching',
      },
      {
        icon: '🔍',
        text: 'Carrier vetting automation (FMCSA, SaferWatch, insurance)',
      },
      {
        icon: '💰',
        text: 'Rate intelligence engine (market rates, margin calculator)',
      },
      {
        icon: '📧',
        text: 'Email automation for quotes, confirmations, updates',
      },
      {
        icon: '📄',
        text: 'Document management system (upload, track, archive)',
      },
      {
        icon: '📱',
        text: 'SMS updates for carriers and customers',
      },
      {
        icon: '📊',
        text: 'Real-time dashboard (loads, margins, carrier performance)',
      },
      {
        icon: '🔗',
        text: 'Integration with your existing TMS or accounting software',
      },
    ],
    investment: {
      amount: '$800/month',
      details: 'Book more loads with less effort. Scale your brokerage without hiring more people.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default TransportPitch;
