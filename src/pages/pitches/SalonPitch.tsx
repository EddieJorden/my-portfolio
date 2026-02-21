import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const SalonPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Independent Stylist',
    greeting: 'Build Your Brand,',
    painPoints: [
      {
        icon: '🏢',
        text: 'Renting a chair means using the shop\'s booking system and brand',
      },
      {
        icon: '📱',
        text: 'Clients text at random times, hard to keep track',
      },
      {
        icon: '😕',
        text: 'Forgetting client preferences makes you look unprofessional',
      },
      {
        icon: '📉',
        text: 'Building your own clientele is slow without a system',
      },
      {
        icon: '📸',
        text: 'Should post before/afters but never get around to it',
      },
      {
        icon: '💰',
        text: 'No-shows hurt even more when you\'re paying chair rent',
      },
    ],
    solutions: [
      {
        icon: '🌟',
        text: 'Your own branded booking system - independent from the shop',
      },
      {
        icon: '📋',
        text: 'Client preference tracking (color formulas, cut notes, allergies)',
      },
      {
        icon: '📲',
        text: 'Automated reminders keep your chair booked',
      },
      {
        icon: '📸',
        text: 'Social media content generator for Instagram/Facebook',
      },
      {
        icon: '💬',
        text: 'Follow-up messages for rebooking and product recommendations',
      },
      {
        icon: '💳',
        text: 'Accept payments and deposits to reduce no-shows',
      },
    ],
    costComparison: {
      current: {
        label: 'Lost Income (No-Shows + Inefficiency)',
        amount: '$8,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'Personal Booking System',
        amount: '$2,400/year',
        color: '#10b981',
      },
      savings: '$5,600/year',
    },
    deliverables: [
      {
        icon: '🌐',
        text: 'Your own booking website (your name, your brand)',
      },
      {
        icon: '📅',
        text: 'Calendar system independent from the shop',
      },
      {
        icon: '🧑‍🦰',
        text: 'Client profiles with color formulas and preferences',
      },
      {
        icon: '📱',
        text: 'SMS reminders and rebooking prompts',
      },
      {
        icon: '📸',
        text: 'Social media post generator from your before/afters',
      },
      {
        icon: '💰',
        text: 'Payment collection and deposit requests',
      },
      {
        icon: '📊',
        text: 'Analytics showing your busiest times and client retention',
      },
      {
        icon: '🎨',
        text: 'Custom branding to match your style',
      },
    ],
    investment: {
      amount: '$200/month',
      details: 'Build YOUR business, not someone else\'s. Pays for itself with one extra client per month.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default SalonPitch;
