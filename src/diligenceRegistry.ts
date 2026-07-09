export type DiligenceLayer = 'Scope' | 'Evidence' | 'Assessment' | 'Decision' | 'Remediation';

export type DiligenceStatus = 'Pending' | 'Reviewed' | 'Material' | 'Accepted';

export interface DiligenceFinding {
  domain: string;
  issue: string;
  impact: string;
  owner: string;
  status: DiligenceStatus;
}

export interface DiligenceLayerEntry {
  layer: DiligenceLayer;
  question: string;
  artifact: string;
}

export interface DiligenceRegistry {
  repository: string;
  purpose: string;
  layers: DiligenceLayerEntry[];
  findings: DiligenceFinding[];
  focusAreas: string[];
  decisionRule: string;
  executiveQuestions: string[];
}

export const diligenceRegistry: DiligenceRegistry = {
  repository: 'Cloud Technical Due Diligence Framework',
  purpose:
    'Provide a repeatable way to assess cloud and SaaS platforms and convert findings into decision impact and remediation.',
  layers: [
    {
      layer: 'Scope',
      question: 'What is being reviewed?',
      artifact: 'Due diligence questionnaire',
    },
    {
      layer: 'Evidence',
      question: 'What supports the claim?',
      artifact: 'Evidence notes',
    },
    {
      layer: 'Assessment',
      question: 'What is the current state?',
      artifact: 'Domain assessment',
    },
    {
      layer: 'Decision',
      question: 'What matters to the deal?',
      artifact: 'Executive summary',
    },
    {
      layer: 'Remediation',
      question: 'What happens next?',
      artifact: 'Remediation roadmap',
    },
  ],
  findings: [
    {
      domain: 'Architecture',
      issue: 'Target state alignment is incomplete',
      impact: 'Slower transition and unclear integration path',
      owner: 'Enterprise architecture',
      status: 'Material',
    },
    {
      domain: 'Reliability',
      issue: 'SLO coverage is uneven across critical services',
      impact: 'Recovery and availability risk',
      owner: 'SRE lead',
      status: 'Reviewed',
    },
    {
      domain: 'Security',
      issue: 'Control evidence is inconsistent',
      impact: 'Audit and compliance exposure',
      owner: 'Security governance',
      status: 'Material',
    },
    {
      domain: 'DR',
      issue: 'Recovery testing cadence is not documented',
      impact: 'Resilience confidence is limited',
      owner: 'Resilience lead',
      status: 'Pending',
    },
    {
      domain: 'FinOps',
      issue: 'Cloud cost allocation is incomplete',
      impact: 'Reduced spend visibility and deal uncertainty',
      owner: 'FinOps lead',
      status: 'Reviewed',
    },
  ],
  focusAreas: [
    'architecture',
    'reliability',
    'security and compliance',
    'disaster recovery',
    'FinOps and cloud cost risk',
    'technical debt',
    'operating model maturity',
  ],
  executiveQuestions: [
    'What is the material risk?',
    'How does it affect investment or execution?',
    'What remediation is needed if we proceed?',
  ],
  decisionRule:
    'If a finding does not affect the investment view, operating risk, or remediation path, it should be treated as supporting detail rather than a core diligence issue.',
};

export function getDiligenceOverview() {
  return {
    repository: diligenceRegistry.repository,
    purpose: diligenceRegistry.purpose,
    layerCount: diligenceRegistry.layers.length,
    findingCount: diligenceRegistry.findings.length,
    materialFindings: diligenceRegistry.findings.filter((finding) => finding.status === 'Material').length,
  };
}
