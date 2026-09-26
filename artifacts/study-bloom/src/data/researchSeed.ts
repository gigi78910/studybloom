// Starter items for the Research library. Every entry here is a REAL, currently-live source
// found via web search on 25 Sept 2026 — titles and URLs are copied exactly, nothing invented.
// Where a precise author/page/volume wasn't available from the search result itself, the
// citation says so rather than guessing, per the "never fabricate" requirement.

export type ResearchItem = {
  id: string;
  title: string;
  author?: string;
  source: string;
  date: string;
  url: string;
  description: string;
  tags: string[];
  citation: string;
  citationVerified: boolean;
  dateSaved: string;
  read: boolean;
  notes?: string;
};

export const RESEARCH_SEED: ResearchItem[] = [
  {
    id: "r1",
    title: "SANS 2026 Cyber Threat Intelligence: Key Findings",
    source: "SANS Institute",
    date: "2026",
    url: "https://www.sans.org/research/cyber-threat-intelligence-report",
    description: "Annual SANS survey and report on how organisations gather, use and operationalise threat intelligence — useful background for Cyber Threat Intelligence coursework.",
    tags: ["Cybersecurity", "Cyber Threat Intelligence"],
    citation: "SANS Institute (2026). SANS 2026 Cyber Threat Intelligence: Key Findings. [online] Available at: https://www.sans.org/research/cyber-threat-intelligence-report",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
  {
    id: "r2",
    title: "CrowdStrike 2026 Global Threat Report",
    source: "CrowdStrike",
    date: "2026",
    url: "https://www.crowdstrike.com/en-us/global-threat-report/",
    description: "Industry threat-landscape report covering adversary tactics, eCrime and nation-state activity — a widely-cited practitioner source for cybersecurity modules.",
    tags: ["Cybersecurity", "Threat Intelligence"],
    citation: "CrowdStrike (2026). CrowdStrike 2026 Global Threat Report. [online] Available at: https://www.crowdstrike.com/en-us/global-threat-report/",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
  {
    id: "r3",
    title: "A clinician's quick-start guide to implementing digital health innovations in the NHS — with lessons from a UK-deployed AI stroke imaging decision-support software",
    source: "PubMed",
    date: "2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/41883556/",
    description: "Peer-reviewed article on real-world deployment of an AI clinical decision-support tool in the NHS — directly relevant to Data Science & AI for Health Innovation and dissertation background reading.",
    tags: ["Artificial Intelligence", "Data Science", "Health"],
    citation: "See PubMed record for full author list, journal and page details: https://pubmed.ncbi.nlm.nih.gov/41883556/ (verify before citing in your dissertation).",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
  {
    id: "r4",
    title: "Innovation in the NHS: personalised medicine and AI inquiry launched",
    source: "UK Parliament — Science, Innovation and Technology Committee",
    date: "2026",
    url: "https://committees.parliament.uk/committee/193/science-and-technology-committee/news/212387/innovation-in-the-nhs-personalised-medicine-and-ai-inquiry-launched/",
    description: "Official UK Parliament committee inquiry into AI and personalised medicine in the NHS — a good government-source citation for policy/regulatory context in health AI work.",
    tags: ["Artificial Intelligence", "Health", "Policy"],
    citation: "UK Parliament, Science, Innovation and Technology Committee (2026). Innovation in the NHS: personalised medicine and AI inquiry launched. [online] Available at: https://committees.parliament.uk/committee/193/science-and-technology-committee/news/212387/innovation-in-the-nhs-personalised-medicine-and-ai-inquiry-launched/",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
  {
    id: "r5",
    title: "Cyber Security Report 2026",
    source: "Check Point Research",
    date: "2026",
    url: "https://research.checkpoint.com/2026/cyber-security-report-2026/",
    description: "Check Point's annual research report on the global cyber threat landscape, attack trends and sector-by-sector risk.",
    tags: ["Cybersecurity"],
    citation: "Check Point Research (2026). Cyber Security Report 2026. [online] Available at: https://research.checkpoint.com/2026/cyber-security-report-2026/",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
  {
    id: "r6",
    title: "Reproducibility in machine-learning-based research: Overview, barriers, and drivers",
    author: "Semmelrock, H. et al.",
    source: "AI Magazine (Wiley)",
    date: "2025",
    url: "https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002",
    description: "Peer-reviewed overview of why ML research often fails to reproduce, and what drives (or blocks) reproducibility — directly useful for your dissertation methodology chapter.",
    tags: ["Data Science", "Academic Research", "Dissertation"],
    citation: "Semmelrock, H. et al. (2025). Reproducibility in machine-learning-based research: Overview, barriers, and drivers. AI Magazine. [online] Available at: https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002 (verify full author list, volume and pages before citing).",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
  {
    id: "r7",
    title: "MLRC 2026: Reproducibility as an Official Track at NeurIPS",
    source: "NeurIPS Blog",
    date: "2026",
    url: "https://blog.neurips.cc/2026/05/04/mlrc-2026-reproducibility-as-an-official-track-at-neurips/",
    description: "NeurIPS's own announcement on formalising reproducibility as a research track — useful context for how the ML research community is treating reproducibility as a first-class concern.",
    tags: ["Data Science", "Academic Research"],
    citation: "NeurIPS Blog (2026). MLRC 2026: Reproducibility as an Official Track at NeurIPS. [online] Available at: https://blog.neurips.cc/2026/05/04/mlrc-2026-reproducibility-as-an-official-track-at-neurips/",
    citationVerified: false,
    dateSaved: "2026-09-25",
    read: false,
  },
];
