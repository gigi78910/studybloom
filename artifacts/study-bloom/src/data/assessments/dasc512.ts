import type { ModuleInfo } from "./types";

export const dasc512: ModuleInfo = {
  code: "DASC512",
  name: "Artificial Intelligence for Health",
  lecturer: "Dr Samuel Ball",
  assessments: [
    {
      id: "dasc512-a1",
      moduleCode: "DASC512",
      title: "ASSIGNMENT 1 -- Literature Review Presentation",
      type: "Recorded video presentation (critical literature review of one published ML/AI-in-healthcare paper, student's own choice)",
      weighting: "30% (stated on the lecturer's 'Guide to Success' slide deck, slide 3: \"Contribution to total module assessment: 30%\" — the written guide itself does not state a module percentage)",
      wordCount:
        "Not a word count — this is a recorded presentation. There is a genuine internal inconsistency in the guide over its length: the guide's header states \"Overall length: 15 minutes + 10%\" (consistent with the slide deck's \"maximum 15-minute recorded presentation\"), but the guide's own assignment-description paragraph separately states \"a maximum 10-minute recorded video presentation.\" Both figures appear in the same source document and are shown here rather than resolved to one.",
      submissionMethod:
        "Format: MP4 (preferred) or Recorded PowerPoint Presentation (with audio). No specific LMS/platform is named for the upload mechanism itself, though the rubric is stated to be \"available on CANVAS.\"",
      deadlineISO: null,
      deadlineDisplay:
        "Written guide states: Set Date Week 6, Semester 2; Submission Date 16th April 2027; Marks by 14th May 2027. The lecturer's own 'Guide to Success' slide deck (slide 3) instead states: Submission Date Week 8. Both are given here — confirm the exact date via Canvas or directly with Dr Samuel Ball.",
      deadlineConflictNote:
        "The written assignment guide and the lecturer's own slide deck state different deadlines and there is an overlap/conflict between them that has not been resolved. The guide gives a Set Date of Week 6, Semester 2, with a Submission Date of 16th April 2027 (and marks returned by 14th May 2027). The lecturer's 'Guide to Success' slide deck (slide 3) instead states the Submission Date as Week 8. Both documents look equally authoritative, so both versions are shown here rather than one being silently picked as correct — confirm the actual submission date via Canvas or with the lecturer before relying on either.",
      setDate: "Week 6, Semester 2 (per written guide); Week 8 (per lecturer's slide deck) — see deadlineConflictNote",
      description:
        "A maximum-length recorded video presentation critically evaluating a piece of current machine learning or artificial intelligence research on a healthcare problem chosen by the student. From the guide, verbatim: \"Artificial intelligence and machine learning research in healthcare is a fast-moving field, and critical analysis of current research is an essential skill in staying updated on the state-of-the-art methodologies.\" The format of the presentation is flexible, but must cover: introduction to the problem, explanation of the methodology, interpretation of results, and critique of the work. Students are also assessed on quality of communication and referencing. GenAI tier: Tier 2 — \"Contextual support: Limited/Assistive use.\" Guide's verbatim text: \"This assessment is Tier 2. GenAI is permitted only in restricted and specified ways, for example, for planning, editing or support tasks. GenAI is not central to demonstrating the learning outcomes and must not replace your own thinking or produce the main content of your work. If the use of GenAI is permitted, you must declare it in line with the guidance provided.\"",
      genAiTier:
        "Tier 2 — GenAI permitted only in restricted/specified ways (planning, editing, support tasks); must not replace the student's own thinking or produce the main content; use must be declared.",
      taskSteps: [
        {
          title: "Introduction to the Problem",
          detail:
            "Introduce the problem the paper is trying to solve. Why is the problem important from a health perspective? Why is it difficult from a technical perspective? Why isn't previous work adequate for solving the health problem?",
        },
        {
          title: "Explanation of the Methodology",
          detail:
            "Explain in your own words how the paper approaches the problem with a machine learning solution, illustrated with figures of your own, or figures taken from the paper. This should include a comprehensive overview of data preprocessing, metrics measured, algorithms used and any other validation processes.",
        },
        {
          title: "Interpretation of Results",
          detail:
            "Interpret the metrics of the paper. How do they compare to previous work? What is the clinical impact of higher metrics? Include figures where appropriate. If possible, try and think of interpretations beyond those written in the paper.",
        },
        {
          title: "Critique of the Work",
          detail:
            "Critically evaluate the paper chosen. What does it do right, and where could it have been improved? What ideas from the paper could be taken into further work? Are there any unanswered questions?",
        },
        {
          title: "Communication and referencing",
          detail:
            "You will also be assessed on the quality of your communication and referencing. Ensure figures are clear to read, text is clear, and references are used throughout the presentation to support your findings. The guide highly encourages expanding on the figures generated in the paper to produce your own visual aids.",
        },
      ],
      topBandGuidance:
        "Per the rubric, top marks (Distinction+, 80-100%) require: exceptionally clear understanding of the problem backed by additional references/statistics beyond the paper studied; exceptional understanding of the ML methods with additional, original visualisations/explanations; exceptional interpretation of results with further interpretation/insight beyond the paper; an exceptionally well-reasoned critique discussing trade-offs with ideas for further work; excellent storytelling/enthusiasm/pace with clear figures and text; and sophisticated engagement with academic sources referencing papers both within and outside the target paper's reference list. The guide itself states: \"top marks are only accessible for presentations with novel and critical ideas, interpretations and illustrations.\" The lecturer's slide deck (slide 8-10) frames this as bringing an original perspective in each section — e.g. considering other geographic/demographic angles in the introduction, new explanations/figures in methods, alternative uses of results, and identifying where the paper went wrong in the critique.",
      goodWorkLooksLike: [
        "Original perspective throughout, not just summary of the paper (per slide deck: \"Try and bring an original perspective\")",
        "Clinical AND machine-learning framing of the problem, not just one angle",
        "Own figures/visual aids illustrating the paper's methods and results, not only reused figures",
        "Interpretation and critique that go beyond what the paper itself says",
        "References used throughout to support findings, not just at the end",
        "Clear, well-paced speaking with figures and text that are easy to read",
      ],
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Introduction to Paper, Problem",
                weight: "10%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptionally clear understanding of the problem the paper is trying to solve; both from clinical and machine learning contexts. The intrro backed up by additional references and statistics in addition the paper studied." },
                  { band: "Distinction", range: "70-80%", text: "Very good understanding of the problem the paper is trying to solve, both from the clinical and machine learning contexts." },
                  { band: "Merit", range: "60-70%", text: "Good understanding of the problem addressed by the paper, either discussing the machine learning or clinical problem" },
                  { band: "Pass", range: "50-60%", text: "Developing understanding of how machine learning and public health problems relate. Some attempt at an introduction to the problem." },
                  { band: "Fail", range: "40-49%", text: "Demonstrates some understanding of the problem the paper is trying to solve, but is lacking significant detail" },
                  { band: "Fail", range: "0-40%", text: "No understanding of clinical problem" },
                ],
                sourceNote: "Reproduced verbatim from the source rubric, including the original typo \"intrro\" for \"intro\" in the Distinction+ band ([sic] in source).",
              },
              {
                name: "Understanding of Methodolgy",
                weight: "25%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptional understanding of the machine learning methods applied to the problem introducted in the paper; with additional, original visualisations/explainations to help explain." },
                  { band: "Distinction", range: "70-80%", text: "Very good understanding and explaination of the machine learning methods applied to the problem introduced in the paper, with plenty associated figures from the paper to illustrate points." },
                  { band: "Merit", range: "60-70%", text: "Good understanding of the machine learning methods applied to the problem introduced in the paper. Some attempt at explaining and illustrating methods using figures from the paper." },
                  { band: "Pass", range: "50-60%", text: "Some understanding of the machine learning methods applied in the paper. Some explaination of how methods work, with little reference to figures in the paper. Allow for some misunderstanding in how methods work." },
                  { band: "Fail", range: "40-49%", text: "Poor understanding of the methods in the paper. Clear lack of understanding in how machine learning methods work." },
                  { band: "Fail", range: "0-40%", text: "No discussion of methods" },
                ],
                sourceNote: "Criterion name and band text reproduced verbatim, including original typos \"Methodolgy\", \"introducted\", \"explainations\", \"explaination\" ([sic] in source).",
              },
              {
                name: "Intepretation of Results",
                weight: "25%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptional interpretation of the results: clear understanding of both clinical application and machine learning metrics. Further intepretation/insight to the paper's results" },
                  { band: "Distinction", range: "70-80%", text: "Strong intepretation of results, clear understanding of the clinical application and machine learning merics of the paper." },
                  { band: "Merit", range: "60-70%", text: "Good understanding of the results from the paper, with a clear understanding of either the clinical impact or machine learning angle of the paper." },
                  { band: "Pass", range: "50-60%", text: "Developing understanding of how to intepret machine learning paper results. Some attempt to intepret results through a machine learning or clinical lens" },
                  { band: "Fail", range: "40-49%", text: "Poor intepretation of machine learning results. No attempt to understand results clinically or in a machine learning context." },
                  { band: "Fail", range: "0-40%", text: "No interpretation of results" },
                ],
                sourceNote: "Criterion name and band text reproduced verbatim, including original typos \"Intepretation\"/\"intepretation\"/\"intepret\" and \"merics\" ([sic] in source).",
              },
              {
                name: "Critique/Discussion of Work",
                weight: "25%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptionally well reasoned critique of the paper, discussing the trade-offs associated with the method studied. Ideas provided for further work for the future." },
                  { band: "Distinction", range: "70-80%", text: "Very good, reasoned critique of the paper, discussing the trade-offs associated with the method studied; clear demonstration of a deep understanding of the studied paper." },
                  { band: "Merit", range: "60-70%", text: "Good critique of the paper, some discussions of trade-offs of the method studied. Some critiques may be hard to justify." },
                  { band: "Pass", range: "50-60%", text: "Some attempt at critiquing the paper; some original thoughts" },
                  { band: "Fail", range: "40-49%", text: "Limited critique of work; lacks sufficient understanding to make a reasoned argument for the pros and cons of the method in question." },
                  { band: "Fail", range: "0-40%", text: "No attempt to engage with critique of the work." },
                ],
              },
              {
                name: "Effective Communication",
                weight: "10%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Excellent storytelling, message, enhusiasm, speaking at a consistent pace. Appropriate figures and text are all easy to see." },
                  { band: "Distinction", range: "70-80%", text: "Very good presentation with clearly presented arguments. Mostly clear speaking. Most figures are appropriate to the data and text is easy to see" },
                  { band: "Merit", range: "60-70%", text: "Good presentation with a logical thread throughout. May include some presentation errors, some figures and text hard to read" },
                  { band: "Pass", range: "50-60%", text: "Some logical journey throughout the presentation. Figures and text not easy to see." },
                  { band: "Fail", range: "40-49%", text: "Poor presentation skills; presentation of figures and text is significantly difficult to read, and figures are inappropriate for the data used." },
                  { band: "Fail", range: "0-40%", text: "Poor presentation skills, no figures illustrating data, text difficult to read." },
                ],
                sourceNote: "Reproduced verbatim including original typo \"enhusiasm\" for \"enthusiasm\" ([sic] in source).",
              },
              {
                name: "Links to Literature",
                weight: "5%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Sophisticated engagement with academic sources. Citations are frequent, correctly used, and accurate. Work references papers both within and outside of target paper's reference list." },
                  { band: "Distinction", range: "70-80%", text: "Very good engagement with academic sources. Citations are present throughout the work (allowing for a few mistakes)." },
                  { band: "Merit", range: "60-70%", text: "Good engagement with academic sources. Citations are present in most of the work, with some errors." },
                  { band: "Pass", range: "50-60%", text: "A developing attempt to engage with academic sources, citations in the text are mostly accurate." },
                  { band: "Fail", range: "40-49%", text: "Little attmept to engage with academic sources, and when present, contain many mistakes" },
                  { band: "Fail", range: "0-40%", text: "No attempt to engage with acaedmic sources." },
                ],
                sourceNote: "Reproduced verbatim including original typos \"attmept\" and \"acaedmic\" ([sic] in source).",
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment" },
              { label: "Category 1", text: "Category 1: Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)" },
              { label: "Category 2, 3, 4", text: "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)" },
            ],
            note: "Transcribed verbatim from 07f943d1-Assessment_1_Rubric.xlsx, Sheet1. Bands: Distinction+ 80-100% | Distinction 70-80% | Merit 60-70% | Pass 50-60% | Fail 40-49% | Fail 0-40%.",
          },
        ],
      },
      gaps: [
        "The guide's header states \"Overall length: 15 minutes + 10%\" (matching the slide deck's \"maximum 15-minute recorded presentation\"), but the guide's own assignment-description paragraph separately states \"a maximum 10-minute recorded video presentation.\" This inconsistency is within the same source document and has not been resolved — both figures are shown in wordCount above.",
        "Learning outcomes are not listed anywhere in the guide or slide deck for this assessment.",
      ],
    },
    {
      id: "dasc512-a2",
      moduleCode: "DASC512",
      title: "ASSIGNMENT 2 -- Portfolio Project",
      type: "Written report describing an applied ML pipeline built by the student",
      weighting: "70% (stated on the lecturer's 'Guide to Success' slide deck, slide 3: \"Contribution to total module assessment: 70%\" — the written guide itself does not state a module percentage; this is consistent with Assignment 1's 30%, summing to 100%)",
      wordCount: "1,500 words + 10%, excluding captions, references, code (per guide: \"Overall length: 1,500 words + 10%, excluding captions, references, code.\" Slide deck confirms \"maximum 1500-word report.\")",
      submissionMethod:
        "Format: PDF (guide's own text has a typo, \"Fomat: PDF\"). No specific LMS/platform is named for the upload mechanism itself, beyond \"rubric available on CANVAS.\"",
      deadlineISO: null,
      deadlineDisplay:
        "Written guide states: Set Date Week 10, Semester 2; Submission Date 28th May 2027; Marks by Friday 25th June 2027. The lecturer's own 'Guide to Success' slide deck (slide 3) instead states: Submission Date Week 14. Both are given here — confirm the exact date via Canvas or directly with Dr Samuel Ball.",
      deadlineConflictNote:
        "The written assignment guide and the lecturer's own slide deck state different deadlines and there is an overlap/conflict between them that has not been resolved, the same pattern as Assignment 1. The guide gives a Set Date of Week 10, Semester 2, with a Submission Date of 28th May 2027 (marks by Friday 25th June 2027). The lecturer's 'Guide to Success' slide deck (slide 3) instead states the Submission Date as Week 14. Both documents look equally authoritative, so both versions are shown here rather than one being silently picked as correct — confirm the actual submission date via Canvas or with the lecturer before relying on either.",
      setDate: "Week 10, Semester 2 (per written guide); Week 14 (per lecturer's slide deck) — see deadlineConflictNote",
      description:
        "A written report (max 1,500 words) in which the student chooses a dataset (provided or their own) and applies two machine learning algorithms studied in the module: one \"shallow learning\" model (not a neural network) and one neural network. From the guide, verbatim: \"We have studied several different artificial intelligence algorithms and methodologies in this module -- and in Assignment 1 you looked in detail at published, current research in a field of your choice. In this assignment, you will either choose a dataset provided or find your own; and apply two machine learning algorithms we have studied to this data.\" The report should be structured like a paper: abstract, introduction, methodology, results, discussion, conclusion. Students are also assessed on quality of communication and referencing. GenAI tier: Tier 3 — GenAI use is broadly allowed and encouraged for specific stages/tasks, with evidence required (chat logs/prompts/outputs as an appendix, not counted toward the word limit) and critical evaluation of AI contributions expected. Note: the guide's closing paragraphs reuse \"presentation\" language seemingly copy-pasted from the Assignment 1 guide even though this assessment is a written report — this inconsistency exists in the source document itself and has not been altered here.",
      genAiTier:
        "Tier 3 — In addition to Tier 2 permissions, GenAI use is broadly allowed and encouraged for specific stages or tasks; students must engage actively and critically with AI (generate, critique, iterate, refine) without making AI the primary producer of the work; evidence required (may include a summary account of how AI was used, prompts, outputs, edits, and critical evaluation of AI contributions); use must be cited/attributed where appropriate. Students are allowed to use GenAI tools to code their AI solution, provided all interactions (chat logs, outputs, prompts) are included as an appendix, which does not count towards the word count.",
      taskSteps: [
        {
          title: "Choose data and models",
          detail:
            "Choose a dataset provided or find your own, and apply two machine learning algorithms studied in the module to this data: one \"shallow learning\" model (e.g. not a neural network), and one neural network.",
        },
        {
          title: "Abstract (~100 words)",
          detail:
            "Summarise the entire portfolio project in short form. Briefly explain the background, aims, methods, results and conclusions you reach. The guide suggests writing this last may be helpful.",
        },
        {
          title: "Introduction",
          detail:
            "Give a broad background for the context of your work, its importance from a healthcare perspective, and discuss some existing literature around the topic. At the end of the introduction, clearly state your aim and objective for the project.",
        },
        {
          title: "Methods",
          detail:
            "Concisely explain your data sourcing, preprocessing, models, training processes, hyperparameter tuning and evaluation. The methods should be brief but detailed enough for someone else to reasonably reproduce your work.",
        },
        {
          title: "Results",
          detail:
            "List appropriate metrics of your work, comparing the two models you have chosen. Comparatively assess these models using appropriate metrics and perform post-hoc tests where appropriate (e.g. justification of chosen parameters).",
        },
        {
          title: "Discussion",
          detail:
            "Discuss the clinical impact of your work. What were the trade-offs between your models? How does your work compare to other existing state-of-the-art work?",
        },
        {
          title: "Conclusion",
          detail: "Summarise the impact of your work, and the results you have achieved.",
        },
        {
          title: "Communication, referencing and figures",
          detail:
            "Usage of appropriate figures throughout the work (e.g. diagrams for methodology, charts for metric comparison) is highly encouraged. Ensure figures are clear to read, text is clear, and references are used throughout to support your findings.",
        },
      ],
      topBandGuidance:
        "Per the rubric, top marks (Distinction+, 80-100%) require: an exceptional introduction with a comprehensive review of a wide range of previous work in BOTH clinical and machine learning fields and clinical applicability of models; exceptional understanding of the chosen ML models with well-reasoned model selection, explanation of methodologies and some attempt at novelty in methodology; results detailed exceptionally with suitable figures/tables/metrics and novel interpretation and/or improvement using novel methodologies; a clear explanation of clinical details, a detailed comparison between the two ML methods, and critical comparison of proposed models with state-of-the-art methods; exceptionally well written research with a clear thread throughout; and sophisticated engagement with academic sources referencing a wide range of papers with a comprehensive review of previous work. The guide states: \"top marks are only accessible for presentations with novel and critical ideas, interpretations and illustrations.\" The slide deck (slide 7) repeats the originality requirement from Assignment 1 (\"In bold: ORIGINALITY!\").",
      goodWorkLooksLike: [
        "Original perspective and, where possible, an attempt at novelty in methodology, not just applying two standard models",
        "Both a shallow-learning model and a neural network, properly compared with appropriate metrics",
        "Clear reasoning behind model selection, not just a description of what was run",
        "Discussion that critically compares the two chosen models against each other AND against external/state-of-the-art work",
        "Clinical framing throughout (why this matters for health, not just the ML mechanics)",
        "Appropriate figures/tables for methodology and results comparison",
        "References used throughout, drawing on a wide range of papers",
      ],
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Problem Definition/Introduction",
                weight: "10%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptional introduction of problem, including a comprehensive review of a wide range of previous work (both clinical AND machine learning) in each field, and clinical applicability of models." },
                  { band: "Distinction", range: "70-80%", text: "Very well written introduction of the problem including a thorough review of the clinical OR machine learning background to the problem and some attempt at the other." },
                  { band: "Merit", range: "60-70%", text: "Good written introduction of the problem and some attempt at a review of the previous work." },
                  { band: "Pass", range: "50-60%", text: "Some attempt at an introduction of the problem with a little review of previous work." },
                  { band: "Fail", range: "40-49%", text: "Little attempt at an introduction of the problem with no substantitive review of previous work." },
                  { band: "Fail", range: "0-40%", text: "No understanding of clinical problem" },
                ],
                sourceNote: "Reproduced verbatim including original typo \"substantitive\" ([sic] in source).",
              },
              {
                name: "Details of Methodology",
                weight: "25%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptional understanding demonstrated of chosen machine learning; well reasoned model selection and explaination of methodologies. Some attempt at novelty in methodology" },
                  { band: "Distinction", range: "70-80%", text: "Clear understanding of chosen machine learning models. Well reasoned model selection and explaination of methodologies." },
                  { band: "Merit", range: "60-70%", text: "Good understanding of at least one machine learning model. Some reasoning behind model selection and some attempt made at explaination of methodology" },
                  { band: "Pass", range: "50-60%", text: "Little understanding of one machine learning model. No reasoning behind model selection and some attempt made at explaination of methodology" },
                  { band: "Fail", range: "40-49%", text: "No understanding demonstrated of either machine learning model. No reasoning behind model selection and no attempt made at explaination of methodology" },
                  { band: "Fail", range: "0-40%", text: "No methods at all" },
                ],
                sourceNote: "Reproduced verbatim including original typo \"explaination\" ([sic] in source).",
              },
              {
                name: "Interpretation of Results",
                weight: "25%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Results detailed exceptionally with suitable figures, tables, and metrics used. Novel interpretation of results and/or improvement using novel methodologies." },
                  { band: "Distinction", range: "70-80%", text: "Very good presentation and standard interpretetation of results in line with module content with suitable figures and tables." },
                  { band: "Merit", range: "60-70%", text: "Good interpretation of work with some figures and tables. Some formatting errors in figures/tables" },
                  { band: "Pass", range: "50-60%", text: "Developing interpretation of work some attempt at figures/tables although some mistakes present." },
                  { band: "Fail", range: "40-49%", text: "Little attempt of interpretation of work. No figures/tables throughout, many mistakes." },
                  { band: "Fail", range: "0-40%", text: "No interpretation of results" },
                ],
                sourceNote: "Reproduced verbatim including original typo \"interpretetation\" ([sic] in source).",
              },
              {
                name: "Discussion and Conclusions",
                weight: "25%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "A clear explaination of the clinical details of the developed model. Detailed comparision between two machine learning methods. Critical comparison of proposed models with state-of-the-art methods." },
                  { band: "Distinction", range: "70-80%", text: "Very good critical evaluation of the clinical and machine learning methods within the work. Detailed comparison between the two machine learning methods, but no attempt at comparison with external models." },
                  { band: "Merit", range: "60-70%", text: "Good critical evaluation of some clinical and machine learning methods within the work. Comparision between two machine learning methods." },
                  { band: "Pass", range: "50-60%", text: "Some critical evalutation of clinical and machine learning methods within work. Comparison between machine learning methods." },
                  { band: "Fail", range: "40-49%", text: "Little attempt at critical evaluation of clinical and machine learning methods within work. No comparison between methods" },
                  { band: "Fail", range: "0-40%", text: "No attempt to engage with critique of the work or comparison with other work" },
                ],
                sourceNote: "Reproduced verbatim including original typos \"explaination\", \"comparision\", and \"evalutation\" ([sic] in source).",
              },
              {
                name: "Effective Communication",
                weight: "10%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Exceptionally well written research with clear thread following through entire work." },
                  { band: "Distinction", range: "70-80%", text: "Very well written research with some clarity following through work. A few spelling grammar/errors" },
                  { band: "Merit", range: "60-70%", text: "Well written research with some clarity through work. Some spelling grammar errors; some disorganisation throughout." },
                  { band: "Pass", range: "50-60%", text: "Work contains all constiuent parts but doesn't logically connect them. Considerable number of spelling grammar errors, but is still able to be followed with some effort." },
                  { band: "Fail", range: "40-49%", text: "Work is missing sections and doesn't logically flow throughout. Spelling and grammar errors make work significantly difficult to read." },
                  { band: "Fail", range: "0-40%", text: "Poor writing skills, no figures or tables illustrating data, text difficult to read." },
                ],
                sourceNote: "Reproduced verbatim including original typo \"constiuent\" ([sic] in source).",
              },
              {
                name: "Links to Literature",
                weight: "5%",
                bands: [
                  { band: "Distinction+", range: "80-100%", text: "Sophisticated engagement with academic sources. Citations are frequent, correctly used, and accurate. Work references wide range of papers and offers a comprehensive review of previous work" },
                  { band: "Distinction", range: "70-80%", text: "Very good engagement with academic sources. Citations are present throughout the work (allowing for a few mistakes)." },
                  { band: "Merit", range: "60-70%", text: "Good engagement with academic sources. Citations are present in most of the work, with some errors." },
                  { band: "Pass", range: "50-60%", text: "A developing attempt to engage with academic sources, citations in the text are mostly accurate." },
                  { band: "Fail", range: "40-49%", text: "Little attempt to engage with academic sources, and when present, contain many mistakes" },
                  { band: "Fail", range: "0-40%", text: "No attempt to engage with acaedmic sources." },
                ],
                sourceNote: "Reproduced verbatim including original typo \"acaedmic\" ([sic] in source).",
              },
            ],
            academicIntegrity: [
              { label: "No concerns", text: "There are no academic integrity concerns with this assignment" },
              { label: "Category 1", text: "Category 1: Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)" },
              { label: "Category 2, 3, 4", text: "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)" },
            ],
            note: "Transcribed verbatim from 98103188-Assessment_2_Rubric.xlsx, Sheet1. Bands: Distinction+ 80-100% | Distinction 70-80% | Merit 60-70% | Pass 50-60% | Fail 40-49% | Fail 0-40%. Academic Integrity row is identical wording to Assignment 1's.",
          },
        ],
      },
      gaps: [
        "The guide's closing paragraphs reuse 'presentation' language seemingly copy-pasted from the Assignment 1 guide even though this assessment is a written report — this inconsistency exists in the source document itself and has not been altered.",
        "Learning outcomes are not listed anywhere in the guide or slide deck for this assessment.",
      ],
    },
  ],
};
