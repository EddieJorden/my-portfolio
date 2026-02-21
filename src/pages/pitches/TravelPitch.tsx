import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

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
        icon: '🌍',
        text: 'Different airlines show different availability depending on your region — no single view',
      },
      {
        icon: '❓',
        text: 'Same questions over and over: "How many miles do I need?" "What about fees?"',
      },
      {
        icon: '📧',
        text: 'SEO brings leads but qualifying them wastes your time',
      },
      {
        icon: '✍️',
        text: 'Writing SEO content for your site eats into billable hours',
      },
    ],
    solutions: [
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
        text: 'Instant alerts when premium cabin award seats open up — first-class, business class, hard-to-find routes',
      },
      {
        icon: '🔑',
        text: 'Manages logins across dozens of airline & booking sites — searches simultaneously, not one at a time',
      },
      {
        icon: '💬',
        text: 'AI chatbot pre-qualifies leads and answers common miles/points questions 24/7',
      },
      {
        icon: '📝',
        text: 'Automated SEO content generation — destination guides, points strategy articles, deal alerts',
      },
    ],
    costComparison: {
      current: {
        label: 'Manual Search + VA / Broker Fees',
        amount: '$36,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'AI-Powered Search & Automation',
        amount: '$6,000/year',
        color: '#10b981',
      },
      savings: '$30,000/year',
    },
    deliverables: [
      {
        icon: '✈️',
        text: '24/7 AI flight search agent — scans award availability across all major programs',
      },
      {
        icon: '🌐',
        text: 'Multi-region VPN search — finds hidden inventory from different geographic endpoints',
      },
      {
        icon: '🔑',
        text: 'Automated login management for airline & booking portals',
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
        icon: '📧',
        text: 'Email automation for quotes, follow-ups, and deal alerts',
      },
      {
        icon: '✍️',
        text: 'AI content writer for SEO blog posts and destination guides',
      },
    ],
    investment: {
      amount: '$500/month',
      details: 'An AI agent that searches for luxury award tickets around the clock, alerts you the instant seats open, and handles lead gen while you focus on closing high-value bookings.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default TravelPitch;
