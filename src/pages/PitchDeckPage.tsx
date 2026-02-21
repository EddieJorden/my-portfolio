import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

// ─── Print Styles ────────────────────────────────────────────────────────────
const PrintStyles = createGlobalStyle`
  @media print {
    nav, footer, .no-print { display: none !important; }
    body { background: white !important; color: black !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .page-break { page-break-before: always; }
    a { color: inherit !important; text-decoration: none !important; }
  }
`;

// ─── Animations ──────────────────────────────────────────────────────────────
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.2); }
  50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.4); }
`;

const fillBar = keyframes`
  from { width: 0%; }
  to { width: var(--fill); }
`;

// ─── Layout ──────────────────────────────────────────────────────────────────
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #050b0f;
  color: #f0f8ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section<{ $dark?: boolean; $accent?: boolean }>`
  padding: 5rem 1.5rem;
  background: ${p =>
    p.$accent ? 'linear-gradient(135deg, #071a12 0%, #0a1628 100%)' :
    p.$dark ? '#050b0f' : '#070e14'};
  position: relative;
  @media (max-width: 768px) { padding: 3.5rem 1rem; }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${p => p.$cols || 3}, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

// ─── Typography ──────────────────────────────────────────────────────────────
const Tag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  margin-bottom: 1rem;
`;

const H1 = styled.h1`
  font-size: clamp(2.6rem, 5.5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  background: linear-gradient(135deg, #ffffff 0%, #10b981 40%, #06b6d4 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 6s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.25rem;
`;

const H2 = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  span {
    background: linear-gradient(90deg, #10b981, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e0f0ff;
  margin-bottom: 0.5rem;
`;

const Lead = styled.p`
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  color: #90b0c0;
  line-height: 1.7;
  max-width: 680px;
`;

const Body = styled.p`
  font-size: 0.95rem;
  color: #7898a8;
  line-height: 1.7;
  margin: 0;
`;

const SectionLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #10b981;
  margin-bottom: 0.75rem;
`;

const BulletList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
  li {
    position: relative;
    padding-left: 1.5rem;
    color: #90a8b8;
    font-size: 0.95rem;
    line-height: 2;
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: 700;
    }
  }
`;

// ─── Cards ───────────────────────────────────────────────────────────────────
const Card = styled(motion.div)`
  background: rgba(16, 185, 129, 0.03);
  border: 1px solid rgba(16, 185, 129, 0.12);
  border-radius: 16px;
  padding: 1.75rem;
  transition: border-color 0.3s, background 0.3s;
  &:hover {
    border-color: rgba(16, 185, 129, 0.35);
    background: rgba(16, 185, 129, 0.06);
  }
`;

const BigStatCard = styled(Card)`
  text-align: center;
  padding: 2.5rem 1.5rem;
`;

const StatValue = styled.div<{ $size?: string }>`
  font-size: ${p => p.$size || '2.8rem'};
  font-weight: 900;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.4rem;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #506878;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
`;

// ─── Progress Bars ───────────────────────────────────────────────────────────
const BarContainer = styled.div`
  margin-bottom: 1.25rem;
`;

const BarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
`;

const BarTrack = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div<{ $width: number; $color?: string }>`
  height: 100%;
  width: ${p => p.$width}%;
  background: ${p => p.$color || 'linear-gradient(90deg, #10b981, #06b6d4)'};
  border-radius: 4px;
  animation: ${fillBar} 1.5s ease-out;
`;

// ─── Hero ────────────────────────────────────────────────────────────────────
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at 20% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
              #050b0f;
  @media (max-width: 768px) { padding: 7rem 1rem 4rem; min-height: auto; }
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  color: #6ee7b7;
  margin-bottom: 1.5rem;
  span { width: 8px; height: 8px; border-radius: 50%; background: #10b981; animation: ${pulse} 2s ease-in-out infinite; }
`;

const HeroStats = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: 600px) { gap: 1.5rem; }
`;

const HeroStat = styled.div`
  strong { font-size: 1.6rem; font-weight: 800; color: #ffffff; display: block; }
  em { font-style: normal; font-size: 0.75rem; color: #507080; text-transform: uppercase; letter-spacing: 0.08em; }
`;

const Divider = styled.div`
  width: 1px; height: 40px; background: rgba(255,255,255,0.1); align-self: center;
  @media (max-width: 600px) { display: none; }
`;

// ─── Comparison ──────────────────────────────────────────────────────────────
const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const CompareCard = styled.div<{ $good?: boolean }>`
  padding: 1.75rem;
  border-radius: 16px;
  border: 1px solid ${p => p.$good ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.2)'};
  background: ${p => p.$good ? 'rgba(16, 185, 129, 0.04)' : 'rgba(239, 68, 68, 0.03)'};
`;

const CompareTitle = styled.h4<{ $good?: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  color: ${p => p.$good ? '#10b981' : '#ef4444'};
  margin-bottom: 1rem;
`;

const CompareRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  font-size: 0.85rem;
  &:last-child { border-bottom: none; }
`;

// ─── Vertical Cards ──────────────────────────────────────────────────────────
const VerticalCard = styled(Card)`
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #10b981, #06b6d4);
    border-radius: 4px 0 0 4px;
  }
`;

const VerticalIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const VerticalPrice = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
`;

// ─── Buttons ─────────────────────────────────────────────────────────────────
const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: #050b0f;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  animation: ${glow} 3s ease-in-out infinite;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #10b981;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(16, 185, 129, 0.08); }
`;

const Footnote = styled.p`
  font-size: 0.75rem;
  color: #405060;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

// ─── Timeline ────────────────────────────────────────────────────────────────
const TimelineItem = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  &:last-child { border-bottom: none; }
`;

const TimelineDot = styled.div<{ $active?: boolean }>`
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.8rem;
  background: ${p => p.$active ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'rgba(255,255,255,0.05)'};
  color: ${p => p.$active ? '#050b0f' : '#506878'};
`;

// ─── Animation ───────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay },
  }),
};

// ─── Component ───────────────────────────────────────────────────────────────
const PitchDeckPage: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <PageWrapper>
      <PrintStyles />

      {/* ══════════ HERO ══════════ */}
      <HeroSection>
        <Container>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <HeroBadge><span /> Investment Opportunity</HeroBadge>
            <H1>Enterprise AI.<br />A Fraction of the Cost.</H1>
            <Lead>
              A <strong style={{ color: '#fff' }}>$20K infrastructure play</strong> that delivers
              secure, HIPAA-compliant AI services to businesses paying{' '}
              <strong style={{ color: '#10b981' }}>10–50× more</strong> for cloud alternatives.
            </Lead>
            <HeroStats>
              <HeroStat><strong>$20K</strong><em>Total Investment</em></HeroStat>
              <Divider />
              <HeroStat><strong>3–6 mo</strong><em>Break-Even</em></HeroStat>
              <Divider />
              <HeroStat><strong>80%+</strong><em>Net Margins</em></HeroStat>
              <Divider />
              <HeroStat><strong>$0</strong><em>Per-Query Cost</em></HeroStat>
            </HeroStats>
          </motion.div>
        </Container>
      </HeroSection>

      {/* ══════════ THE PROBLEM ══════════ */}
      <Section $dark>
        <Container>
          <SectionLabel>01 · The Problem</SectionLabel>
          <H2>AI Is Expensive. <span>And Insecure.</span></H2>
          <Lead style={{ marginBottom: '2.5rem' }}>
            Businesses need AI but face two blockers: cost and compliance.
          </Lead>

          <CompareGrid>
            <CompareCard>
              <CompareTitle>💸 What Businesses Pay Today</CompareTitle>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Cloud AI API costs</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>$4K–$20K/mo</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>AI-enabled medical software</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>$50K–$200K/yr</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Enterprise AI consulting</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>$200–$500/hr</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Custom model training</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>$100K–$500K+</span>
              </CompareRow>
            </CompareCard>

            <CompareCard $good>
              <CompareTitle $good>🔒 What They Actually Need</CompareTitle>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>HIPAA-compliant AI</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Data never leaves</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>No shared infrastructure</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>100% local</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Predictable pricing</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Fixed monthly cost</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Enterprise-grade models</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Frontier quality</span>
              </CompareRow>
            </CompareCard>
          </CompareGrid>
        </Container>
      </Section>

      {/* ══════════ THREE VERTICALS ══════════ */}
      <Section className="page-break" $accent>
        <Container>
          <SectionLabel>02 · The Business</SectionLabel>
          <H2>Three High-Margin <span>Verticals</span></H2>
          <Lead style={{ marginBottom: '2.5rem' }}>
            Same infrastructure. Three massive markets. All underserved by affordable, secure AI.
          </Lead>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Vertical 1: Medical */}
            <VerticalCard initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <VerticalIcon>🏥</VerticalIcon>
                  <VerticalPrice>$5K–$15K/mo per client</VerticalPrice>
                  <H3>HIPAA-Compliant Medical AI</H3>
                  <BulletList>
                    <li>AI-powered clinical documentation & note generation</li>
                    <li>Medical records analysis & patient intake automation</li>
                    <li>Billing code suggestions & claims processing</li>
                    <li>Zero data exposure — all processing stays local</li>
                    <li>Replaces software costing $50K–$200K/yr</li>
                  </BulletList>
                </div>
                <div>
                  <BarContainer>
                    <BarHeader>
                      <span style={{ color: '#90a8b8' }}>Cloud AI Alternative</span>
                      <span style={{ color: '#ef4444', fontWeight: 600 }}>$120K/yr</span>
                    </BarHeader>
                    <BarTrack><BarFill $width={100} $color="#ef4444" /></BarTrack>
                  </BarContainer>
                  <BarContainer>
                    <BarHeader>
                      <span style={{ color: '#90a8b8' }}>Our Service</span>
                      <span style={{ color: '#10b981', fontWeight: 600 }}>$12K/yr</span>
                    </BarHeader>
                    <BarTrack><BarFill $width={10} /></BarTrack>
                  </BarContainer>
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(16,185,129,0.06)', borderRadius: '12px', textAlign: 'center' }}>
                    <StatValue $size="2rem">90% Savings</StatValue>
                    <StatLabel>vs cloud-based medical AI</StatLabel>
                  </div>
                </div>
              </div>
            </VerticalCard>

            {/* Vertical 2: Enterprise Tech Support */}
            <VerticalCard initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <VerticalIcon>🏢</VerticalIcon>
                  <VerticalPrice>$2K–$8K/mo per client</VerticalPrice>
                  <H3>Enterprise AI Tech Support</H3>
                  <BulletList>
                    <li>24/7 AI agents handling Tier 1–2 support tickets</li>
                    <li>Internal knowledge base Q&A — trained on company docs</li>
                    <li>IT helpdesk automation & troubleshooting</li>
                    <li>100% local — no proprietary data on shared servers</li>
                    <li>Reduces support staff costs by 60–80%</li>
                  </BulletList>
                </div>
                <div>
                  <BarContainer>
                    <BarHeader>
                      <span style={{ color: '#90a8b8' }}>Support Team (3 agents)</span>
                      <span style={{ color: '#ef4444', fontWeight: 600 }}>$180K/yr</span>
                    </BarHeader>
                    <BarTrack><BarFill $width={100} $color="#ef4444" /></BarTrack>
                  </BarContainer>
                  <BarContainer>
                    <BarHeader>
                      <span style={{ color: '#90a8b8' }}>AI-Powered Support</span>
                      <span style={{ color: '#10b981', fontWeight: 600 }}>$36K/yr</span>
                    </BarHeader>
                    <BarTrack><BarFill $width={20} /></BarTrack>
                  </BarContainer>
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(16,185,129,0.06)', borderRadius: '12px', textAlign: 'center' }}>
                    <StatValue $size="2rem">80% Savings</StatValue>
                    <StatLabel>vs traditional support teams</StatLabel>
                  </div>
                </div>
              </div>
            </VerticalCard>

            {/* Vertical 3: Custom Models */}
            <VerticalCard initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.3}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <VerticalIcon>🧠</VerticalIcon>
                  <VerticalPrice>$10K–$50K per project + $1K–$5K/mo hosting</VerticalPrice>
                  <H3>Custom Model Training & Hosting</H3>
                  <BulletList>
                    <li>Fine-tune models on client's proprietary data</li>
                    <li>Domain-specific AI that outperforms generic models</li>
                    <li>Client owns the model — hosted securely on our infra</li>
                    <li>Fraction of cloud training costs (no GPU rental)</li>
                    <li>Each custom model becomes proprietary IP</li>
                  </BulletList>
                </div>
                <div>
                  <BarContainer>
                    <BarHeader>
                      <span style={{ color: '#90a8b8' }}>Cloud Training + Hosting</span>
                      <span style={{ color: '#ef4444', fontWeight: 600 }}>$150K+</span>
                    </BarHeader>
                    <BarTrack><BarFill $width={100} $color="#ef4444" /></BarTrack>
                  </BarContainer>
                  <BarContainer>
                    <BarHeader>
                      <span style={{ color: '#90a8b8' }}>Local Training + Hosting</span>
                      <span style={{ color: '#10b981', fontWeight: 600 }}>$25K</span>
                    </BarHeader>
                    <BarTrack><BarFill $width={17} /></BarTrack>
                  </BarContainer>
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(16,185,129,0.06)', borderRadius: '12px', textAlign: 'center' }}>
                    <StatValue $size="2rem">83% Savings</StatValue>
                    <StatLabel>vs cloud model training</StatLabel>
                  </div>
                </div>
              </div>
            </VerticalCard>
          </div>
        </Container>
      </Section>

      {/* ══════════ ROI ══════════ */}
      <Section $dark>
        <Container>
          <SectionLabel>03 · The Numbers</SectionLabel>
          <H2>Conservative <span>ROI Projections</span></H2>

          <Grid $cols={4} style={{ marginBottom: '2.5rem', marginTop: '2rem' }}>
            {[
              { value: '$20K', label: 'One-Time Investment' },
              { value: '3–6 mo', label: 'Break-Even' },
              { value: '$150K–$500K', label: 'Year 1 Revenue' },
              { value: '70–85%', label: 'Net Margins' },
            ].map((s, i) => (
              <BigStatCard key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <StatValue $size="2.2rem">{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </BigStatCard>
            ))}
          </Grid>

          {/* Revenue scenarios as visual cards instead of table */}
          <H3 style={{ marginBottom: '1.5rem' }}>Revenue Scenarios</H3>
          <Grid $cols={3}>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Tag>Conservative</Tag>
              <StatValue $size="2rem">$6K/mo</StatValue>
              <Body style={{ marginBottom: '1rem' }}>2 medical/enterprise clients</Body>
              <BarContainer>
                <BarHeader>
                  <span style={{ color: '#507080' }}>To break-even</span>
                  <span style={{ color: '#6ee7b7', fontWeight: 600 }}>3–4 months</span>
                </BarHeader>
                <BarTrack><BarFill $width={33} /></BarTrack>
              </BarContainer>
              <Body style={{ fontSize: '0.85rem' }}>Year 1: <strong style={{ color: '#10b981' }}>$72K revenue</strong></Body>
            </Card>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.1}>
              <Tag>Moderate</Tag>
              <StatValue $size="2rem">$15K/mo</StatValue>
              <Body style={{ marginBottom: '1rem' }}>4 clients + custom model project</Body>
              <BarContainer>
                <BarHeader>
                  <span style={{ color: '#507080' }}>To break-even</span>
                  <span style={{ color: '#6ee7b7', fontWeight: 600 }}>~6 weeks</span>
                </BarHeader>
                <BarTrack><BarFill $width={60} /></BarTrack>
              </BarContainer>
              <Body style={{ fontSize: '0.85rem' }}>Year 1: <strong style={{ color: '#10b981' }}>$180K revenue</strong></Body>
            </Card>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}>
              <Tag>Aggressive</Tag>
              <StatValue $size="2rem">$40K+/mo</StatValue>
              <Body style={{ marginBottom: '1rem' }}>8+ clients across all verticals</Body>
              <BarContainer>
                <BarHeader>
                  <span style={{ color: '#507080' }}>To break-even</span>
                  <span style={{ color: '#6ee7b7', fontWeight: 600 }}>&lt; 1 month</span>
                </BarHeader>
                <BarTrack><BarFill $width={90} /></BarTrack>
              </BarContainer>
              <Body style={{ fontSize: '0.85rem' }}>Year 1: <strong style={{ color: '#10b981' }}>$480K+ revenue</strong></Body>
            </Card>
          </Grid>

          <Footnote>
            Revenue projections based on comparable market rates for managed AI services, medical software,
            and enterprise consulting. Actual results depend on sales execution. Monthly operating cost ~$150–$200.
          </Footnote>
        </Container>
      </Section>

      {/* ══════════ WHY THIS WORKS ══════════ */}
      <Section $accent>
        <Container>
          <SectionLabel>04 · Why This Works</SectionLabel>
          <H2>The <span>Unfair Advantage</span></H2>

          <Grid $cols={2} style={{ marginTop: '2rem' }}>
            <div>
              <Grid $cols={1}>
                {[
                  { icon: '⚡', title: '$0 Per-Query Cost', desc: 'After hardware, every AI request is free. Cloud competitors pay per token forever.' },
                  { icon: '🔐', title: 'True Data Privacy', desc: 'No data leaves the building. HIPAA, GDPR, SOC2 compliance is architectural, not contractual.' },
                  { icon: '🧠', title: 'Frontier-Quality Models', desc: 'Run 1T+ parameter models locally. Same quality as GPT-4/Claude — without the API bill.' },
                  { icon: '📈', title: 'Inverse Scaling Economics', desc: 'Cloud AI: more users = more cost. Local AI: more users = higher margins.' },
                  { icon: '🔧', title: 'No Vendor Lock-In', desc: 'Open-source stack. Switch models anytime. Hardware retains 60–80% resale value.' },
                ].map((item, i) => (
                  <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1.5rem', minWidth: '36px', textAlign: 'center' }}>{item.icon}</div>
                    <div>
                      <H3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.title}</H3>
                      <Body style={{ fontSize: '0.9rem' }}>{item.desc}</Body>
                    </div>
                  </Card>
                ))}
              </Grid>
            </div>

            <Card style={{ alignSelf: 'start', position: 'sticky', top: '100px' }}>
              <H3 style={{ marginBottom: '1.5rem' }}>Technology Stack</H3>
              {[
                { label: 'Hardware', value: '2× Mac Studio M3 Ultra · 512GB unified memory', pct: 100 },
                { label: 'Clustering', value: 'Exo · RDMA tensor parallelism · auto-discovery', pct: 85 },
                { label: 'Models', value: 'Kimi K2.5, DeepSeek, Qwen · frontier open-weight', pct: 90 },
                { label: 'Agents', value: 'OpenClaw · memory, tools, browser, messaging', pct: 80 },
                { label: 'API Layer', value: 'OpenAI-compatible endpoints · drop-in replacement', pct: 75 },
              ].map((item, i) => (
                <BarContainer key={i}>
                  <BarHeader>
                    <span style={{ color: '#d0e0f0', fontWeight: 600 }}>{item.label}</span>
                  </BarHeader>
                  <Body style={{ fontSize: '0.8rem', marginBottom: '0.4rem' }}>{item.value}</Body>
                  <BarTrack><BarFill $width={item.pct} /></BarTrack>
                </BarContainer>
              ))}
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* ══════════ EXECUTION PLAN ══════════ */}
      <Section $dark className="page-break">
        <Container>
          <SectionLabel>05 · Execution Plan</SectionLabel>
          <H2>Investment to Revenue <span>in 90 Days</span></H2>

          <Grid $cols={2} style={{ marginTop: '2rem' }}>
            <div>
              {[
                { month: 'Month 1', title: 'Build', items: ['Acquire & configure hardware cluster', 'Deploy AI models, verify full inference', 'Build first client demo & sales assets', 'Begin outreach to medical practices & SMBs'] },
                { month: 'Month 2', title: 'Launch', items: ['Close first 2–3 paying clients', 'Deliver first HIPAA-compliant deployment', 'Collect performance metrics for case studies', 'Refine pricing based on market feedback'] },
                { month: 'Month 3', title: 'Break-Even', items: ['Scale to 4–6 recurring clients', 'Launch custom model training service', 'Inbound leads from demos & referrals', 'Investment fully recovered'] },
                { month: 'Month 6+', title: 'Scale', items: ['Multiple verticals generating revenue', 'Referral pipeline active', 'Evaluate cluster expansion for demand', '$50K–$100K+/mo run-rate'] },
              ].map((phase, i) => (
                <TimelineItem key={i}>
                  <TimelineDot $active={i < 3}>{i + 1}</TimelineDot>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem' }}>{phase.month}</div>
                    <H3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{phase.title}</H3>
                    <BulletList>
                      {phase.items.map((item, j) => <li key={j}>{item}</li>)}
                    </BulletList>
                  </div>
                </TimelineItem>
              ))}
            </div>

            <Card style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}>
              <Tag>The Ask</Tag>
              <StatValue $size="3rem" style={{ marginBottom: '1.5rem' }}>~$20,000</StatValue>
              {[
                { label: '2× Mac Studio M3 Ultra 512GB', amount: '~$19,000–$20,000' },
                { label: 'Network & infrastructure', amount: '~$300–$500' },
                { label: '3 months operating costs', amount: '~$500–$600' },
              ].map((line, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.6rem 0' }}>
                  <Body>{line.label}</Body>
                  <span style={{ color: '#6ee7b7', fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', paddingLeft: '1rem' }}>{line.amount}</span>
                </div>
              ))}
              <Body style={{ fontSize: '0.85rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                One-time hardware investment. Apple Silicon retains 60–80% resale value.
                Not consumption spend — infrastructure ownership with asymmetric upside.
              </Body>
              <PrimaryBtn onClick={handlePrint} style={{ width: '100%', justifyContent: 'center' }}>
                ↓ Download as PDF
              </PrimaryBtn>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* ══════════ OPERATOR ══════════ */}
      <Section $accent>
        <Container>
          <SectionLabel>06 · The Operator</SectionLabel>
          <H2>Why <span>Eddie Moger</span></H2>
          <Grid $cols={4} style={{ marginTop: '2rem' }}>
            {[
              { icon: '💻', title: 'Full-Stack Dev', desc: 'Ships production apps solo — React, Node, TypeScript, databases, deployment' },
              { icon: '🤖', title: 'AI-Native', desc: 'Running production agentic AI for business operations since 2025' },
              { icon: '🏢', title: 'Business Operator', desc: 'Active field service business with real clients and industry connections' },
              { icon: '⚡', title: 'Day 1 Ready', desc: 'Already working with the full stack — zero learning curve, immediate execution' },
            ].map((item, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <H3 style={{ fontSize: '1.05rem' }}>{item.title}</H3>
                <Body style={{ fontSize: '0.85rem' }}>{item.desc}</Body>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ══════════ CTA ══════════ */}
      <Section $dark style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <Container>
          <H2>Let's Build <span>Something Extraordinary</span></H2>
          <Lead style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            Secure AI infrastructure. Massive underserved market. First-mover advantage.
          </Lead>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} className="no-print">
            <PrimaryBtn onClick={handlePrint}>↓ Download as PDF</PrimaryBtn>
            <SecondaryBtn href="mailto:eddie@eddiemoger.com?subject=AI%20Infrastructure%20Investment">
              Contact Eddie →
            </SecondaryBtn>
          </div>
          <Footnote style={{ textAlign: 'center', maxWidth: '700px', margin: '2rem auto 0' }}>
            Hardware specs from Apple.com. Model references from GitHub (Kimi-K2, Exo).
            Revenue projections are forward-looking estimates, not guarantees.
          </Footnote>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default PitchDeckPage;
