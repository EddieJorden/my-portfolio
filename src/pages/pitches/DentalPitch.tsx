import React from 'react';
import { ClientPitchTemplate, ClientPitchProps } from '../../components/ClientPitch/ClientPitchTemplate';

const DentalPitch: React.FC = () => {
  const pitchData: ClientPitchProps = {
    industry: 'Dental Practice',
    greeting: 'Transform Your',
    painPoints: [
      {
        icon: '📞',
        text: 'Missing calls = losing $200-500 per patient who goes elsewhere',
      },
      {
        icon: '😤',
        text: 'Front desk staff costs $35-50K/year + benefits + training',
      },
      {
        icon: '⏰',
        text: 'After-hours calls go to voicemail, patients book with competitors',
      },
      {
        icon: '📋',
        text: 'Manual appointment booking wastes time and creates errors',
      },
      {
        icon: '💳',
        text: 'Insurance verification takes hours every week',
      },
      {
        icon: '⭐',
        text: 'Asking for reviews feels awkward, so you don\'t get enough',
      },
    ],
    solutions: [
      {
        icon: '🤖',
        text: 'AI receptionist answers every call, 24/7 - never misses a patient',
      },
      {
        icon: '📅',
        text: 'Automated appointment booking syncs directly with your calendar',
      },
      {
        icon: '📝',
        text: 'Patient intake forms completed before they arrive',
      },
      {
        icon: '✅',
        text: 'Instant insurance verification - no more waiting',
      },
      {
        icon: '🔔',
        text: 'Automated appointment reminders reduce no-shows by 40%',
      },
      {
        icon: '💬',
        text: 'Smart follow-up system requests reviews at the perfect moment',
      },
    ],
    costComparison: {
      current: {
        label: 'Current Cost (Front Desk Staff)',
        amount: '$45,000/year',
        color: '#ef4444',
      },
      withAI: {
        label: 'With AI Automation',
        amount: '$6,000/year',
        color: '#10b981',
      },
      savings: '$39,000+',
    },
    deliverables: [
      {
        icon: '☎️',
        text: 'AI phone receptionist with natural conversation',
      },
      {
        icon: '🗓️',
        text: 'Online booking portal integrated with your schedule',
      },
      {
        icon: '📄',
        text: 'Digital intake forms with auto-save',
      },
      {
        icon: '🏥',
        text: 'Insurance verification automation',
      },
      {
        icon: '📱',
        text: 'SMS appointment reminders',
      },
      {
        icon: '⭐',
        text: 'Automated review generation system',
      },
      {
        icon: '📊',
        text: 'Dashboard to track calls, bookings, and no-shows',
      },
      {
        icon: '🛠️',
        text: 'Setup, training, and ongoing support',
      },
    ],
    investment: {
      amount: '$500/month',
      details: 'Fraction of a front desk salary. Cancel anytime. ROI from your first prevented no-show.',
    },
  };

  return <ClientPitchTemplate {...pitchData} />;
};

export default DentalPitch;
