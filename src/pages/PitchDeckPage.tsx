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

// ─── Layout ──────────────────────────────────────────────────────────────────
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #050b0f;
  color: #f0f8ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section<{ $dark?: boolean; $accent?: boolean }>`
  padding: 6rem 1.5rem;
  background: ${p =>
    p.$accent ? 'linear-gradient(135deg, #071a12 0%, #0a1628 100%)' :
    p.$dark ? '#050b0f' : '#070e14'};
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${p => p.$cols || 3}, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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
  margin-bottom: 1.25rem;
`;

const H1 = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  background: linear-gradient(135deg, #ffffff 0%, #10b981 40%, #06b6d4 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 6s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
`;

const H2 = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;

  span {
    background: linear-gradient(90deg, #10b981, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #e0f0ff;
  margin-bottom: 0.75rem;
`;

const Lead = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #90b0c0;
  line-height: 1.75;
  max-width: 680px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: #7898a8;
  line-height: 1.75;
`;

const SectionLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #10b981;
  margin-bottom: 1rem;
`;

// ─── Cards ───────────────────────────────────────────────────────────────────
const Card = styled(motion.div)`
  background: rgba(16, 185, 129, 0.03);
  border: 1px solid rgba(16, 185, 129, 0.12);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.3s, background 0.3s;

  &:hover {
    border-color: rgba(16, 185, 129, 0.35);
    background: rgba(16, 185, 129, 0.06);
  }
`;

const StatValue = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
`;


const RevenueCard = styled(Card)`
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  .amount {
    font-size: 0.85rem;
    font-weight: 700;
    color: #10b981;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 1.5rem 6rem;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at 20% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
              #050b0f;

  @media (max-width: 768px) {
    padding: 7rem 1rem 4rem;
    min-height: auto;
  }
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
  margin-bottom: 2rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const HeroStats = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`;

const HeroStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    font-size: 1.6rem;
    font-weight: 800;
    color: #ffffff;
  }

  em {
    font-style: normal;
    font-size: 0.8rem;
    color: #507080;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  align-self: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

// ─── Tables ──────────────────────────────────────────────────────────────────
const TableWrap = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.12);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    text-align: left;
    padding: 1rem 1.25rem;
    background: rgba(16, 185, 129, 0.06);
    color: #d0e8f0;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid rgba(16, 185, 129, 0.15);
  }

  td {
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    color: #90a8b8;
  }

  .highlight { color: #10b981; font-weight: 600; }
  .green { color: #34d399; font-weight: 600; }
  .muted { color: #506878; }
`;

// ─── Spec Grid ──────────────────────────────────────────────────────────────




// ─── Timeline ────────────────────────────────────────────────────────────────
const TimelineRow = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  &:last-child { border-bottom: none; }
`;

const TimelineDot = styled.div<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.85rem;
  background: ${p => p.$active ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'rgba(255,255,255,0.05)'};
  color: ${p => p.$active ? '#050b0f' : '#506878'};
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

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
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
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(16, 185, 129, 0.08);
    border-color: rgba(16, 185, 129, 0.7);
  }
`;

const Footnote = styled.p`
  font-size: 0.75rem;
  color: #405060;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

// ─── Comparison ──────────────────────────────────────────────────────────────
const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CompareCard = styled.div<{ $good?: boolean }>`
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${p => p.$good ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.2)'};
  background: ${p => p.$good ? 'rgba(16, 185, 129, 0.04)' : 'rgba(239, 68, 68, 0.03)'};
`;

const CompareTitle = styled.h4<{ $good?: boolean }>`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${p => p.$good ? '#10b981' : '#ef4444'};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CompareRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  font-size: 0.9rem;
  &:last-child { border-bottom: none; }
`;

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

// ─── Component ───────────────────────────────────────────────────────────────
const PitchDeckPage: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <PageWrapper>
      <PrintStyles />

      {/* ── HERO ── */}
      <HeroSection>
        <Container>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <HeroBadge><span /> Investment Opportunity — Private AI Infrastructure</HeroBadge>
            <H1>Own the AI Stack.<br />Sell the Intelligence.</H1>
            <Lead>
              A <strong style={{ color: '#fff' }}>$20K infrastructure investment</strong> that
              eliminates $50K–$200K+/year in cloud AI costs — then generates{' '}
              <strong style={{ color: '#10b981' }}>$150K–$500K+ in annual revenue</strong>{' '}
              selling AI-powered products and services with zero per-query costs.
            </Lead>

            <HeroStats>
              <HeroStat>
                <strong>$20K</strong>
                <em>Total Investment</em>
              </HeroStat>
              <Divider />
              <HeroStat>
                <strong>3–6 mo</strong>
                <em>Break-Even</em>
              </HeroStat>
              <Divider />
              <HeroStat>
                <strong>70–85%</strong>
                <em>Net Margins</em>
              </HeroStat>
              <Divider />
              <HeroStat>
                <strong>$0</strong>
                <em>Per-Query Cost</em>
              </HeroStat>
            </HeroStats>
          </motion.div>
        </Container>
      </HeroSection>

      {/* ── THE OPPORTUNITY ── */}
      <Section $dark>
        <Container>
          <SectionLabel>01 · The Opportunity</SectionLabel>
          <H2>Everyone Can Code.<br /><span>Not Everyone Has the Compute.</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            AI is the new electricity. But the companies selling AI charge per kilowatt-hour
            forever. We're buying the power plant.
          </Lead>

          <Grid $cols={3}>
            {[
              {
                icon: '🧠',
                title: 'Frontier AI, Locally',
                body: 'Run 1-trillion-parameter models at full quality on a two-machine cluster. Same capability as $200K+ GPU servers — at 1/10th the cost. No API bills. No rate limits. No data leaving your control.'
              },
              {
                icon: '🔒',
                title: 'Privacy Is the Product',
                body: 'Healthcare, legal, finance — trillion-dollar industries that need AI but can\'t send data to the cloud. HIPAA, GDPR, SOC2 compliance is built-in when inference never leaves the building.'
              },
              {
                icon: '📈',
                title: 'Margins That Compound',
                body: 'Cloud AI costs scale linearly — more users, more cost. Local AI costs are fixed. After the hardware is paid, each additional customer is nearly pure profit. The unit economics only get better.'
              },
            ].map((item, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <H3>{item.title}</H3>
                <Body>{item.body}</Body>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── BUSINESS MODEL ── */}
      <Section className="page-break" $accent>
        <Container>
          <SectionLabel>02 · Business Model</SectionLabel>
          <H2>Four Revenue <span>Streams</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            High-margin, high-demand, all leveraging the same infrastructure investment.
            AI-powered products lead because they scale the fastest.
          </Lead>

          <Grid $cols={2} style={{ marginBottom: '2rem' }}>
            {[
              {
                title: 'AI-Powered Apps & SaaS Products',
                amount: '$10K–$40K/mo · 80–90% margin',
                body: 'Build and sell software products with AI baked in — document processors, research assistants, content engines, industry-specific tools. Your compute is unlimited, so cost-per-user approaches zero. Everyone can build apps. Not everyone has frontier AI compute with no per-query costs. That\'s the moat.'
              },
              {
                title: 'Custom AI Agent Development',
                amount: '$5K–$25K per client · 75–85% margin',
                body: 'Build industry-specific AI agents — legal contract reviewers, real-estate lead qualifiers, medical research summarizers, marketing automation. One-time build fee + optional monthly management. Demo live on the cluster, iterate instantly, deliver in days not months.'
              },
              {
                title: 'Private AI-as-a-Service',
                amount: '$1K–$5K/mo per client · 70–80% margin',
                body: 'Secure, managed AI workspaces for clients who need frontier-level intelligence but can\'t send data to the cloud. OpenAI-compatible API endpoint, hosted locally. For companies burning $10K/month on cloud tokens, cutting that to $2K is an easy sale.'
              },
              {
                title: 'Templates, Courses & Consulting',
                amount: '$5K–$20K/mo · 85–95% margin',
                body: 'Productized knowledge — pre-built AI agent templates ($49–$499), online courses on local AI deployment ($497–$997), enterprise consulting ($2K+/day). The cluster is the demo that sells itself. Content marketing drives organic leads.'
              },
            ].map((r, i) => (
              <RevenueCard key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                <div className="amount">{r.amount}</div>
                <h4>{r.title}</h4>
                <Body>{r.body}</Body>
              </RevenueCard>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── THE ECONOMICS ── */}
      <Section $dark>
        <Container>
          <SectionLabel>03 · The Economics</SectionLabel>
          <H2>Cloud AI Gets Expensive as You Scale.<br /><span>Local AI Gets Cheaper.</span></H2>

          <CompareGrid style={{ marginBottom: '2.5rem', marginTop: '3rem' }}>
            <CompareCard>
              <CompareTitle>☁️ Cloud AI (The Alternative)</CompareTitle>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>API costs (heavy agentic use)</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>$4K–$20K/mo</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Scales linearly with usage</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>↑ More users = more cost</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Data leaves your control</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>Privacy risk</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Rate limits & outages</span>
                <span style={{ color: '#ef4444', fontWeight: 600 }}>Dependent on provider</span>
              </CompareRow>
              <CompareRow style={{ borderTop: '1px solid rgba(239,68,68,0.2)', marginTop: '0.5rem', paddingTop: '1rem' }}>
                <span style={{ color: '#d0e0f0', fontWeight: 700 }}>Year 1 Total</span>
                <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.2rem' }}>$50K–$240K+</span>
              </CompareRow>
            </CompareCard>

            <CompareCard $good>
              <CompareTitle $good>⚡ Local AI Cluster (This Proposal)</CompareTitle>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Hardware (one-time)</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>~$20K</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Electricity (~150W avg/machine)</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>~$300–$600/yr</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Unlimited queries, 24/7</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>$0 per query</span>
              </CompareRow>
              <CompareRow>
                <span style={{ color: '#90a8b8' }}>Full data sovereignty</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>HIPAA/GDPR ready</span>
              </CompareRow>
              <CompareRow style={{ borderTop: '1px solid rgba(16,185,129,0.2)', marginTop: '0.5rem', paddingTop: '1rem' }}>
                <span style={{ color: '#d0e0f0', fontWeight: 700 }}>Year 1 Total</span>
                <span style={{ color: '#10b981', fontWeight: 800, fontSize: '1.2rem' }}>~$20.5K</span>
              </CompareRow>
            </CompareCard>
          </CompareGrid>

          <Card style={{ textAlign: 'center' }}>
            <StatValue style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Save $30K–$220K in Year 1 Alone</StatValue>
            <Body style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              Hardware retains 60–80% resale value over 2–3 years. Apple Silicon
              depreciates slower than any other compute platform.
            </Body>
          </Card>
        </Container>
      </Section>

      {/* ── ROI ── */}
      <Section className="page-break" $accent>
        <Container>
          <SectionLabel>04 · Return on Investment</SectionLabel>
          <H2>Real Numbers, <span>No Fluff</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Conservative projections based on comparable market rates.
            The hardware is the biggest cost — once acquired, margins approach 100%.
          </Lead>

          <H3 style={{ marginBottom: '1.5rem' }}>Revenue Scenarios</H3>
          <TableWrap style={{ marginBottom: '2.5rem' }}>
            <Table>
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Monthly Revenue</th>
                  <th>Monthly Profit</th>
                  <th>Break-even</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Conservative</strong> — 2 Private AI clients + 1 small SaaS app</td>
                  <td>$6,000</td>
                  <td className="green">$5,800</td>
                  <td className="highlight">~3–4 months</td>
                </tr>
                <tr>
                  <td><strong>Moderate</strong> — 3 clients + app revenue + consulting (20 hrs/mo)</td>
                  <td>$15,000</td>
                  <td className="green">$14,800</td>
                  <td className="highlight">~6 weeks</td>
                </tr>
                <tr>
                  <td><strong>Aggressive</strong> — 5+ clients + multiple apps + courses</td>
                  <td>$40,000+</td>
                  <td className="green">$39,800+</td>
                  <td className="highlight">&lt; 1 month</td>
                </tr>
              </tbody>
            </Table>
          </TableWrap>

          <Footnote>
            Revenue scenarios are forward-looking estimates based on comparable market rates
            for AI consulting, SaaS, and managed AI services. Actual results depend on sales execution.
            Monthly operating cost estimated at ~$150–$200 (electricity + internet).
          </Footnote>
        </Container>
      </Section>

      {/* ── THE STACK (brief for investors) ── */}
      <Section $dark>
        <Container>
          <SectionLabel>05 · The Technology</SectionLabel>
          <H2>Production-Ready. <span>Open Source. Battle-Tested.</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Every component is proven. Thousands of developers run this stack today.
            We're not inventing technology — we're building a business on top of it.
          </Lead>

          <Grid $cols={4}>
            {[
              { icon: '🖥️', title: 'Apple Silicon Cluster', body: '2× Mac Studio with 1TB unified memory, connected via Thunderbolt 5 RDMA' },
              { icon: '🧠', title: 'Frontier AI Models', body: 'Kimi K2.5, DeepSeek, Qwen — run the best open models, switch anytime, no lock-in' },
              { icon: '⚡', title: 'Exo Runtime', body: 'Open-source clustering with automatic device discovery & tensor parallelism' },
              { icon: '🤖', title: 'OpenClaw Agents', body: 'Agentic AI framework — memory, tools, browser control, messaging integrations' },
            ].map((item, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <H3 style={{ fontSize: '1.1rem' }}>{item.title}</H3>
                <Body style={{ fontSize: '0.9rem' }}>{item.body}</Body>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── FUTURE-PROOFING ── */}
      <Section $accent>
        <Container>
          <SectionLabel>06 · Why Now</SectionLabel>
          <H2>The Window Is <span>Wide Open</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Open-weight models improve faster than cloud pricing drops. Privacy regulation 
            is accelerating. First movers with infrastructure capture the market.
          </Lead>

          <Grid $cols={3}>
            {[
              { icon: '🌊', title: 'Model Improvement Wave', body: 'In 2023, GPT-4 was frontier. In 2025, open-source Kimi K2 matches it. By 2027, local models will exceed today\'s best. The hardware runs every future model at zero additional cost.' },
              { icon: '🔐', title: 'Privacy Regulation Trend', body: 'HIPAA, GDPR, EU AI Act, proposed US privacy laws — all moving one direction: restrict data sent to third-party AI. Local AI gets more valuable every year as regulation tightens.' },
              { icon: '🤖', title: 'Agentic AI Scale', body: 'AI is shifting from single queries to 24/7 autonomous agents. Agents use 10–100× more tokens than chat. Local compute becomes proportionally more valuable at agentic workloads.' },
              { icon: '⚙️', title: 'Fine-Tuning Moat', body: 'Each client-specific model becomes proprietary IP. Models trained on real industry data can\'t be replicated without the same data. The moat deepens with every client engagement.' },
              { icon: '🚀', title: 'Apple Silicon Roadmap', body: 'M4 Ultra → M5 → M6. Each generation: better perf/watt, larger memory. Your infrastructure expertise and client relationships transfer forward. Hardware resale stays strong.' },
              { icon: '💰', title: 'Market Timing', body: 'Thousands of developers are already building on this stack. The community is massive and growing. Early infrastructure providers are capturing recurring revenue before the market matures.' },
            ].map((item, i) => (
              <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <H3>{item.title}</H3>
                <Body>{item.body}</Body>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── ROADMAP ── */}
      <Section $dark className="page-break">
        <Container>
          <SectionLabel>07 · Execution Plan</SectionLabel>
          <H2>From Investment to <span>Revenue in 90 Days</span></H2>

          <Grid $cols={2}>
            <div>
              {[
                { month: 'Month 1', title: 'Infrastructure & MVP', items: ['Acquire and configure hardware cluster', 'Install AI models, verify full inference capability', 'Build first AI-powered app MVP', 'Create demo materials and sales assets', 'Begin outreach to first 50 prospects'] },
                { month: 'Month 2', title: 'First Revenue', items: ['Close first 2–3 paying clients', 'Launch AI app beta to early adopters', 'Deliver first custom agent engagement', 'Document performance metrics for case studies', 'Refine pricing based on market feedback'] },
                { month: 'Month 3', title: 'Break-Even', items: ['Scale to 4–6 active recurring clients', 'App generating organic revenue', 'First Private AI-as-a-Service contracts', 'Content marketing & demos driving inbound leads', 'Investment fully recovered'] },
                { month: 'Month 6+', title: 'Scale & Compound', items: ['Multiple revenue streams active', 'Word-of-mouth and referral pipeline', 'Launch courses and templates', 'Evaluate cluster expansion if demand warrants', '$50K–$100K+/mo run-rate'] },
              ].map((phase, i) => (
                <TimelineRow key={i}>
                  <TimelineDot $active={i < 3}>{i + 1}</TimelineDot>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{phase.month}</div>
                    <H3 style={{ marginBottom: '0.5rem' }}>{phase.title}</H3>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                      {phase.items.map((item, j) => (
                        <li key={j} style={{ color: '#7898a8', fontSize: '0.9rem', lineHeight: '1.8' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </TimelineRow>
              ))}
            </div>

            <div>
              <Card style={{ position: 'sticky', top: '100px' }}>
                <Tag>The Ask</Tag>
                <H2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                  <span>~$20,000</span>
                </H2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  {[
                    { label: '2× Mac Studio M3 Ultra 512GB', amount: '~$19,000–20,000' },
                    { label: 'Network / infrastructure setup', amount: '~$300–$500' },
                    { label: 'First 3 months operating costs', amount: '~$500–$600' },
                  ].map((line, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <Body style={{ margin: 0 }}>{line.label}</Body>
                      <span style={{ color: '#6ee7b7', fontWeight: 600, fontSize: '0.95rem', whiteSpace: 'nowrap', paddingLeft: '1rem' }}>{line.amount}</span>
                    </div>
                  ))}
                </div>
                <Body style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  One-time capital investment in durable hardware. Apple Silicon retains 60–80%
                  resale value over 2–3 years. This isn't consumption spend — it's infrastructure
                  ownership with an asymmetric upside.
                </Body>
                <PrimaryBtn onClick={handlePrint} style={{ width: '100%', justifyContent: 'center' }}>
                  ↓ Download Full Proposal as PDF
                </PrimaryBtn>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── ABOUT ── */}
      <Section $accent>
        <Container>
          <SectionLabel>08 · The Operator</SectionLabel>
          <H2>Why <span>Eddie Moger</span></H2>

          <Grid $cols={2}>
            <div>
              <Lead style={{ marginBottom: '2rem' }}>
                This isn't a pitch from a researcher or hobbyist. Eddie is a full-stack
                developer and business operator who's already building production AI systems.
              </Lead>
              <Body style={{ marginBottom: '1.5rem' }}>
                He built a complete CRM system (edi-crm.com) from scratch, runs production
                agentic AI for business operations, and has the technical skills to ship
                products without hiring. That means faster time to revenue and lower burn.
              </Body>
              <Body>
                The combination of hands-on development skills, active business operation,
                and early adoption of the local AI stack means Eddie can execute on this
                plan immediately — no ramp-up period, no team to hire, no technology to learn.
              </Body>
            </div>
            <Grid $cols={2}>
              {[
                { icon: '💻', title: 'Full-Stack Developer', body: 'Ships production apps solo. React, Node, TypeScript, Next.js, databases, deployment.' },
                { icon: '🤖', title: 'AI-Native Operator', body: 'Running production agentic AI (OpenClaw) for business operations since 2025.' },
                { icon: '🏢', title: 'Business Operator', body: 'Active field service business. Real clients, real revenue, real industry connections.' },
                { icon: '⚡', title: 'Zero Ramp-Up', body: 'Already working with the full stack. Can execute from Day 1 — no learning curve.' },
              ].map((item, i) => (
                <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <H3 style={{ fontSize: '1.1rem' }}>{item.title}</H3>
                  <Body style={{ fontSize: '0.9rem' }}>{item.body}</Body>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section $dark style={{ textAlign: 'center' }}>
        <Container>
          <Tag>Ready to move</Tag>
          <H2 style={{ margin: '0 auto 1.5rem' }}>
            Let's Build <span>Something Extraordinary</span>
          </H2>
          <Lead style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            The local AI wave is here. This investment positions us at the infrastructure
            layer — where the margins are highest and the moat is deepest.
          </Lead>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} className="no-print">
            <PrimaryBtn onClick={handlePrint}>↓ Download as PDF</PrimaryBtn>
            <SecondaryBtn href="mailto:eddie@eddiemoger.com?subject=AI%20Infrastructure%20Investment%20Inquiry">
              Contact Eddie →
            </SecondaryBtn>
          </div>
          <Footnote style={{ textAlign: 'center', maxWidth: '700px', margin: '3rem auto 0' }}>
            Technical specifications from Apple.com (Mac Studio specs), GitHub/MoonshotAI Kimi-K2 README,
            and GitHub/exo-explore/exo. Hardware pricing estimated — verify at apple.com before purchase.
            Revenue projections are forward-looking estimates based on comparable market rates and are not guaranteed.
            API pricing sourced from Anthropic and OpenAI as of February 2026.
          </Footnote>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default PitchDeckPage;
