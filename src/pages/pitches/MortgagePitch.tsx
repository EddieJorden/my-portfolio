import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const MortgagePitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Mortgage Brokerage',
    greeting: 'Stop Burning Money On',
    painPoints: [
      {
        icon: '💸',
        text: 'Mortgage PPC costs $25-80 PER CLICK - most don\'t convert',
      },
      {
        icon: '📞',
        text: 'Leads come in but you can\'t follow up fast enough with a 2-person team',
      },
      {
        icon: '🗂️',
        text: 'Document collection is a nightmare - chasing clients for paperwork',
      },
      {
        icon: '⏰',
        text: 'Can\'t qualify leads 24/7, so hot prospects go cold',
      },
      {
        icon: '📊',
        text: 'CRM is full of dead leads you never had time to nurture',
      },
      {
        icon: '🔥',
        text: 'You\'re great at closing deals but drowning in admin work',
      },
    ],
    solutions: [
      {
        icon: '🤖',
        text: 'AI lead qualification bot pre-screens leads instantly',
      },
      {
        icon: '💬',
        text: 'Automated follow-up sequences keep leads warm without lifting a finger',
      },
      {
        icon: '📄',
        text: 'Smart document collection system with automated reminders',
      },
      {
        icon: '🎯',
        text: 'AI prioritizes your hottest leads so you focus on closers',
      },
      {
        icon: '📧',
        text: 'CRM automation logs everything, updates contacts, schedules tasks',
      },
      {
        icon: '🌙',
        text: 'Lead capture works 24/7 - no more missed opportunities',
      },
    ],
    costComparison: {
      current: {
        label: 'Current PPC Spend',
        amount: '$3,000/month',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Lead Nurturing',
        amount: '$800/month',
        color: '#10b981',
      },
      savings: '$26,400/year',
    },
    deliverables: [
      {
        icon: '🎯',
        text: 'Lead qualification chatbot for your website',
      },
      {
        icon: '📧',
        text: 'Email nurture sequences (pre-qual, document collection, closing)',
      },
      {
        icon: '📱',
        text: 'SMS follow-up automation',
      },
      {
        icon: '🗂️',
        text: 'Document collection portal with tracking',
      },
      {
        icon: '🔗',
        text: 'CRM integration (Salesforce, HubSpot, or custom)',
      },
      {
        icon: '📊',
        text: 'Lead scoring system to prioritize hot prospects',
      },
      {
        icon: '⏰',
        text: 'Automated appointment scheduling',
      },
      {
        icon: '💻',
        text: 'Dashboard showing pipeline health and AI performance',
      },
    ],
    investment: {
      amount: '$800/month',
      details: 'Replace expensive PPC with smart lead nurturing. Free up your time to close more deals.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default MortgagePitch;
