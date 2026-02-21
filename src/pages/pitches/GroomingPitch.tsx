import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const GroomingPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Dog Grooming Business',
    greeting: 'Grow Your',
    painPoints: [
      {
        icon: '📞',
        text: 'Phone rings while you\'re mid-groom - can\'t answer, lose bookings',
      },
      {
        icon: '📅',
        text: 'Appointment book is messy, double-bookings happen',
      },
      {
        icon: '😰',
        text: 'No-shows wreck your schedule and income',
      },
      {
        icon: '📝',
        text: 'Remembering each dog\'s preferences and history is tough',
      },
      {
        icon: '⭐',
        text: 'Need more reviews but hate asking clients',
      },
      {
        icon: '📱',
        text: 'Should post on social media but never have time',
      },
    ],
    solutions: [
      {
        icon: '🌐',
        text: 'Online booking available 24/7 - clients book while you groom',
      },
      {
        icon: '🔔',
        text: 'Automated appointment reminders reduce no-shows by 50%+',
      },
      {
        icon: '🐕',
        text: 'Customer profiles track preferences, allergies, cut styles',
      },
      {
        icon: '💬',
        text: 'SMS confirmations and updates keep clients in the loop',
      },
      {
        icon: '⭐',
        text: 'Automatic review requests sent after each appointment',
      },
      {
        icon: '📸',
        text: 'AI creates social media posts from your grooming photos',
      },
    ],
    costComparison: {
      current: {
        label: 'Lost Revenue (No-Shows + Missed Calls)',
        amount: '$12,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Booking & Reminders',
        amount: '$3,000/year',
        color: '#10b981',
      },
      savings: '$9,000/year',
    },
    deliverables: [
      {
        icon: '📅',
        text: 'Online booking system synced with your calendar',
      },
      {
        icon: '📱',
        text: 'SMS appointment reminders and confirmations',
      },
      {
        icon: '🐶',
        text: 'Customer database with grooming history and notes',
      },
      {
        icon: '💳',
        text: 'Online payment collection',
      },
      {
        icon: '⭐',
        text: 'Automated review generation (Google, Facebook)',
      },
      {
        icon: '📸',
        text: 'Social media content creator (you provide photos)',
      },
      {
        icon: '📊',
        text: 'Dashboard showing bookings, revenue, and client retention',
      },
      {
        icon: '🎓',
        text: 'Easy training and support',
      },
    ],
    investment: {
      amount: '$300/month',
      details: 'Pay for itself with just 2-3 prevented no-shows per month. Focus on dogs, not admin.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default GroomingPitch;
