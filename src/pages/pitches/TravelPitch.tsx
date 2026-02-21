import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const TravelPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Luxury Travel Agency',
    greeting: 'Automate Your',
    painPoints: [
      {
        icon: '❓',
        text: 'Same questions over and over: "How many miles do I need?" "What about fees?"',
      },
      {
        icon: '🔍',
        text: 'Manually calculating points optimization for each client takes forever',
      },
      {
        icon: '📧',
        text: 'SEO brings leads but qualifying them wastes your time',
      },
      {
        icon: '⏰',
        text: 'After-hours inquiries go unanswered while competitors respond instantly',
      },
      {
        icon: '📋',
        text: 'Following up with quotes and booking details is tedious',
      },
      {
        icon: '✍️',
        text: 'Writing SEO content for your site eats into billable hours',
      },
    ],
    solutions: [
      {
        icon: '🤖',
        text: 'AI chatbot answers common questions and pre-qualifies leads',
      },
      {
        icon: '✈️',
        text: 'Automated points calculator shows clients real-time redemption values',
      },
      {
        icon: '📝',
        text: 'SEO content generation for blog posts and destination guides',
      },
      {
        icon: '🎯',
        text: 'Smart lead capture forms that segment by budget and interest',
      },
      {
        icon: '📧',
        text: 'Automated follow-ups with personalized travel recommendations',
      },
      {
        icon: '🌐',
        text: 'FAQ bot reduces repetitive inquiries by 70%',
      },
    ],
    costComparison: {
      current: {
        label: 'Time Lost on Repetitive Tasks',
        amount: '$24,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI Automation',
        amount: '$4,800/year',
        color: '#10b981',
      },
      savings: '$19,200/year',
    },
    deliverables: [
      {
        icon: '💬',
        text: 'Website chatbot trained on miles/points knowledge',
      },
      {
        icon: '🧮',
        text: 'Points optimization calculator widget',
      },
      {
        icon: '📄',
        text: 'Lead capture forms with smart qualification',
      },
      {
        icon: '📧',
        text: 'Email automation for quotes and follow-ups',
      },
      {
        icon: '✍️',
        text: 'AI content writer for SEO blog posts',
      },
      {
        icon: '📅',
        text: 'Booking follow-up sequences',
      },
      {
        icon: '📊',
        text: 'Analytics dashboard tracking lead quality and conversion',
      },
      {
        icon: '🎓',
        text: 'Training and ongoing optimization',
      },
    ],
    investment: {
      amount: '$400/month',
      details: 'Turn your website into a 24/7 sales machine. Spend your time on high-value bookings, not FAQs.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default TravelPitch;
