// DASC503 — Structured assessment data.
// Sourced verbatim from: Assignment 1 Student Guide (docx), Assignment 1 Poster
// Rubric (xlsx, Sheet1 + Sheet2), Assignment 2 Student Guide (docx), Assignment 2
// Written Report Rubric (xlsx, Sheet1; Sheet2 was blank), Assessment Cover Sheet
// (docx), Data Dictionary.docx / Data Dictionary_1.docx (identical content).
//
// IMPORTANT: The Assignment 1 poster rubric workbook contains TWO differing
// versions of the "Overall appearance of poster" criterion band text and TWO
// different Academic Integrity contact emails across its sheets. Per the
// student's explicit instruction, BOTH versions are kept below, each clearly
// labelled, rather than silently picking one. Sheet2's exact verbatim wording
// for "Overall appearance of poster" was not captured in the extracted source
// content available for this file, so that band text is marked with an
// explicit placeholder rather than invented — see the sourceNote on that
// criterion in the Sheet2 table and the gaps array below.

import type { ModuleInfo } from "./types";

const posterBandRanges = {
  aStar: "80-100%",
  a: "70-79%",
  b: "60-69%",
  c: "50-59%",
  d: "40-49%",
  f: "0-39%",
};

export const dasc503: ModuleInfo = {
  code: "DASC503",
  name: "DASC503",
  assessments: [
    {
      id: "dasc503-assignment-1-poster",
      moduleCode: "DASC503",
      title: "Assignment 1 — Poster Presentation",
      type: "Poster (PowerPoint or similar) + pre-recorded oral presentation",
      weighting:
        "Not stated in the guide or rubric — the rubric gives percentage splits within the assignment (criteria weights summing to 100%), but no percentage of the overall DASC503 module grade is given.",
      wordCount: "Poster: up to 400 words",
      timeLimit: "Oral presentation: up to 5 minutes (pre-recorded)",
      submissionMethod:
        "Upload poster to Canvas in .pptx or .pdf format. Oral presentation is pre-recorded (narration recorded in PowerPoint, per linked Microsoft support instructions).",
      deadlineISO: "2026-01-05",
      deadlineDisplay: "Monday, 5th January 2026, 4 pm",
      setDate: "Week 4, Semester 1",
      learningOutcomes: [],
      description:
        "The assignment is a poster presentation with a pre-recorded 5-minute oral presentation on lung cancer incidence in England: patterns (by age, sex, area deprivation, and region), interpretation, and critical limitations. For your analysis, please use the synthetic dataset available for download from the Assignment tab in Canvas. The data dictionary that accompanies the dataset provides more information. Please assume that the dataset is a genuine extract from the CPRD database. Please design your poster in PowerPoint (or a similar application) and upload it to Canvas in .pptx or .pdf format. Your poster should include at least one table and one plot and be in a landscape format. References are required. Your poster should be legible when presented on a typical 19-inch computer screen. The pre-recorded oral presentation accompanying the poster should provide a brief overview of your findings, followed by a focused speech that highlights a single key point you believe is the most important finding. The whole presentation should be up to 5 minutes.",
      taskSteps: [
        {
          title: "Download the dataset and data dictionary",
          detail:
            "Download the synthetic dataset from the Assignment tab in Canvas and read the accompanying data dictionary. Assume the dataset is a genuine extract from the CPRD database.",
        },
        {
          title: "Analyse lung cancer incidence patterns",
          detail:
            "Investigate lung cancer incidence in England, covering patterns by age, sex, area deprivation and region, with interpretation and a discussion of critical limitations.",
        },
        {
          title: "Design the poster",
          detail:
            "Design the poster in PowerPoint (or similar), in landscape format, including at least one table and one plot. Include references. Ensure it is legible on a typical 19-inch computer screen. Keep the poster text to up to 400 words.",
        },
        {
          title: "Upload the poster to Canvas",
          detail: "Upload the finished poster to Canvas in .pptx or .pdf format.",
        },
        {
          title: "Record the oral presentation",
          detail:
            "Record a pre-recorded oral presentation of up to 5 minutes: give a brief overview of your findings, then a focused speech highlighting the single most important finding.",
        },
      ],
      topBandGuidance:
        "Top-band (A*) work across both rubric-sheet versions is described consistently as: a clear, concise and engaging abstract (introduction/methods/results/conclusions) that could not be improved; all visual representations related to the topic, following one consistent style, clearly labelled, with no further improvement needed; a thorough and justified critical interpretation of the single most important finding; presentation delivery that exudes enthusiasm throughout with a clear voice, consistent pace and effective sentence stress; excellent storytelling with all relevant elements balanced; full, non-distracting use of modern PowerPoint facilities (animations, interactivity, annotations); and, on structure/aesthetics, work that could not be improved with flawless, comprehensive, perfectly formatted and fully traceable citation and referencing.",
      goodWorkLooksLike: [
        "Abstract (intro/methods/results/conclusions) is clear, concise and engaging, with the research question stated clearly and conclusions grounded in the results and wider literature.",
        "At least one table and one plot, all visuals following one consistent style, clearly labelled and directly relevant to the topic.",
        "A thorough, justified critical interpretation focused on a single most important finding.",
        "Confident, enthusiastic oral delivery at a good pace with effective emphasis and logical transitions between sections.",
        "A well-balanced, correctly timed presentation structure that the whole audience can follow and remember.",
        "Creative but non-distracting use of PowerPoint facilities (animations, interactivity, annotations, laser pointer).",
        "A legible, well-structured poster (readable on a 19-inch monitor) with complete, correctly formatted and traceable citations and references.",
      ],
      genAiTier: "Not stated — see Assessment Cover Sheet GAI declaration requirement (declare use/non-use of GAI and, if used, what for and what prompts).",
      rubric: {
        status: "available",
        tables: [
          {
            label: "Rubric sheet version 1",
            note:
              "From the poster rubric workbook's Sheet1. Bands: A* Distinction (80-100%), A Distinction (70-79%), B Merit (60-69%), C Pass (50-59%), D Fail (40-49%), F Fail (0-39%).",
            criteria: [
              {
                name: "Abstract content (Introduction, Methods, Results, Conclusions — split equally)",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "It is clear, concise and engaging. The introduction describes and connects the topic and context/background to the purpose of the investigation in an organised manner. The question being addressed is stated clearly. All relevant methods are stated clearly, using the correct terminology. All numerical results are given with correct units, and significant figures and all descriptive results are given with appropriate context. Conclusions are made based on the results. There are appropriate links with wider literature on the topic.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "It is clear and concise. The introduction describes and connects the topic and context/background to the purpose of the investigation in an organised manner. The question being addressed is stated clearly. All relevant methods are stated clearly, using the correct terminology. All numerical results are given with correct units, and significant figures and all descriptive results are given with appropriate context. Conclusions are made based on the results. There are appropriate links with wider literature on the topic.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "It is clear and concise. The introduction gives some background information. The question being addressed is stated. Methods are stated with less transparency. Some numerical results are given with correct units, and significant figures and all descriptive results are given with some context. Conclusions are made based on the results. There are some links with wider literature on the topic.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "The introduction gives some background information. The question being addressed is stated. Some methods are described inaccurately. Some numerical results are given with correct units and significant figures. Conclusions are made loosely based on the results. There are no links with wider literature on the topic.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "The introduction is not clear and concise. It fails to make connections between the subject of the investigation and the context/background. The research question is missing. The methods described are not relevant to the investigation. The results are half complete or not relevant to the investigation. No interpretations are made or are not relevant to the results.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No or illegible content.",
                  },
                ],
              },
              {
                name: "Clarity of charts, graphs and tables",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "All visual representations are related to the topic and make it easier to understand. All visual representations follow the same style and are clearly labelled. No further improvement is needed.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "All visual representations are related to the topic, and most make it easier to understand. All visual representations follow the same style and are clearly labelled.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "All visual representations related to the topic. Visual representations are labelled and follow the same style.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Some visual representations related to the topic. Some visual representations are labelled, and there is a mix of styles.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Visual representations do not relate to the topic. Do not follow the same style and are not clearly labelled. There is not at least a table or plot.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No visual representations used",
                  },
                ],
              },
              {
                name: "Critical interpretation",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Thorough and justified critical interpretation of the most important finding. This could not be improved",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Thorough and justified critical interpretation of the most important finding.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Thorough and mostly justified critical interpretation of the most important finding.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Some evaluation of the interpretation of results with no clear focus on an important finding.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Minimal evaluation of the results.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No evaluation of the results",
                  },
                ],
              },
              {
                name: "Presentation skills (verbal and non-verbal)",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Exudes enthusiasm throughout the presentation. Uses a clear voice throughout and uses a consistent, appropriate pace. Uses sentence stress effectively to place emphasis on important words or phrases and has logical transitions between sections. The presentation could not be improved further.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Projects enthusiasm about the topic. Uses a clear voice and speaks at a good pace. Uses sentence stress effectively to place emphasis on important words or phrases and has logical transitions between sections. Uses PowerPoint facilities appropriately to help the audience visualise.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Demonstrates a clear, positive feeling about the topic during most of the presentation. Uses a clear voice and mostly speaks at a good pace. Uses PowerPoint facilities mostly helpful for visualising the content.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Shows some interest in the topic presented. Sometimes speaks too quietly for the majority of the audience to understand. Uses powerpoint facilities at the slides in a way that helps the story.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Shows little interest in the topic presented. Speaks unclearly or in unfinished sentences. Little use of powerpoint facilities.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Shows no interest in the topic presented. Talks very fast, speaks too quietly or says 'uh' in every sentence. Sentences are incomplete or incorrect, and important points are not emphasised. English and language are limited and not professional. The entire presentation is read from notes or slides. No use of powerpoint facilities.",
                  },
                ],
              },
              {
                name: "Organisation of content (structure, timing, appropriateness of level for audience)",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Excellent storytelling will all relevant elements and a balance between sections. The message could not be improved.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "The goal of the research is clear, and the rest of the presentation is logically connected. The presentation storyline has a logical build-up and allows the whole audience to follow along and remember it afterwards. All necessary elements are present and receive a balanced amount of time. The presentation is the correct length.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "The goal of the research is explained well. The audience can reproduce parts of the presentation afterwards. The student has made good choices on what to leave out. Overall timing is good, with all elements well-balanced.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Most audience can follow the story. The goal of the research is mentioned. All components are discussed in a logical order, but some links are missing or the division of time between the different sections is not ideal. Major points could have benefitted from more time.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Only a few members of the audience can follow the presentation. Sections are not well balanced: many are too long or short, or their relevance to the story is not explained. The order of the presentation is not good, which makes the story more challenging to follow. The presentation is too long or too short.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Presentation is either completely above the level of the audience (appropriate only for direct colleagues) or below the level of the audience (appropriate for the general public). The audience cannot understand the presentation well due to a lack of structure. The goal of the analysis or presentation is not communicated. The presentation is much too long or too short.",
                  },
                ],
                sourceNote:
                  'The A* band text reads "Excellent storytelling will all relevant elements..." verbatim in the source ("will" is likely a typo for "with") — reproduced as written rather than silently corrected.',
              },
              {
                name: "Creativity",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Full utilisation of modern facilities (i.e. animations, interactivity, annotations, etc.) that captivates the audience and helps pass the message across without distracting it.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Some utilisation of modern facilities (i.e. animations, interactivity, annotations, etc.) that captivates the audience and helps pass the message across without distracting it.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Creative use of PowerPoint facilities (i.e. laser pointer, annotations) that supports the story without distracting it.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Minimal use of the laser pointer and annotations.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "No use of the pointer. A static poster is displayed throughout the presentation.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No poster",
                  },
                ],
              },
              {
                name: "Overall appearance of poster",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Structure and aesthetics could not be improved. Flawless citation and referencing. The reference list is comprehensive, perfectly formatted, and fully traceable.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Clear structure and aesthetics. Easy to follow. All information on the poster is in focus and can be easily viewed and identified on a typical 19-inch monitor. Excellent citation and referencing. The reference list is complete and well structured, with negligible inconsistencies that do not impede traceability.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Fairly clear structure and aesthetics. Fairly easy to follow. Almost all information on the poster is in focus and can be easily viewed and identified on a typical 19-inch monitor. Competent citation and referencing. Citations and references are generally correct, with occasional minor omissions, inaccuracies, or inconsistencies in formatting. All major claims are appropriately attributed.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Parts may be difficult to read on a typical 19-inch monitor. Adequate citation and referencing. Most sources are cited, but there are multiple inconsistencies, noticeable formatting errors, or partially incomplete references. Attribution is present but lacks precision and consistency.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Mostly illegible on a typical 19-inch monitor. Difficult to follow. Missing or spurious citation and referencing. Citations are largely absent, incorrect, fabricated, or unrelated to the content. The reference list is incomplete or missing, rendering the work academically unreliable.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No poster",
                  },
                ],
                sourceNote:
                  "This is the Sheet1 version of this criterion. Sheet2 gives a differing (shorter) version of this row's band text — see 'Rubric sheet version 2' table below.",
              },
            ],
            academicIntegrity: [
              {
                label: "No concerns",
                text: "There are no academic integrity concerns with this assignment",
              },
              {
                label: "Category 1 — Poor Academic Practice",
                text: "The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label:
                  "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable AI Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased/commissioned work)",
                text: "All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
            ],
          },
          {
            label: "Rubric sheet version 2",
            note:
              "From the poster rubric workbook's Sheet2. All criteria other than 'Overall appearance of poster' and the Academic Integrity contact email matched Sheet1 verbatim in the source extraction, so they are repeated here unchanged. Sheet2's own wording for 'Overall appearance of poster' was flagged as differing (a shorter variant) but its exact verbatim text was not captured in the extracted source content — see sourceNote on that criterion and the module's gaps entry below. Bands: A* Distinction (80-100%), A Distinction (70-79%), B Merit (60-69%), C Pass (50-59%), D Fail (40-49%), F Fail (0-39%).",
            criteria: [
              {
                name: "Abstract content (Introduction, Methods, Results, Conclusions — split equally)",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "It is clear, concise and engaging. The introduction describes and connects the topic and context/background to the purpose of the investigation in an organised manner. The question being addressed is stated clearly. All relevant methods are stated clearly, using the correct terminology. All numerical results are given with correct units, and significant figures and all descriptive results are given with appropriate context. Conclusions are made based on the results. There are appropriate links with wider literature on the topic.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "It is clear and concise. The introduction describes and connects the topic and context/background to the purpose of the investigation in an organised manner. The question being addressed is stated clearly. All relevant methods are stated clearly, using the correct terminology. All numerical results are given with correct units, and significant figures and all descriptive results are given with appropriate context. Conclusions are made based on the results. There are appropriate links with wider literature on the topic.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "It is clear and concise. The introduction gives some background information. The question being addressed is stated. Methods are stated with less transparency. Some numerical results are given with correct units, and significant figures and all descriptive results are given with some context. Conclusions are made based on the results. There are some links with wider literature on the topic.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "The introduction gives some background information. The question being addressed is stated. Some methods are described inaccurately. Some numerical results are given with correct units and significant figures. Conclusions are made loosely based on the results. There are no links with wider literature on the topic.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "The introduction is not clear and concise. It fails to make connections between the subject of the investigation and the context/background. The research question is missing. The methods described are not relevant to the investigation. The results are half complete or not relevant to the investigation. No interpretations are made or are not relevant to the results.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No or illegible content.",
                  },
                ],
              },
              {
                name: "Clarity of charts, graphs and tables",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "All visual representations are related to the topic and make it easier to understand. All visual representations follow the same style and are clearly labelled. No further improvement is needed.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "All visual representations are related to the topic, and most make it easier to understand. All visual representations follow the same style and are clearly labelled.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "All visual representations related to the topic. Visual representations are labelled and follow the same style.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Some visual representations related to the topic. Some visual representations are labelled, and there is a mix of styles.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Visual representations do not relate to the topic. Do not follow the same style and are not clearly labelled. There is not at least a table or plot.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No visual representations used",
                  },
                ],
              },
              {
                name: "Critical interpretation",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Thorough and justified critical interpretation of the most important finding. This could not be improved",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Thorough and justified critical interpretation of the most important finding.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Thorough and mostly justified critical interpretation of the most important finding.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Some evaluation of the interpretation of results with no clear focus on an important finding.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Minimal evaluation of the results.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No evaluation of the results",
                  },
                ],
              },
              {
                name: "Presentation skills (verbal and non-verbal)",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Exudes enthusiasm throughout the presentation. Uses a clear voice throughout and uses a consistent, appropriate pace. Uses sentence stress effectively to place emphasis on important words or phrases and has logical transitions between sections. The presentation could not be improved further.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Projects enthusiasm about the topic. Uses a clear voice and speaks at a good pace. Uses sentence stress effectively to place emphasis on important words or phrases and has logical transitions between sections. Uses PowerPoint facilities appropriately to help the audience visualise.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Demonstrates a clear, positive feeling about the topic during most of the presentation. Uses a clear voice and mostly speaks at a good pace. Uses PowerPoint facilities mostly helpful for visualising the content.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Shows some interest in the topic presented. Sometimes speaks too quietly for the majority of the audience to understand. Uses powerpoint facilities at the slides in a way that helps the story.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Shows little interest in the topic presented. Speaks unclearly or in unfinished sentences. Little use of powerpoint facilities.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Shows no interest in the topic presented. Talks very fast, speaks too quietly or says 'uh' in every sentence. Sentences are incomplete or incorrect, and important points are not emphasised. English and language are limited and not professional. The entire presentation is read from notes or slides. No use of powerpoint facilities.",
                  },
                ],
              },
              {
                name: "Organisation of content (structure, timing, appropriateness of level for audience)",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Excellent storytelling will all relevant elements and a balance between sections. The message could not be improved.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "The goal of the research is clear, and the rest of the presentation is logically connected. The presentation storyline has a logical build-up and allows the whole audience to follow along and remember it afterwards. All necessary elements are present and receive a balanced amount of time. The presentation is the correct length.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "The goal of the research is explained well. The audience can reproduce parts of the presentation afterwards. The student has made good choices on what to leave out. Overall timing is good, with all elements well-balanced.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Most audience can follow the story. The goal of the research is mentioned. All components are discussed in a logical order, but some links are missing or the division of time between the different sections is not ideal. Major points could have benefitted from more time.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Only a few members of the audience can follow the presentation. Sections are not well balanced: many are too long or short, or their relevance to the story is not explained. The order of the presentation is not good, which makes the story more challenging to follow. The presentation is too long or too short.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Presentation is either completely above the level of the audience (appropriate only for direct colleagues) or below the level of the audience (appropriate for the general public). The audience cannot understand the presentation well due to a lack of structure. The goal of the analysis or presentation is not communicated. The presentation is much too long or too short.",
                  },
                ],
                sourceNote:
                  'The A* band text reads "Excellent storytelling will all relevant elements..." verbatim in the source ("will" is likely a typo for "with") — reproduced as written rather than silently corrected.',
              },
              {
                name: "Creativity",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Full utilisation of modern facilities (i.e. animations, interactivity, annotations, etc.) that captivates the audience and helps pass the message across without distracting it.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Some utilisation of modern facilities (i.e. animations, interactivity, annotations, etc.) that captivates the audience and helps pass the message across without distracting it.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Creative use of PowerPoint facilities (i.e. laser pointer, annotations) that supports the story without distracting it.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Minimal use of the laser pointer and annotations.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "No use of the pointer. A static poster is displayed throughout the presentation.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No poster",
                  },
                ],
              },
              {
                name: "Overall appearance of poster",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "[Sheet2 verbatim text not captured in the extracted source content — flagged as differing/shorter than Sheet1's version, but the exact wording could not be transcribed. Do not treat this as equivalent to the Sheet1 text above.]",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "[Sheet2 verbatim text not captured in the extracted source content.]",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "[Sheet2 verbatim text not captured in the extracted source content.]",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "[Sheet2 verbatim text not captured in the extracted source content.]",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "[Sheet2 verbatim text not captured in the extracted source content.]",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "[Sheet2 verbatim text not captured in the extracted source content.]",
                  },
                ],
                sourceNote:
                  "Sheet2 is documented as giving a shorter, differing version of this criterion's band text compared to Sheet1, and the workbook's Academic Integrity contact email also differs on this sheet (L.J.Bonnett@liverpool.ac.uk vs Sheet1's mesudell@liverpool.ac.uk). The exact verbatim Sheet2 band wording for this row was not available in the extracted source content used to build this file — see the module's gaps array. Do not silently fill this in; confirm with the module team which sheet is authoritative.",
              },
            ],
            academicIntegrity: [
              {
                label: "No concerns",
                text: "There are no academic integrity concerns with this assignment",
              },
              {
                label: "Category 1 — Poor Academic Practice",
                text: "The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (L.J.Bonnett@liverpool.ac.uk)",
              },
              {
                label:
                  "Category 2, 3, 4 (Plagiarism, Copying, Collusion, Submission of Unacceptable AI Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased/commissioned work)",
                text: "All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (L.J.Bonnett@liverpool.ac.uk)",
              },
            ],
          },
        ],
      },
      readingRefs: [],
      gaps: [
        "The official rubric spreadsheet contains two differing versions of the 'Overall appearance of poster' criterion and lists two different Academic Integrity contact emails across its sheets — both are shown below since the source itself is unresolved; check with the module team for the current version.",
        "Sheet2's exact verbatim band text for 'Overall appearance of poster' was not captured in the extracted source content and is shown as an explicit placeholder rather than invented — confirm the real wording with the module team.",
        "Module-grade weighting of Assignment 1 vs Assignment 2 is not stated anywhere in the guide or rubric (only internal 100-point criteria splits are given).",
        "Learning outcomes are not listed in the guide.",
        "Whether the cover sheet is mandatory per submission is not explicitly stated.",
      ],
    },
    {
      id: "dasc503-assignment-2-written-report",
      moduleCode: "DASC503",
      title: "Assignment 2 — Written Report",
      type: "Written report (R Markdown analysis, knitted/submitted as PDF)",
      weighting: "Not stated.",
      wordCount: "1500 words ± 10% (excluding all tables, references, code chunks, etc.)",
      timeLimit: undefined,
      submissionMethod:
        "Analysis performed in R using R Markdown; final report knitted and submitted in PDF format.",
      deadlineISO: "2026-01-09",
      deadlineDisplay: "Friday, 9th January 2026, 4 pm",
      setDate: "Week 4, Semester 1",
      learningOutcomes: [],
      description:
        "The assignment is a written report on analysing a retrospective cohort study using routine data to assess the potential association of smoking with incident lung cancer. You will have to: 1. Define and apply inclusion and exclusion criteria to construct your cohort. 2. Define the exposure and outcome. 3. Estimate and interpret the crude relative risk and its 95% confidence interval. 4. Critically appraise your approach. 5. Include a brief reflective summary recognising skills and lessons learnt from both assignments. You must perform the analysis in R using R Markdown and explain and justify each code chunk. You will also need to knit and submit the final report in PDF format. References are required. Please use the synthetic dataset available for download from the Assignment tab in Canvas for your analysis. Please assume that the dataset is a genuine extract from the CPRD database.",
      taskSteps: [
        {
          title: "Download the dataset and clean it",
          detail:
            "Download the synthetic dataset from the Assignment tab in Canvas (assume it is a genuine CPRD extract) and clean it for analysis.",
        },
        {
          title: "Define and apply inclusion/exclusion criteria",
          detail: "Define and apply inclusion and exclusion criteria to construct your retrospective cohort.",
        },
        {
          title: "Define the exposure and outcome",
          detail: "Define smoking as the exposure and incident lung cancer as the outcome.",
        },
        {
          title: "Estimate and interpret the crude relative risk and 95% CI",
          detail: "Estimate and interpret the crude relative risk of the exposure-outcome association and its 95% confidence interval.",
        },
        {
          title: "Critically appraise your approach",
          detail: "Critically appraise the methods and results of your analysis.",
        },
        {
          title: "Write a reflective summary",
          detail:
            "Include a brief reflective summary recognising skills and lessons learnt from both Assignment 1 and Assignment 2.",
        },
        {
          title: "Produce and justify the R Markdown analysis",
          detail:
            "Perform the analysis in R using R Markdown, explaining and justifying each code chunk, then knit and submit the final report as a PDF, with references included.",
        },
      ],
      topBandGuidance:
        "Top-band (A*) work fully and appropriately describes/justifies data cleaning, inclusion/exclusion criteria, and exposure/outcome definitions, in each case exploring the potential introduction of bias (magnitude and direction) and supporting this with appropriate references. Analysis methods are applied without errors and appropriate for the study design, with full, organised results (estimates plus confidence intervals) and correctly interpreted relative risks and 95% CIs. All conducted analyses are fully critically appraised, results interpreted against the epidemiological background with discussion of potential sources of bias (direction and magnitude, referenced), and compared against other similar research. The reflective summary uses all four guiding questions and shows a well-developed statement of learning. The R Markdown file is logically organised, clear, fully commented (including R/library versions) and complete. The report has an entirely logical flow with no language errors, academic language throughout, appropriately captioned tables/figures, and flawless, comprehensive, fully traceable citation and referencing.",
      goodWorkLooksLike: [
        "Data cleaning, and inclusion/exclusion and exposure/outcome definitions, are all clearly described and justified, with the potential for bias (its likely direction and magnitude) fully explored and referenced.",
        "The crude relative risk and its 95% CI are estimated with an appropriate, error-free method and reported in an organised way (tables/text with estimates and CIs), then correctly interpreted.",
        "A full critical appraisal that interprets results against the epidemiological background, discusses potential sources of bias, and compares findings to other similar research.",
        "A reflective summary that uses all four guiding questions (what was learned, how, why it matters, how it will be used) from both assignments.",
        "An R Markdown file that is logically organised, well commented (including R/library versions), reproducible and complete.",
        "Entirely logical report flow with no spelling/grammar errors, academic language throughout, correctly captioned tables/figures, and complete, correctly formatted, fully traceable references.",
      ],
      genAiTier: "Not stated — see Assessment Cover Sheet GAI declaration requirement (declare use/non-use of GAI and, if used, what for and what prompts).",
      rubric: {
        status: "available",
        tables: [
          {
            label: "Written Report rubric (Sheet1; Sheet2 was blank)",
            note:
              "Bands: A* Distinction (80-100%), A Distinction (70-79%), B Merit (60-69%), C Pass (50-59%), D Fail (40-49%), F Fail (0-39%) — same band structure as Assignment 1.",
            criteria: [
              {
                name: "Dataset cleaning",
                weight: "5%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "All data manipulations are appropriately described and justified, aiming to maximise information while minimising the introduction of bias. The potential introduction of bias is fully explored, and its magnitude and direction are discussed, supported by appropriate references.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "All data manipulations are appropriately described and justified, aiming to maximise information while minimising the introduction of bias. The potential introduction of bias is explored, and its magnitude and direction are discussed.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "All data manipulations are appropriately described and mostly justified, aiming to maximise information while minimising the introduction of bias.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "All data manipulations are appropriately described and somewhat justified.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Haphazard approach with inadequate description and unclear justification of data manipulations.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Dataset not cleaned",
                  },
                ],
              },
              {
                name: "Inclusion/exclusion criteria definition and application",
                weight: "5%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Inclusion and exclusion criteria are appropriately described and justified, aiming to maximise information while minimising the introduction of bias. The potential introduction of bias is fully explored, and its magnitude and direction are discussed, supported by appropriate references.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Inclusion and exclusion criteria are appropriately described and justified, aiming to maximise information while minimising the introduction of bias. The potential introduction of bias is fully explored, and its magnitude and direction are discussed.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Inclusion and exclusion criteria are appropriately described and mostly justified, aiming to maximise information while minimising the introduction of bias.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Inclusion and exclusion criteria are appropriately described and somewhat justified.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Haphazard approach with inadequate description and unclear justification of inclusion and exclusion.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No mention of inclusion and exclusion criteria",
                  },
                ],
              },
              {
                name: "Defining the exposure and outcome",
                weight: "20%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Case definitions for exposure and outcome are appropriately described and justified, aiming to maximise information while minimising the introduction of bias. The potential introduction of bias is fully explored, and its magnitude and direction are discussed, supported by appropriate references.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Case definitions for exposure and outcome are appropriately described and justified, aiming to maximise information while minimising the introduction of bias. The potential introduction of bias is fully explored, and its magnitude and direction are discussed.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Case definitions for exposure and outcome are appropriately described and mostly justified, aiming to maximise information while minimising the introduction of bias.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Case definitions for exposure and outcome are appropriately described and somewhat justified.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Haphazard approach with inadequate description and unclear justification of exposure and outcome.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Exposure and outcome not defined",
                  },
                ],
              },
              {
                name: "Crude relative risk and its 95% confidence interval estimation and interpretation",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "The analysis methods had been applied without errors and are appropriate for the study design. Full results have been presented in an organised manner (e.g. tables or text, with estimates accompanied by confidence intervals etc.). The relative risks and 95% CI are correctly interpreted.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "The analysis methods were applied with minimal errors. Results have been presented in an organised manner (e.g. tables or text, with estimates accompanied by confidence intervals etc.). The relative risks and 95% CI are correctly interpreted.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "The analysis methods were applied with minimal errors. Most results have been presented in an organised manner (e.g. tables or text, with estimates accompanied by confidence intervals etc.). The relative risks and 95% CI are interpreted with minimal errors.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "An attempt has been made to apply the analysis methods. There were some issues with the analysis that were not addressed. Some results are disorganised in the writeup (e.g. some confidence intervals are missing, and not all estimates are reported). The relative risks and 95% CI are interpreted with some errors.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "An attempt has been made to apply analysis methods; however, the analysis has significant issues. Limited results are presented in a disorganised manner in the writeup (e.g. some confidence intervals are missing, only some estimates reported). The relative risks and 95% CI are interpreted erroneously.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Analysis methods are missing. Few or no results are presented and are incomplete (e.g. missing confidence intervals, missing effect estimates). Interpretation is missing or is incorrect.",
                  },
                ],
              },
              {
                name: "Critical appraisal of the methods & results",
                weight: "30%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "All conducted analyses have been fully critically appraised. Results have been clearly interpreted in relation to the epidemiological background of the data, with a discussion of potential sources of bias that may have influenced the results, including the potential direction and magnitude of the bias supported by appropriate references. Research is compared to and interpreted alongside other similar research in the area.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "All conducted analyses have been fully critically appraised. Results have been clearly interpreted in relation to the epidemiological background of the data, with a discussion of potential sources of bias that may have influenced the results, including the potential direction and magnitude of the bias. Research is compared to and interpreted alongside other similar research in the area.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Conducted analyses have been partly critically appraised. Results have been clearly interpreted in relation to the epidemiological background of the data, with a discussion of potential sources of bias that may have influenced the results. Research is compared to and interpreted alongside other similar research in the area but to a lesser extent.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Conducted analyses have been partly critically appraised. Results have been partially only interpreted in relation to the epidemiological background of the data, with limited discussion of potential sources of bias that may have influenced the results.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Minimal discussion or interpretation of the methods and results have been presented",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "Critical appraisal for methods and results is missing",
                  },
                ],
              },
              {
                name: "Reflective summary recognising skills and lessons learnt from both assignments",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Analysed the experience from personal and academic perspectives and identified learning. Articulated learning by developing a well-developed statement of learning, using [all] four guiding questions.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "...using only three of the four guiding questions",
                    // source does not specify which three
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "...using only two of the four guiding questions",
                    // source does not specify which two
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Analyse the experience from personal and academic perspectives and identify learning.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Describes the experience with no attempt to identify learning.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No reflective summary",
                  },
                ],
                sourceNote:
                  "This criterion uses four guiding questions: 1) What did I learn? 2) How, specifically, did I learn it? 3) Why does this learning matter, or why is it significant? 4) In what ways will I use this learning? The A (three of four) and B (two of four) band texts do not specify in the source which of the four guiding questions are meant — reproduced verbatim/as incomplete rather than guessed.",
              },
              {
                name: "R code clarity and justification",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "R markdown file has been submitted. It is organised logically, and it is clear and easy for the reader to follow what has been done. There are informative comments throughout, and the code needed to complete the analysis is fully provided (e.g. listing of libraries used, code to generate tables etc.). Comments contain details of versions of R and libraries used",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "R markdown file has been submitted. It is organised logically, and it is clear for the reader to follow what has been done. There are comments throughout, and the code needed to complete the analysis is provided.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "R markdown file has been submitted. It is organised in a logical manner, and it is relatively easy for the reader to follow what has been done. There are some comments, and most of the code needed to complete the analysis is provided.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "R script or R markdown file has been submitted. It is not well organised, and it is difficult to follow what has been done easily. Comments are minimal and/or uninformative. Sections of code might be missing/incomplete.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "A Minimal R file has been submitted. It is disorganised, uncommented and incomplete (missing key sections of code)",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No R file has been submitted",
                  },
                ],
              },
              {
                name: "Overall structure and presentation",
                weight: "10%",
                bands: [
                  {
                    band: "A* Distinction",
                    range: posterBandRanges.aStar,
                    text: "Entirely logical flow with no spelling, punctuation or grammatical errors and use of only academic language throughout. This could not be improved. Tables use the academic format and are appropriately captioned. Figures are appropriately labelled and captioned. Flawless citation and referencing. The reference list is comprehensive, perfectly formatted, and fully traceable.",
                  },
                  {
                    band: "A Distinction",
                    range: posterBandRanges.a,
                    text: "Entirely logical flow with no spelling, punctuation or grammatical errors and use of only academic language throughout. The tables are appropriately captioned. Figures are appropriately labelled and captioned. Excellent citation and referencing. The reference list is complete and well structured, with negligible inconsistencies that do not impede traceability.",
                  },
                  {
                    band: "B Merit",
                    range: posterBandRanges.b,
                    text: "Mostly logical flow with rare spelling, punctuation or grammatical errors and only minor deviations from academic language. The tables are appropriately captioned. Figures are appropriately labelled and captioned. Competent citation and referencing.",
                  },
                  {
                    band: "C Pass",
                    range: posterBandRanges.c,
                    text: "Fairly logical flow with some spelling, punctuation or grammatical errors and several deviations from academic language. The tables are inadequately captioned. Figures are inadequately labelled and captioned. Adequate citation and referencing.",
                  },
                  {
                    band: "D Fail",
                    range: posterBandRanges.d,
                    text: "Generally illogical flow with many spelling, punctuation or grammatical errors and multiple deviations from academic language. Tables are not captioned. Figures are not labelled and captioned. Missing or spurious citation and referencing.",
                  },
                  {
                    band: "F Fail",
                    range: posterBandRanges.f,
                    text: "No submission",
                  },
                ],
              },
            ],
            academicIntegrity: [
              {
                label: "Contact",
                text: "Same wording and contact (mesudell@liverpool.ac.uk) as Assignment 1 Sheet1.",
              },
            ],
          },
        ],
      },
      readingRefs: [],
      gaps: [
        "Module-grade weighting of Assignment 2 vs Assignment 1 is not stated anywhere in the guide or rubric (only internal 100-point criteria splits are given).",
        "Learning outcomes are not listed in the guide.",
        "The reflective-summary rubric's A (three of four guiding questions) and B (two of four) band texts do not specify which questions apply.",
        "Whether the cover sheet is mandatory per submission is not explicitly stated.",
      ],
    },
  ],
  notes: [
    "Both assignments share the same synthetic dataset and data dictionary (CPRD Aurum-style extract; study period 1 Jan 2013 - 31 Dec 2020), to be treated as a genuine CPRD extract for analysis purposes.",
    "An Assessment Cover Sheet is required with Title of Assignment, Date, Word Count, Student ID number, and a Generative AI (GAI) declaration (state whether GAI was used and, if so, for what and with what prompts).",
  ],
};
