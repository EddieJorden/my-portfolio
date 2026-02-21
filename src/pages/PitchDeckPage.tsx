import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

// ─── Print ───────────────────────────────────────────────────────────────────
const PrintStyles = createGlobalStyle`
  @media print {
    nav, footer, .no-print { display: none !important; }
    body { background: white !important; color: black !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
`;

// ─── Animations ──────────────────────────────────────────────────────────────
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const pulse = keyframes`
  0%, 100% { opacity: 1; } 50% { opacity: 0.6; }
`;
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.15); }
  50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.3); }
`;

// ─── Layout ──────────────────────────────────────────────────────────────────
const Page = styled.div`
  min-height: 100vh;
  background: #050b0f;
  color: #f0f8ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section<{ $alt?: boolean }>`
  padding: 4rem 1.25rem;
  background: ${p => p.$alt ? 'linear-gradient(135deg, #071a12 0%, #0a1628 100%)' : '#050b0f'};
  @media (min-width: 768px) { padding: 5rem 2rem; }
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

// ─── Typography ──────────────────────────────────────────────────────────────
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  color: #6ee7b7;
  margin-bottom: 1.25rem;
  span { width: 7px; height: 7px; border-radius: 50%; background: #10b981; animation: ${pulse} 2s ease-in-out infinite; }
`;

const H1 = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.08;
  background: linear-gradient(135deg, #ffffff 0%, #10b981 50%, #06b6d4 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 6s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.6rem;
  em { font-style: normal; background: linear-gradient(90deg, #10b981, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
`;

const H3 = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #e0f0ff;
  margin-bottom: 0.4rem;
`;

const Lead = styled.p`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #90b0c0;
  line-height: 1.7;
  max-width: 640px;
`;

const Muted = styled.span`
  color: #607888;
  font-size: 0.85rem;
`;

const Label = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #10b981;
  margin-bottom: 0.6rem;
`;

// ─── Cards & Grid ────────────────────────────────────────────────────────────
const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  @media (min-width: 600px) { grid-template-columns: repeat(${p => Math.min(p.$cols || 2, 2)}, 1fr); }
  @media (min-width: 900px) { grid-template-columns: repeat(${p => p.$cols || 2}, 1fr); }
`;

const Card = styled(motion.div)`
  background: rgba(16, 185, 129, 0.03);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.3s;
  &:hover { border-color: rgba(16, 185, 129, 0.3); }
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
`;

// ─── Stats ───────────────────────────────────────────────────────────────────
const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (min-width: 600px) { grid-template-columns: repeat(4, 1fr); }
`;

const Stat = styled.div`
  text-align: center;
  padding: 1.25rem 0.75rem;
  background: rgba(16, 185, 129, 0.04);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 12px;
`;

const StatNum = styled.div<{ $sm?: boolean }>`
  font-size: ${p => p.$sm ? '1.6rem' : '2rem'};
  font-weight: 900;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: #507080;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
  margin-top: 0.25rem;
`;

// ─── Bar Chart ───────────────────────────────────────────────────────────────
const BarWrap = styled.div`
  margin-bottom: 1rem;
`;
const BarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  margin-bottom: 0.3rem;
`;
const BarTrack = styled.div`
  height: 10px;
  background: rgba(255,255,255,0.05);
  border-radius: 5px;
  overflow: hidden;
`;
const BarFill = styled.div<{ $w: number; $bad?: boolean }>`
  height: 100%;
  width: ${p => p.$w}%;
  background: ${p => p.$bad ? '#ef4444' : 'linear-gradient(90deg, #10b981, #06b6d4)'};
  border-radius: 5px;
  transition: width 1s ease;
`;

// ─── Comparison ──────────────────────────────────────────────────────────────
const VsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  @media (min-width: 600px) { grid-template-columns: 1fr 1fr; }
`;

const VsCard = styled.div<{ $good?: boolean }>`
  padding: 1.5rem;
  border-radius: 14px;
  border: 1px solid ${p => p.$good ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.2)'};
  background: ${p => p.$good ? 'rgba(16,185,129,0.04)' : 'rgba(239,68,68,0.03)'};
`;

const VsTitle = styled.h4<{ $good?: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  color: ${p => p.$good ? '#10b981' : '#ef4444'};
  margin-bottom: 0.75rem;
`;

const VsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  font-size: 0.82rem;
  &:last-child { border-bottom: none; }
`;

// ─── Analogy Visual ──────────────────────────────────────────────────────────
const AnalogyBox = styled(Card)`
  text-align: center;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(16,185,129,0.2);
`;

const AnalogyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.75rem;
`;

const AnalogyFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`;

const FlowStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  min-width: 80px;
`;

const FlowIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(16,185,129,0.08);
  border: 1px solid rgba(16,185,129,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;

const FlowArrow = styled.div`
  color: #10b981;
  font-size: 1.2rem;
  font-weight: 700;
  @media (max-width: 500px) { transform: rotate(90deg); }
`;

const FlowLabel = styled.div`
  font-size: 0.7rem;
  color: #607888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
`;

// ─── Timeline ────────────────────────────────────────────────────────────────
const TLItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  &:last-child { border-bottom: none; }
`;

const TLDot = styled.div<{ $on?: boolean }>`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.75rem;
  background: ${p => p.$on ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'rgba(255,255,255,0.05)'};
  color: ${p => p.$on ? '#050b0f' : '#506878'};
`;

const Bullets = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0.5rem 0 0;
  li {
    position: relative;
    padding-left: 1.25rem;
    color: #7898a8;
    font-size: 0.88rem;
    line-height: 1.9;
    &::before { content: '→'; position: absolute; left: 0; color: #10b981; font-weight: 700; }
  }
`;

// ─── Buttons ─────────────────────────────────────────────────────────────────
const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.75rem;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: #050b0f;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  animation: ${glow} 3s ease-in-out infinite;
  transition: opacity 0.2s, transform 0.2s;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.75rem;
  background: transparent;
  color: #10b981;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid rgba(16,185,129,0.4);
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover { background: rgba(16,185,129,0.08); }
`;

const Footnote = styled.p`
  font-size: 0.7rem;
  color: #405060;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

// ─── Fade ────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: d } }),
};

// ═════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
const PitchDeckPage: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <Page>
      <PrintStyles />

      {/* ══════ HERO ══════ */}
      <Section style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <Container>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Badge><span /> Investment Opportunity</Badge>
            <H1>Own the Infrastructure.<br />Sell the Intelligence.</H1>
            <Lead style={{ marginBottom: '2rem' }}>
              Think of it like a <strong style={{ color: '#fff' }}>laundromat</strong> — you own the machines,
              customers pay to use them, and the revenue compounds as you add capacity.
              Except the machines run AI, and the market is growing 10× faster.
            </Lead>
            <StatRow>
              <Stat>
                <StatNum>$20K</StatNum>
                <StatLabel>Total Investment</StatLabel>
              </Stat>
              <Stat>
                <StatNum $sm>3–6 mo</StatNum>
                <StatLabel>Break-Even</StatLabel>
              </Stat>
              <Stat>
                <StatNum>80%+</StatNum>
                <StatLabel>Net Margins</StatLabel>
              </Stat>
              <Stat>
                <StatNum>$0</StatNum>
                <StatLabel>Per-Use Cost</StatLabel>
              </Stat>
            </StatRow>
          </motion.div>
        </Container>
      </Section>

      {/* ══════ THE ANALOGY ══════ */}
      <Section $alt>
        <Container>
          <Label>How It Works</Label>
          <H2>It's a <em>Digital Laundromat</em></H2>
          <Lead style={{ marginBottom: '2rem' }}>
            Simple model. Buy machines. Sell compute. Scale with profits.
          </Lead>

          <AnalogyBox style={{ background: 'rgba(16,185,129,0.02)' }}>
            <AnalogyFlow>
              <FlowStep>
                <FlowIcon>💰</FlowIcon>
                <FlowLabel>Invest $20K</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>🖥️</FlowIcon>
                <FlowLabel>Buy Hardware</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>🤖</FlowIcon>
                <FlowLabel>Run AI Services</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>📈</FlowIcon>
                <FlowLabel>Recurring Revenue</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>🔄</FlowIcon>
                <FlowLabel>Reinvest & Scale</FlowLabel>
              </FlowStep>
            </AnalogyFlow>
            <Muted>Each dollar of hardware generates $3–$8 in annual revenue. Reinvest profits → more hardware → more revenue.</Muted>
          </AnalogyBox>

          <Grid $cols={3} style={{ marginTop: '1.5rem' }}>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <IconBox>🏪</IconBox>
              <H3>Laundromat</H3>
              <Bullets>
                <li>Buy washers & dryers</li>
                <li>Customers pay per load</li>
                <li>Fixed cost, recurring revenue</li>
                <li>Add machines to scale</li>
              </Bullets>
            </Card>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.1}>
              <IconBox>🤖</IconBox>
              <H3>AI Infrastructure Co.</H3>
              <Bullets>
                <li>Buy compute hardware</li>
                <li>Businesses pay monthly for AI</li>
                <li>Fixed cost, recurring revenue</li>
                <li>Add hardware to scale</li>
              </Bullets>
            </Card>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}>
              <IconBox>🚀</IconBox>
              <H3>Why AI Wins</H3>
              <Bullets>
                <li>No physical location needed</li>
                <li>Serves unlimited clients 24/7</li>
                <li>Software margins (80%+ vs 30%)</li>
                <li>Market growing exponentially</li>
              </Bullets>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* ══════ WHAT WE SELL ══════ */}
      <Section>
        <Container>
          <Label>The Revenue</Label>
          <H2>What Businesses <em>Pay Us For</em></H2>
          <Lead style={{ marginBottom: '2rem' }}>
            Every business needs AI. Most can't afford it or don't trust the cloud with their data.
            We solve both problems.
          </Lead>

          <Grid $cols={2}>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <IconBox>🏥</IconBox>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>$5K–$15K/mo</span>
              </div>
              <H3>HIPAA-Compliant Medical AI</H3>
              <Bullets>
                <li>AI receptionist — answers calls, books appointments 24/7</li>
                <li>Clinical documentation & note generation</li>
                <li>Insurance verification & billing automation</li>
                <li>Zero data exposure — HIPAA compliant by design</li>
              </Bullets>
              <BarWrap style={{ marginTop: '1rem' }}>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>Current solutions</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>$120K/yr</span>
                </BarLabel>
                <BarTrack><BarFill $w={100} $bad /></BarTrack>
              </BarWrap>
              <BarWrap>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>Our service</span>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>$12K/yr</span>
                </BarLabel>
                <BarTrack><BarFill $w={10} /></BarTrack>
              </BarWrap>
            </Card>

            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.1}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <IconBox>🏢</IconBox>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>$2K–$8K/mo</span>
              </div>
              <H3>Enterprise AI Agents</H3>
              <Bullets>
                <li>24/7 AI handling support tickets & customer inquiries</li>
                <li>Internal knowledge base trained on company docs</li>
                <li>100% local — no data on shared servers</li>
                <li>Replaces 60–80% of Tier 1–2 support costs</li>
              </Bullets>
              <BarWrap style={{ marginTop: '1rem' }}>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>3 support agents</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>$180K/yr</span>
                </BarLabel>
                <BarTrack><BarFill $w={100} $bad /></BarTrack>
              </BarWrap>
              <BarWrap>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>AI-powered support</span>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>$36K/yr</span>
                </BarLabel>
                <BarTrack><BarFill $w={20} /></BarTrack>
              </BarWrap>
            </Card>

            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <IconBox>🧠</IconBox>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>$10K–$50K + hosting</span>
              </div>
              <H3>Custom AI Model Training</H3>
              <Bullets>
                <li>Train models on client's proprietary data</li>
                <li>Domain-specific AI that outperforms generic tools</li>
                <li>Client owns the model — we host it securely</li>
                <li>Recurring hosting revenue: $1K–$5K/mo</li>
              </Bullets>
              <BarWrap style={{ marginTop: '1rem' }}>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>Cloud training + hosting</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>$150K+</span>
                </BarLabel>
                <BarTrack><BarFill $w={100} $bad /></BarTrack>
              </BarWrap>
              <BarWrap>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>Our training + hosting</span>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>$25K</span>
                </BarLabel>
                <BarTrack><BarFill $w={17} /></BarTrack>
              </BarWrap>
            </Card>

            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.3}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <IconBox>📱</IconBox>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>$200–$2K/mo</span>
              </div>
              <H3>Small Business AI Automation</H3>
              <Bullets>
                <li>AI booking, reminders, follow-ups for local businesses</li>
                <li>Social media content & review management</li>
                <li>Lead capture & qualification bots</li>
                <li>Scales from solo operators to multi-location</li>
              </Bullets>
              <BarWrap style={{ marginTop: '1rem' }}>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>Hiring a VA / admin</span>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>$30K–$45K/yr</span>
                </BarLabel>
                <BarTrack><BarFill $w={100} $bad /></BarTrack>
              </BarWrap>
              <BarWrap>
                <BarLabel>
                  <span style={{ color: '#90a8b8' }}>AI automation</span>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>$2.4K–$24K/yr</span>
                </BarLabel>
                <BarTrack><BarFill $w={25} /></BarTrack>
              </BarWrap>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* ══════ THE ECONOMICS ══════ */}
      <Section $alt>
        <Container>
          <Label>The Numbers</Label>
          <H2>Why Local AI <em>Beats the Cloud</em></H2>

          <VsGrid style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
            <VsCard>
              <VsTitle>☁️ Cloud AI</VsTitle>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>Cost model</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>Pay per query, forever</span>
              </VsRow>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>More users</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>= More cost</span>
              </VsRow>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>Client data</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>Sent to third-party</span>
              </VsRow>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>HIPAA/Privacy</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>Requires BAA, still risky</span>
              </VsRow>
              <VsRow style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(239,68,68,0.15)' }}>
                <span style={{ color: '#d0e0f0', fontWeight: 700 }}>Year 1 spend</span>
                <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.1rem' }}>$50K–$240K+</span>
              </VsRow>
            </VsCard>

            <VsCard $good>
              <VsTitle $good>⚡ Our Infrastructure</VsTitle>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>Cost model</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Fixed hardware, $0/query</span>
              </VsRow>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>More users</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>= Higher margins</span>
              </VsRow>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>Client data</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Never leaves the building</span>
              </VsRow>
              <VsRow>
                <span style={{ color: '#90a8b8' }}>HIPAA/Privacy</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Compliant by architecture</span>
              </VsRow>
              <VsRow style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(16,185,129,0.15)' }}>
                <span style={{ color: '#d0e0f0', fontWeight: 700 }}>Year 1 spend</span>
                <span style={{ color: '#10b981', fontWeight: 800, fontSize: '1.1rem' }}>~$20.5K (one-time)</span>
              </VsRow>
            </VsCard>
          </VsGrid>

          {/* Revenue scenarios */}
          <H3 style={{ marginTop: '2.5rem', marginBottom: '1.25rem' }}>Revenue Projections</H3>
          <Grid $cols={3}>
            {[
              { label: 'Conservative', rev: '$6K/mo', desc: '2–3 small business clients', breakeven: '3–4 months', yr1: '$72K', pct: 30 },
              { label: 'Moderate', rev: '$15K/mo', desc: '5 clients + custom model project', breakeven: '~6 weeks', yr1: '$180K', pct: 60 },
              { label: 'Aggressive', rev: '$40K+/mo', desc: '10+ clients across all verticals', breakeven: '< 1 month', yr1: '$480K+', pct: 90 },
            ].map((s, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <Badge style={{ marginBottom: '0.5rem' }}>{s.label}</Badge>
                <StatNum $sm>{s.rev}</StatNum>
                <Muted style={{ display: 'block', margin: '0.3rem 0 0.75rem' }}>{s.desc}</Muted>
                <BarWrap>
                  <BarLabel>
                    <span style={{ color: '#507080' }}>Break-even</span>
                    <span style={{ color: '#6ee7b7', fontWeight: 600, fontSize: '0.8rem' }}>{s.breakeven}</span>
                  </BarLabel>
                  <BarTrack><BarFill $w={s.pct} /></BarTrack>
                </BarWrap>
                <div style={{ fontSize: '0.85rem', color: '#90a8b8' }}>
                  Year 1: <strong style={{ color: '#10b981' }}>{s.yr1}</strong>
                </div>
              </Card>
            ))}
          </Grid>

          <Footnote>
            Based on market rates for managed AI services, medical software, and enterprise consulting.
            Actual results depend on sales execution. Operating costs ~$150–$200/mo (electricity + internet).
          </Footnote>
        </Container>
      </Section>


      {/* ══════ AGENTIC AI ══════ */}
      <Section $alt>
        <Container>
          <Label>The Secret Weapon</Label>
          <H2>AI That <em>Works Like an Employee</em></H2>
          <Lead style={{ marginBottom: "2rem" }}>
            This isn't chatbot AI. We run autonomous AI agents that operate a computer
            like a human would — except with a genius-level IQ and a PhD in everything.
          </Lead>

          <AnalogyBox style={{ background: "rgba(16,185,129,0.02)", marginBottom: "1.5rem" }}>
            <AnalogyFlow>
              <FlowStep>
                <FlowIcon>🧠</FlowIcon>
                <FlowLabel>AI Agent</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>💻</FlowIcon>
                <FlowLabel>Uses Computer</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>🌐</FlowIcon>
                <FlowLabel>Browses Web</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>📧</FlowIcon>
                <FlowLabel>Sends Email</FlowLabel>
              </FlowStep>
              <FlowArrow>→</FlowArrow>
              <FlowStep>
                <FlowIcon>📊</FlowIcon>
                <FlowLabel>Runs Business</FlowLabel>
              </FlowStep>
            </AnalogyFlow>
          </AnalogyBox>

          <Grid $cols={2}>
            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <IconBox>🤖</IconBox>
              <H3>What Our Agents Can Do</H3>
              <Bullets>
                <li>Browse the web, research, and gather information</li>
                <li>Read and send emails, manage calendars</li>
                <li>Write code, build software, deploy applications</li>
                <li>Analyze documents, spreadsheets, and databases</li>
                <li>Handle customer inquiries across channels</li>
                <li>Monitor systems, run reports, flag issues 24/7</li>
              </Bullets>
            </Card>

            <Card initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.1}>
              <IconBox>⚡</IconBox>
              <H3>Why This Is Different</H3>
              <Bullets>
                <li>Not a chatbot — a fully autonomous digital worker</li>
                <li>Operates tools, browsers, and systems like a human</li>
                <li>IQ estimated at 120+ with PhD-level knowledge across every field</li>
                <li>Works 24/7/365 — no breaks, no sick days, no training period</li>
                <li>Costs a fraction of a single employee</li>
                <li>Already in production — we use this daily for our own operations</li>
              </Bullets>
            </Card>
          </Grid>

          <Card style={{ marginTop: "1.5rem", textAlign: "center", padding: "1.5rem" }}>
            <StatNum $sm>The AI employee that never sleeps, knows everything, and costs less than your internet bill.</StatNum>
          </Card>
        </Container>
      </Section>
      {/* ══════ WHY NOW ══════ */}
      <Section>
        <Container>
          <Label>The Opportunity</Label>
          <H2>Why <em>Now</em></H2>

          <Grid $cols={2} style={{ marginTop: '1.5rem' }}>
            {[
              { icon: '🌊', title: 'AI Demand Is Exploding', desc: 'Every business will need AI within 2–3 years. Most can\'t build it themselves. The companies that own the infrastructure win.' },
              { icon: '🔐', title: 'Privacy Laws Are Tightening', desc: 'HIPAA, GDPR, EU AI Act — all pushing data sovereignty. Local AI gets more valuable every year as regulation increases.' },
              { icon: '📉', title: 'Open Models Are Closing the Gap', desc: 'Open-weight models like Kimi K2 score #2 globally on the hardest AI benchmarks. They run on our hardware at zero cost. Each generation gets closer to the frontier — the gap is our margin.' },
              { icon: '⚡', title: 'First Movers Win', desc: 'Client relationships + custom models = a moat that deepens with every engagement. Switching costs keep clients locked in.' },
            ].map((item, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <IconBox style={{ minWidth: '44px' }}>{item.icon}</IconBox>
                <div>
                  <H3 style={{ fontSize: '1.05rem' }}>{item.title}</H3>
                  <Muted style={{ lineHeight: '1.6', display: 'block' }}>{item.desc}</Muted>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ══════ THE PLAN ══════ */}
      <Section $alt>
        <Container>
          <Label>Execution</Label>
          <H2>Investment → Revenue <em>in 90 Days</em></H2>

          <Grid $cols={2} style={{ marginTop: '1.5rem' }}>
            <div>
              {[
                { m: 'Month 1', t: 'Build', items: ['Acquire & configure hardware', 'Deploy AI models, verify inference', 'Build demo & first client pitch', 'Outreach to initial prospects'] },
                { m: 'Month 2', t: 'Launch', items: ['Close first 2–3 paying clients', 'Deliver first deployed AI service', 'Collect metrics for case studies'] },
                { m: 'Month 3', t: 'Break-Even', items: ['4–6 recurring clients active', 'Custom model project underway', 'Investment fully recovered'] },
                { m: 'Month 6+', t: 'Scale', items: ['Multiple revenue streams', 'Reinvest in additional hardware', 'Referral pipeline active', '$50K–$100K+/mo target'] },
              ].map((p, i) => (
                <TLItem key={i}>
                  <TLDot $on={i < 3}>{i + 1}</TLDot>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.m}</div>
                    <H3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{p.t}</H3>
                    <Bullets>{p.items.map((x, j) => <li key={j}>{x}</li>)}</Bullets>
                  </div>
                </TLItem>
              ))}
            </div>

            <Card style={{ position: 'sticky', top: '90px', alignSelf: 'start' }}>
              <Badge>The Ask</Badge>
              <StatNum style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>~$20,000</StatNum>
              {[
                { l: '2× Mac Studio M3 Ultra 512GB', a: '~$19–20K' },
                { l: 'Network & setup', a: '~$300–500' },
                { l: '3 months operating costs', a: '~$500–600' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', padding: '0.5rem 0' }}>
                  <Muted style={{ color: '#7898a8' }}>{r.l}</Muted>
                  <span style={{ color: '#6ee7b7', fontWeight: 600, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>{r.a}</span>
                </div>
              ))}

              <div style={{ margin: '1.25rem 0', padding: '1rem', background: 'rgba(16,185,129,0.06)', borderRadius: '10px' }}>
                <H3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>What You Own</H3>
                <Bullets>
                  <li>Equity stake in an AI services LLC</li>
                  <li>Hardware that retains 60–80% resale value</li>
                  <li>Revenue share from all client contracts</li>
                  <li>Appreciation as infrastructure scales</li>
                </Bullets>
              </div>

              <PrimaryBtn onClick={handlePrint} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                ↓ Download as PDF
              </PrimaryBtn>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* ══════ THE OPERATOR ══════ */}
      <Section>
        <Container>
          <Label>The Team</Label>
          <H2>Why <em>Eddie Moger</em></H2>

          <Grid $cols={4} style={{ marginTop: '1.5rem' }}>
            {[
              { icon: '💻', t: 'Full-Stack Dev', d: 'Built an enterprise-grade CRM with cutting-edge AI — solo, from scratch' },
              { icon: '🏢', t: 'Business Owner Since \'05', d: '20 years building business solutions and software across multiple industries' },
              { icon: '🤖', t: 'AI-Native Operator', d: 'Running production AI agents that autonomously handle real business operations' },
              { icon: '⚡', t: 'Day 1 Ready', d: 'Already on the full stack — zero ramp-up, immediate execution' },
            ].map((item, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                <H3 style={{ fontSize: '1rem' }}>{item.t}</H3>
                <Muted style={{ lineHeight: '1.5', display: 'block' }}>{item.d}</Muted>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ══════ CTA ══════ */}
      <Section $alt style={{ textAlign: 'center', padding: '3.5rem 1.25rem' }}>
        <Container>
          <AnalogyIcon>🚀</AnalogyIcon>
          <H2>Let's Build <em>Something Extraordinary</em></H2>
          <Lead style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
            Own the infrastructure. Earn from the intelligence. Scale together.
          </Lead>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }} className="no-print">
            <PrimaryBtn onClick={handlePrint}>↓ Download as PDF</PrimaryBtn>
            <SecondaryBtn href="mailto:eddie@eddiemoger.com?subject=AI%20Infrastructure%20Investment">
              Contact Eddie →
            </SecondaryBtn>
          </div>
          <Footnote style={{ textAlign: 'center', maxWidth: '600px', margin: '2rem auto 0' }}>
            Hardware specs from Apple.com. Revenue projections are forward-looking estimates based on
            comparable market rates and are not guaranteed. All investment involves risk.
          </Footnote>
        </Container>
      </Section>
    </Page>
  );
};

export default PitchDeckPage;
