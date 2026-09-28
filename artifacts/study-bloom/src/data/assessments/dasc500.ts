import type { ModuleInfo } from "./types";

export const dasc500: ModuleInfo = {
  code: "DASC500",
  name: "DASC500",
  assessments: [
    {
      id: "dasc500-continual-assessment",
      moduleCode: "DASC500",
      title: "ASSIGNMENT 3 – Continual Assessment",
      type: "Structured logbook / reflective log, maintained in Microsoft Teams (Class Notebook), 12 pre-made pages.",
      weighting: "5% of total module mark.",
      wordCount: "No word count; \"Recommend 10 logbook entries.\"",
      submissionMethod: "Maintained directly in Teams Class Notebook — no separate file upload.",
      deadlineISO: "2027-08-27",
      deadlineDisplay: "Friday 27th August 2027 – 4pm (full-time) / Friday 25th August 2028 – 4pm (part-time)",
      deadlineConflictNote: "The source guide gives two separate submission dates depending on study mode: Friday 27th August 2027, 4pm for full-time students and Friday 25th August 2028, 4pm for part-time students. The earlier (full-time) date is used for the countdown; part-time students should verify which date applies to them on Canvas.",
      setDate: "Week 1, Semester 1",
      learningOutcomes: ["Not listed."],
      description:
        "\"In brief, you are required to maintain a structured logbook using the tool in Teams. This forms 5% of your total module mark, but more importantly, it reflects your professional engagement, planning, and reflective practice, essential skills for health data scientists.\" \"Think of the logbook as your personal research diary... It should track your journey from initial idea to final dissertation.\" Each entry should include: Date; Summary of activities; Actions agreed/next steps; Reflections (what went well, what was difficult, what you learned).",
      taskSteps: [
        {
          title: "Open the Teams Class Notebook logbook",
          detail: "Locate the 12 pre-made pages set up in Microsoft Teams (Class Notebook) — this is where the logbook is maintained directly; there is no separate file to upload.",
        },
        {
          title: "Start entries in Week 1",
          detail: "Begin logging from Week 1 of Semester 1, since the set date is Week 1 and the guide frames the logbook as tracking your journey \"from initial idea to final dissertation.\"",
        },
        {
          title: "Aim for around 10 entries",
          detail: "There is no set word count, but the guide recommends 10 logbook entries across the assessment period — pace entries out rather than writing them all at once.",
        },
        {
          title: "Structure each entry consistently",
          detail: "For every entry record: the Date; a Summary of activities; Actions agreed / next steps; and Reflections covering what went well, what was difficult, and what you learned.",
        },
        {
          title: "Record supervisor interaction",
          detail: "Note discussions and engagement with your supervisor in entries, since Communication (10%) and Interaction (5%) are separately marked domains focused on how progress and engagement are conveyed.",
        },
        {
          title: "Show planning for upcoming stages",
          detail: "Include forward-looking notes on next steps and subsequent investigation stages, since Planning (5%) and Time Management (10%) are assessed on evidence of scheduling and organisation.",
        },
        {
          title: "Keep GenAI use within Tier 2 limits",
          detail: "If using GenAI tools, restrict use to the permitted, specified ways only — GenAI \"must not replace your own thinking or produce the main content of your work.\"",
        },
        {
          title: "Review entries before the deadline",
          detail: "Check that entries collectively demonstrate record-keeping quality, independence, and commitment before the Friday 27th August 2027 (full-time) / 25th August 2028 (part-time), 4pm deadline.",
        },
      ],
      topBandGuidance:
        "Across the eleven domains, the top band (A*) descriptors consistently describe exemplary, largely independent performance: exemplary understanding with the ability to rationally adapt methodology, refining one's own methodology, comprehensive and fully intelligible records from which work \"could easily be repeated,\" novel data interpretations potentially suitable for publication, and devising long-term schedules with little supervisor input. Lower bands (B, C) describe competence that still needs regular assistance, guidance, or prompting, while D and F bands describe minimal or absent engagement, understanding, or attendance. The top band criteria describe independence, initiative, and polish beyond simply completing the required tasks.",
      goodWorkLooksLike: [
        "A comprehensive, concise, and fully intelligible logbook from which the work could be repeated from the notes alone.",
        "Entries that show a rationale for methodology choices, not just a record of what was done.",
        "Regular, dated entries evidencing consistent commitment and full attendance/engagement rather than sporadic catch-up entries.",
        "Reflections that draw valid conclusions from data/literature and, where possible, show novel insight.",
        "Evidence of planning subsequent stages in detail with minimal need for supervisor prompting.",
        "Entries that show productive, proactive communication and interaction with the supervisor and other staff.",
      ],
      genAiTier: "Tier 2 — Contextual support (Limited / Assistive use)",
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Understanding – of investigatory methods",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Exemplary understanding of all methods used. Can rationally adapt methodology." },
                  { band: "A", range: "70-79%", text: "Understands the detailed rationale of almost all methodology." },
                  { band: "B", range: "60-69%", text: "Understands the principles of all methods used." },
                  { band: "C", range: "50-59%", text: "Understands the principles of most methods used." },
                  { band: "D", range: "40-49%", text: "Little understanding of the background of methodology; blindly follows instructions." },
                  { band: "F", range: "0-39%", text: "No real understanding of the methodology and/or substantial lack of attendance and engagement makes judgment difficult or impossible." },
                ],
              },
              {
                name: "Skills – technical/procedural capability",
                weight: "15%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Developed and/or refined own methodology in furtherance of the aims of the project." },
                  { band: "A", range: "70-79%", text: "Able to reproduce methodology successfully from published sources." },
                  { band: "B", range: "60-69%", text: "Easily acquired and retained methodological skills." },
                  { band: "C", range: "50-59%", text: "Acquires relevant methodological skills. Learned from mistakes in early attempts to master methodology." },
                  { band: "D", range: "40-49%", text: "Difficulty in assimilating relevant methodology; forgetful of details. Acquires only a limited skill set." },
                  { band: "F", range: "0-39%", text: "It is anticipated that any student showing reasonable attendance and engagement with the project will tend to improve on this column." },
                ],
              },
              {
                name: "Record Keeping – quality of logbook entries",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Comprehensive, concise and fully intelligible record of both methods and outcomes. Work could easily be repeated from notes." },
                  { band: "A", range: "70-79%", text: "Largely comprehensive and intelligible records. Investigations could probably be repeated from notes." },
                  { band: "B", range: "60-69%", text: "Reasonable notes with most details recorded." },
                  { band: "C", range: "50-59%", text: "Record of date and outline of most investigations available." },
                  { band: "D", range: "40-49%", text: "Virtually no adequate notes/records of investigations carried out." },
                  { band: "F", range: "0-39%", text: "No record of investigations. Substantial lack of attendance and engagement makes judgment difficult or impossible." },
                ],
              },
              {
                name: "Data – accuracy and reliability of sources",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Data/information gathered of publishable quality." },
                  { band: "A", range: "70-79%", text: "Data/information very sound - can be relied on." },
                  { band: "B", range: "60-69%", text: "Normally reliable data/info. Only occasional lapses in reproducibility." },
                  { band: "C", range: "50-59%", text: "Some useful and reliable data/information may be obtained" },
                  { band: "D", range: "40-49%", text: "Little confidence in reliability of data/information. Data may be poorly controlled" },
                  { band: "F", range: "0-39%", text: "No attempt to analyse or present data." },
                ],
              },
              {
                name: "Interpretation – of data and literature",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Demonstrates novel insights into or interpretations of data, potentially suitable for publication." },
                  { band: "A", range: "70-79%", text: "Shows good interpretive skill and ability to draw valid/sensible conclusions from data." },
                  { band: "B", range: "60-69%", text: "Often able to draw plausible conclusions; may require assistance in some cases." },
                  { band: "C", range: "50-59%", text: "Attempts analysis of data, but not all conclusions may be valid" },
                  { band: "D", range: "40-49%", text: "Very limited explanation for the data and/or ability to draw conclusions. May use incorrect methods and/or logic." },
                  { band: "F", range: "0-39%", text: "Fails to attempt any interpretation of the data or literature." },
                ],
              },
              {
                name: "Planning – for upcoming stages",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Competent to devise all subsequent investigations in detail with little supervisor input." },
                  { band: "A", range: "70-79%", text: "Able to devise most control or follow-up investigations, but needs help with fine detail." },
                  { band: "B", range: "60-69%", text: "Offers planning of some, but not all, subsequent parts of the investigation" },
                  { band: "C", range: "50-59%", text: "Identifies broad direction of subsequent investigation, but needs assistance with planning." },
                  { band: "D", range: "40-49%", text: "Unable to suggest any plausible follow-up or control investigations." },
                  { band: "F", range: "0-39%", text: "No attempt at planning." },
                ],
              },
              {
                name: "Time Management – evidence of organisation",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Devises long-term schedules and dovetails multiple tasks to optimise efficiency." },
                  { band: "A", range: "70-79%", text: "Able to devise and execute short and medium term schedule with little assistance" },
                  { band: "B", range: "60-69%", text: "Can plan and execute short-term tasks to fit in available time." },
                  { band: "C", range: "50-59%", text: "Difficulty with planning; assistance required with schedule." },
                  { band: "D", range: "40-49%", text: "Unable to plan schedule. Constant instruction required for time management." },
                  { band: "F", range: "0-39%", text: "Severely deficient time management and/or with substantial lack of attendance and engagement" },
                ],
              },
              {
                name: "Independence – working without close prompting",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Worked primarily independently. Little advice required." },
                  { band: "A", range: "70-79%", text: "Developed ability to work largely independently, but sought advice where appropriate" },
                  { band: "B", range: "60-69%", text: "Gained independence, but still required help on a regular basis." },
                  { band: "C", range: "50-59%", text: "Able to work appropriately but still requires significant guidance." },
                  { band: "D", range: "40-49%", text: "Very little initiative. Dependent on constant supervision and instruction throughout project." },
                  { band: "F", range: "0-39%", text: "Unable to carry out any independent work." },
                ],
              },
              {
                name: "Communication – clarity in communicating progress",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Initiates discussion with supervisor and conveys easily a full account of progress." },
                  { band: "A", range: "70-79%", text: "Can give a good account of progress with little or no prompting" },
                  { band: "B", range: "60-69%", text: "Able to give a complete account of progress in discussion with supervisor." },
                  { band: "C", range: "50-59%", text: "Can give an satisfactory account of progress but may require leading questions from the supervisor" },
                  { band: "D", range: "40-49%", text: "Struggles to give any account of progress even with prompting." },
                  { band: "F", range: "0-39%", text: "Unable or unwilling to relay progress." },
                ],
              },
              {
                name: "Interaction – quality of engagement with supervisor",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Productive interaction and discussion with other staff, enhancing progress of project." },
                  { band: "A", range: "70-79%", text: "Interacts productively with other staff when possible." },
                  { band: "B", range: "60-69%", text: "Good interaction with other staff at a level that is productive" },
                  { band: "C", range: "50-59%", text: "Interactions with other staff have satisfactory outcomes" },
                  { band: "D", range: "40-49%", text: "Very limited interactions or interactions that include inappropriate or inconsiderate attitude to other workers or support staff" },
                  { band: "F", range: "0-39%", text: "Frequent inappropriate or inconsiderate attitude to other workers or support staff." },
                ],
              },
              {
                name: "Commitment – consistency, reliability, and effort",
                weight: "20%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Very highly committed and motivated. Made full and productive use of time." },
                  { band: "A", range: "70-79%", text: "Enthusiastic about project. Reliable, with full attendance." },
                  { band: "B", range: "60-69%", text: "Showed good interest in project work with only occasional lapses. Available time adequately utilised" },
                  { band: "C", range: "50-59%", text: "Satisfactory, but not complete attendance or application." },
                  { band: "D", range: "40-49%", text: "Uncommitted and unreliable. Demonstrated very limited interest in or motivation for project work" },
                  { band: "F", range: "0-39%", text: "Substantial lack of attendance and engagement" },
                ],
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment." },
              { label: "Category 1", text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)." },
              { label: "Category 2/3/4", text: "Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work — all suspected cases must be referred to the Academic Integrity Officer." },
            ],
          },
        ],
      },
      gaps: [
        "Numbered learning outcomes not listed in any of the three guides.",
        "Continual Assessment has no numeric word count.",
      ],
    },
    {
      id: "dasc500-dissertation",
      moduleCode: "DASC500",
      title: "ASSIGNMENT 1 – Dissertation",
      type: "Written dissertation (independent research project).",
      weighting: "85% of overall module mark.",
      wordCount: "10,000 words + 10% (excluding abstract, references, appendices, tables/figures).",
      submissionMethod: "Not explicitly named; GenAI-use cover sheet required (Canvas).",
      deadlineISO: "2027-08-27",
      deadlineDisplay: "Friday 27th August 2027 – 4pm (full-time) / Friday 25th August 2028 – 4pm (part-time)",
      deadlineConflictNote: "The source guide gives two separate submission dates depending on study mode: Friday 27th August 2027, 4pm for full-time students and Friday 25th August 2028, 4pm for part-time students. The earlier (full-time) date is used for the countdown; part-time students should verify which date applies to them on Canvas.",
      setDate: "Week 1, Semester 1",
      learningOutcomes: ["Not listed."],
      description:
        "\"In brief, the dissertation contributes 85% of your overall module mark and should demonstrate your ability to design, conduct, analyse, and present a piece of research relevant to health data science.\" Formatting: Font Arial size 12; double line spacing; margins 2.5cm all sides; no footnotes/endnotes; pages numbered. \"Each dissertation is independently marked by two examiners, one of whom is normally your supervisor.\"",
      taskSteps: [
        {
          title: "Confirm formatting requirements up front",
          detail: "Set the document to Arial size 12, double line spacing, 2.5cm margins on all sides, no footnotes/endnotes, and numbered pages before drafting, so the finished dissertation doesn't need reformatting later.",
        },
        {
          title: "Plan for the word count",
          detail: "Target 10,000 words + 10%, excluding the abstract, references, appendices, and tables/figures — track word count against this limit as you draft each section.",
        },
        {
          title: "Draft the structured abstract last",
          detail: "Write a structured abstract of max 300 words covering Background / Methods / Results / Conclusions plus 5 keywords, once the main findings and conclusions are finalised.",
        },
        {
          title: "Build the Introduction & Background with a critical literature review",
          detail: "Cover the health data science problem, its context and setting, key terms/concepts, clear study aims/hypotheses, and a critical (not just descriptive) evaluation of previous research and its methods/limitations.",
        },
        {
          title: "Write Methods in the past tense with replicable detail",
          detail: "Describe data collection/simulation strategies and the data analysis strategy and process in enough detail that another researcher could repeat the study.",
        },
        {
          title: "Report Results with both significant and non-significant findings",
          detail: "Use appropriate tables/figures, apply summary and visualisation techniques correctly, check and report on assumptions, and interpret the data rather than just listing facts.",
        },
        {
          title: "Write a critical Discussion",
          detail: "Highlight the main finding, strengths and weaknesses of the methods and results, explore alternative approaches, situate the study in the context of other relevant work, and critically appraise its wider relevance.",
        },
        {
          title: "Finish with Conclusion/Recommendations, References and Appendices",
          detail: "State clear, reflective, relevant conclusions and justifiable recommendations for further research; format references in Harvard or Vancouver style; include appendices such as literature search strategy, code/scripts, and additional tables. If GenAI was used, prepare the required cover sheet documenting prompts, outputs, edits and a critical evaluation of AI contributions.",
        },
      ],
      topBandGuidance:
        "Across the seven marked sections, the A* band consistently describes work that \"could not be improved\": a structured, accurate abstract within the word limit, a critical (not merely descriptive) literature review with explicit, rational study aims, methods described in enough detail to enable exact repetition, results that are correctly analysed with assumptions checked and appropriately interpreted, a discussion that critiques the work against other relevant literature and appraises its wider relevance, and a dissertation that is clearly and coherently written with no typographical or grammatical errors. Lower bands describe the same elements as progressively less complete, less rationale-driven, or missing — for example results \"listed only as facts\" or a discussion with no strengths/weaknesses or alternative approaches explored. The top band criteria describe critical depth and precision throughout, not just coverage of the required sections.",
      goodWorkLooksLike: [
        "A structured abstract (Background/Methods/Results/Conclusions + 5 keywords) that is accurate and within the 300-word limit.",
        "An Introduction & Background that critically evaluates prior research's methods and limitations, not just summarises it.",
        "Methods described in enough detail that the study could be replicated exactly.",
        "Results that check and report assumptions, use appropriate summary/visualisation techniques, and interpret findings rather than only listing them.",
        "A Discussion that critiques the study against other relevant work and appraises the wider relevance of the findings.",
        "A dissertation free of typographical/grammatical errors, with clear structure and flow, and appendices that are appropriate and justifiable.",
      ],
      genAiTier: "Tier 3 — Structural scaffold (Exploratory / Critical use)",
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Structured Abstract",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Abstract is a structured, clear, & accurate summary, within the word-limit (300 words). The abstract could not be improved." },
                  { band: "A", range: "70-79%", text: "Abstract is a structured and mostly clear & accurate summary, within the word-limit." },
                  { band: "B", range: "60-69%", text: "Abstract is structured. It might contain 1-2 minor errors or be 50 words over or under the word limit." },
                  { band: "C", range: "50-59%", text: "Abstract is not structured. It is understandable but with 2+ errors or 100 words over or under the word limit." },
                  { band: "D", range: "40-49%", text: "Abstract is not structured. It is mostly inaccurate and unclear leading to a lack of understanding by the end user or 150 words over or under the word limit." },
                  { band: "F", range: "0-39%", text: "No abstract provided" },
                ],
              },
              {
                name: "Introduction & Background",
                weight: "15%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Background outlines sufficiently the health data science problem, its context, the setting, and key terms/concepts; study aims are clear & rational and context are explicit; critical evaluation of previous research is detailed enough to show good understanding of methods & limitations of methods & approaches used. The introduction could not be improved." },
                  { band: "A", range: "70-79%", text: "Background outlines sufficiently the health data science problem, its context, the setting, and key terms/concepts; study aims are mostly clear & rational and context are fairly explicit; critical evaluation of previous research is detailed enough to mostly show good understanding of methods & limitations of methods & approaches used." },
                  { band: "B", range: "60-69%", text: "Background introduces the health data science problem, its context, the setting, and key terms/concepts; study aims are fairly clear & rational; some evaluation of previous research showing some understanding of methods & limitations of methods & approaches used." },
                  { band: "C", range: "50-59%", text: "Background briefly outlines the health data science problem; study aims are minimal; limited evaluation of previous research." },
                  { band: "D", range: "40-49%", text: "Background does not outline the health data science problem; there are no study aims; no evaluation of previous research." },
                  { band: "F", range: "0-39%", text: "No introduction provided" },
                ],
              },
              {
                name: "Methods",
                weight: "20%",
                sourceNote: "The md source reproduces the typo \"faciliate\" (for \"facilitate\") in both the C and D band text, marked (sic) in the source; kept verbatim here.",
                bands: [
                  { band: "A*", range: "80-100%", text: "Methods are appropriate to the study with clear rationale; appropriate data collection/simulation strategies clearly described; data analysis strategy & process appropriate, and described in sufficient detail to enable repetition. The methods could not be improved." },
                  { band: "A", range: "70-79%", text: "Methods are appropriate to the study with clear rationale; appropriate data collection/simulation strategies mostly clearly described; data analysis strategy & process appropriate, and described in sufficient detail to enable repetition." },
                  { band: "B", range: "60-69%", text: "Methods are mostly appropriate to the study with some rationale; data collection/simulation strategies described but missing information or too detailed; data analysis strategy & process appropriate, and described in some detail though replication may be challenging." },
                  { band: "C", range: "50-59%", text: "Methods are sometimes appropriate to the study but without rationale; data collection/simulation strategies only briefly described; data analysis strategy & process mostly inappropriate, and not described in enough detail to faciliate replication. (sic)" },
                  { band: "D", range: "40-49%", text: "Methods are not appropriate to the study and without rationale; data collection/simulation strategies not described; data analysis strategy & process inappropriate, and not described in enough detail to faciliate replication. (sic)" },
                  { band: "F", range: "0-39%", text: "No methods section provided" },
                ],
              },
              {
                name: "Results",
                weight: "20%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Results/findings are appropriate to the study aims/research questions & there's evidence of understanding; summary & visualisation techniques are used appropriately, analysis methods have been applied correctly and any assumptions been checked; there is appropriate interpretation of the data. The results section could not be improved." },
                  { band: "A", range: "70-79%", text: "Results/findings are appropriate to the study aims/research questions & there's evidence of some understanding; summary & visualisation techniques are used appropriately, analysis methods have been applied correctly and some assumptions been checked; there is appropriate interpretation of the data." },
                  { band: "B", range: "60-69%", text: "Results/findings are mostly appropriate to the study aims/research questions; summary & visualisation techniques are used mostly appropriately although may include too few or too many summaries, analysis methods have been applied mostly correctly. Limited assumptions have been checked; there is some appropriate interpretation of the data." },
                  { band: "C", range: "50-59%", text: "Results/findings are generally listed as facts without links to the study aims/research question; summary & visualisation techniques are used mostly inappropriately or without rationale, analysis methods have been applied mostly incorrectly. No assumptions have been checked; there is limited interpretation of the data." },
                  { band: "D", range: "40-49%", text: "Results/findings are listed only as facts; summary & visualisation techniques are missing or inappropriate; analysis methods are missing or incorrect. No assumptions have been checked; there is no interpretation of the data." },
                  { band: "F", range: "0-39%", text: "No results section provided" },
                ],
              },
              {
                name: "Discussion",
                weight: "20%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Main finding, strengths & weaknesses of the methods & results are highlighted & alternative approaches are explored appropriately, showing good understanding of research methods and their limitations; study is discussed in the context of other relevant work and the study aims & other relevant work has been critiqued in light of this research; the wider relevance of the finding for the health/research has been appraised critically. The discussion could not be improved." },
                  { band: "A", range: "70-79%", text: "Main finding, strengths & weaknesses of the methods & results are highlighted & alternative approaches are occasionally explored appropriately, showing good understanding of research methods and their limitations; study is discussed in the context of other relevant work and the study aims & other relevant work has been mostly critiqued in light of this research; the wider relevance of the finding for the health/research has been appraised critically." },
                  { band: "B", range: "60-69%", text: "Main finding plus some strengths & weaknesses of the methods & results are highlighted. Alternative approaches may have been explored, showing some understanding of research methods and their limitations; study is discussed in the context of other relevant work but the study aims & other relevant work has not been critiqued in light of this research; the wider relevance of the finding for the health/research has been appraised but not always critically." },
                  { band: "C", range: "50-59%", text: "Main finding is highlighted but without strengths & weaknesses of the methods & results. No alternative approaches are explored, showing limited understanding of research methods and their limitations; study is discussed in the context of other relevant work but the study aims & other relevant work has not been critiqued in light of this research; the wider relevance of the finding for the health/research has not been appraised." },
                  { band: "D", range: "40-49%", text: "No main finding is described and there are no strengths & weaknesses of the methods & results. No alternative approaches are explored. Study is not discussed in the context of relevant work. Wider relevance of the finding for the health/research has not been appraised." },
                  { band: "F", range: "0-39%", text: "No discussion section provided" },
                ],
              },
              {
                name: "Conclusion & Recommendations",
                weight: "5%",
                bands: [
                  { band: "A*", range: "80-100%", text: "The conclusions are clear, reflective, and relevant to the study; the recommendations for further research in health data science are clear, relevant, and justifiable. The conclusion could not be improved." },
                  { band: "A", range: "70-79%", text: "The conclusions are mostly clear, reflective, and relevant to the study; the recommendations for further research in health data science are mostly clear, relevant, and justifiable." },
                  { band: "B", range: "60-69%", text: "The conclusions are fairly clear, reflective, and relevant to the study; the recommendations for further research in health data science are clear but may lack relevance and justification." },
                  { band: "C", range: "50-59%", text: "There are minimal conclusions and are unclear or not reflective and relevant to the study; there are limited recommendations for further research that lack clarity, relevance and justification." },
                  { band: "D", range: "40-49%", text: "The conclusions are not clear nor reflective and relevant to the study; there are no recommendations for further research." },
                  { band: "F", range: "0-39%", text: "No conclusion section provided" },
                ],
              },
              {
                name: "Presentation & Referencing",
                weight: "10%",
                sourceNote: "The md source reproduces the spelling \"fairy\" (for \"fairly\") in the B band text, marked (sic) in the source; kept verbatim here.",
                bands: [
                  { band: "A*", range: "80-100%", text: "The dissertation is written clearly without typographical & grammatical errors; there is a good structure & flow and coherent throughout; appendices are appropriate and justifiable. The presentation could not be improved." },
                  { band: "A", range: "70-79%", text: "The dissertation is written clearly without typographical & grammatical errors; there is a good structure & flow and mostly coherent throughout; appendices are appropriate and usually justifiable." },
                  { band: "B", range: "60-69%", text: "The dissertation is written fairly clearly with minimal typographical & grammatical errors; there is a fairly good structure & flow and it is fairy coherent throughout; appendices are mostly appropriate and usually justifiable. (sic \"fairy\")" },
                  { band: "C", range: "50-59%", text: "The dissertation sometimes lacks clarity or contains several typographical & grammatical errors; structure & flow is generally weak leading to a lack of coherence throughout; appendices are rarely appropriate and justifiable." },
                  { band: "D", range: "40-49%", text: "The dissertation lacks clarity or contains multiple typographical & grammatical errors; there is minimal structure & flow leading to a lack of coherence throughout; appendices are rarely appropriate and justifiable." },
                  { band: "F", range: "0-39%", text: "No presentation section provided" },
                ],
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment." },
              { label: "Category 1", text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)." },
              { label: "Category 2/3/4", text: "Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work — all suspected cases must be referred to the Academic Integrity Officer." },
            ],
            note: "Each dissertation is independently marked by two examiners, one of whom is normally your supervisor.",
          },
        ],
      },
      gaps: [
        "Numbered learning outcomes not listed in any of the three guides.",
        "Dissertation submission platform not explicitly named beyond GenAI cover sheet on Canvas.",
      ],
    },
    {
      id: "dasc500-oral-presentation",
      moduleCode: "DASC500",
      title: "ASSIGNMENT 2 – Oral Presentation",
      type: "Live oral presentation of dissertation progress (in person), slides submitted via Canvas.",
      weighting: "10% of overall DASC500 mark, \"assessed by the second marker of your dissertation.\"",
      timeLimit: "10 minutes + 10%.",
      submissionMethod: "PowerPoint slides uploaded to Canvas; delivered live, must attend in person.",
      deadlineISO: "2027-07-12",
      deadlineDisplay: "Slides due Monday 12th July 2027, 4pm (full-time) or Monday 10th July 2028, 4pm (part-time) — but the guide separately states \"the date of the presentations will be announced in Semester 2\"; both statements are reported as given since the source does not reconcile them.",
      deadlineConflictNote: "The source guide gives two different kinds of conflicting information: (1) two slide submission dates depending on study mode (Monday 12th July 2027, 4pm full-time vs Monday 10th July 2028, 4pm part-time), and (2) a separate statement elsewhere in the same guide that \"the date of the presentations will be announced in Semester 2,\" which is not reconciled with the stated submission dates. The earliest stated slide-submission date (12 July 2027) is used for the countdown; verify the actual presentation date on Canvas once announced in Semester 2.",
      setDate: "Week 1, Semester 1",
      learningOutcomes: ["Not listed."],
      description:
        "\"In brief, the oral presentation offers a valuable opportunity to: Share your dissertation progress with peers and the teaching team; Receive formative feedback to strengthen your final project; Highlight challenges and seek support.\" \"You are not expected to have final results—this is a checkpoint to help guide your remaining work.\"",
      taskSteps: [
        {
          title: "Build slides around the recommended 10-minute structure",
          detail: "Follow the recommended structure: Introduction to the Problem; Methods Overview; Early Findings (if available); Next Steps; Engagement with Feedback.",
        },
        {
          title: "Keep to the time limit",
          detail: "Plan the delivery for 10 minutes + 10% — rehearse with a timer since Presentation structure (20%) specifically marks on \"Presentation is the correct length.\"",
        },
        {
          title: "Do not overclaim results",
          detail: "Remember \"you are not expected to have final results—this is a checkpoint\"; present early findings if available, or explain progress honestly if not, rather than forcing conclusions.",
        },
        {
          title: "Design professional, uncluttered slides",
          detail: "Use text and graphics together appropriately, with appropriately sized text and clear content — avoid slides with too much content or small text, which the rubric explicitly penalises.",
        },
        {
          title: "Upload slides to Canvas by the deadline",
          detail: "Submit the PowerPoint slides to Canvas by the stated deadline (verify the current year/date given the source's date discrepancy).",
        },
        {
          title: "Prepare to discuss challenges and seek support",
          detail: "Since the presentation exists partly to \"Highlight challenges and seek support,\" prepare to speak candidly about difficulties encountered so far, not just successes.",
        },
        {
          title: "Practise fielding questions",
          detail: "Prepare for the Discussion domain (15%) by rehearsing critical, evidence-based responses to likely questions about your own results, conclusions, and methodology choices.",
        },
        {
          title: "Attend and deliver live, in person",
          detail: "Confirm attendance requirements — the presentation must be delivered live and in person, so plan travel/availability once the date is announced in Semester 2.",
        },
      ],
      topBandGuidance:
        "Across the six marked domains, the A* band describes presentations that \"could not be improved\": an excellent, clinically-contextualised problem description, a chosen methodology described with evaluation of its own strengths and weaknesses, professional slides with appropriately sized text and clear graphics, a well-balanced story with all elements present and correct timing, consistently enthusiastic and clear delivery, and critical, evidence-based answers to questions. Lower bands describe the same elements with less evaluation, less balance, or more difficulty (e.g. slides with too much content, sections not well-balanced, or an inability to properly defend results). The top band criteria describe not just covering the recommended structure but doing so with critical evaluation, polish, and confident engagement with the audience.",
      goodWorkLooksLike: [
        "Slides that use both text and graphics professionally, with appropriately sized text and clear content on every slide.",
        "A talk that evaluates the strengths and weaknesses of the chosen methodology rather than just describing it.",
        "A well-balanced 10-minute structure covering the goal of the research clearly, with all elements timed appropriately.",
        "Delivery that projects enthusiasm, uses a clear voice and good pace, with logical transitions between sections.",
        "Confident, evidence-based responses to audience questions that draw on your own results or wider literature.",
        "Honesty about being a checkpoint — presenting early findings and challenges rather than overstating progress.",
      ],
      genAiTier: "Tier 2 — Contextual support (Limited / Assistive use)",
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Introduction to the problem",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Excellent description of the problem being addressed with clear clinical context. Introduction could not be improved." },
                  { band: "A", range: "70-79%", text: "Very good description of the problem being addressed with clear clinical context." },
                  { band: "B", range: "60-69%", text: "Good description of the problem being addressed with fairly clear clinical context." },
                  { band: "C", range: "50-59%", text: "Reasonable description of the problem being addressed with limited clinical context." },
                  { band: "D", range: "40-49%", text: "Poor description of the problem being addressed. No clinical context." },
                  { band: "F", range: "0-39%", text: "No introduction provided." },
                ],
              },
              {
                name: "Summary of methods",
                weight: "25%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Excellent description of appropriately chosen methodology with evaluation of strengths and weaknesses of the approach(es). Description could not be improved." },
                  { band: "A", range: "70-79%", text: "Very good description of appropriately chosen methodology with evaluation of most strengths and weaknesses." },
                  { band: "B", range: "60-69%", text: "Good description of appropriately chosen methodology with evaluation of some strengths and weaknesses." },
                  { band: "C", range: "50-59%", text: "Reasonable description of mostly appropriately chosen methodology. No evaluation of strengths and/or weaknesses." },
                  { band: "D", range: "40-49%", text: "Poor description and/or inappropriate methodology. No evaluation of strengths and/or weaknesses." },
                  { band: "F", range: "0-39%", text: "No methodology described." },
                ],
              },
              {
                name: "Quality of slides",
                weight: "10%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Excellent use of both text and appropriate graphics to communicate the assessment of the paper. Slides look professional, and have appropriately sized text, and clear content." },
                  { band: "A", range: "70-79%", text: "Good use of both text and graphics to communicate the assessment of the paper. Slides look professional, and have appropriately sized text, and clear content." },
                  { band: "B", range: "60-69%", text: "Good use of both text and graphics to communicate the assessment of the paper. Some slides have too much content or small text." },
                  { band: "C", range: "50-59%", text: "Reasonable use of both text or graphics to communicate the assessment of the paper. Some slides have too much content or small text. Choice of graphics could have been improved" },
                  { band: "D", range: "40-49%", text: "Poor presentation of slides. Most slides have too much content, and are difficult to read. Text is too small, with little use of graphics." },
                  { band: "F", range: "0-39%", text: "Very plain slides with few or no graphics. Difficult to identify the main points on each slide. Slides do not aid the presentation." },
                ],
              },
              {
                name: "Structure of the presentation",
                weight: "20%",
                sourceNote: "The md source reproduces the typo \"commuicated\" (for \"communicated\") in the F band text, marked (sic) in the source; kept verbatim here.",
                bands: [
                  { band: "A*", range: "80-100%", text: "Excellent story telling with all relevant elements and a balance between sections. Message could not be improved." },
                  { band: "A", range: "70-79%", text: "The goal of the research is clear and the rest of the presentation is logically connected to it, and starts a substantive discussion. All necessary elements are present and receive a balanced amount of time. Presentation is the correct length." },
                  { band: "B", range: "60-69%", text: "The goal of the research is explained well. The audience can reproduce parts of the presentation afterwards. The presentation brings forth a good discussion. Overall timing is good with all elements well-balanced." },
                  { band: "C", range: "50-59%", text: "Most audience can follow the story. The goal of the research is mentioned. All components are discussed in a logical order, but some links are missing or the division of time is not ideal." },
                  { band: "D", range: "40-49%", text: "Only a few members of the audience can follow the presentation. Sections are not well balanced. Presentation is too long or too short." },
                  { band: "F", range: "0-39%", text: "Presentation is either completely above the level of the audience or below it. Audience cannot understand presentation well due to a lack of structure. The goal of the analysis or presentation is not commuicated. (sic)" },
                ],
              },
              {
                name: "Effective communication (clarity, pace, tone)",
                weight: "20%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Exudes enthusiasm throughout the presentation. Uses a clear voice throughout and uses a consistent, appropriate pace. Communication could not be improved." },
                  { band: "A", range: "70-79%", text: "Projects enthusiasm about topic. Uses a clear voice and speaks at a good pace. Uses sentence stress effectively, and uses logical transitions between sections." },
                  { band: "B", range: "60-69%", text: "Demonstrates a clear, positive feeling about the topic during most of the presentation. Uses a clear voice and mostly speaks at a good pace." },
                  { band: "C", range: "50-59%", text: "Shows some interest in topic presented. Sometimes speaks too quietly for a majority of the audience to understand." },
                  { band: "D", range: "40-49%", text: "Shows little interest in topic presented. Speaks unclearly or in unfinished sentences." },
                  { band: "F", range: "0-39%", text: "Shows no interest in topic presented. Talks very fast, speaks too quietly or says \"uh\" after every sentence. Sentences are incomplete or incorrect and important points are not emphasised. English and language is limited and not professional." },
                ],
              },
              {
                name: "Quality of discussion (responses to questions)",
                weight: "15%",
                bands: [
                  { band: "A*", range: "80-100%", text: "Excellent critical and evidence-based answers and rebuttal of questions. Discussion could not be improved." },
                  { band: "A", range: "70-79%", text: "Can engage in a critical confrontation of their own results and conclusions, drawing on their own material or knowledge of the literature. Has the ability to convince the audience of their interpretations." },
                  { band: "B", range: "60-69%", text: "Can expand on the information on the slides to clarify and provide new insights. Answers to questions are to-the-point and concise." },
                  { band: "C", range: "50-59%", text: "Can reformulate the information on the slides to clarify, and answers most questions coherently." },
                  { band: "D", range: "40-49%", text: "Cannot properly defend their results or slides. Does not understand questions, and gives irrelevant or incomplete answers." },
                  { band: "F", range: "0-39%", text: "Cannot answer basic questions. Does not seem to understand what is on their slides or the basics of their own analysis." },
                ],
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment." },
              { label: "Category 1", text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)." },
              { label: "Category 2/3/4", text: "Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work — all suspected cases must be referred to the Academic Integrity Officer." },
            ],
          },
        ],
      },
      gaps: [
        "Numbered learning outcomes not listed in any of the three guides.",
        "Oral Presentation date discrepancy (slide submission dates vs. \"announced in Semester 2\") not reconciled in source documents.",
      ],
    },
  ],
};
