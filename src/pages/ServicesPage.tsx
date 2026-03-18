import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 5rem);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto 4rem;
  max-width: 860px;
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ServiceCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 22px;
  padding: 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 150, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 150, 255, 0.18);
  }
`;

const ServiceTag = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 150, 255, 0.12);
  border: 1px solid rgba(0, 150, 255, 0.24);
  color: #8fd0ff;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  color: white;
`;

const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #7ec8ff;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.65;
  flex: 1;
`;

const FeatureList = styled.ul`
  text-align: left;
  margin: 0;
  padding-left: 1.2rem;
`;

const FeatureItem = styled.li`
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 0.75rem;
  line-height: 1.5;

  &::marker {
    color: #10b981;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
`;

const FooterHint = styled.span`
  color: #8fd0ff;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 150, 255, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
`;

const CardPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1.5rem 0;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CtaButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 150, 255, 0.5);
    transform: translateY(-3px);
  }
`;

const ServicesPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Services
      </PageTitle>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Click into a service to see details, start the intake flow, or book the right kind of help.
      </Subtitle>

      <Section>
        <SectionTitle>Services</SectionTitle>
        <SectionDescription>
          This page now works like an actual service catalog. Pick the service you want and go straight to the matching page or booking path.
        </SectionDescription>

        <ServiceGrid>
          <ServiceCard
            href="/services/workspace-domain-setup"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <ServiceTag>Intake page</ServiceTag>
            <ServiceTitle>Workspace + Domain Setup</ServiceTitle>
            <ServicePrice>Done-for-you setup</ServicePrice>
            <ServiceDescription>
              Clean domain, DNS, email, and workspace setup without the usual back-and-forth and missing access details.
            </ServiceDescription>
            <FeatureList>
              <FeatureItem>Dedicated setup intake form</FeatureItem>
              <FeatureItem>Collects registrar, DNS, users, and mailbox info</FeatureItem>
              <FeatureItem>Built for Google Workspace, Microsoft 365, or mixed setups</FeatureItem>
            </FeatureList>
            <CardFooter>
              <span>Open service page</span>
              <FooterHint>→</FooterHint>
            </CardFooter>
          </ServiceCard>

          <ServiceCard
            href="/services/openclaw-install-local"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.08 }}
          >
            <ServiceTag>Service page</ServiceTag>
            <ServiceTitle>OpenClaw Install + Local Setup</ServiceTitle>
            <ServicePrice>$299 one-time</ServicePrice>
            <ServiceDescription>
              Installation, configuration, hardening, and handoff for businesses that want OpenClaw running on their own machine or environment.
            </ServiceDescription>
            <FeatureList>
              <FeatureItem>Full install and configuration</FeatureItem>
              <FeatureItem>Security and performance tuning</FeatureItem>
              <FeatureItem>Best if you already know you want your own instance</FeatureItem>
            </FeatureList>
            <CardFooter>
              <span>Open service page</span>
              <FooterHint>→</FooterHint>
            </CardFooter>
          </ServiceCard>

          <ServiceCard
            href="/services/hourly-ai-support"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.16 }}
          >
            <ServiceTag>Service page</ServiceTag>
            <ServiceTitle>Hourly AI Systems Support</ServiceTitle>
            <ServicePrice>$125/hr</ServicePrice>
            <ServiceDescription>
              For debugging, updates, configuration cleanup, automation help, and general “please fix the weird thing” work.
            </ServiceDescription>
            <FeatureList>
              <FeatureItem>Maintenance and troubleshooting</FeatureItem>
              <FeatureItem>Workflow improvements and fixes</FeatureItem>
              <FeatureItem>Good fit for already-running systems</FeatureItem>
            </FeatureList>
            <CardFooter>
              <span>Open service page</span>
              <FooterHint>→</FooterHint>
            </CardFooter>
          </ServiceCard>

          <ServiceCard
            href="/services/managed-hosting-ai-ops"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.24 }}
          >
            <ServiceTag>Service page</ServiceTag>
            <ServiceTitle>Managed Hosting + AI Operations</ServiceTitle>
            <ServicePrice>Starting at $249/mo</ServicePrice>
            <ServiceDescription>
              Ongoing hosting, monitoring, maintenance, and AI operations management if you want the leverage without babysitting the stack.
            </ServiceDescription>
            <FeatureList>
              <FeatureItem>Managed instance and updates</FeatureItem>
              <FeatureItem>Monitoring, backups, and support</FeatureItem>
              <FeatureItem>Best fit for ongoing business use</FeatureItem>
            </FeatureList>
            <CardFooter>
              <span>Open service page</span>
              <FooterHint>→</FooterHint>
            </CardFooter>
          </ServiceCard>
        </ServiceGrid>
      </Section>

      <Section>
        <SectionTitle>OpenClaw Install & Management Services</SectionTitle>
        <SectionDescription>
          Implement practical AI systems that create real leverage for your business. Early adopters gain competitive advantage while late adopters risk falling behind.
          Whether you want to run OpenClaw on your own infrastructure or prefer a managed service, I'll help you get set up for success.
        </SectionDescription>

        <PricingGrid>
          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <CardTitle>Local Setup</CardTitle>
            <CardPrice>$299 One-Time</CardPrice>
            <CardDescription>
              I install and configure OpenClaw on your system with optimal settings for your use case.
            </CardDescription>
            <FeatureList>
              <FeatureItem>Full system installation</FeatureItem>
              <FeatureItem>Custom configuration for your needs</FeatureItem>
              <FeatureItem>Security hardening</FeatureItem>
              <FeatureItem>Performance optimization</FeatureItem>
              <FeatureItem>Documentation and handover</FeatureItem>
            </FeatureList>
            <CtaButton
              href="https://calendar.app.google/fB8YJ6Zj6WHjo9Hc9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </CtaButton>
          </PricingCard>

          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle>Hourly Support</CardTitle>
            <CardPrice>$125/hr</CardPrice>
            <CardDescription>
              Ongoing maintenance, debugging, and updates performed directly on your system.
            </CardDescription>
            <FeatureList>
              <FeatureItem>System updates and patches</FeatureItem>
              <FeatureItem>Bug fixes and troubleshooting</FeatureItem>
              <FeatureItem>Performance tuning</FeatureItem>
              <FeatureItem>Security monitoring</FeatureItem>
              <FeatureItem>Feature implementation</FeatureItem>
            </FeatureList>
            <CtaButton
              href="https://calendar.app.google/fB8YJ6Zj6WHjo9Hc9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </CtaButton>
          </PricingCard>

          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CardTitle>Managed Hosting</CardTitle>
            <CardPrice>Starting at $249/mo</CardPrice>
            <CardDescription>
              I host, maintain, and manage your OpenClaw instance while you focus on using it.
            </CardDescription>
            <FeatureList>
              <FeatureItem>Dedicated hosting environment</FeatureItem>
              <FeatureItem>24/7 monitoring and maintenance</FeatureItem>
              <FeatureItem>Automatic updates and security patches</FeatureItem>
              <FeatureItem>Regular backups and disaster recovery</FeatureItem>
              <FeatureItem>Priority support and SLA</FeatureItem>
            </FeatureList>
            <CtaButton
              href="https://calendar.app.google/fB8YJ6Zj6WHjo9Hc9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </CtaButton>
          </PricingCard>
        </PricingGrid>
      </Section>
    </PageContainer>
  );
};

export default ServicesPage;
