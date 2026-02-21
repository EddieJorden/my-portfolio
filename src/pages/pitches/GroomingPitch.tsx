import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const GroomingPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Dog Grooming Business',
    greeting: 'Grow Your',
    painPoints: [
      {
        icon: '📞',
        text: 'Phone rings while you\'re mid-groom — can\'t answer, lose bookings',
      },
      {
        icon: '💸',
        text: 'Charging the same price whether you\'re slammed or slow — leaving money on the table',
      },
      {
        icon: '😰',
        text: 'No-shows wreck your schedule and income',
      },
      {
        icon: '🌙',
        text: 'Emergency "I need my dog groomed TODAY" calls — no system to charge accordingly',
      },
      {
        icon: '😓',
        text: 'Doing everything yourself — booking, grooming, follow-ups, social media, billing',
      },
      {
        icon: '⏰',
        text: 'Working more hours than you should because nothing is automated',
      },
    ],
    solutions: [
      {
        icon: '📈',
        text: 'AI dynamic pricing — when your schedule fills up, prices automatically adjust higher. Busy week? You get paid more. Slow week? Deals fill empty slots.',
      },
      {
        icon: '🚨',
        text: 'Emergency/after-hours rates applied automatically — last-minute and same-day requests get premium pricing without awkward conversations',
      },
      {
        icon: '💰',
        text: 'Real-time market-aware pricing — AI monitors local demand and adjusts your rates so you\'re never undercharging',
      },
      {
        icon: '🌐',
        text: 'Online booking available 24/7 — clients book while you groom, prices shown based on current availability',
      },
      {
        icon: '🔔',
        text: 'Automated reminders reduce no-shows by 50%+ — and no-show fees enforced automatically',
      },
      {
        icon: '🤖',
        text: 'AI handles booking, confirmations, follow-ups, review requests, and social media — you just groom',
      },
    ],
    costComparison: {
      current: {
        label: 'Lost Revenue (Undercharging + No-Shows + Missed Calls)',
        amount: '$18,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Booking + Smart Pricing',
        amount: '$3,600/year',
        color: '#10b981',
      },
      savings: '$14,400/year + Fewer Hours Worked',
    },
    deliverables: [
      {
        icon: '📈',
        text: 'Dynamic pricing engine — prices adjust based on schedule fullness, demand, and time of day',
      },
      {
        icon: '🚨',
        text: 'Emergency/after-hours rate system — premium pricing applied automatically',
      },
      {
        icon: '📅',
        text: 'Smart booking system — clients see real-time pricing and availability',
      },
      {
        icon: '🐶',
        text: 'Customer database with grooming history, preferences, and notes per dog',
      },
      {
        icon: '📱',
        text: 'Automated SMS/email: reminders, confirmations, follow-ups, review requests',
      },
      {
        icon: '💳',
        text: 'Online payment + no-show fee collection',
      },
      {
        icon: '📸',
        text: 'AI social media content from your grooming photos',
      },
      {
        icon: '📊',
        text: 'Dashboard: bookings, revenue, pricing trends, and client retention',
      },
    ],
    investment: {
      amount: '$400/month',
      details: 'Get paid more, work less. AI handles the business side so you can focus on the dogs — or take a day off. The goal: more money, more free time, less stress.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default GroomingPitch;
