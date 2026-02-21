import React, { useRef } from 'react';
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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

// ─── Layout ──────────────────────────────────────────────────────────────────
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #060614;
  color: #f0f0ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
`;

const Section = styled.section<{ $dark?: boolean; $accent?: boolean }>`
  padding: 6rem 1.5rem;
  background: ${p =>
    p.$accent ? 'linear-gradient(135deg, #0d0b2e 0%, #1a0f3c 100%)' :
    p.$dark ? '#060614' : '#0a0a24'};
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
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  margin-bottom: 1.25rem;
`;

const H1 = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  background: linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #667eea 100%);
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
    background: linear-gradient(90deg, #a78bfa, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #e0e0ff;
  margin-bottom: 0.75rem;
`;

const Lead = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #b0b0d0;
  line-height: 1.75;
  max-width: 680px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: #9090b8;
  line-height: 1.75;
`;

const SectionLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b6b99;
  margin-bottom: 1rem;
`;

// ─── Cards ───────────────────────────────────────────────────────────────────
const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.3s, background 0.3s;

  &:hover {
    border-color: rgba(167, 139, 250, 0.4);
    background: rgba(167, 139, 250, 0.06);
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: 2.5rem 1.5rem;
`;

const StatValue = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a78bfa, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #7070a0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 1.5rem 6rem;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
              #060614;

  @media (max-width: 768px) {
    padding: 7rem 1rem 4rem;
    min-height: auto;
  }
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  color: #c4b5fd;
  margin-bottom: 2rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #a78bfa;
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
    color: #6060a0;
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

// ─── Hardware Visual ──────────────────────────────────────────────────────────
const HardwareViz = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: ${float} 4s ease-in-out infinite;
`;

const MacStudioBox = styled.div`
  width: 220px;
  height: 68px;
  background: linear-gradient(145deg, #3a3a4a, #252535);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #c0c0e0;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(102,126,234,0.15);
  position: relative;
  letter-spacing: 0.05em;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 6px;
    background: linear-gradient(145deg, #2a2a3a, #1a1a2a);
    border-radius: 0 0 4px 4px;
    border: 1px solid rgba(255,255,255,0.05);
    border-top: none;
  }
`;

const BrainGlow = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(circle, #a78bfa, #667eea);
  margin-right: 10px;
  box-shadow: 0 0 12px #a78bfa;
  animation: ${pulse} 2s ease-in-out infinite;
  flex-shrink: 0;
`;

const ConnectorLine = styled.div`
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, rgba(167,139,250,0.6), rgba(102,126,234,0.6));
`;

const MemoryBar = styled.div`
  width: 220px;
  height: 32px;
  background: linear-gradient(90deg, rgba(167,139,250,0.3), rgba(102,126,234,0.3));
  border: 1px solid rgba(167,139,250,0.4);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #c4b5fd;
  letter-spacing: 0.08em;
`;

const VizLabel = styled.div`
  font-size: 0.7rem;
  color: #5050a0;
  text-align: center;
  margin-top: -0.5rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

// ─── Problem Items ────────────────────────────────────────────────────────────
const ProblemItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);

  &:last-child { border-bottom: none; }
`;

const ProblemIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const SolutionIcon = styled(ProblemIcon)`
  background: rgba(167, 139, 250, 0.1);
  border-color: rgba(167, 139, 250, 0.2);
`;

// ─── Spec Table ───────────────────────────────────────────────────────────────
const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid rgba(167,139,250,0.2);
  border-radius: 12px;
  overflow: hidden;
`;

const SpecRow = styled.div`
  display: contents;
`;

const SpecKey = styled.div`
  padding: 0.85rem 1.25rem;
  background: rgba(167,139,250,0.05);
  border-bottom: 1px solid rgba(167,139,250,0.1);
  font-size: 0.85rem;
  color: #8080c0;
  font-weight: 500;
`;

const SpecVal = styled.div`
  padding: 0.85rem 1.25rem;
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid rgba(167,139,250,0.1);
  border-left: 1px solid rgba(167,139,250,0.1);
  font-size: 0.9rem;
  color: #e0e0ff;
  font-weight: 600;
`;

// ─── ROI Table ────────────────────────────────────────────────────────────────
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  th {
    text-align: left;
    padding: 0.9rem 1.25rem;
    background: rgba(167,139,250,0.1);
    color: #c4b5fd;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(167,139,250,0.2);
  }

  td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    color: #d0d0f0;
    vertical-align: top;
  }

  tr:last-child td { border-bottom: none; }

  tr:hover td { background: rgba(167,139,250,0.03); }

  .highlight { color: #a78bfa; font-weight: 700; }
  .green { color: #4ade80; font-weight: 700; }
  .muted { color: #6060a0; font-size: 0.85rem; }
`;

const TableWrap = styled.div`
  border: 1px solid rgba(167,139,250,0.2);
  border-radius: 12px;
  overflow: hidden;
`;

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TimelineRow = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  &:last-child { margin-bottom: 0; }
`;

const TimelineDot = styled.div<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${p => p.$active
    ? 'linear-gradient(135deg, #a78bfa, #667eea)'
    : 'rgba(167,139,250,0.1)'};
  border: 2px solid ${p => p.$active ? '#a78bfa' : 'rgba(167,139,250,0.2)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${p => p.$active ? 'white' : '#8080c0'};
  flex-shrink: 0;
  margin-top: 0.2rem;
`;

// ─── Revenue Stream ───────────────────────────────────────────────────────────
const RevenueCard = styled(Card)`
  border-left: 3px solid #a78bfa;
  border-radius: 0 12px 12px 0;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: #e0e0ff;
    margin-bottom: 0.4rem;
  }

  .amount {
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(90deg, #a78bfa, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// ─── CTA ──────────────────────────────────────────────────────────────────────
const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #667eea, #a78bfa);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(167,139,250,0.4);
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: transparent;
  border: 1px solid rgba(167,139,250,0.4);
  border-radius: 10px;
  color: #c4b5fd;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(167,139,250,0.1);
    border-color: rgba(167,139,250,0.7);
  }
`;

const Footnote = styled.p`
  font-size: 0.75rem;
  color: #444468;
  margin-top: 2rem;
  line-height: 1.6;
  border-top: 1px solid rgba(255,255,255,0.04);
  padding-top: 1.5rem;
`;

// ─── Component ───────────────────────────────────────────────────────────────
const PitchDeckPage: React.FC = () => {
  const pitchRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <PageWrapper ref={pitchRef}>
      <PrintStyles />

      {/* ── HERO ── */}
      <HeroSection>
        <Container>
          <HeroBadge>
            <span />
            Investment Proposal · February 2026
          </HeroBadge>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <H1>Own Your AI.<br />Own Your Future.</H1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Lead>
              A proposal to acquire two Apple Mac Studio M3 Ultra systems (512 GB unified memory each)
              to run a 1-trillion-parameter AI model locally — building a private, sovereign AI
              infrastructure positioned for enterprise, healthcare, and agentic AI services.
            </Lead>
          </motion.div>

          <HeroStats>
            <HeroStat>
              <strong>$0</strong>
              <em>Per Token (local)</em>
            </HeroStat>
            <Divider />
            <HeroStat>
              <strong>1T</strong>
              <em>Param Model</em>
            </HeroStat>
            <Divider />
            <HeroStat>
              <strong>1 TB</strong>
              <em>Unified Memory</em>
            </HeroStat>
            <Divider />
            <HeroStat>
              <strong>128K</strong>
              <em>Context Window</em>
            </HeroStat>
          </HeroStats>

          <div className="no-print" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <PrimaryBtn onClick={handlePrint}>
              ↓ Download as PDF
            </PrimaryBtn>
            <SecondaryBtn href="mailto:eddie@eddiemoger.com?subject=AI Venture Inquiry">
              Contact Eddie →
            </SecondaryBtn>
          </div>
        </Container>
      </HeroSection>

      {/* ── THE PROBLEM ── */}
      <Section $dark>
        <Container>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <SectionLabel>01 · The Problem</SectionLabel>
            <H2>Cloud AI Is a <span>Leaky Faucet</span></H2>
            <Lead style={{ marginBottom: '3rem' }}>
              Every token you process through cloud APIs is money out the door, data in someone
              else's hands, and a dependency you cannot control.
            </Lead>
          </motion.div>

          <Grid $cols={2}>
            {[
              { icon: '💸', title: 'Cost at Scale', body: 'Claude Opus 4: $5/input MTok · $25/output MTok. A business processing 10M tokens/day pays ~$5,400/month — $64,800/year — forever. The meter never stops.' },
              { icon: '🔓', title: 'Data Privacy Risk', body: 'Healthcare notes, legal documents, proprietary business data — all transmitted to third-party servers. Every HIPAA and SOC2 audit asks "where is your data processed?"' },
              { icon: '⛔', title: 'Rate Limits & Outages', body: 'Cloud APIs cap throughput. Your agents, pipelines, and customers hit walls at peak hours. You\'re building on infrastructure you don\'t control.' },
              { icon: '🔗', title: 'Vendor Lock-in', body: 'Provider pricing changes, model deprecations, policy updates — your business is subject to someone else\'s roadmap. GPT-4 is gone. What\'s next?' },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}>
                <ProblemItem>
                  <ProblemIcon>{item.icon}</ProblemIcon>
                  <div>
                    <H3>{item.title}</H3>
                    <Body>{item.body}</Body>
                  </div>
                </ProblemItem>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* ── THE SOLUTION ── */}
      <Section $accent>
        <Container>
          <SectionLabel>02 · The Solution</SectionLabel>
          <H2>Sovereign <span>Local AI</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Two Mac Studio M3 Ultras with 512 GB unified memory each, running Kimi K2 —
            a 1-trillion-parameter open-weight model — completely on-premises.
            One-time capital investment. Zero per-token cost forever.
          </Lead>

          <Grid $cols={2}>
            <div>
              {[
                { icon: '✅', title: '$0/token after hardware', body: 'Unlimited inference. Build agents, pipelines, products — no meter running. Hardware amortized over 5 years = pennies per thousand tokens.' },
                { icon: '✅', title: 'Total data sovereignty', body: 'Data never leaves your machines. HIPAA-friendly, SOC2-ready, enterprise contract-eligible. Sell to sectors that cannot use cloud AI.' },
                { icon: '✅', title: 'No rate limits', body: 'Run 24/7 at full throughput. Multiple concurrent users, parallel agent tasks — zero throttling.' },
                { icon: '✅', title: 'Fine-tune on your data', body: 'Train specialized models on proprietary datasets. No cloud provider owns your fine-tuned weights.' },
              ].map((item, i) => (
                <ProblemItem key={i}>
                  <SolutionIcon>{item.icon}</SolutionIcon>
                  <div>
                    <H3>{item.title}</H3>
                    <Body>{item.body}</Body>
                  </div>
                </ProblemItem>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              <HardwareViz>
                <div style={{ fontSize: '0.7rem', color: '#5050a0', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Mac Studio #1</div>
                <MacStudioBox>
                  <BrainGlow />
                  M3 Ultra · 512 GB
                </MacStudioBox>
                <VizLabel>819 GB/s Memory Bandwidth</VizLabel>
                <ConnectorLine />
                <MemoryBar>1 TB UNIFIED MEMORY</MemoryBar>
                <ConnectorLine />
                <MacStudioBox>
                  <BrainGlow />
                  M3 Ultra · 512 GB
                </MacStudioBox>
                <VizLabel>Thunderbolt 5 · 120 Gb/s</VizLabel>
                <div style={{ fontSize: '0.7rem', color: '#5050a0', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Mac Studio #2</div>
              </HardwareViz>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── THE HARDWARE ── */}
      <Section className="page-break" $dark>
        <Container>
          <SectionLabel>03 · The Hardware</SectionLabel>
          <H2>Apple Mac Studio <span>M3 Ultra</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            The only consumer-grade machine on the planet with 512 GB of unified memory.
            Not VRAM. Not RAM + VRAM. One unified pool — CPU, GPU, and Neural Engine
            share the same memory space at 819 GB/s.
          </Lead>

          <Grid $cols={2}>
            <div>
              <SpecGrid>
                <SpecRow><SpecKey>Chip</SpecKey><SpecVal>M3 Ultra</SpecVal></SpecRow>
                <SpecRow><SpecKey>CPU</SpecKey><SpecVal>32-core (20P + 8E)</SpecVal></SpecRow>
                <SpecRow><SpecKey>GPU</SpecKey><SpecVal>80-core</SpecVal></SpecRow>
                <SpecRow><SpecKey>Neural Engine</SpecKey><SpecVal>32-core</SpecVal></SpecRow>
                <SpecRow><SpecKey>Unified Memory</SpecKey><SpecVal>512 GB</SpecVal></SpecRow>
                <SpecRow><SpecKey>Memory Bandwidth</SpecKey><SpecVal>819 GB/s</SpecVal></SpecRow>
                <SpecRow><SpecKey>Max Storage</SpecKey><SpecVal>16 TB SSD</SpecVal></SpecRow>
                <SpecRow><SpecKey>Connectivity</SpecKey><SpecVal>Thunderbolt 5 (120 Gb/s)</SpecVal></SpecRow>
                <SpecRow><SpecKey>Power (max)</SpecKey><SpecVal>480 W</SpecVal></SpecRow>
                <SpecRow><SpecKey>Units (proposal)</SpecKey><SpecVal>× 2 = 1 TB total</SpecVal></SpecRow>
              </SpecGrid>
              <Footnote>
                † Specifications from Apple Mac Studio Technical Specifications page (apple.com/mac-studio/specs/), March 2025.
                Pricing subject to change — verify current pricing at apple.com.
              </Footnote>
            </div>

            <div>
              <Card>
                <Tag>Why Apple Silicon?</Tag>
                <H3>No PCIe Bottleneck</H3>
                <Body>
                  Traditional AI servers separate GPU VRAM from system RAM. Swapping weights
                  over PCIe caps out at ~64 GB/s. Apple's unified memory eliminates this
                  entirely — all 512 GB is equally fast for the neural accelerators.
                </Body>
              </Card>
              <Card style={{ marginTop: '1.5rem' }}>
                <Tag>The Math</Tag>
                <H3>1T Params = ~1 TB at fp8</H3>
                <Body>
                  A 1-trillion parameter model in fp8 precision requires approximately 1 TB
                  of memory to hold all weights. Two 512 GB Mac Studios linked via Thunderbolt 5
                  provide exactly that — the entire Kimi K2 model lives in RAM, no disk
                  swapping, full inference speed.
                </Body>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── THE MODEL ── */}
      <Section $accent>
        <Container>
          <SectionLabel>04 · The Model</SectionLabel>
          <H2>Kimi K2: <span>1 Trillion Parameters</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            An open-weight Mixture-of-Experts model from Moonshot AI. State-of-the-art
            on coding, reasoning, and agentic tasks. Open source. Free to run. Free to fine-tune.
          </Lead>

          <Grid $cols={3} style={{ marginBottom: '3rem' }}>
            {[
              { val: '1T', label: 'Total Parameters' },
              { val: '32B', label: 'Activated per Token' },
              { val: '128K', label: 'Context Window' },
              { val: '15.5T', label: 'Training Tokens' },
              { val: '384', label: 'Experts in MoE' },
              { val: 'MIT', label: 'Open License' },
            ].map((s, i) => (
              <StatCard key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                <StatValue>{s.val}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatCard>
            ))}
          </Grid>

          <Grid $cols={2}>
            <div>
              <H3>How MoE Works in Your Favor</H3>
              <Body>
                Mixture-of-Experts means only 32B of the 1T parameters activate per token.
                The model routes each token through 8 of 384 specialized experts — so you get
                1T-scale intelligence with compute closer to a 32B dense model. This is why
                it fits in 1 TB of memory and still runs fast.
              </Body>
              <br />
              <Body>
                In practical terms: Kimi K2 Instruct matches or exceeds Claude Sonnet 4
                on agentic coding benchmarks, solves 65.8% of SWE-bench Verified tests
                (real-world software engineering problems), and scores 97.4% on MATH-500.
                These are frontier numbers from an open model you can run yourself.
              </Body>
            </div>
            <div>
              <TableWrap>
                <Table>
                  <thead>
                    <tr>
                      <th>Benchmark</th>
                      <th>Kimi K2</th>
                      <th>Claude Opus 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>SWE-bench Verified (agentic)</td><td className="highlight">65.8%</td><td>72.5%</td></tr>
                    <tr><td>LiveCodeBench v6</td><td className="highlight">53.7%</td><td>47.4%</td></tr>
                    <tr><td>MATH-500</td><td className="highlight">97.4%</td><td>94.4%</td></tr>
                    <tr><td>AIME 2024 (math olympiad)</td><td className="highlight">69.6%</td><td>48.2%</td></tr>
                    <tr><td>GPQA-Diamond (PhD science)</td><td className="highlight">75.1%</td><td>74.9%</td></tr>
                    <tr><td>MMLU (knowledge)</td><td className="highlight">89.5%</td><td>92.9%</td></tr>
                  </tbody>
                </Table>
              </TableWrap>
              <Footnote>Source: Kimi K2 GitHub README (github.com/MoonshotAI/Kimi-K2), July 2025. Claude Opus 4 results from Anthropic eval data.</Footnote>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── BUSINESS MODEL ── */}
      <Section className="page-break" $dark>
        <Container>
          <SectionLabel>05 · Business Model</SectionLabel>
          <H2>Five Revenue <span>Streams</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Private AI infrastructure creates multiple paths to revenue. Not all are needed —
            even one is enough to make this work. Each is a moat that gets deeper over time.
          </Lead>

          <Grid $cols={2} style={{ marginBottom: '2rem' }}>
            {[
              {
                title: 'Healthcare & Compliance AI',
                amount: '$2,000–$5,000/mo per client',
                body: 'Audiology practices, medical offices, legal firms, and financial services cannot use cloud AI for protected data. Offer HIPAA-compliant, on-prem-hosted AI processing. Eddie\'s audiology background is a direct door-opener.'
              },
              {
                title: 'Private Inference API',
                amount: '$500–$2,000/mo per client',
                body: 'OpenAI-compatible API endpoint, hosted locally. Offer at 1/5th cloud API rates. For companies burning $10K/month on tokens, saving $8K is an easy sell. Zero data retention policy is the differentiator.'
              },
              {
                title: 'AI Agent Development',
                amount: '$150–$300/hour consulting',
                body: 'Build custom AI agents and automation pipelines running on local infrastructure. Includes: customer service bots, document processing, equipment diagnosis, report generation. Project-based or retainer.'
              },
              {
                title: 'Fine-tuning & Custom Models',
                amount: '$10,000–$50,000 per engagement',
                body: 'Fine-tune Kimi K2 (or other open-weight models) on client-specific data. Deliver private model weights the client owns. Insurance adjusters, law firms, and healthcare systems all have unique vocabulary and workflows.'
              },
              {
                title: 'Audiology AI Tools',
                amount: '$200–$500/mo per clinic (SaaS)',
                body: 'Arlo+Eddie already have 500 GB of equipment manuals. Build AI diagnostic tools: calibration report analysis, equipment fault prediction, audiogram interpretation assistance. License to other clinics as SaaS.'
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

      {/* ── ROI ── */}
      <Section $accent>
        <Container>
          <SectionLabel>06 · Return on Investment</SectionLabel>
          <H2>Real Numbers, <span>No Fluff</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Conservative, moderate, and aggressive scenarios. The hardware is
            the biggest cost — once acquired, margin is near 100%.
          </Lead>

          <TableWrap style={{ marginBottom: '2.5rem' }}>
            <Table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>One-Time Cost</th>
                  <th>Monthly Cost</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mac Studio M3 Ultra 512GB × 2</td>
                  <td className="highlight">~$11,000–$12,000</td>
                  <td className="muted">—</td>
                  <td className="muted">Verify current price at apple.com</td>
                </tr>
                <tr>
                  <td>Electricity (both units, 24/7)</td>
                  <td className="muted">—</td>
                  <td>~$70–$90</td>
                  <td className="muted">~480W max each, ~40% avg load; $0.25/kWh</td>
                </tr>
                <tr>
                  <td>Internet / hosting infrastructure</td>
                  <td className="muted">—</td>
                  <td>~$50–$100</td>
                  <td className="muted">Business fiber, static IP, basic VPN</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>Total Running Cost</td>
                  <td className="highlight">~$11,000–$12,000</td>
                  <td className="green">~$120–$190/mo</td>
                  <td className="muted">After hardware paid off</td>
                </tr>
              </tbody>
            </Table>
          </TableWrap>

          <H3 style={{ marginBottom: '1.5rem' }}>Revenue Scenarios</H3>
          <TableWrap style={{ marginBottom: '2rem' }}>
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
                  <td><strong>Conservative</strong> — 2 compliance AI clients @ $2K each</td>
                  <td>$4,000</td>
                  <td className="green">$3,810</td>
                  <td className="highlight">~3 months</td>
                </tr>
                <tr>
                  <td><strong>Moderate</strong> — 1 compliance client + consulting (20 hrs/mo)</td>
                  <td>$7,000</td>
                  <td className="green">$6,810</td>
                  <td className="highlight">~2 months</td>
                </tr>
                <tr>
                  <td><strong>Aggressive</strong> — 5 clients + audiology SaaS (10 clinics)</td>
                  <td>$20,000+</td>
                  <td className="green">$19,800+</td>
                  <td className="highlight">&lt; 1 month</td>
                </tr>
                <tr>
                  <td><strong>API Savings Only</strong> — replacing $5K/mo cloud API spend</td>
                  <td className="muted">Internal savings</td>
                  <td className="green">$4,810/mo saved</td>
                  <td className="highlight">~2–3 months</td>
                </tr>
              </tbody>
            </Table>
          </TableWrap>

          <Card>
            <H3>💡 The Core Insight</H3>
            <Body>
              Any serious AI business currently spending $5,000/month or more on cloud API costs
              breaks even in under 3 months. After that, every month is near-pure profit
              because the hardware is already paid. The ROI isn't just positive — it's
              compounding, because the same infrastructure gets better as open-weight models
              improve, and each new client costs nothing additional in compute.
            </Body>
          </Card>

          <Footnote>
            † Hardware cost estimated at ~$5,499–$5,999 per Mac Studio M3 Ultra 512GB based on Apple's M3 Ultra pricing tier.
            Verify exact current pricing at apple.com before committing. Electricity calculation: 480W × 0.4 (avg load) × 2 units
            × 730 hrs/month × $0.25/kWh ≈ $70/month. Revenue scenarios are illustrative; actual results depend on sales execution.
            API pricing sourced from Anthropic (claude.com) and OpenAI (openai.com/api/pricing) as of February 2026.
          </Footnote>
        </Container>
      </Section>

      {/* ── COMPETITIVE POSITIONING ── */}
      <Section $dark>
        <Container>
          <SectionLabel>07 · Future-Proofing</SectionLabel>
          <H2>Built for <span>What's Coming</span></H2>
          <Lead style={{ marginBottom: '3rem' }}>
            Open-weight models improve faster than cloud provider pricing. The hardware you
            buy today runs every model that ships tomorrow — with zero additional cost.
          </Lead>

          <Grid $cols={3}>
            {[
              { icon: '🌊', title: 'Model Improvement Wave', body: 'In 2023, GPT-4 was frontier. In 2025, Kimi K2 (open, free) matches it. In 2027, local models will exceed today\'s best. The hardware that runs 2025 models runs 2027 models.' },
              { icon: '🔐', title: 'Privacy Regulation Trend', body: 'HIPAA, GDPR, the EU AI Act, and proposed US data privacy laws are all moving the same direction: restrict what you can send to third-party AI providers. Local AI gets more valuable each year.' },
              { icon: '🏥', title: 'Healthcare Specifically', body: 'Audiology, medical transcription, clinical note generation — all need AI, all are restricted. First-mover with a compliant local solution captures a market that Big Tech literally cannot serve.' },
              { icon: '🤖', title: 'Agentic AI Era', body: 'AI is shifting from single queries to multi-step agents running 24/7. Agents generate 10–100× more tokens than chat. Local compute becomes proportionally more valuable at agentic scale.' },
              { icon: '⚙️', title: 'Fine-Tuning Moat', body: 'Each client-specific model you train becomes a proprietary asset. Models fine-tuned on real audiologist workflows, legal briefs, or medical records cannot be replicated by competitors without the same data.' },
              { icon: '🚀', title: 'Apple Silicon Roadmap', body: 'M4 Ultra will ship with larger memory options. M5, M6 will follow. Each generation delivers better perf/watt. Your infrastructure knowledge and business relationships transfer forward.' },
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
      <Section $accent className="page-break">
        <Container>
          <SectionLabel>08 · Execution Roadmap</SectionLabel>
          <H2>From Funding to <span>Revenue in 90 Days</span></H2>

          <Grid $cols={2}>
            <div>
              {[
                { month: 'Month 1', title: 'Infrastructure', items: ['Acquire 2× Mac Studio M3 Ultra 512GB', 'Set up local network, VPN, static IP', 'Install Kimi K2 via KTransformers/vLLM', 'Verify full 1T model runs across both machines', 'Establish OpenAI-compatible API endpoint'] },
                { month: 'Month 2', title: 'First Clients', items: ['Build demo showcasing HIPAA-compliant inference', 'Target 2–3 local audiology/medical practices', 'Offer 30-day free trial to pilot clients', 'Configure and deliver first private API client', 'Document system uptime and performance metrics'] },
                { month: 'Month 3', title: 'Scale & Specialize', items: ['Ingest 500GB equipment manuals for RAG system', 'Launch audiology diagnostic AI beta', 'Close first recurring revenue contracts', 'Begin first fine-tuning engagement', 'Breakeven or profitable'] },
                { month: 'Month 6+', title: 'Growth', items: ['5+ recurring clients', 'Audiology SaaS launched', 'First model fine-tune delivered', 'Reinvest in additional hardware or data services', 'Expand regionally or vertically'] },
              ].map((phase, i) => (
                <TimelineRow key={i}>
                  <TimelineDot $active={i < 3}>{i + 1}</TimelineDot>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{phase.month}</div>
                    <H3 style={{ marginBottom: '0.5rem' }}>{phase.title}</H3>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                      {phase.items.map((item, j) => (
                        <li key={j} style={{ color: '#8080b8', fontSize: '0.9rem', lineHeight: '1.8' }}>{item}</li>
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
                  <span>~$12,000–$14,000</span>
                </H2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  {[
                    { label: '2× Mac Studio M3 Ultra 512GB', amount: '~$11,000–12,000' },
                    { label: '2× 2TB SSD configs', amount: 'Incl. above' },
                    { label: 'Network / VPN infrastructure', amount: '~$300–$500' },
                    { label: 'First 3 months operating buffer', amount: '~$500–$1,000' },
                  ].map((line, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <Body style={{ margin: 0 }}>{line.label}</Body>
                      <span style={{ color: '#c4b5fd', fontWeight: 600, fontSize: '0.95rem', whiteSpace: 'nowrap', paddingLeft: '1rem' }}>{line.amount}</span>
                    </div>
                  ))}
                </div>
                <Body style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  This is a one-time capital investment in durable hardware that typically holds value for
                  5+ years. Apple Silicon Macs retain strong resale value. The ask is not consumption
                  spend — it's infrastructure ownership.
                </Body>
                <PrimaryBtn onClick={handlePrint} style={{ width: '100%', justifyContent: 'center' }}>
                  ↓ Download Full Proposal as PDF
                </PrimaryBtn>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* ── ABOUT EDDIE ── */}
      <Section $dark>
        <Container>
          <SectionLabel>09 · About the Operator</SectionLabel>
          <H2>Why <span>Eddie Moger</span></H2>

          <Grid $cols={2}>
            <div>
              <Lead style={{ marginBottom: '2rem' }}>
                This proposal sits at the intersection of three domains Eddie already owns:
                audiology (field expertise), software development (technical execution),
                and agentic AI (where he's been building since early adoption).
              </Lead>
              <Body style={{ marginBottom: '1.5rem' }}>
                Most people pitching "local AI services" are either engineers with no industry
                access or domain experts with no technical skills. Eddie is both. He understands
                calibration workflows, equipment vendors, and practice management — and he can
                build the software that wraps the AI model.
              </Body>
              <Body>
                He's currently operating EDI Audiology (edi-crm.com) — a full CRM built from
                scratch for the audiology calibration and repair business. The 500 GB of
                technical manuals and documentation he's accumulating is the training dataset
                future competitors would have to build from zero.
              </Body>
            </div>
            <Grid $cols={2}>
              {[
                { icon: '🔧', title: 'Audiology Field Tech', body: 'Active calibration and repair business. Direct access to clinics and equipment vendors.' },
                { icon: '💻', title: 'Full-Stack Developer', body: 'Built EDI CRM, Kanban tools, and agentic AI systems. Can ship product without hiring.' },
                { icon: '🤖', title: 'Early AI Adopter', body: 'Running production agentic AI (OpenClaw) for business operations since 2025.' },
                { icon: '📊', title: 'Business Operator', body: 'Not a researcher. Not a hobbyist. Building a real company with real clients and real revenue goals.' },
              ].map((item, i) => (
                <Card key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <H3>{item.title}</H3>
                  <Body>{item.body}</Body>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* ── FOOTER CTA ── */}
      <Section $accent style={{ textAlign: 'center' }}>
        <Container>
          <Tag>Ready to move</Tag>
          <H2 style={{ margin: '0 auto 1.5rem' }}>
            Let's Build the <span>Private AI Infrastructure</span> Business
          </H2>
          <Lead style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            Questions, partnerships, or investment inquiries — reach out directly.
          </Lead>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} className="no-print">
            <PrimaryBtn onClick={handlePrint}>↓ Download as PDF</PrimaryBtn>
            <SecondaryBtn href="mailto:eddie@eddiemoger.com?subject=AI Venture Proposal — Inquiry">
              Email Eddie →
            </SecondaryBtn>
            <SecondaryBtn href="https://eddiemoger.com" target="_blank" rel="noopener noreferrer">
              Full Portfolio →
            </SecondaryBtn>
          </div>
          <Footnote style={{ textAlign: 'center', maxWidth: '700px', margin: '3rem auto 0' }}>
            All technical specifications sourced from official vendor documentation: Apple.com (Mac Studio specs, March 2025),
            GitHub/MoonshotAI Kimi-K2 README (July 2025), Anthropic API pricing (February 2026), OpenAI API pricing (February 2026).
            Hardware pricing estimated — verify current pricing at apple.com before purchase. Revenue projections are forward-looking
            estimates based on comparable market rates and are not guaranteed.
          </Footnote>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default PitchDeckPage;
