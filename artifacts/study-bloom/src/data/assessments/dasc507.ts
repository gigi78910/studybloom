import type { ModuleInfo } from "./types";

const genAiTierText =
  'This Assignment is a Tier 3 GenAI assignment. "In addition to Tier 2 permissions, GenAI use is broadly allowed and encouraged for specific stages or tasks. You are expected to engage actively and critically with AI, for example, to generate, critique, iterate and refine, without making AI the primary producer of your work. You must provide the evidence required in the assessment guidance, which may include a summary account of how AI was used, prompts, outputs, edits, and a critical evaluation of AI contributions. You must also cite or attribute use where appropriate." (Tier 3 — Structural scaffold (Exploratory / Critical use))';

const academicIntegrityRowsShared = [
  {
    label: "A*/A (no academic integrity concerns)",
    text: "There are no academic integrity concerns with this assignment",
  },
  {
    label: "B/C (Category 1)",
    text: "Category 1: Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
  },
  {
    label: "D/F (Category 2, 3, 4)",
    text: "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
  },
];

export const dasc507: ModuleInfo = {
  code: "DASC507",
  name: "DASC507",
  assessments: [
    {
      id: "dasc507-a1-oral-presentation",
      moduleCode: "DASC507",
      title: "Assignment 1 — Oral Presentation (Critical Appraisal of a Published Paper)",
      type: "Oral presentation with slides, followed by a Q&A session",
      weighting:
        "Not stated in the guide — internal mark allocation across the 6 graded criteria sums to 100 (module-level weighting of this assignment vs. Assignment 2 is not given in the supplied documents)",
      wordCount: "Not applicable / not stated (oral format)",
      timeLimit: "15 minutes + 10% (excluding questions), plus 5 minutes of questions afterward",
      submissionMethod:
        "Not explicitly detailed beyond \"slides... must be submitted by 4pm, 12th March\" — no named platform (e.g. Canvas) is stated for Assignment 1 specifically in this guide.",
      deadlineISO: "2027-03-12",
      deadlineDisplay:
        "Friday 12th March 2027, 4pm — \"The slides for your presentation must be submitted by 4pm, 12th March (week 6).\"",
      deadlineConflictNote:
        "Internal inconsistency in the source guide itself: the guide's \"Set Date\" field says \"Week 4, Semester 2\", but the guide's own body text says the slide submission deadline falls in \"week 6\" (\"The slides for your presentation must be submitted by 4pm, 12th March (week 6).\"). Both statements are exactly as written in the source document; this has not been reconciled or silently corrected — both are reproduced verbatim.",
      setDate: "Week 4, Semester 2 (see deadlineConflictNote — body text separately states \"week 6\")",
      description:
        'Students will prepare and deliver a 15-minute oral presentation, with slides, and be prepared to answer questions from assessors and peers for 5 minutes afterwards. "This task revolves around a published paper Zhou et al (2020), \'Development and validation of a nomogram for predicting the risk of severe COVID-19: A multi-center study in Sichuan, China.\'" Students read the paper, then prepare a 15-minute presentation with slides that critically assesses the statistical methods used, for an audience of peers and assessors. "Following the live delivery of your presentation (during week 7), the audience will have the opportunity to ask you questions for 5 minutes."',
      taskSteps: [
        {
          title: "Read the paper",
          detail:
            'Read Zhou et al (2020), "Development and validation of a nomogram for predicting the risk of severe COVID-19: A multi-center study in Sichuan, China."',
        },
        {
          title: "Summarise the paper before critiquing it",
          detail:
            "Ensure you summarise the main goals and findings of the paper before you critique the methodology.",
        },
        {
          title: "Think about how to visualise your summary",
          detail:
            "Think about ways to present/visualise a summary of the paper as well as the summary of your findings.",
        },
        {
          title: "Assess strengths and weaknesses of the methodology",
          detail:
            "Describe aspects of the paper's methods that you think are well done, and then any aspects of the methodology that you think could be improved on or alternative methods that could have been used.",
        },
        {
          title: "Give an overall reliability judgement",
          detail:
            "Summarise your assessment by describing how reliable you think the results in the paper are.",
        },
        {
          title: "Prepare and deliver the presentation with slides",
          detail:
            "Prepare and deliver a 15-minute oral presentation, with slides, for an audience of peers and assessors, following the guide's structure advice (plan/introduction/body/conclusion), and rehearse/test it on an audience beforehand.",
        },
        {
          title: "Submit slides by the deadline",
          detail:
            "Slides for the presentation must be submitted by 4pm, 12th March (see deadlineConflictNote for the guide's own Week 4/week 6 date discrepancy).",
        },
        {
          title: "Answer audience questions",
          detail:
            "Following the live delivery of the presentation (during week 7), be prepared to answer audience questions for 5 minutes.",
        },
      ],
      topBandGuidance:
        "A* — Distinction (80–100%) across the rubric's criteria: identifies and correctly discusses all limitations and strengths of the methodology; very clear summary and interpretation of the main findings; excellent use of both text and appropriate graphics, with professional, appropriately sized, clear slides; excellent storytelling with all relevant elements and a balance between sections, with flawless citation of references (\"Message could not be improved\"); exudes enthusiasm throughout with a clear voice and consistent, appropriate pace (\"Communication could not be improved\"); excellent critical and evidence-based answers and rebuttal of questions (\"Discussion could not be improved\").",
      goodWorkLooksLike: [
        "Identifies and correctly discusses all limitations and strengths of the methodology (25%).",
        "Very clear summary and interpretation of the main findings (10%).",
        "Excellent use of both text and appropriate graphics; slides look professional, with appropriately sized text and clear content (10%).",
        "Excellent storytelling with all relevant elements and a balance between sections; flawless citation of references (20%).",
        "Exudes enthusiasm throughout the presentation, using a clear voice and a consistent, appropriate pace (20%).",
        "Excellent critical and evidence-based answers and rebuttal of questions (15%).",
      ],
      genAiTier: genAiTierText,
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Identifying Strengths and weaknesses of the methodology",
                weight: "25%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Identifies and correctly discusses all limitations and strengths of the methodology." },
                  { band: "A Distinction", range: "70-79%", text: "Identifies and correctly discusses almost all limitations and strengths of the methodology." },
                  { band: "B Merit", range: "60-69%", text: "Identifies and correctly discusses most limitations and strengths of the methodology." },
                  { band: "C Pass", range: "50-59%", text: "Identifies and discusses some limitations and strengths of the methodology." },
                  { band: "D Fail", range: "40-49%", text: "Identifies and discusses a single limitation or strength of the methodology." },
                  { band: "F Fail", range: "0-39%", text: "Fails to identify and discuss any limitations and strengths of the methodology." },
                ],
              },
              {
                name: "Summarise main findings",
                weight: "10%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Very clear summary and interpretation of the main findings" },
                  { band: "A Distinction", range: "70-79%", text: "Very clear summary and interpretation of the almost all the main findings" },
                  { band: "B Merit", range: "60-69%", text: "Fairly clear summary and interpretation of the main findings" },
                  { band: "C Pass", range: "50-59%", text: "Brief summary and interpretation of some of the main findings" },
                  { band: "D Fail", range: "40-49%", text: "Brief summary and interpretation of a few of the main findings only" },
                  { band: "F Fail", range: "0-39%", text: "Very little summary or interpretation of the main findings" },
                ],
              },
              {
                name: "Quality of Slides",
                weight: "10%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Excellent use of both text and appropriate graphics to communicate the assessment of the paper. Slides look professional, and have appropriately sized text, and clear content." },
                  { band: "A Distinction", range: "70-79%", text: "Good use of both text and graphics to communicate the assessment of the paper. Slides look professional, and have appropriately sized text, and clear content." },
                  { band: "B Merit", range: "60-69%", text: "Good use of both text and graphics to communicate the assessment of the paper. Some slides have too much content or small text." },
                  { band: "C Pass", range: "50-59%", text: "Reasonable use of both text or graphics to communicate the assessment of the paper. Some slides have too much content or small text. Choice of graphics could have been improved" },
                  { band: "D Fail", range: "40-49%", text: "Poor presentation of slides. Most slides have too much content, and are difficult to read. Text is too small, with little use of graphics to aid presentation." },
                  { band: "F Fail", range: "0-39%", text: "Very plain slides with few or no graphics. Difficult to identify the main points on each slide. Slides do not aid the presentation." },
                ],
              },
              {
                name: "Presentation structure",
                weight: "20%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Excellent story telling will all relevant elements and a balance between sections. Message could not be improved. Flawless citation of references." },
                  { band: "A Distinction", range: "70-79%", text: "The goal of the research is clear and the rest of the presentation is logically connected. The presentation storyline has a logical build-up, allows the whole audience to follow along and remember it afterwards and starts a substantive discussion. All necessary elements are present and receive a balanced amount of time. Presentation is the correct length. Professional reference citation." },
                  { band: "B Merit", range: "60-69%", text: "The goal of the research is explained well. The audience can reproduce parts of the presentation afterwards. The presetntation brings forth a good discussion. Student has made good choices on what to leave out. Overall timing is good with all elements well-balanced. Good reference citation with only minor errors." },
                  { band: "C Pass", range: "50-59%", text: "Most audience can follow the story. The goal of the research is mentioned. All components are discussed in a logical order, but some links are missing or the division of time between the different sections is not ideal. Major points could have benefitted from more time. Competent citation of references with few errors." },
                  { band: "D Fail", range: "40-49%", text: "Only a few members of the audience can follow the presentation. Sections are not well balanced: many are too long or short, or their relevanmce to the story is not explained. The order of the presentation is not good, which makes the story more difficult to follow. Presentation is too long or too short. Many errors in references." },
                  { band: "F Fail", range: "0-39%", text: "Presentation is either completely above the level of the audience (appropriate only for direct colleagues) or below the level of the audience (appropriate for general public). Audience cannot understand presentation well due to a lack of structure. The goal of the analysis or presentation is not commuicated. Presentation is much too long or too short. No attempt to cite appropriate references." },
                ],
              },
              {
                name: "Effective communication",
                weight: "20%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Exudes enthusiasm throughout the presentation. Uses a clear voice throughout and uses a consistent, appropriate pace. Communication could not be improved." },
                  { band: "A Distinction", range: "70-79%", text: "Projects enthusiasm about topic. Uses a clear voice and speaks at a good pace. Uses sentence stress effectively to place emphasis on important words or phrases, and has logical transitions between sections." },
                  { band: "B Merit", range: "60-69%", text: "Demonstrates a clear, positive feeling about the topic during most of the presentation. Uses a clear voice and mostly speaks at a good pace." },
                  { band: "C Pass", range: "50-59%", text: "Shows some interest in topic presented. Sometimes speaks too quietly for a majority of the audience to understand." },
                  { band: "D Fail", range: "40-49%", text: "Shows little interest in topic presented. Speaks unclearly or in unfinished sentences." },
                  { band: "F Fail", range: "0-39%", text: "Shows no interest in topic presented. Talks very fast, speaks too quietly or says 'uh' after every sentence. Sentences are incomplete or incorrect and important points are not emphasised. English and langauge is limited and not professional." },
                ],
              },
              {
                name: "Discussion",
                weight: "15%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Excellent critical and evidence-based answers and rebuttal of questions. Discussion could not be improved." },
                  { band: "A Distinction", range: "70-79%", text: "Can engage in a critical confrontation of their own results and conclusions, drawing on their own material or knowledge of the literature. Has the ability to convince the audience of their interpretations." },
                  { band: "B Merit", range: "60-69%", text: "Can expand on the information on the slides to clarify and provide new insights. Answers to questions are to-the-point and concise." },
                  { band: "C Pass", range: "50-59%", text: "Can reformulate the information on the slides to clarify, and answers most questions coherently." },
                  { band: "D Fail", range: "40-49%", text: "Cannot properly defend their results or slides. Does not understand questions, and gives irrelevant or incomplete answers." },
                  { band: "F Fail", range: "0-39%", text: "Cannot answer basic questions. Does not seem to understand what is on their slides or the basics of their own analysis." },
                ],
              },
              {
                name: "Academic Integrity",
                sourceNote:
                  "The Academic Integrity row's merge pattern in the source spreadsheet does not align 1:1 with the six achievement-band columns above (it is merged as B:C, D:E, F:G). It is reproduced verbatim in the academicIntegrity table below rather than forced into six separate band cells.",
                bands: [],
              },
            ],
            academicIntegrity: academicIntegrityRowsShared,
            note:
              "Total marks across the 6 graded criteria: 25 + 10 + 10 + 20 + 20 + 15 = 100 (matches \"Total 100\" stated in the guide's own summary table). The guide's own summary table uses slightly different criterion wording than the rubric spreadsheet for the same 20-mark \"Presentation structure\" item (guide: \"Clear goal of the assignment with a logical and time-appropriate presentation\"); both are reproduced verbatim in the source, no reconciliation performed.",
          },
        ],
      },
      readingRefs: [
        {
          title:
            "Development and validation of a nomogram for predicting the risk of severe COVID-19: A multi-center study in Sichuan, China",
          author: "Zhou et al (2020)",
          note: "The published paper this assignment's oral presentation critically appraises.",
        },
      ],
      gaps: [
        "Formal assignment title: not explicitly given a standalone title in the guide document itself (headed simply \"Assignment\"); \"Assignment 1 — Oral Presentation\" is a descriptive label derived from content/filename, not a verbatim document title.",
        "Submission platform for Assignment 1 is not stated in this guide (unlike Assignment 2, which names Canvas explicitly).",
        "Module-level weighting of this assignment toward the final DASC507 grade is not stated in the supplied documents.",
        "Set Date / slide-deadline week discrepancy: see deadlineConflictNote — guide header says Week 4, guide body text says week 6.",
      ],
    },
    {
      id: "dasc507-a2-data-analysis-report",
      moduleCode: "DASC507",
      title:
        "Assignment 2 — Data Analysis Report (Answer 2 of 3 Questions: Classification / Multilevel / Spatial Models)",
      type: "Written report (Word document or PDF) + separate R code file",
      weighting:
        "Not stated in the guide — internal mark allocation across the 7 graded criteria sums to 100 (module-level weighting of this assignment vs. Assignment 1 is not given in the supplied documents; Assignment 2's guide only says components are \"combined according to the weighting of each assignment\" without giving the numbers)",
      wordCount:
        "3000 words (+10%). \"We anticipate approximately 1500 words per question... subject to the overall limit of 3000 words.\" Figure captions and tables do not count towards the word count.",
      timeLimit: "Not applicable / not stated (written report + R code format)",
      submissionMethod:
        "\"You should submit a word document or pdf containing your answers to the questions. Please also submit an additional R file containing your code for the analysis... Please submit your code either as a .R file, or if necessary as a .txt or .docx file.\" Also: \"Students are required to submit a copy to Canvas by 16:00 by the deadline stated.\"",
      deadlineISO: "2027-05-19",
      deadlineDisplay: "Wednesday 19th May 2027, 4pm",
      setDate: "Week 8, Semester 2",
      description:
        '"This second assignment involves 3 pieces of work broadly covering the main sections of DASC507 (Classification models, hierarchical models and spatial models). The idea is to reflect the process data scientists would use in analysing real world data." "There are 3 questions in this assignment. Please choose two questions to answer... Please only choose 2 of these questions to answer in your submission. You do not need to answer all 3 questions, and only 2 will be marked."',
      taskSteps: [
        {
          title: "Choose 2 of the 3 questions",
          detail:
            "Choose two of the three questions (Classification, Multilevel, Spatial) to answer. You do not need to answer all 3 questions, and only 2 will be marked.",
        },
        {
          title: "Question 1 (Classification) — if chosen",
          detail:
            "Use the heart.dat file (available on Canvas, from the StatLog project / UCI ML repository) to develop a classification model to predict the presence of heart disease: (i) report initial explorations of the predictors using graphical exploration methods discussed in the module; (ii) choose an appropriate classification model from those discussed in Weeks 1–7 of DASC507; (iii) describe and interpret findings in terms of predictive value and associations between predictors and the heart failure outcome (coded in the last column of the dataset); (iv) describe and interpret efforts made to validate the model and/or check modelling assumptions. \"Please note that it is not necessary (or desirable) to use every method taught in the module. You just need to justify the model choices you have made.\"",
        },
        {
          title: "Question 2 (Multilevel/hierarchical) — if chosen",
          detail:
            "Use the nurses.txt data file (available on Canvas) to develop a multilevel model to predict stress in nurses (nurses nested in wards within hospitals): (i) descriptive statistics of outcome and predictors; (ii) investigation of multilevel structure and variance components; (iii) investigation of predictors at individual and cluster level; (iv) exploration of potential interactions between predictors; (v) investigation of whether including random slopes can improve model fit; (vi) describe the steps and reasons leading to final choice of model; (vii) clinical interpretation of final model results.",
        },
        {
          title: "Question 3 (Spatial) — if chosen",
          detail:
            "Using 'spatial_analysis_assignment2.csv' (shapefile for Local Authorities provided in shapefile_LADs.zip), answer: \"What spatial factors influence premature cardiovascular mortality rates?\" (i) descriptive statistics for chosen outcome variable and predictors; (ii) present a map of the geographical distribution of the outcome variable; (iii) investigate the extent of spatial clustering in the outcome variable; (iv) using a chosen spatial regression method (justify which), investigate which factors are associated with the outcome; (v) provide interpretation and discussion of findings.",
        },
        {
          title: "Structure the write-up per question",
          detail:
            "Include at least Methods (describe/justify methods chosen), Results (summarise dataset features, give analysis/model-checking results), and Discussion (interpret findings, clinical implications, robustness) sections per question. Be clear which results relate to which analysis, and provide sufficient detail that a future researcher could identify what results came from each analysis. Be clear, concise, and reference papers where needed.",
        },
        {
          title: "Submit report + R code by the deadline",
          detail:
            "Submit a Word document or PDF containing your answers, plus a separate R file (or .txt/.docx if necessary) containing your analysis code, to Canvas by 16:00 on Wednesday 19th May 2027.",
        },
      ],
      topBandGuidance:
        "A* — Distinction (80–100%) across the rubric's criteria: appropriate methods chosen, very clearly described and well justified with no errors; appropriate analysis methods applied without errors, with full results presented in an organised manner; very detailed and thorough description of results, their interpretation and implications; tables and graphs directly tailored to the research question; a very detailed description of attempts to assess model assumptions or validate models appropriately; results and analysis very well communicated with flawless citation of references and little room for improvement in communicating to a clinical audience; an R file submitted that is organised in a logical manner, clear and easy to follow, with informative comments throughout and the code needed to complete the analysis fully provided.",
      goodWorkLooksLike: [
        "Appropriate methods have been chosen; these are very clearly described and well justified with no errors (20%).",
        "Appropriate analysis methods have been applied without errors; full results presented in an organised manner (20%).",
        "Very detailed and thorough description of results, their interpretation and implications (20%).",
        "Tables and graphs have been directly tailored to the research question (Data Visualisation, 10%).",
        "A very detailed description of attempts to assess model assumptions or validate models appropriately (Model Checking/Validation, 10%).",
        "Analysis and results are very well communicated, with statistical results related back to the clinical area and flawless citation of references (10%).",
        "R file submitted, organised in a logical manner, clear and easy to follow, with informative comments throughout and the code needed to complete the analysis fully provided (Clear and readable R code, 10%).",
      ],
      genAiTier: genAiTierText,
      rubric: {
        status: "available",
        tables: [
          {
            criteria: [
              {
                name: "Correctly identify and justify an appropriate method for each question",
                weight: "20%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Appropriate methods have been chosen. These methods are very clearly described and well justified with no errors." },
                  { band: "A Distinction", range: "70-79%", text: "Appropriate methods have been chosen. Justification of choices is detailed and contains no major errors." },
                  { band: "B Merit", range: "60-69%", text: "Appropriate methods have been chosen, with a justificaiton of choices containing only minor errors." },
                  { band: "C Pass", range: "50-59%", text: "Appropriate methods have been chosen, with some attempt to justify modeling choices." },
                  { band: "D Fail", range: "40-49%", text: "Minimal attempt to justify model choices and largely incorrect methods chosen." },
                  { band: "F Fail", range: "0-39%", text: "Analysis methods have not been correctly applied. No attempt at justifying model choices." },
                ],
              },
              {
                name: "Correctly apply appropriate methods for each question",
                weight: "20%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Appropriate analysis methods have been applied without errors. Full results have been presented in an organised manner" },
                  { band: "A Distinction", range: "70-79%", text: "Appropriate analysis methods have been applied with minimal errors. Results have been presented in an organised manner" },
                  { band: "B Merit", range: "60-69%", text: "Appropriate analysis methods have been applied with minimal errors. Most results have been presented in an organised manner" },
                  { band: "C Pass", range: "50-59%", text: "An attempt has been made to apply appropriate analysis methods. There were some issues with the analysis that were not addressed. Some results are presented in a disorganised manner in the writeup" },
                  { band: "D Fail", range: "40-49%", text: "An attempt has been made to apply appropriate analysis methods however there are significant issues with the analysis. Limited results are presented in a disorganised manner in the writeup" },
                  { band: "F Fail", range: "0-39%", text: "Analysis methods have not been correctly applied. Few results are presented, and are incomplete" },
                ],
              },
              {
                name: "Appropriately interpret the findings of each model and describe the clinical relevances",
                weight: "20%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Very detailed and thorough description of results, their interpretation and implications." },
                  { band: "A Distinction", range: "70-79%", text: "Appropriate attempt to interpret the results and describe their implications, with minimal errors in interpretation." },
                  { band: "B Merit", range: "60-69%", text: "An attempt has been made to interpret the results and describe their implications. There are only minor errors in interpretations." },
                  { band: "C Pass", range: "50-59%", text: "An attempt has been made to interpret the results and describe their implications. However there are some errors in interpretations." },
                  { band: "D Fail", range: "40-49%", text: "Minimal effort to describe the interpretation of the results or the real world implications." },
                  { band: "F Fail", range: "0-39%", text: "Results have not been described and the clinical interpretation has not been given." },
                ],
              },
              {
                name: "Data Visualisation",
                weight: "10%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "As for A - Distinction, but additionally tables and graphs have been directly tailored to the research question." },
                  { band: "A Distinction", range: "70-79%", text: "Good visualisations / summarise of both the data and the analyses have been provided. Thought has been given as to which visualisations to include in the main text and whether to include some in appendices. Tables and graphs have been referred to and discussed appropriately in the main text, and are used to back up the message of the analysis" },
                  { band: "B Merit", range: "60-69%", text: "Visualisations of both data and analyses have been provided. Plots and tables are relatively easy to read, and contain necessary details such as legends, titles, captions, details of data summaries). Some improvement is possible in the presentation of data e.g. thought into which graphs / tables to include in the main text, or how to improve how readable they are. Tables and graphs have been briefly referred to in the main text." },
                  { band: "C Pass", range: "50-59%", text: "Some visualisations of data / analyses are provided e.g. possibly incomplete tables or graphs representing the data or analysis results. Plots / tables might be difficult to read and are missing some but not all key information." },
                  { band: "D Fail", range: "40-49%", text: "Limited visualisations of data / analyses. Plots / tables might not be appropriate, may be difficult to read, or might be missing key information" },
                  { band: "F Fail", range: "0-39%", text: "No visualisations of data or analysis have been provided" },
                ],
              },
              {
                name: "Model Checking/Validation",
                weight: "10%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "A very detailed description of attempts to assess model assumption or validate models appropriately. As for distinction but a more complete description." },
                  { band: "A Distinction", range: "70-79%", text: "There is detailed discussion of modelling assumptions or validation checks. Discussion is correct and not missing any major points." },
                  { band: "B Merit", range: "60-69%", text: "There is discussion of model assumption checking or model validation where appropriate. Discussion is largely correct and accurate." },
                  { band: "C Pass", range: "50-59%", text: "There is some limited discussion of model checking or validation. Some limited attempt has been made to assess the performance of models." },
                  { band: "D Fail", range: "40-49%", text: "Minimal model checking or validation have been presented" },
                  { band: "F Fail", range: "0-39%", text: "No model checking or validation has been presented" },
                ],
              },
              {
                name: "Communication of analysis and results to a clinical audience",
                weight: "10%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "Analysis and results are very well communicated - e.g. results expected to be present in the write up are fully reported, there is clear order to the presentation of the results which is easy to follow through the write up, the results presented in tables have been fully discussed and interpreted in the main text. Interpretation has been made, with statistical results related back to the clinical area. There is little improvement possible how the results could be communicated to a clinical audience. Flawless citation of references." },
                  { band: "A Distinction", range: "70-79%", text: "Analysis and results are well communicated - e.g. results expected to be present in the write up are fully reported, there is order to the presentation of the results, the results presented in tables have been generally discussed and interpreted in the main text. Interpretation has generally been made, with statistical results related back to the clinical area. Professional reference citation." },
                  { band: "B Merit", range: "60-69%", text: "Analysis and results are adequately communicated - e.g. results expected to be present in the write up are generally reported, there is some order to the presentation of the results, there is some linkage between results in tables and in the main text. Interpretation has been made, with some attempt to relate the statistical results to a clinical intepretation. Good references with only very minor errors." },
                  { band: "C Pass", range: "50-59%", text: "Analysis and results are poorly communicated - e.g.results expected to be present in the write up are incomplete, results are presented in a confusing or disorganised way, there minimal is link between results in tables and in the main text. Interpretation has been made, but is missing examples to allow clinical audiences to relate the results back to the clinical background of the data. Competent referencing with some errors." },
                  { band: "D Fail", range: "40-49%", text: "Analysis and results are very poorly communicated - e.g. results expected to be present in the write up are incomplete, results are presented in a confusing or disorganised way, there is little link between results in tables and in the main text, there is little interpretation of results and the language used is not suitable for a clinical audience. Many errors in references." },
                  { band: "F Fail", range: "0-39%", text: "Analysis and results are barely communicated - e.g. results expected to be present in the write up are incomplete or completely missing, results are presented in a confusing or disorganised way, there is little link between results in tables and in the main text, no interpretation of results has been given" },
                ],
              },
              {
                name: "Clear and readable R code",
                weight: "10%",
                bands: [
                  { band: "A* Distinction", range: "80-100%", text: "R file has been submitted. It is organised in a logical manner, and it clear and easy for the reader to follow what has been been done. There are informative comments throughout, and the code needed to complete the analysis is fully provided." },
                  { band: "A Distinction", range: "70-79%", text: "R file has been submitted. It is organised in a logical manner, and it is clear for the reader to follow what has been been done. There are comments throughout, and the code needed to complete the analysis is provided." },
                  { band: "B Merit", range: "60-69%", text: "R file has been submitted. It is organised in a logical manner, and it is relatively easy for the reader to follow what has been been done. There are some comments, and most of the code needed to complete the analysis is provided." },
                  { band: "C Pass", range: "50-59%", text: "R file has been submitted. It is not well organised, and it is difficult to follow what has been done. Comments are minimal and/or uninformative. Sections of code might be missing / incomplete." },
                  { band: "D Fail", range: "40-49%", text: "Minimal R file has been submitted. It is disorganised, uncommented and incomplete." },
                  { band: "F Fail", range: "0-39%", text: "No R file has been submitted" },
                ],
              },
            ],
            academicIntegrity: academicIntegrityRowsShared,
            note:
              "Total marks across the 7 graded criteria: 20 + 20 + 20 + 10 + 10 + 10 + 10 = 100 (matches \"Total 100\" stated in the guide's own summary table). The guide's own summary table uses near-identical criterion wording to the rubric spreadsheet (minor phrasing differences only); both reproduced verbatim, no reconciliation performed.",
          },
        ],
      },
      readingRefs: [
        { title: "How to Report Statistics", note: "PLOS — linked in source doc" },
        { title: "How to Write Discussions and Conclusions", note: "PLOS — linked in source doc" },
      ],
      gaps: [
        "Formal assignment title: not explicitly given a standalone title in the guide document itself (headed \"Introduction\"/\"Assignment\"); \"Assignment 2 — Data Analysis Report\" is a descriptive label derived from content/filename, not a verbatim document title.",
        "Module-level weighting of this assignment toward the final DASC507 grade is not stated in the supplied documents. The guide states components are \"combined according to the weighting of each assignment\" without giving the numbers.",
        "Word-limits allow +/-10% margin; students must declare the word-count for each assignment. 5% deducted from mark for not including a word count or for an incorrect word count; penalty applied for exceeding word count (\"We will check the word count\"). Word-count excludes references in the reference list (in-text citations DO count) and excludes tables/graphs/line drawings/text-boxes/photographs, but includes correctly-referenced quotations.",
        "Resubmissions: combined mark of 50% required to pass the module, provided at least 40% is gained in each component. Failed assignments may be re-sat once (second attempt); resubmitted assignment title normally differs from the original. Marks from re-assessment capped at 50% for purposes of overall average/classification.",
      ],
    },
  ],
};
