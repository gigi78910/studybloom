import type { ModuleInfo } from "./types";

export const dasc509: ModuleInfo = {
  code: "DASC509",
  name: "DASC509",
  assessments: [
    {
      id: "dasc509-assignment-1",
      moduleCode: "DASC509",
      title: "Assignment 1",
      type: "Written/coded assignment (SQL analysis using CPRD data in pgAdmin/PostgreSQL environment)",
      weighting:
        "Not stated in the Student Guide or the rubric. Only marks out of 100 (rubric total) are given; no percentage contribution to the final DASC509 module mark is specified in either document.",
      wordCount: "200 words + 10% (excluding code and tables) — applies to the Question 1 written summary only. No other section has a separate word limit stated.",
      submissionMethod:
        "Not explicitly stated (no named platform, e.g. Turnitin/Blackboard, is mentioned in this guide).",
      deadlineISO: "2026-11-02",
      deadlineDisplay:
        "Monday 2nd November 2026, 9am (submission date) — note: the module guide also lists a 'Set Date' of 13th November 2026, which falls after this submission date; both dates are shown here exactly as stated in the official guide, since the source document itself is inconsistent",
      deadlineConflictNote:
        "The Student Guide's own header table states a Set Date of 13/11/2026 (4pm) and a Submission Date of 2/11/2026 (9am) — i.e. the stated Set Date falls AFTER the stated Submission Date. This was checked cell-by-cell in the source document and is reproduced verbatim rather than silently corrected. The student has confirmed the deadlines overlap in the source and asked for both dates to be retained as-is. The Submission Date (2/11/2026) is used as deadlineISO for countdown purposes since it is the date labelled as the submission deadline.",
      setDate: "13/11/2026 (4pm) — as stated in the guide; see deadlineConflictNote for the discrepancy with the Submission Date.",
      description:
        "Students will analyse a subset of synthesised data from CPRD structured as multiple tables in a database. The analyses will be completed by following the tasks below. The first task requires a short summary within a given word limit. For each other task, students should provide the code used to generate the results as well as providing their results in an appropriate manner (e.g. tables). The code provided should run without errors if entered into the pgAdmin environment. AI may be used, but if so, must be declared, with prompts specified.",
      taskSteps: [
        {
          title: "Question 1 — CPRD summary (200 words)",
          detail:
            "Write a short summary about CPRD data, including the sources of the data and the content generally available. (200 words)",
        },
        {
          title: "Question 2 — Table inventory",
          detail:
            "Create a list of all the tables in the database giving basic information for each table: (a) row counts; (b) number of patients/individuals (where applicable).",
        },
        {
          title: "Question 3 — Summary tables of patient features",
          detail:
            "Create summary tables describing the features of the patients in the dataset, including: (a) summary statistics for all numerical fields; (b) counts for all categorical or binary fields; (c) earliest and latest dates for all date fields.",
        },
        {
          title: "Question 4 — Unique diagnoses",
          detail: "Create a list of all the unique diagnoses which exist within the dataset.",
        },
        {
          title: "Question 5 — Medications/treatments per patient per year",
          detail:
            "Create a table of summary statistics based on the number of medications/treatments per patient prescribed in each year, summarized across all patients, with one column per year, comprising: (a) total number of medications prescribed; (b) total number of patients prescribed at least one medication; (c) the range (min, max) of the numbers of medications/treatments per patient; (d) the mean number of medications/treatments per patient; (e) the median number of medications/treatments per patient.",
        },
        {
          title: "Coding workflow (guideline, applies across Q2–Q5)",
          detail:
            "For coding exercises: plan for how you expect to answer the question, then code for the implementation, then a short description of how you validated the output, then anything done to reconcile/correct errors found. Provide the code used for each question (preferably separate per question); code should be annotated to aid interpretation and indicate which question it answers; code should run on a computer with the database loaded into the pgAdmin PostgreSQL environment.",
        },
      ],
      topBandGuidance:
        "Per the rubric's top (10/8 pt Distinction) bands: for Q1, 'Excellent summary, could not be improved' / 'Excellent summary covering all the key information'; for the coding questions, 'Entirely accurate answer to question using code with excellent implementation. Could not be improved.' / 'Entirely accurate results, coding implementation could be improved in places.'; for Presentation, 'Excellent presentation; all tables presented clearly, in a scientific style. Could not be improved.'; for Code, 'Excellent presentation of fully annotated code. Could not be improved.'",
      goodWorkLooksLike: [
        "Q1: Excellent summary covering all the key information (Distinction band).",
        "Q2/Q4: Entirely accurate answer to question using code with excellent implementation.",
        "Q3/Q5: Entirely accurate answer to question using code with excellent implementation.",
        "Presentation: All tables presented clearly, in a scientific style.",
        "Code: Fully annotated code, presented excellently.",
      ],
      genAiTier:
        "Tier 3: Structural scaffold (Exploratory / Critical use). This assessment is Tier 3. In addition to Tier 2 permissions, GenAI use is broadly allowed and encouraged for specific stages or tasks. You are expected to engage actively and critically with AI, for example, to generate, critique, iterate and refine, without making AI the primary producer of your work. You must provide the evidence required in the assessment guidance, which may include a summary account of how AI was used, prompts, outputs, edits, and a critical evaluation of AI contributions. You must also cite or attribute use where appropriate.",
      rubric: {
        status: "available",
        tables: [
          {
            label: "Assignment 1 Rubric (f4bcde1f-DASC509_-_Assignment_1_Rubric_1.xlsx)",
            criteria: [
              {
                name: "Question 1",
                weight: "10 pts",
                bands: [
                  { band: "Distinction", range: "10 Pts", text: "Excellent summary, could not be improved." },
                  { band: "Distinction", range: "8 Pts", text: "Excellent summary covering all the key information" },
                  { band: "Merit", range: "6 Pts", text: "Very good summary, may miss an important concept or minor errors" },
                  { band: "Pass", range: "5 Pts", text: "Good summary but contains some errors or omits some key information" },
                  { band: "Fail", range: "4 Pts", text: "Attempt to answer questions, but key information omitted." },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Question 2",
                weight: "10 pts",
                bands: [
                  { band: "Distinction", range: "10 Pts", text: "Entirely accurate answer to question using code with excellent implementation. Could not be improved." },
                  { band: "Distinction", range: "8 Pts", text: "Entirely accurate results, coding implementation could be improved in places." },
                  { band: "Merit", range: "6 Pts", text: "Mainly accurate answers with generally well implemented code." },
                  { band: "Pass", range: "5 Pts", text: "Some correct answers, code may be poorly implemented in places" },
                  { band: "Fail", range: "4 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly poorly implemented" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
                sourceNote: "The source rubric text for the 4-pt Fail band contains a duplicated word (\"poorly poorly\") — reproduced verbatim as [sic] in the source.",
              },
              {
                name: "Question 3",
                weight: "20 pts",
                bands: [
                  { band: "Distinction", range: "20 Pts", text: "Entirely accurate answer to question using code with excellent implementation. Could not be improved." },
                  { band: "Distinction", range: "16 Pts", text: "Entirely accurate results, coding implementation could be improved in places." },
                  { band: "Merit", range: "12 Pts", text: "Mainly accurate answers with generally well implemented code." },
                  { band: "Pass", range: "10 Pts", text: "Some correct answers, code may be inefficient in places" },
                  { band: "Fail", range: "8 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally inefficient" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Question 4",
                weight: "10 pts",
                bands: [
                  { band: "Distinction", range: "10 Pts", text: "Entirely accurate answer to question using code with excellent implementation. Could not be improved." },
                  { band: "Distinction", range: "8 Pts", text: "Entirely accurate results, coding efficiency could be improved in places." },
                  { band: "Merit", range: "6 Pts", text: "Mainly accurate answers with generally well implemented code." },
                  { band: "Pass", range: "5 Pts", text: "Some correct answers, code may be poorly implemented in places" },
                  { band: "Fail", range: "4 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly implemented" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Question 5",
                weight: "20 pts",
                bands: [
                  { band: "Distinction", range: "20 Pts", text: "Entirely accurate answer to question using code with excellent implementation. Could not be improved." },
                  { band: "Distinction", range: "16 Pts", text: "Entirely accurate results, coding implementation could be improved in places." },
                  { band: "Merit", range: "12 Pts", text: "Mainly accurate answers with generally well implemented code." },
                  { band: "Pass", range: "10 Pts", text: "Some correct answers, code may be poorly implemented in places" },
                  { band: "Fail", range: "8 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly implemented" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Presentation",
                weight: "10 pts",
                bands: [
                  { band: "Distinction", range: "10 Pts", text: "Excellent presentation; all tables presented clearly, in a scientific style. Could not be improved." },
                  { band: "Distinction", range: "8 Pts", text: "Excellent presentation; tables presented clearly, may contain few minor style lapses." },
                  { band: "Merit", range: "6 Pts", text: "Good presentation; most tables presented clearly, may contain style lapses" },
                  { band: "Pass", range: "5 Pts", text: "Acceptable presentation; some tables presented clearly, contains style lapses" },
                  { band: "Fail", range: "4 Pts", text: "Poor presentation; tables not presented clearly, contains style lapses" },
                  { band: "Fail", range: "0 Pts", text: "Insufficient attempt at answering question for the presentation to be judged." },
                ],
              },
              {
                name: "Code",
                weight: "20 pts",
                bands: [
                  { band: "Distinction", range: "20 Pts", text: "Excellent presentation of fully annotated code. Could not be improved." },
                  { band: "Distinction", range: "16 Pts", text: "Excellent presentation of code, may lack minor detail in places." },
                  { band: "Merit", range: "12 Pts", text: "Good presentation of code, may lack minor details in many places, or major details in a limited number of places." },
                  { band: "Pass", range: "10 Pts", text: "Acceptable presentation of code, lacks major details in more than one place." },
                  { band: "Fail", range: "8 Pts", text: "Part of code missing, or code provided without annotations." },
                  { band: "Fail", range: "0 Pts", text: "Code not provided." },
                ],
              },
            ],
            academicIntegrity: [
              { label: "General statement", text: "There are no academic integrity concerns with this assignment" },
              {
                label: "Category 1",
                text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label: "Category 2, 3, 4",
                text: "(Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
            ],
          },
        ],
      },
      readingRefs: [],
      gaps: [
        "Module weighting (%) of this assignment toward the final DASC509 module grade is not stated anywhere in the guide or rubric.",
        "Named submission platform (e.g. Turnitin, Blackboard) is not stated in the guide.",
        "No formal numbered 'Learning Outcomes' section exists in the guide; only an 'Aims' section is present (reproduced in description context) — do not treat as official Module/Programme Learning Outcomes without checking the module specification.",
      ],
    },
    {
      id: "dasc509-assignment-2",
      moduleCode: "DASC509",
      title: "Assignment 2",
      type: "Written/coded assignment analysing the \"Cancer Patients\" dataset in Python",
      weighting:
        "Not stated in the Student Guide or the rubric. Only marks out of 100 (rubric total) are given; no percentage contribution to the final DASC509 module mark is specified.",
      wordCount: "1000 words + 10% (excluding code and tables)",
      submissionMethod:
        "A single file should be submitted, either pdf or word document, which also contains the code used to generate and test the results in a format which can be run. No named submission platform (e.g. Turnitin/Blackboard) is stated.",
      deadlineISO: "2027-01-18",
      deadlineDisplay: "Monday 18th January 2027, 4pm",
      setDate: "14/12/2026 (9am)",
      description:
        "Students will analyse the 'Cancer Patients' dataset containing details of cancer patients who have undergone surgery by completing the tasks below. For each question, numbered 1-4, students should write a short paragraph describing their results, as well as explaining and justifying their programming approach. A single file should be submitted, either pdf or word document, which also contains the code used to generate and test the results in a format which can be run.",
      taskSteps: [
        {
          title: "Question 1 — Exploratory analysis",
          detail:
            "Exploratory analysis of the dataset in order to improve understanding of the data, identify potential issues, and share results with clinicians. Choose a set of programming techniques/libraries to answer: (a) number of patients in each category for sex, tumour type, and resection margins; (b) mean and standard deviation for the first measurement of tumour size; (c) number of patients who had surgery after 2001; (d) the 2 most common countries, recoding patients from all other countries as a new variable \"other\" with an appropriate number; (e) repeat (a) grouped by whether surgery was in/before 2001 or after 2001; (f) repeat (b) for patients grouped by the three country groups identified in (d).",
        },
        {
          title: "Question 2 — Repeat analysis with different techniques",
          detail:
            "Repeat the analysis from question 1 using a different set of programming techniques/libraries. Compare your results and programming techniques to those used in question 1.",
        },
        {
          title: "Question 3 — KNN imputation of missing tumour-size values",
          detail:
            "References an external paper on KNN imputation; states the code will form part of a larger, multi-programmer project. (a) Identify patients missing the first tumour-size measurement, remove them, and report the number removed — use this dataset for the rest of Q3; (b) how many patients are missing the second tumour-size measurement?; (c) impute missing second measurements using the mean of the 10 most similar patients (by first measurement), reporting patient ID and imputed value in a table; (d) repeat (c) using the 5 most similar patients; (e) repeat (c) using the 20 most similar patients; (f) repeat (c) using the 10 most similar patients who also share the same tumour type.",
        },
        {
          title: "Question 4 — Randomised treatment-arm assignment",
          detail:
            "Randomly assign patients to 1 of 3 treatment arms of a randomized control trial, ensuring the proportion of patients with each tumour type is equal across arms. Treatment-arm assignment must be stored in code but not visible to clinicians viewing the dataset. Report patient IDs and treatment arms in a table. States the code will be applied to multiple datasets in future.",
        },
        {
          title: "Writing and code guidelines",
          detail:
            "Writing: one or two paragraphs per numbered question (1–4) outlining findings and explaining/justifying the programming approach (libraries, techniques, code structure). Code: provide code for each question (may be separate or combined); must be annotated to aid interpretation and indicate which question it answers; \"Effective testing of the code must be demonstrated\" (bolded in source); code should run on a computer with the dataset loaded into the python environment.",
        },
      ],
      topBandGuidance:
        "Per the rubric's top (15 or 20 pt / 12 or 16 pt Distinction) bands for Q1–Q4: 'Entirely accurate answer to question using code with excellent implementation and explanation. Could not be improved.' / 'Entirely accurate results, coding implementation or explanation could be improved in places.'; for Presentation, 'Excellent presentation; all tables presented clearly, scientific style. Could not be improved.'; for Code, 'Excellent presentation of fully annotated code. Could not be improved.'",
      goodWorkLooksLike: [
        "Q1–Q4: Entirely accurate answer to question using code with excellent implementation and explanation.",
        "Presentation: All tables presented clearly, in a scientific style.",
        "Code: Fully annotated code, presented excellently.",
        "Effective testing of the code demonstrated (per the bolded guideline in the source, note this is also constrained by the AI policy below).",
      ],
      genAiTier:
        "Tier 3: Structural scaffold (Exploratory / Critical use). This assessment is Tier 3. In addition to Tier 2 permissions, GenAI use is broadly allowed and encouraged for specific stages or tasks. You are expected to engage actively and critically with AI, for example, to generate, critique, iterate and refine, without making AI the primary producer of your work. You must provide the evidence required in the assessment guidance, which may include a summary account of how AI was used, prompts, outputs, edits, and a critical evaluation of AI contributions. You must also cite or attribute use where appropriate. Additional, assignment-specific restriction (not present in Assignment 1's guide): \"Use of AI is allowed for generating code or chunks of code.\" \"Use of AI is not allowed for testing code, generating comments on code, or for producing written answers.\"",
      rubric: {
        status: "available",
        tables: [
          {
            label: "Assignment 2 Rubric (5368d4d4-DASC509_-_Assignment_2_Rubric_2026.xlsx)",
            criteria: [
              {
                name: "Question 1",
                weight: "15 pts",
                bands: [
                  { band: "Distinction", range: "15 Pts", text: "Entirely accurate answer to question using code with excellent implementation and explanation. Could not be improved." },
                  { band: "Distinction", range: "12 Pts", text: "Entirely accurate results, coding implementation or explanation could be improved in places." },
                  { band: "Merit", range: "9 Pts", text: "Mainly accurate answers with generally well implemented and explained code." },
                  { band: "Pass", range: "7.5 Pts", text: "Some correct answers, code may be poorly implemented or explained in places" },
                  { band: "Fail", range: "6 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly implemented and explained" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Question 2",
                weight: "15 pts",
                bands: [
                  { band: "Distinction", range: "15 Pts", text: "Entirely accurate answer to question using code with excellent implementation and explanation. Could not be improved." },
                  { band: "Distinction", range: "12 Pts", text: "Entirely accurate results, coding implementation or explanation could be improved in places." },
                  { band: "Merit", range: "9 Pts", text: "Mainly accurate answers with generally well implemented and explained code." },
                  { band: "Pass", range: "7.5 Pts", text: "Some correct answers, code may be poorly implemented or explained in places" },
                  { band: "Fail", range: "6 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly implemented and explained" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Question 3",
                weight: "20 pts",
                bands: [
                  { band: "Distinction", range: "20 Pts", text: "Entirely accurate answer to question using code with excellent implementation and explanation. Could not be improved." },
                  { band: "Distinction", range: "16 Pts", text: "Entirely accurate results, coding implementation or explanation could be improved in places." },
                  { band: "Merit", range: "12 Pts", text: "Mainly accurate answers with generally well implemented and explained code." },
                  { band: "Pass", range: "10 Pts", text: "Some correct answers, code may be poorly implemented or explained in places" },
                  { band: "Fail", range: "8 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly implemented or explained" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Question 4",
                weight: "20 pts",
                bands: [
                  { band: "Distinction", range: "20 Pts", text: "Entirely accurate answer to question using code with excellent implementation and explanation. Could not be improved." },
                  { band: "Distinction", range: "16 Pts", text: "Entirely accurate results, coding implementation or explanation could be improved in places." },
                  { band: "Merit", range: "12 Pts", text: "Mainly accurate answers with generally well implemented and explained code." },
                  { band: "Pass", range: "10 Pts", text: "Some correct answers, code may be poorly implemented or explained in places" },
                  { band: "Fail", range: "8 Pts", text: "Attempt to answer questions, answers often inaccurate and code generally poorly implemented or explained" },
                  { band: "Fail", range: "0 Pts", text: "No attempt to answer question" },
                ],
              },
              {
                name: "Presentation",
                weight: "10 pts",
                bands: [
                  { band: "Distinction", range: "10 Pts", text: "Excellent presentation; all tables presented clearly, scientific style. Could not be improved." },
                  { band: "Distinction", range: "8 Pts", text: "Excellent presentation; tables presented clearly, may contain few style lapses." },
                  { band: "Merit", range: "6 Pts", text: "Good presentation; most tables presented clearly, may contain lapses in style" },
                  { band: "Pass", range: "5 Pts", text: "Acceptable presentation; some tables presented clearly, contains lapses in style" },
                  { band: "Fail", range: "4 Pts", text: "Poor presentation; tables not presented clearly, contains lapses in style" },
                  { band: "Fail", range: "0 Pts", text: "Insufficient attempt at answering question for the presentation to be judged." },
                ],
              },
              {
                name: "Code",
                weight: "20 pts",
                bands: [
                  { band: "Distinction", range: "20 Pts", text: "Excellent presentation of fully annotated code. Could not be improved." },
                  { band: "Distinction", range: "16 Pts", text: "Excellent presentation of code, may lack minor detail in places." },
                  { band: "Merit", range: "12 Pts", text: "Good presentation of code, may lack minor details in many places, or major details in a limited number of places." },
                  { band: "Pass", range: "10 Pts", text: "Acceptable presentation of code, lacks major details in more than one place." },
                  { band: "Fail", range: "8 Pts", text: "Part of code missing, or code provided without annotations." },
                  { band: "Fail", range: "0 Pts", text: "Code not provided." },
                ],
              },
            ],
            academicIntegrity: [
              { label: "General statement", text: "There are no academic integrity concerns with this assignment" },
              {
                label: "Category 1",
                text: "Poor Academic Practice. The assessed mark is capped at minimum pass grade (50%). Assessors are advised to consult with the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
              {
                label: "Category 2, 3, 4",
                text: "(Plagiarism, Copying, Collusion, Submission of Unacceptable Artificial Intelligence Generated Assessment Tasks, Embellishment or Falsification of Data, Purchased or commissioned work). All suspected Cat 2, 3, 4 cases must be referred to the Academic Integrity Officer (mesudell@liverpool.ac.uk)",
              },
            ],
          },
        ],
      },
      readingRefs: [],
      gaps: [
        "Module weighting (%) of this assignment toward the final DASC509 module grade is not stated anywhere in the guide or rubric.",
        "Named submission platform (e.g. Turnitin, Blackboard) is not stated in the guide.",
        "No formal numbered 'Learning Outcomes' section exists in the guide; only an 'Aims' section is present (reproduced in description context) — do not treat as official Module/Programme Learning Outcomes without checking the module specification.",
      ],
    },
  ],
  notes: [
    "Module weighting (%) of Assignment 1 vs Assignment 2 toward the final DASC509 module grade is not given anywhere in either guide or either rubric. Both guides refer to 'the weighting of each assignment' being used to combine marks, but never state the actual percentage split.",
    "Neither assignment's guide has a section titled 'Learning Outcomes'; only 'Aims' sections are present, which are the closest equivalent supplied in the source documents.",
    "Assignment 1's Student Guide contains an internal date contradiction: the stated Set Date (13/11/2026) falls after the stated Submission Date (2/11/2026). Per the student's confirmation, both dates are retained in this data exactly as stated in the source rather than one being silently corrected — see Assignment 1's deadlineConflictNote.",
  ],
};
