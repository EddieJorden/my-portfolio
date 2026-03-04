import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0f;
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Hero = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 2rem 4rem;
  background: radial-gradient(ellipse at top, rgba(0, 150, 255, 0.15) 0%, transparent 70%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 60px,
      rgba(0, 150, 255, 0.03) 60px,
      rgba(0, 150, 255, 0.03) 61px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 60px,
      rgba(0, 150, 255, 0.03) 60px,
      rgba(0, 150, 255, 0.03) 61px
    );
  }
`;

const Tag = styled(motion.span)`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(0, 150, 255, 0.15);
  border: 1px solid rgba(0, 150, 255, 0.4);
  border-radius: 50px;
  font-size: 0.85rem;
  color: #5dbaff;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #5dbaff 60%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.6);
  max-width: 700px;
  line-height: 1.8;
  position: relative;
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #0096ff;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;
`;

const Section = styled(motion.section)`
  margin-bottom: 5rem;
`;

const SectionLabel = styled.div`
  font-size: 0.8rem;
  color: #0096ff;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

const Body = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.9;
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 4rem 0;
`;

const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChallengeCard = styled(motion.div)<{ $resolved?: boolean }>`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props => props.$resolved ? 'rgba(0, 200, 100, 0.2)' : 'rgba(255, 100, 100, 0.2)'};
  border-radius: 16px;
  padding: 1.8rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.$resolved
      ? 'linear-gradient(90deg, transparent, #00c864, transparent)'
      : 'linear-gradient(90deg, transparent, #ff4444, transparent)'};
  }
`;

const ChallengeTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ChallengeBadge = styled.span<{ $resolved?: boolean }>`
  font-size: 0.7rem;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  background: ${props => props.$resolved ? 'rgba(0, 200, 100, 0.15)' : 'rgba(255, 100, 100, 0.15)'};
  color: ${props => props.$resolved ? '#00c864' : '#ff6666'};
  border: 1px solid ${props => props.$resolved ? 'rgba(0, 200, 100, 0.3)' : 'rgba(255, 100, 100, 0.3)'};
`;

const ChallengeText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
`;

const CodeBlock = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.88rem;
  color: #5dbaff;
  line-height: 1.8;
  overflow-x: auto;
  position: relative;

  .comment { color: rgba(255,255,255,0.3); }
  .cmd { color: #a8e6cf; }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #0096ff, transparent);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0.3rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0096ff;
    border: 2px solid #0a0a0f;
    box-shadow: 0 0 12px rgba(0, 150, 255, 0.6);
  }
`;

const TimelineLabel = styled.div`
  font-size: 0.78rem;
  color: #0096ff;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.8rem;
`;

const TimelineText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
`;

const TechPill = styled.span`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: rgba(0, 150, 255, 0.1);
  border: 1px solid rgba(0, 150, 255, 0.25);
  border-radius: 20px;
  font-size: 0.82rem;
  color: #5dbaff;
  margin: 0.25rem;
`;

const ArchDiagram = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem 0;
  font-family: monospace;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  line-height: 2;
  overflow-x: auto;
  white-space: pre;
`;

const ResultBanner = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 150, 255, 0.1), rgba(0, 100, 200, 0.05));
  border: 1px solid rgba(0, 150, 255, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin: 3rem 0;
`;

const ResultTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const ResultText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  line-height: 1.8;
`;

const challenges = [
  {
    title: 'mDNSResponder CPU Spike',
    text: 'Enabling the Thunderbolt Bridge network service caused mDNSResponder to peg at 100% CPU, eventually killing all networking on every node. The cluster would die within minutes.',
    resolved: true,
    fix: 'Disabled the TB Bridge network service entirely. Bridge interface persists but without service management, mDNS stays calm. IPs assigned directly to physical interfaces instead.'
  },
  {
    title: 'IP Persistence Across Reboots',
    text: 'All Thunderbolt point-to-point IP assignments were ephemeral. Every reboot or session restart wiped them, causing the cluster to silently fall back to WiFi for inter-node communication.',
    resolved: true,
    fix: 'LaunchDaemon plist deployed to each compute node. Script runs at boot, waits for interface enumeration, then assigns all static IPs to the correct TB ports.'
  },
  {
    title: 'WiFi Masquerading as TB',
    text: 'The exo framework discovers peers via mDNS on all network interfaces simultaneously. Without explicit binding, it would connect to peer WiFi addresses first — creating a ring that looked healthy but was running over a 500 Mbps shared WiFi channel instead of 40 Gbps Thunderbolt.',
    resolved: true,
    fix: 'PF firewall rules deployed on each node blocking inter-node connections on exo\'s port (52415) over the WiFi interface. Forces all ring traffic onto Thunderbolt.'
  },
  {
    title: 'TB Cable Map Discovery',
    text: 'Thunderbolt ethernet interfaces do not follow a predictable naming pattern. Physical ports do not map to interface names in any obvious way — plugging into port 1 does not mean en1.',
    resolved: true,
    fix: 'Used system_profiler SPThunderboltDataType on each node to extract port Domain UUIDs. Matched UUIDs across nodes to build the exact cable map for all 10 links in the full mesh.'
  },
  {
    title: 'exo Re-Election Killing Workers',
    text: 'When a new cluster leader was elected (a frequent event during startup), exo would shut down and restart the worker process — killing the model mid-load on all nodes. The ring would collapse and need to be placed again from scratch.',
    resolved: true,
    fix: 'Patched exo source: added update_session() method to worker. On re-election, the session ID is updated in-place instead of restarting the worker process. Model load survives leadership changes.'
  },
  {
    title: 'anyio Internal API Change',
    text: 'Exo\'s async channel implementation referenced a private anyio class (MemoryObjectStreamState) that had been renamed in a newer version. This caused silent import failures on all nodes.',
    resolved: true,
    fix: 'Patched the reference to use the new internal class name (_MemoryObjectStreamState). Deployed to all compute nodes.'
  },
  {
    title: 'Min-Node Ring Placement',
    text: 'Exo\'s default placement logic picks the smallest valid cycle in the topology graph. With a full 4-node mesh, it would consistently select 3-node cycles, leaving one machine idle and under-utilizing available memory.',
    resolved: true,
    fix: 'Used the /place_instance API endpoint with explicit min_nodes=4 parameter instead of the default /instance endpoint, forcing a full 4-node ring every time.'
  },
  {
    title: 'Mac1 Cluster Poisoning',
    text: 'The coordinator machine (running OpenClaw) would spontaneously join the compute cluster via mDNS peer discovery when exo started on the compute nodes. Mac1 doesn\'t hold model shards, so its presence in the ring caused placement failures.',
    resolved: true,
    fix: 'Generate a unique EXO_LIBP2P_NAMESPACE timestamp at startup and export to all compute nodes only. Mac1 runs a different namespace and is excluded from peer discovery entirely.'
  }
];

const InferenceClusterPage: React.FC = () => {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);

  return (
    <PageContainer>
      <Hero>
        <Tag
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Infrastructure Project
        </Tag>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          On-Premise AI Inference Cluster
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A multi-node Apple Silicon cluster running large-scale open-source language models
          locally, connected via a full Thunderbolt mesh. Built from bare metal — including
          patching the inference framework itself to make it work.
        </Subtitle>

        <StatsRow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Stat>
            <StatValue>40 Gb/s</StatValue>
            <StatLabel>Per TB Link</StatLabel>
          </Stat>
          <Stat>
            <StatValue>10</StatValue>
            <StatLabel>Thunderbolt Cables</StatLabel>
          </Stat>
          <Stat>
            <StatValue>Full Mesh</StatValue>
            <StatLabel>Topology</StatLabel>
          </Stat>
          <Stat>
            <StatValue>~10 tok/s</StatValue>
            <StatLabel>Inference Speed</StatLabel>
          </Stat>
        </StatsRow>
      </Hero>

      <Content>

        <Section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Overview</SectionLabel>
          <SectionTitle>Why Build This</SectionTitle>
          <Body>
            Commercial AI APIs are useful, but they come with tradeoffs: latency, cost at scale,
            data privacy concerns, and model availability limits. For certain workloads — particularly
            agentic systems and long-context coding tasks — having a locally-hosted model that you
            control end-to-end changes what's possible.
          </Body>
          <Body>
            This project is a fully on-premise inference cluster built on Apple M3 Ultra hardware,
            connected via a full Thunderbolt mesh, running distributed inference using the open-source
            <strong> exo</strong> framework. The goal was simple: get a large open-source model
            running at a useful token rate without sending data anywhere.
          </Body>
          <Body>
            What followed was several days of debugging networking, patching framework source code,
            reverse-engineering macOS interface behavior, and solving problems that had no existing
            documentation. This page is a record of what we built and what it took to get there.
          </Body>
        </Section>

        <Divider />

        <Section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Architecture</SectionLabel>
          <SectionTitle>Hardware & Network Design</SectionTitle>
          <Body>
            The cluster is built on Apple M3 Ultra nodes — Apple Silicon's highest-end chip,
            combining two M3 Max dies with a high-bandwidth die-to-die interconnect. Each node's
            unified memory architecture is key: MLX (Apple's machine learning framework) can use
            the full memory pool as GPU VRAM, which is what makes running large models feasible
            on consumer hardware.
          </Body>
          <Body>
            Networking is a full Thunderbolt 4 mesh — every node connected to every other node
            directly, with 10 cables total. This provides each node with multiple 40 Gb/s links to
            every other peer, with sub-millisecond latency. For tensor-parallel inference, where
            large activation tensors need to move between nodes on every forward pass, this bandwidth
            is critical. WiFi is not an option.
          </Body>

          <ArchDiagram>{`
    ┌─────────────────────────────────────────────────────┐
    │          Full Thunderbolt Mesh (10 cables)           │
    │                                                      │
    │     Node A ──────────────── Node B                   │
    │       │  ╲                ╱  │                       │
    │       │    ╲            ╱    │                       │
    │       │      ╲        ╱      │                       │
    │       │        ╲    ╱        │                       │
    │       │          ╲╱          │                       │
    │       │          ╱╲          │                       │
    │       │        ╱    ╲        │                       │
    │       │      ╱        ╲      │                       │
    │       │    ╱            ╲    │                       │
    │     Node D ──────────────── Node C                   │
    │                                                      │
    │  Each link: 40 Gb/s  |  All pairs: direct path       │
    │  Total cross-section: 240 Gb/s                       │
    └─────────────────────────────────────────────────────┘

    WiFi (192.168.1.x): peer discovery only (mDNS/libp2p)
    Thunderbolt (10.10.x.x): all inference data traffic
`}</ArchDiagram>

          <Body>
            Each Thunderbolt link gets a dedicated point-to-point /24 subnet (10.10.AB.x where
            A and B are the node numbers). With 6 inter-node links in a 4-node cluster, each node
            has 3 dedicated TB interfaces carrying traffic, each with their own routing table entry.
            No bridge, no VLAN — clean point-to-point L3.
          </Body>

          <div style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Tech stack</div>
            <div>
              {['Apple M3 Ultra', 'Thunderbolt 4', 'MLX', 'exo', 'macOS', 'libp2p', 'pf firewall', 'LaunchDaemon', 'Python'].map(t => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        <Section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>The Hard Part</SectionLabel>
          <SectionTitle>What Actually Went Wrong</SectionTitle>
          <Body>
            Getting this cluster running was not a matter of following documentation. Most of the
            problems encountered were undocumented macOS networking behaviors, bugs in the inference
            framework, and subtle interactions between distributed systems components that only
            revealed themselves under specific conditions.
          </Body>
          <Body>
            Click any card to see the fix.
          </Body>

          <ChallengeGrid>
            {challenges.map((c, i) => (
              <ChallengeCard
                key={i}
                $resolved={c.resolved}
                onClick={() => setExpandedChallenge(expandedChallenge === i ? null : i)}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ChallengeTitle>
                  {c.title}
                  <ChallengeBadge $resolved={c.resolved}>
                    {c.resolved ? 'Resolved' : 'Open'}
                  </ChallengeBadge>
                </ChallengeTitle>
                <ChallengeText>{c.text}</ChallengeText>
                {expandedChallenge === i && c.fix && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(0,200,100,0.2)'
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', color: '#00c864', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fix</div>
                    <ChallengeText style={{ color: 'rgba(255,255,255,0.75)' }}>{c.fix}</ChallengeText>
                  </motion.div>
                )}
              </ChallengeCard>
            ))}
          </ChallengeGrid>
        </Section>

        <Divider />

        <Section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Build Log</SectionLabel>
          <SectionTitle>How It Came Together</SectionTitle>

          <Timeline>
            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TimelineLabel>Phase 1</TimelineLabel>
              <TimelineTitle>Physical Setup & Initial Discovery</TimelineTitle>
              <TimelineText>
                Nodes provisioned, sleep disabled, SSH configured. All nodes joined the same WiFi
                network. First attempt at forming an exo cluster over WiFi succeeded — peer discovery
                via libp2p mDNS worked immediately across all nodes. But inference over WiFi was
                unusable: the bandwidth required to move activation tensors between nodes on every
                forward pass saturated the shared WiFi channel within seconds.
              </TimelineText>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TimelineLabel>Phase 2</TimelineLabel>
              <TimelineTitle>Thunderbolt Networking Attempt — The mDNS Problem</TimelineTitle>
              <TimelineText>
                Enabled Thunderbolt Bridge network service on all nodes to get TB IPs. The cluster
                formed correctly and the ring topology was detected. But within 2-3 minutes,
                mDNSResponder would spike to 100% CPU on every node, killing all networking and
                collapsing the cluster. Disabling the TB Bridge service fixed mDNS but killed TB
                connectivity. Spent significant time understanding exactly why — turned out macOS's
                mDNS daemon actively scans all active network services, and the TB Bridge service
                was triggering pathological behavior.
              </TimelineText>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <TimelineLabel>Phase 3</TimelineLabel>
              <TimelineTitle>Cable Mapping & Point-to-Point IPs</TimelineTitle>
              <TimelineText>
                Discovered that TB ethernet interfaces don't map predictably to physical ports.
                Used system_profiler's Thunderbolt data to extract Domain UUIDs from each port on
                each node, then matched UUIDs across nodes to build the complete 10-link cable map.
                Assigned unique /24 subnets to each point-to-point link directly on physical
                interfaces — bypassing the bridge entirely. All 10 links verified with sub-millisecond
                pings. mDNS stayed calm because the network service was disabled; only the physical
                interface IPs remained.
              </TimelineText>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TimelineLabel>Phase 4</TimelineLabel>
              <TimelineTitle>Framework Patching</TimelineTitle>
              <TimelineText>
                The exo framework had several bugs that needed patching before the cluster was stable.
                An internal anyio API change caused silent import failures. The re-election mechanism
                was restarting worker processes on every leader change, destroying in-progress model
                loads. Both were fixed by patching the source directly and deploying to all compute
                nodes. Additionally, discovered that the --no-api flag (mentioned in some docs) 
                disables the port that exo uses for reachability probes — effectively preventing
                topology detection if used on any node.
              </TimelineText>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <TimelineLabel>Phase 5</TimelineLabel>
              <TimelineTitle>Forcing TB Transport & Persistence</TimelineTitle>
              <TimelineText>
                Even with TB IPs configured, exo's libp2p peer discovery would find and prefer WiFi
                addresses first. PF firewall rules were added to each compute node blocking exo's
                inter-node port on the WiFi interface — forcing all ring traffic onto Thunderbolt.
                LaunchDaemon plists were deployed to persist the TB IP assignments across reboots,
                eliminating the need to reconfigure the network after every restart.
              </TimelineText>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TimelineLabel>Phase 6</TimelineLabel>
              <TimelineTitle>Production</TimelineTitle>
              <TimelineText>
                With all patches deployed, networking hardened, and persistence in place: clean
                4-node ring formation, all runners loaded, model warm and responding. Full
                ChatGPT-style web UI deployed on the coordinator node pointing at the cluster
                API. The whole thing now starts automatically and survives reboots.
              </TimelineText>
            </TimelineItem>
          </Timeline>
        </Section>

        <Divider />

        <Section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Startup Sequence</SectionLabel>
          <SectionTitle>What Running It Looks Like</SectionTitle>
          <Body>
            Once the infrastructure is in place, bringing the cluster up is a single command
            sequence. The TB IPs come up automatically at boot via LaunchDaemon. Exo is started
            with a unique namespace per session to isolate the compute cluster from the coordinator
            node, which runs OpenClaw and other tooling.
          </Body>

          <CodeBlock>
            <span className="comment"># 1. Kill any stale processes, clear logs</span>{'\n'}
            <span className="cmd">for host in node-a node-b node-c node-d; do</span>{'\n'}
            {'  '}<span className="cmd">ssh $host "pkill -f exo; rm -f /tmp/exo.log"</span>{'\n'}
            <span className="cmd">done</span>{'\n\n'}
            <span className="comment"># 2. Generate unique namespace (excludes coordinator from cluster)</span>{'\n'}
            <span className="cmd">CLUSTER_NS="inference-$(date +%s)"</span>{'\n\n'}
            <span className="comment"># 3. Start exo on all compute nodes in parallel</span>{'\n'}
            <span className="cmd">for host in node-a node-b node-c node-d; do</span>{'\n'}
            {'  '}<span className="cmd">ssh $host "cd ~/exo && EXO_LIBP2P_NAMESPACE='$CLUSTER_NS' \</span>{'\n'}
            {'    '}<span className="cmd">PYTHONPATH=src .venv/bin/python3 -m exo -v &gt; /tmp/exo.log 2&gt;&amp;1 &amp;"</span>{'\n'}
            <span className="cmd">done</span>{'\n\n'}
            <span className="comment"># 4. Wait for ring formation (nodes=4 net=4)</span>{'\n'}
            <span className="cmd">sleep 60 && ssh node-a "grep 'POLL:' /tmp/exo.log | tail -1"</span>{'\n\n'}
            <span className="comment"># 5. Place model across all 4 nodes (tensor parallel)</span>{'\n'}
            <span className="cmd">curl -X POST http://node-a:52415/place_instance \</span>{'\n'}
            {'  '}<span className="cmd">{'-d \'{"model_id": "...", "min_nodes": 4}\''}</span>{'\n\n'}
            <span className="comment"># 6. Wait for runners, then inference is live</span>
          </CodeBlock>
        </Section>

        <ResultBanner
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ResultTitle>Fully Local. No API. No Limits.</ResultTitle>
          <ResultText>
            The cluster runs a large open-source language model entirely on-premise across
            Apple M3 Ultra hardware connected via Thunderbolt. Data never leaves the network.
            No tokens, no rate limits, no cost per query. The model is accessible via an
            OpenAI-compatible API endpoint and a full web chat interface — usable by any
            tool that speaks the OpenAI protocol.
          </ResultText>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['On-Premise', 'OpenAI-Compatible API', 'Full Web UI', 'Zero Data Egress', 'Persistent'].map(t => (
              <TechPill key={t} style={{ fontSize: '0.9rem', padding: '0.5rem 1.2rem' }}>{t}</TechPill>
            ))}
          </div>
        </ResultBanner>

      </Content>
    </PageContainer>
  );
};

export default InferenceClusterPage;
