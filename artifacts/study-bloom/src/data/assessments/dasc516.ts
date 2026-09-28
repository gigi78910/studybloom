import type { ModuleInfo } from "./types";

// Sourced from: DASC516 Assignment 1 & 2 Student Guides 2026/27, the Assignment 1
// Marking Rubric (xlsx), the Assignment 2 Written Report Marking Rubric FINAL (xlsx),
// and the two "GAI version" cover sheets. See module-level `notes` below for a
// flagged issue affecting both cover sheet files.

export const dasc516: ModuleInfo = {
  code: "DASC516",
  name: "DASC516",
  assessments: [
    {
      id: "dasc516-critical-appraisal-trial-designs",
      moduleCode: "DASC516",
      title: "Assignment 1 — Written Report: Critical Appraisal of Trial Designs",
      type: "Written report",
      weighting:
        "NOT STATED in the Student Guide or rubric — only the internal 100-mark breakdown for this assignment is given, not this assignment's proportion of the overall module grade.",
      wordCount: "Maximum 3,500 words + 10% (excludes all tables, references, etc.)",
      submissionMethod:
        "Not explicitly stated in the guide (no portal/Turnitin instructions present). A GAI-declaration cover sheet must be submitted with the assignment.",
      deadlineISO: "2027-04-23",
      deadlineDisplay: "Friday 23rd April 2027 — 4:00pm",
      setDate: "Week 1, Semester 2 (no calendar date given in the guide)",
      learningOutcomes: [],
      description:
        "Students critically appraise two different study randomisation designs (individually randomised controlled trial vs cluster randomised controlled trial) for a described clinical question — the 'EduCope trial' scenario: an online supported self-management toolkit (information modules, online discussion forum, direct messaging support from trained practitioners) for relatives of people with psychosis/bipolar disorder, developed to reduce carer distress and healthcare use, with a control arm of an online resource directory without interaction/toolkit. The report must include a lay summary, an introduction to the clinical area, a methods critique, and a conclusion regarding the final design choice, with both randomisation designs evaluated in parallel throughout to justify the recommended choice.",
      taskSteps: [
        {
          title: "Write a lay summary of the entire report",
          detail: "Summarise the whole report in language appropriate for a lay audience.",
        },
        {
          title: "Introduce the clinical area",
          detail:
            "Describe the clinical issues relevant to the EduCope trial scenario (relatives of people with psychosis/bipolar disorder), with relevant references and justification for the importance of the research question.",
        },
        {
          title: "Critically evaluate the two trial design options",
          detail:
            "Evaluate individually randomised vs cluster randomised controlled trial designs in parallel, discussing key points for both.",
        },
        {
          title: "Discuss sources of bias and design features to minimise them",
          detail:
            "Identify potential sources of bias that may occur in the trial setting and the design features that would minimise each source, for both design options.",
        },
        {
          title: "Discuss features to maximise trial efficiency",
          detail:
            "Consider, for example, whether the trial could be conducted remotely or via a hybrid approach, whether sample-size assumptions need testing during the trial, potential use of routinely collected data, and potential for addressing additional research questions during the trial.",
        },
        {
          title: "Discuss cost implications of the design choice",
          detail:
            "Consider, for example, possible cost savings from remote delivery versus additional costs of monitoring online services such as a discussion forum.",
        },
        {
          title: "List the outcomes to be collected",
          detail: "State which outcomes should be collected in the trial and explain how that decision was reached.",
        },
        {
          title: "Discuss implications for analysis, interpretation and limitations",
          detail:
            "Discuss the implications of the two trial designs on analysis methods (e.g. missing data, loss to follow-up), interpretation of results, and potential study limitations (e.g. impact on internal/external validity).",
        },
        {
          title: "State and justify the rationale for the recommended design",
          detail:
            "Explain which of the two study designs is recommended, with rationale in terms of feasibility and internal/external validity.",
        },
        {
          title: "Write a conclusion",
          detail: "Draw a conclusion regarding the final design choice, based on the discussion points raised.",
        },
        {
          title: "Structure and present the report to an academic standard",
          detail:
            "Ensure a logical flow, correct spelling/punctuation/grammar, academic language throughout, and proper citation of references.",
        },
      ],
      topBandGuidance:
        "Per the rubric, A*/A-band work provides a comprehensive, lay-appropriate summary; excellent, well-referenced discussion of the clinical area; thorough critical evaluation of both design options including all key points; thorough discussion of bias-minimising design features, efficiency features, cost implications, patient-centred focus and outcomes (each with justification); comprehensive discussion of implications for analysis/interpretation/limitations; a thorough, justified rationale for the chosen design; a clear conclusion grounded in the discussion; and a report with entirely logical flow, no spelling/punctuation/grammar errors, academic language throughout, and flawless reference citation. The A* band descriptor for each criterion additionally states 'This could not be improved.'",
      goodWorkLooksLike: [
        "Comprehensive summary of the report, with appropriate language for a lay audience.",
        "Excellent description of clinical issues with multiple relevant references and justification for the importance of this research question.",
        "Thorough critical evaluation of the two design options, including discussion of key points.",
        "Thorough discussion of the potential sources of bias and design features to minimise each source of bias.",
        "Thorough discussion of the potential features to maximise trial efficiency.",
        "Thorough discussion of the features to ensure a patient-centred focus.",
        "Thorough discussion of the cost implications of the trial design.",
        "Comprehensive list of relevant outcomes with relevant justification.",
        "Comprehensive discussion of the implications of design and methods on analysis, interpretation of trial results and potential study limitations.",
        "Thorough and justified rationale regarding choice of trial design.",
        "Clear and justified conclusion based on discussion points raised in the critical evaluation.",
        "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout; flawless citation of references.",
      ],
      genAiTier:
        "Generative AI Tier 2: Contextual support (Limited/Assistive use). GenAI is permitted only in restricted, specified ways (e.g. planning, editing, support tasks) and must not replace the student's own thinking or produce the main content of the work. A cover sheet declaring GenAI use (and prompts used) must be submitted.",
      rubric: {
        status: "available",
        tables: [
          {
            label: "Assignment 1 Marking Rubric (source of truth — see criteria sourceNotes for discrepancies vs the Student Guide's summary table)",
            criteria: [
              {
                name: "Lay summary of report",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Comprehensive summary of the report, with appropriate language for a lay audience. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Comprehensive summary of the report, with appropriate language for a lay audience." },
                  { band: "B", range: "60–69%", text: "Comprehensive summary of the report but includes some language that is too complicated for a lay audience." },
                  { band: "C", range: "50–59%", text: "Some aspects of the report are missing and language is too complicated for a lay audience." },
                  { band: "D", range: "40–49%", text: "Most aspects of the report are missing and language is too complicated for a lay language." },
                  { band: "F", range: "0–39%", text: "No lay summary." },
                ],
              },
              {
                name: "Introduction to clinical area",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Excellent description of clinical issues with multiple relevant references and justification for the importance of this research question. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Excellent description of clinical issues with multiple relevant references and justification for the importance of this research question." },
                  { band: "B", range: "60–69%", text: "Good description of clinical issues with some relevant references and justification for the importance of this research question." },
                  { band: "C", range: "50–59%", text: "Brief description of clinical issues with few relevant references and no justification for the importance of this research question." },
                  { band: "D", range: "40–49%", text: "Brief description of clinical issues with no relevant references or justification for the importance of the research question." },
                  { band: "F", range: "0–39%", text: "No introduction to clinical issues." },
                ],
              },
              {
                name: "Critical evaluation of trial design options",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Thorough critical evaluation of the two design options, including discussion of key points. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Thorough critical evaluation of the two design options, including discussion of key points." },
                  { band: "B", range: "60–69%", text: "Critical evaluation of the two design options, but missing discussion of one of the key points." },
                  { band: "C", range: "50–59%", text: "Some evaluation of the two design options, but missing some of the key points." },
                  { band: "D", range: "40–49%", text: "Minimal evaluation of the design options." },
                  { band: "F", range: "0–39%", text: "No evaluation of the design options." },
                ],
              },
              {
                name: "Potential sources of bias and design features to minimise each source of bias",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Thorough discussion of the potential sources of bias and design features to minimise each source of bias. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Thorough discussion of the potential sources of bias and design features to minimise each source of bias." },
                  { band: "B", range: "60–69%", text: "Good discussion of the potential sources of bias and design features to minimise each source of bias, but missing discussion of one of the key points." },
                  { band: "C", range: "50–59%", text: "Some discussion of the potential sources of bias and design features to minimise each source of bias, but missing some of the key points." },
                  { band: "D", range: "40–49%", text: "Minimal discussion of the potential sources of bias and design features to minimise each source of bias." },
                  { band: "F", range: "0–39%", text: "No discussion of the potential sources of bias and design features to minimise each source of bias." },
                ],
              },
              {
                name: "Features to maximise trial efficiency",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Thorough discussion of the potential features to maximise trial efficiency. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Thorough discussion of the potential features to maximise trial efficiency." },
                  { band: "B", range: "60–69%", text: "Good discussion of the potential features to maximise trial efficiency, but missing one of the potential features." },
                  { band: "C", range: "50–59%", text: "Some discussion of the potential features to maximise trial efficiency, but missing some of the potential features." },
                  { band: "D", range: "40–49%", text: "Minimal discussion of the potential features to maximise trial efficiency." },
                  { band: "F", range: "0–39%", text: "No discussion of the potential features to maximise trial efficiency." },
                ],
              },
              {
                name: "Patient-centred focus",
                weight: "5%",
                sourceNote:
                  "This criterion appears only in the marking rubric spreadsheet — it is NOT mentioned anywhere in the Student Guide's task text or its assessment-criteria marks table. Reproduced here verbatim because the rubric is the authoritative grading document.",
                bands: [
                  { band: "A*", range: "80–100%", text: "Thorough discussion of the features to ensure a patient-centred focus. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Thorough discussion of the features to ensure a patient-centred focus." },
                  { band: "B", range: "60–69%", text: "Good discussion of the features to ensure a patient-centred focus, but missing one potential feature." },
                  { band: "C", range: "50–59%", text: "Good discussion of the features to ensure a patient-centred focus, but missing some potential features." },
                  { band: "D", range: "40–49%", text: "Minimal discussion of the features to ensure a patient-centred focus." },
                  { band: "F", range: "0–39%", text: "No discussion of the features to ensure a patient-centred focus." },
                ],
              },
              {
                name: "Cost implications of design choice",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Thorough discussion of the cost implications of the trial design. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Thorough discussion of the cost implications of the trial design." },
                  { band: "B", range: "60–69%", text: "Good discussion of the cost implications of the trial design, but missing one potential point." },
                  { band: "C", range: "50–59%", text: "Good discussion of the cost implications of the trial design, but missing some potential points." },
                  { band: "D", range: "40–49%", text: "Minimal discussion of the cost implications of the trial design." },
                  { band: "F", range: "0–39%", text: "No discussion of the cost implications of the trial design." },
                ],
              },
              {
                name: "Outcomes",
                weight: "5%",
                sourceNote:
                  "WEIGHTING MISMATCH IN THE SOURCE: the marking rubric spreadsheet states this criterion is worth 5% of the assignment, but the Student Guide's own summary marks table lists 'Outcomes' at 10 marks (10%) for the identical criterion. The rubric is treated as the authoritative grading document, so weight is set to 5% here (the rubric's figure); the guide's differing 10% figure is preserved in this note rather than silently reconciled.",
                bands: [
                  { band: "A*", range: "80–100%", text: "Comprehensive list of relevant outcomes with relevant justification. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Comprehensive list of relevant outcomes provided with relevant justification." },
                  { band: "B", range: "60–69%", text: "List of relevant outcomes provided with relevant justification, but missing one important outcome." },
                  { band: "C", range: "50–59%", text: "A few relevant outcomes mentioned but without relevant justification and missing some important outcomes." },
                  { band: "D", range: "40–49%", text: "Brief mention of outcomes but vague and not relevant." },
                  { band: "F", range: "0–39%", text: "No mention of outcomes." },
                ],
              },
              {
                name: "Implications of design and/or methods on analysis, interpretation of trial results and potential study limitations",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Comprehensive discussion of the implications of design and methods on analysis, interpretation of trial results and potential study limitations. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Comprehensive discussion of the implications of design and methods on analysis, interpretation of trial results and potential study limitations." },
                  { band: "B", range: "60–69%", text: "Discussion of the implications of design and methods, but missing one topic (out of analysis, interpretation of trial results or potential study limitations)." },
                  { band: "C", range: "50–59%", text: "Some discussion of the implications of design and methods, but missing two topics (out of analysis, interpretation of trial results and potential study limitations)." },
                  { band: "D", range: "40–49%", text: "Minimal discussion of the implications of design and methods on analysis, interpretation of trial results and potential study limitations." },
                  { band: "F", range: "0–39%", text: "No discussion of the implications of design and methods on analysis, interpretation of trial results and potential study limitations." },
                ],
              },
              {
                name: "Rationale regarding choice of trial design",
                weight: "10%",
                sourceNote:
                  "SOURCE TYPO REPRODUCED VERBATIM: the marking rubric spreadsheet gives the identical descriptor text for both band A (70–79%) and band B (60–69%) — 'Thorough and justified rationale regarding choice of trial design.' This duplication is present in the original source spreadsheet and is reproduced here exactly as found; it is not an extraction or transcription error introduced by this app, and is worth flagging to the module team.",
                bands: [
                  { band: "A*", range: "80–100%", text: "Thorough and justified rationale regarding choice of trial design. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Thorough and justified rationale regarding choice of trial design." },
                  { band: "B", range: "60–69%", text: "Thorough and justified rationale regarding choice of trial design." },
                  { band: "C", range: "50–59%", text: "Some rationale regarding choice of trial design." },
                  { band: "D", range: "40–49%", text: "Minimal rationale regarding choice of trial design." },
                  { band: "F", range: "0–39%", text: "No rationale regarding choice of trial design." },
                ],
              },
              {
                name: "Conclusion",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Clear and justified conclusion based on discussion points raised in the critical evaluation. This could not be improved" },
                  { band: "A", range: "70–79%", text: "Clear and justified conclusion based on discussion points raised in the critical evaluation." },
                  { band: "B", range: "60–69%", text: "Clear conclusion based on some but not all discussion points raised in the critical evaluation." },
                  { band: "C", range: "50–59%", text: "Conclusions based only partially on discussion points raised in the critical evaluation, with new points added which were not previously discussed." },
                  { band: "D", range: "40–49%", text: "Minimal conclusions presented." },
                  { band: "F", range: "0–39%", text: "No conclusions presented." },
                ],
              },
              {
                name: "Overall structure and presentation",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout. Flawless citation of references. This could not be improved." },
                  { band: "A", range: "70–79%", text: "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout. Professional reference citation." },
                  { band: "B", range: "60–69%", text: "Mostly logical flow with rare spelling, punctuation or grammatical errors and only minor deviations from academic language. Competent citation of references with few lapses." },
                  { band: "C", range: "50–59%", text: "Fairly logical flow with some spelling, punctuation or grammatical errors and several deviations from academic language. Reference citation has some errors." },
                  { band: "D", range: "40–49%", text: "Generally illogical flow with many spelling, punctuation or grammatical errors and multiple deviations from academic language. Many errors in reference citation." },
                  { band: "F", range: "0–39%", text: "No submission" },
                ],
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment." },
              {
                label: "Category 1",
                text: "Category 1: Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label: "Categories 2, 3, 4",
                text: "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
            ],
            note:
              "The Student Guide's own summary marks table differs from this rubric: it lists 'Outcomes' at 10 marks (rubric says 5%) and does not mention the rubric's 'Patient-centred focus (5%)' criterion at all. Both the guide's table and the rubric's percentages independently sum to 100%, but the internal allocation differs. The rubric is treated as the authoritative grading document and is reproduced verbatim above; see the sourceNote on the affected criteria for details.",
          },
        ],
      },
      gaps: [
        "Overall weighting of this assignment toward the final DASC516 module grade is not stated in any source document.",
        "Submission method/platform (e.g. Turnitin, Canvas upload) is not stated in the Student Guide.",
        "Learning outcomes are not listed in the Student Guide.",
      ],
    },
    {
      id: "dasc516-health-informatics-intervention-report",
      moduleCode: "DASC516",
      title: "Assignment 2 — Written Report: Health Informatics Intervention Design & Evaluation",
      type: "Written report",
      weighting:
        "NOT STATED in the Student Guide or rubric — only the internal 100-mark breakdown for this assignment is given, not this assignment's proportion of the overall module grade.",
      wordCount: "1,500 words + 10% (excludes all tables, references, code chunks, etc.)",
      submissionMethod:
        "Not explicitly stated in the guide. A GAI-declaration cover sheet must be submitted with the assignment.",
      deadlineISO: "2027-05-27",
      deadlineDisplay:
        "27th May 2027 (time not stated in the official guide — unlike Assignment 1, no time-of-day is specified for this deadline)",
      setDate: "Week 9, Semester 2 (no calendar date stated in the guide)",
      learningOutcomes: [],
      description:
        "A written report on the design and evaluation of a health informatics (HI) intervention, based on a hypothetical scenario from the workgroup activity to be announced in Week 9. The guide states: \"The discussions in your workgroup do not bound you, and we expect you to present your views on this report which the workgroup activity may influence. Your work needs to be driven by the Learning Health Systems paradigm.\" The scenario itself is not contained in the Student Guide and is not invented here — it depends on live, in-course workgroup material.",
      taskSteps: [
        {
          title: "Briefly describe the problem",
          detail: "Briefly describe the problem the student is trying to solve with their proposed health informatics intervention.",
        },
        {
          title: "Describe the design of the intervention in detail",
          detail:
            "Describe the design of the proposed HI intervention in detail, including all necessary data streams, their processing, and presentation.",
        },
        {
          title: "Describe the evaluation plan",
          detail: "Describe the evaluation plan for the proposed intervention.",
        },
        {
          title: "Critically appraise the approach",
          detail: "Critically appraise the proposed approach, including its strengths and limitations.",
        },
      ],
      topBandGuidance:
        "Per the rubric, A*/A-band work has an excellent, well-referenced background that puts the intervention into the context of peer-reviewed research; a detailed design covering all necessary data streams, processing and presentation, with design decisions justified and supported by literature; a detailed, comprehensive evaluation plan supported by an evaluation framework and fully justified with references; full critical appraisal of both design and evaluation, supported throughout by appropriate references to the literature; and a report with entirely logical flow, no spelling/punctuation/grammar errors, academic language throughout, properly captioned tables and figures, and flawless reference citation.",
      goodWorkLooksLike: [
        "Excellent background section covering a broad range of highly relevant previous research; puts the proposed intervention into the context of the peer-reviewed journal article standard.",
        "A detailed design of the proposed intervention, including all necessary data streams, their processing, and presentation, with all design decisions justified and supported by references to the literature.",
        "A detailed and comprehensive evaluation plan of the proposed intervention supported by an evaluation framework, fully justified and supported by references to the literature.",
        "The design and evaluation of the proposed intervention have been critically appraised fully, and the whole argumentation is supported with appropriate references to the relevant literature.",
        "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout; tables use the academic format and are appropriately captioned; figures are appropriately labelled and captioned; flawless citation of references.",
      ],
      genAiTier:
        "Generative AI Tier 2: Contextual support (Limited/Assistive use) — identical wording to Assignment 1: GenAI permitted only in restricted, specified ways; must not replace the student's own thinking or produce the main content. A cover sheet declaring GenAI use is required.",
      rubric: {
        status: "available",
        tables: [
          {
            label: "Assignment 2 Written Report Marking Rubric (matches the Student Guide's summary marks table exactly — no discrepancy found)",
            criteria: [
              {
                name: "Background",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Excellent background section covering a broad range of highly relevant previous research. Puts the proposed intervention into the context of the peer-reviewed journal article standard." },
                  { band: "A", range: "70–79%", text: "The background section is of a very high standard, covering a broad range of relevant previous research. Puts the proposed intervention into context." },
                  { band: "B", range: "60–69%", text: "Good introduction section referring to relevant previous research, although it could have referred to more. Puts the proposed intervention into context." },
                  { band: "C", range: "50–59%", text: "An attempt to refer to some previous research, some of which are relevant, and some are maybe not relevant. May show an attempt to place the proposed intervention into context." },
                  { band: "D", range: "40–49%", text: "Very weak introduction section, with little or no reference to previous relevant research. No attempt to place the proposed intervention into context" },
                  { band: "F", range: "0–39%", text: "No introduction" },
                ],
              },
              {
                name: "Design of the intervention",
                weight: "30%",
                bands: [
                  { band: "A*", range: "80–100%", text: "A detailed design of the proposed intervention, including all necessary data streams, their processing, and presentation. All design decisions have been justified and supported by references to the literature." },
                  { band: "A", range: "70–79%", text: "A detailed design of the proposed intervention, including all necessary data streams, their processing, and presentation. Almost all design decisions have been justified and supported by references to the literature." },
                  { band: "B", range: "60–69%", text: "A detailed design of the proposed intervention, including all necessary data streams, their processing, and presentation. Most design decisions have been justified, and some are supported by references to the literature." },
                  { band: "C", range: "50–59%", text: "A less detailed design of the proposed intervention, including all necessary data streams, their processing, and presentation. Some design decisions have been justified, and only a few are supported by references to the literature." },
                  { band: "D", range: "40–49%", text: "Very weak description of the proposed intervention with minimal or no justification." },
                  { band: "F", range: "0–39%", text: "No description of the design" },
                ],
              },
              {
                name: "Evaluation plan of the intervention",
                weight: "25%",
                bands: [
                  { band: "A*", range: "80–100%", text: "A detailed and comprehensive evaluation plan of the proposed intervention is supported by an evaluation framework. The plan has been fully justified and supported by references to the literature." },
                  { band: "A", range: "70–79%", text: "A detailed and comprehensive evaluation plan of the proposed intervention is supported by an evaluation framework. The plan has been almost fully justified and supported by references to the literature." },
                  { band: "B", range: "60–69%", text: "A detailed and comprehensive evaluation plan of the proposed intervention is supported by an evaluation framework. Some aspects of the plan have been justified and are supported by references to the literature." },
                  { band: "C", range: "50–59%", text: "A less comprehensive evaluation plan of the proposed intervention. A few aspects of the plan have been justified and are supported by references to the literature." },
                  { band: "D", range: "40–49%", text: "Very weak evaluation plan of the proposed intervention with minimal or no justification." },
                  { band: "F", range: "0–39%", text: "No evaluation plan" },
                ],
              },
              {
                name: "Critical appraisal of the intervention",
                weight: "25%",
                bands: [
                  { band: "A*", range: "80–100%", text: "The design and evaluation of the proposed intervention have been critically appraised fully, and the whole argumentation is supported with appropriate references to the relevant literature." },
                  { band: "A", range: "70–79%", text: "The design and evaluation of the proposed intervention have been critically appraised fully, with appropriate references to the relevant literature." },
                  { band: "B", range: "60–69%", text: "Most aspects of the design and evaluation of the proposed intervention have been critically appraised, with some appropriate references to the relevant literature." },
                  { band: "C", range: "50–59%", text: "Some aspects of the design and evaluation of the proposed intervention have been critically appraised, with a few appropriate references to the relevant literature." },
                  { band: "D", range: "40–49%", text: "Minimal critical appraisal of the design and the evaluation plan." },
                  { band: "F", range: "0–39%", text: "Critical appraisal for the design and evaluation plan is missing" },
                ],
              },
              {
                name: "Overall structure and presentation",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80–100%", text: "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout. This could not be improved. Tables use the academic format and are appropriately captioned. Figures are appropriately labelled and captioned. Flawless citation of references." },
                  { band: "A", range: "70–79%", text: "Entirely logical flow with no spelling, punctuation or grammatic errors and use of only academic language throughout. The tables are appropriately captioned. Figures are appropriately labelled and captioned. Professional reference citation." },
                  { band: "B", range: "60–69%", text: "Mostly logical flow with rare spelling, punctuation or grammatical errors and only minor deviations from academic language. The tables are appropriately captioned. Figures are appropriately labelled and captioned. Competent citation of references with few lapses." },
                  { band: "C", range: "50–59%", text: "Fairly logical flow with some spelling, punctuation or grammatical errors and several deviations from academic language. The tables are inadequately captioned. Figures are inadequately labelled and captioned. Reference citation has some errors." },
                  { band: "D", range: "40–49%", text: "Generally illogical flow with many spelling, punctuation or grammatical errors and multiple deviations from academic language. Tables are not captioned. Figures are not labelled and captioned. Many errors in reference citation." },
                  { band: "F", range: "0–39%", text: "No submission" },
                ],
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment." },
              {
                label: "Category 1",
                text: "Category 1: Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label: "Categories 2, 3, 4",
                text: "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
            ],
          },
        ],
      },
      gaps: [
        "Overall weighting of this assignment toward the final DASC516 module grade is not stated in any source document.",
        "Submission method/platform is not stated in the Student Guide.",
        "The intervention scenario itself is announced live in the Week 9 workgroup activity and is not contained in the Student Guide — not invented here.",
        "Learning outcomes are not listed in the Student Guide.",
      ],
    },
  ],
  notes: [
    "Both supplied 'GAI cover sheet' files (the Assignment 1 'Critical Appraisal' cover sheet and the file uploaded as the Assignment 2 'Written Report' cover sheet) are byte-identical duplicates (matching MD5 checksum). The file labelled as the Assignment 2 cover sheet still internally reads 'Assignment 1: Written Report / Critical appraisal of trial designs' throughout — it has not been updated for Assignment 2. This looks like an administrative copy-paste error in the university's source files, not something to silently correct: verify with the module team before submission if this affects your submission process. Both cover sheet instances otherwise require the same fields: Date, Word Count, Student ID number, and a Generative AI (GAI) declaration ('I did not use GAI...' or 'I did use GAI...', with a summary of what it was used for and the prompts used if GAI was used).",
  ],
};
