import type { ModuleInfo } from "./types";

export const dasc501: ModuleInfo = {
  code: "DASC501",
  name: "DASC501",
  assessments: [
    {
      id: "dasc501-plain-language-summary",
      moduleCode: "DASC501",
      title: "Plain Language Summary",
      type: "Individual written report (600-word plain-language/lay summary of a paired interview with a health data scientist)",
      weighting: "Not stated",
      wordCount: "600 words + 10% (excluding tables, references etc.)",
      submissionMethod: "Not stated",
      deadlineISO: "2026-11-27",
      deadlineDisplay: "Friday 27th November — 4pm",
      deadlineConflictNote:
        "The source guide gives the day/date as 'Friday 27th November' with no year stated. The academic year for this module is inferred as 2026/27 based on context, so 2026-11-27 has been used here, but the year itself is not explicitly stated in the source document and should be verified against the current module guide. There is also a separate, earlier interview pairing confirmation deadline: 4pm Friday 6th November (Week 6) — email module lead (Dr Laura Bonnett, L.J.Bonnett@liverpool.ac.uk).",
      setDate: "Week 1, Semester 1",
      learningOutcomes: [
        "Not listed (guide states two \"Aims\" instead, not formally numbered LOs).",
      ],
      description:
        "\"In pairs, students will interview a health data scientist and write a summary (as an individual report) of that interview for a non-specialist audience.\" Definition given: Plain Language (Lay) Summary — \"a short account of research which is targeted at a non-specialist audience... uses non-technical and non-specialist language... intended to help communicate research to people from a different research field.\" Note: there is a separate interview pairing confirmation deadline of 4pm Friday 6th November (Week 6), by which students must email the module lead (Dr Laura Bonnett, L.J.Bonnett@liverpool.ac.uk) confirming their pairing.",
      taskSteps: [
        {
          title: "1. Form a pair",
          detail: "Form a pair with another student.",
        },
        {
          title: "2. Identify a health data scientist to interview",
          detail: "Identify a health data scientist to interview.",
        },
        {
          title: "3. Email inviting them",
          detail: "Email inviting them, requesting their availability.",
        },
        {
          title: "4. Confirm pairing with module lead",
          detail:
            "Once agreed, email the module lead confirming the pairing by the deadline (4pm Friday 6th November, Week 6) — no need to name the individual, as this preserves anonymity.",
        },
        {
          title: "5. Research and prepare",
          detail:
            "Research the person/company, devise questions, decide roles; may record/interview in native language.",
        },
        {
          title: "6. Write the summary independently",
          detail:
            "Work independently to write a 600-word summary for a non-data-specialist audience (researchers/health professionals).",
        },
      ],
      topBandGuidance:
        "The rubric's top bands (A*/A) describe an introduction that concisely and clearly introduces the individual and their work within health data science with a succinct outline of the summary; a full, clear and concise understanding of the individual's role and work; excellent depth suggesting well thought-out interview questions (rather than information obtainable via internet searches alone); a clear, easy-to-follow structure; and a very good/fluent, succinct attempt to target the summary to the appropriate (non-specialist) audience.",
      goodWorkLooksLike: [
        "A clear, concise introduction of the individual and their work within health data science, with a succinct outline of the summary.",
        "A full, clear and concise description of the individual's role as a health data scientist and their work.",
        "Depth of information that suggests well thought-out interview questions rather than information available via internet searches alone.",
        "A clear structure that is easy to follow.",
        "Language and content targeted at the appropriate non-specialist audience, written fluently and succinctly with minimal jargon.",
      ],
      genAiTier: "Tier 2",
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Introduction",
                weight: "15%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Introduction could not be improved." },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Clear introduction that concisely introduces the individual and their work within health data science. Succinct outline of the summary provided.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Clear introduction that introduces the individual and their work within health data science. Outline of the summary provided.",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Introduction misses some important information or explanation of who was approached and what makes them a health data scientist and/or contains some unnecessary detail. Missing summary or outline of the summary may not be clear.",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "Introduction omits background information and explanation of who was approached and what makes them a health data scientist. No outline of the summary provided.",
                  },
                  { band: "F", range: "0-39%", text: "No introduction" },
                ],
              },
              {
                name: "Understanding",
                weight: "15%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Evidence of understanding the individual's role and work could not be improved.",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Demonstrates a full understanding. Clear and concise description of individual's role as a health data scientist, and their work.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Demonstrates general understanding. Clear description of individual's role as a health data scientist and their work.",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Missing some details of the individual's role and contains unnecessary details. Some aspects of the individual's work not fully understood or only brief description provided.",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "No evidence of understanding the individual's role as a health data scientist. No description of the individual's work.",
                  },
                  {
                    band: "F",
                    range: "0-39%",
                    text: "No details of the indiviudal's role or work",
                  },
                ],
                sourceNote: "\"indiviudal's\" is a verbatim typo in the source rubric (sic).",
              },
              {
                name: "Depth",
                weight: "15%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Depth of information obtained via interview could not be improved.",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Excellent depth to the summary suggesting well thought-out interview questions.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Good depth to the summary suggestion fairly well thought-out interview questions.",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Evidence of some information obtained via interview, rather than just via internet searches. Limited evidence of prepared interview questions.",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "No depth to the summary. Information could have been obtained via internet searches alone. No evidence of interview questions.",
                  },
                  { band: "F", range: "0-39%", text: "No summary" },
                ],
                sourceNote:
                  "The B band reads \"summary suggestion\" (sic) in the source rubric, likely intended as \"summary suggesting\".",
              },
              {
                name: "Organisation",
                weight: "15%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Organisation and structure could not be improved.",
                  },
                  { band: "A", range: "70-79%", text: "Clear structure. Easy to follow." },
                  { band: "B", range: "60-69%", text: "Fairly clear structure. Fairly easy to follow." },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Overall logical structure but may contain some repetition or may be difficult to follow in some places.",
                  },
                  { band: "D", range: "40-49%", text: "Structure unclear. Difficult to follow." },
                  { band: "F", range: "0-39%", text: "No paragraphs or text organisation" },
                ],
              },
              {
                name: "Language",
                weight: "40%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Attempt to target summary to appropriate audience could not be improved.",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Very good attempt to target summary to appropriate audience. Fluent and succinct.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Good attempt to target summary to appropriate audience but lacks fluency.",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Fairly good attempt to target summary to appropriate audience but could be more succinct in places and still contains some jargon.",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "Little attempt to target summary to appropriate audience and may contain a lot of jargon.",
                  },
                  { band: "F", range: "0-39%", text: "Entirely jargon" },
                ],
              },
            ],
            academicIntegrity: [
              {
                label: "A*/A — No concerns",
                text: "There are no academic integrity concerns with this assignment",
              },
              {
                label: "B/C — Category 1",
                text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label: "D/F — Category 2/3/4",
                text: "Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work — all suspected cases must be referred to the Academic Integrity Officer.",
              },
            ],
            note: "Criteria weightings: 15+15+15+15+40 = 100%.",
          },
        ],
      },
      gaps: [
        "Module-grade weighting not stated.",
        "Submission platform not named.",
        "No numbered learning outcomes in the guide (two unnumbered \"Aims\" given instead).",
      ],
    },
    {
      id: "dasc501-critical-appraisal",
      moduleCode: "DASC501",
      title: "Critical Appraisal (Assignment 1 — Critical Appraisal)",
      type: "Individual written critical appraisal of a specified published paper",
      weighting: "Not stated",
      wordCount: "1500 words + 10% (excluding tables, references etc.)",
      submissionMethod: "Not stated",
      deadlineISO: "2026-12-04",
      deadlineDisplay: "Friday 4th December — 4pm",
      deadlineConflictNote:
        "The source guide gives the day/date as 'Friday 4th December' with no year stated. The academic year for this module is inferred as 2026/27 based on context (consistent with the Plain Language Summary deadline of Friday 27th November falling in the same term), so 2026-12-04 has been used here, but the year itself is not explicitly stated in the source document and should be verified against the current module guide.",
      setDate: "Week 1, Semester 1",
      learningOutcomes: ["Not listed."],
      description:
        "Full title: \"ASSIGNMENT 1 — CRITICAL APPRAISAL\". Paper to appraise (verbatim citation): \"Miller AB, Wall C, Baines CJ, Sun P, To T, Narod SA. Twenty five year follow-up for breast cancer incidence and mortality of the Canadian National Breast Screening Study: randomised screening trial. BMJ. 2014;348:g366. https://www.bmj.com/content/348/bmj.g366\" Task description (verbatim): \"The aim of this assignment is to write an in-depth critical evaluation of the following published paper... focusing on the main elements of the method including: Research Question; Study Selection; Study characteristics; Consideration of bias; All aspects of statistical analyses including methods, synthesis of results and interpretation; Discussion and summary.\" \"Based on your critical review, clearly present and critically justify the five most important recommendations you would have made to the researchers if you had been asked for advice on the design and presentation of this study.\" Advised appraisal tool: CONSORT-ROUTINE or similar.",
      taskSteps: [
        {
          title: "Critically evaluate the research question",
          detail:
            "Critically evaluate the research question and rationale of the Miller et al. (BMJ, 2014) paper.",
        },
        {
          title: "Critically evaluate study selection",
          detail:
            "Critically evaluate the study selection, as one of the 'main elements of the method' named in the task description.",
        },
        {
          title: "Critically evaluate study characteristics",
          detail:
            "Critically evaluate the study characteristics, as one of the 'main elements of the method' named in the task description.",
        },
        {
          title: "Consider bias",
          detail:
            "Critically evaluate consideration of bias, as one of the 'main elements of the method' named in the task description.",
        },
        {
          title: "Evaluate statistical analyses",
          detail:
            "Critically evaluate all aspects of statistical analyses, including methods, synthesis of results and interpretation.",
        },
        {
          title: "Write the discussion and summary",
          detail: "Write the discussion and summary of your critical appraisal.",
        },
        {
          title: "Present and justify 5 recommendations",
          detail:
            "\"Based on your critical review, clearly present and critically justify the five most important recommendations you would have made to the researchers if you had been asked for advice on the design and presentation of this study.\"",
        },
      ],
      topBandGuidance:
        "The rubric's top bands (A*/A) describe a thorough and justified critical evaluation of the research question and rationale, of all key elements of the RCT, of the statistical analytical methods, and of the interpretation of results; 5 recommendations provided with excellent/very good justification; and an entirely logical flow with no spelling, punctuation or grammatical errors and use of only academic language throughout.",
      goodWorkLooksLike: [
        "Thorough and justified critical evaluation of the research question and the rationale.",
        "Thorough and justified critical evaluation of all key elements of RCTs.",
        "Thorough and justified critical evaluation of the statistical analysis methods.",
        "Thorough and justified critical evaluation of the interpretation of results.",
        "5 recommendations provided with very good justification.",
        "Entirely logical flow with no spelling, punctuation or grammatical errors and use of only academic language throughout.",
      ],
      genAiTier: "Tier 2",
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Critical evaluation of the research question and rationale",
                weight: "10%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Thorough and justified critical evaluation of the research question and the rationale. This could not be improved",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Thorough and justified critical evaluation of the research question and the rationale.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Thorough and mostly justified critical evaluation of the research question and the rationale.",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Some critical evaluation of the research question and/or the rationale.",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "Minimal evaluation of the research question and/or the rationale.",
                  },
                  { band: "F", range: "0-39%", text: "No evaluation of the research question or rationale" },
                ],
              },
              {
                name: "Critical evaluation of all key elements of the RCT",
                weight: "30%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Thorough and justified critical evaluation of all key elements of RCTs. This could not be improved",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Thorough and justified critical evaluation of all key elements of RCTs.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Thorough and mostly justified critical evaluation of all but 1 key elements of RCTs.",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Some, occassionally justified, critical evaluation of most key elements of RCTs.",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "Minimal evaluation of at least one key elements of RCTs.",
                  },
                  { band: "F", range: "0-39%", text: "No evaluation of any key elements of RCTs" },
                ],
                sourceNote:
                  "\"occassionally\" and \"key elements\" grammar are verbatim from the source rubric (sic).",
              },
              {
                name: "Critical evaluation of statistical analytical methods",
                weight: "20%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Thorough and justified critical evaluation of the statistical analysis methods. This could not be improved",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Thorough and justified critical evaluation of the statistical analysis methods.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Thorough and mostly justified critical evaluation of statistical analysis methods.",
                  },
                  { band: "C", range: "50-59%", text: "Some evaluation of the statistical analysis methods." },
                  { band: "D", range: "40-49%", text: "Minimal evaluation of the statistical analysis methods" },
                  { band: "F", range: "0-39%", text: "No evaluation of the statistical analysis methods" },
                ],
              },
              {
                name: "Critical evaluation of interpretation of results",
                weight: "10%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Thorough and justified critical evaluation of the interpretation of results. This could not be improved",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Thorough and justified critical evaluation of the interpretation of results.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Thorough and mostly justified critical evaluation of the interpretation of results.",
                  },
                  { band: "C", range: "50-59%", text: "Some evaluation of the interpretation of results." },
                  { band: "D", range: "40-49%", text: "Minimal evaluation of the results" },
                  { band: "F", range: "0-39%", text: "No evaluation of the results" },
                ],
              },
              {
                name: "Critical justification of 5 recommendations",
                weight: "20%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "5 recommendations provided with excellent justification. These recommendations could not be improved.",
                  },
                  { band: "A", range: "70-79%", text: "5 recommendations provided with very good justification" },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "3-4 recommendations provided with good justification OR 5 recommendations provided without any justification",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "1 recommendation provided with adequate justification OR 3-4 recommendations provided without any justification",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "1 recommendation provided but with minimal justification OR 2 recommendations provided without any justification",
                  },
                  { band: "F", range: "0-39%", text: "No recommendations provided" },
                ],
              },
              {
                name: "Presentation",
                weight: "10%",
                bands: [
                  {
                    band: "A*",
                    range: "80-100%",
                    text: "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout. This could not be improved",
                  },
                  {
                    band: "A",
                    range: "70-79%",
                    text: "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout.",
                  },
                  {
                    band: "B",
                    range: "60-69%",
                    text: "Mostly logical flow with rare spelling, punctuation or grammatical errors and only minor deviations from academic language",
                  },
                  {
                    band: "C",
                    range: "50-59%",
                    text: "Fairly logical flow with some spelling, punctuation or grammatical errors and several deviations from academic language",
                  },
                  {
                    band: "D",
                    range: "40-49%",
                    text: "Generally illogical flow with many spelling, punctuation or grammatical errors and multiple deviations from academic language",
                  },
                  { band: "F", range: "0-39%", text: "Continuous prose and no attempt at academic language." },
                ],
              },
            ],
            academicIntegrity: [
              {
                label: "A*/A — No concerns",
                text: "There are no academic integrity concerns with this assignment",
              },
              {
                label: "B/C — Category 1",
                text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label: "D/F — Category 2/3/4",
                text: "Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work — all suspected cases must be referred to the Academic Integrity Officer.",
              },
            ],
            note: "Criteria weightings: 10+30+20+10+20+10 = 100%. Same merged-cell Academic Integrity structure and wording as the Plain Language Summary rubric.",
          },
        ],
      },
      readingRefs: [
        {
          title: "The pocket guide to critical appraisal",
          author: "Crombie IK",
          note: "BMJ, 1996. Recommended text.",
        },
        {
          title: "How to read a paper",
          author: "Greenhalgh T",
          note: "5th ed, Wiley, 2014. Recommended text.",
        },
        {
          title: "Handbook of Epidemiology (Screening chapter, pp.761-798)",
          author: "Ahrens W & Pigeot I (eds)",
          note: "Springer, 2014. Recommended text.",
        },
        {
          title:
            "Twenty five year follow-up for breast cancer incidence and mortality of the Canadian National Breast Screening Study: randomised screening trial",
          author: "Miller AB, Wall C, Baines CJ, Sun P, To T, Narod SA",
          note: "BMJ. 2014;348:g366. https://www.bmj.com/content/348/bmj.g366 — this is the paper being appraised for this assignment, not general background reading.",
        },
      ],
      gaps: [
        "Module-grade weighting not stated.",
        "Submission platform not named.",
        "No numbered learning outcomes in the guide.",
      ],
    },
  ],
  notes: [
    "Dataset note: pop_snomed_assignment.csv (476,858 rows: pid, sex, qimd, ethnicity, sha, smoking_status, dob, event_date, medcodeid, snomedctdescriptionid) is not referenced in either DASC501 guide and should not be attached to DASC501 assessments. It matches the DASC503 Data Dictionary variable list closely, so it is likely the DASC503 dataset (or a DASC506/507/509 dataset) — flagged here, not resolved by guesswork.",
  ],
};
