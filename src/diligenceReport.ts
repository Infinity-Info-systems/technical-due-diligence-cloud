import { diligenceRegistry } from './diligenceRegistry';

export interface DiligenceReportRow {
  domain: string;
  issue: string;
  impact: string;
  owner: string;
  status: string;
}

export function buildDiligenceReport() {
  const rows: DiligenceReportRow[] = diligenceRegistry.findings.map((finding) => ({
    domain: finding.domain,
    issue: finding.issue,
    impact: finding.impact,
    owner: finding.owner,
    status: finding.status,
  }));

  return {
    title: diligenceRegistry.repository,
    purpose: diligenceRegistry.purpose,
    layers: diligenceRegistry.layers,
    focusAreas: diligenceRegistry.focusAreas,
    executiveQuestions: diligenceRegistry.executiveQuestions,
    decisionRule: diligenceRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildDiligenceSummary() {
  return {
    totalFindings: diligenceRegistry.findings.length,
    materialFindings: diligenceRegistry.findings.filter((finding) => finding.status === 'Material').length,
    reviewedFindings: diligenceRegistry.findings.filter((finding) => finding.status === 'Reviewed').length,
    acceptedFindings: diligenceRegistry.findings.filter((finding) => finding.status === 'Accepted').length,
  };
}
