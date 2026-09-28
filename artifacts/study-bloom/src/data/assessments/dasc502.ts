import type { ModuleInfo } from "./types";

export const dasc502: ModuleInfo = {
  code: "DASC502",
  name: "DASC502",
  assessments: [
    {
      id: "dasc502-practical-4",
      moduleCode: "DASC502",
      title: "Practical 4",
      type: "Formative practical worksheet (not graded)",
      notGraded: true,
      weighting: "Not applicable — formative, ungraded",
      deadlineISO: null,
      deadlineDisplay: "No deadline — formative practical, not assessed",
      description:
        "A hands-on R practical (Practical 4 in a series) using the GUSTO dataset (Gusto.csv). Unlike previous practicals, most of the R code is already provided — the task sheet states the focus is on understanding what the provided code does and interpreting its output, rather than writing code from scratch. The practical works through prediction-model development and validation using the GUSTO dataset: building a parsimonious logistic regression model, calculating linear predictors and predicted probabilities, assessing discrimination and calibration, performing bootstrap internal validation, and finally performing external validation using a second dataset, Gusto_validation, introduced specifically for that portion. As stated in the sheet itself: \"This practical is a bit different to the previous three. Instead of writing your own code, most of this code is provided. The focus is therefore on understanding what is happening and interpreting the output. We continue to use the GUSTO dataset. A new dataset will be introduced for the external validation component of this practical.\" No marks, weighting, rubric, or module-grade contribution is stated anywhere in the document, and no deadline, submission method, word limit, or time limit is given — consistent with this being an in-class/practical exercise rather than a formal graded submission.",
      taskSteps: [
        {
          title: "Read in the GUSTO dataset",
          detail:
            "Read in the Gusto dataset (Gusto.csv) as done in previous practicals in this series; no new instructions are given beyond referring back to earlier practicals.",
        },
        {
          title: "Model development — candidate predictors and EPV",
          detail:
            "The pool of candidate predictors (AGE, SEX, WEI, SMK, HYP) is identified from a literature search as associated with 30-day mortality. Find how many people had 30-day mortality, identify the number of candidate predictor levels (referencing Lecture 4 and a table from Practical 1), calculate EPV = events / candidate predictor levels, and comment on the suitability of the dataset/number of predictors based on EPV.",
        },
        {
          title: "Build a parsimonious model",
          detail:
            "Run backward stepwise selection (stepAIC, from the MASS package) on the full logistic model glm(DAY30~AGE+SEX+WEI+factor(SMK)+HYP, family=\"binomial\") using the supplied R code to find the best-fitting reduced model. Identify which variables were retained and convert/interpret the log-odds coefficients as odds ratios.",
        },
        {
          title: "Calculate the linear predictor",
          detail:
            "Identify the characteristics of the 1st person in the dataset, manually calculate that individual's linear predictor, then check the manual answer against R's predict(reduced_model, type=\"link\").",
        },
        {
          title: "Calculate predicted probabilities",
          detail:
            "Manually calculate the predicted probability of 30-day mortality for the first individual using the formula from the lecture notes, then check against predict(reduced_model, type=\"response\").",
        },
        {
          title: "Performance measures on the development (internal) dataset",
          detail:
            "Calculate and interpret discrimination via the c-statistic (pROC package: roc(DAY30~pred_prob, ci=TRUE, data=Gusto)). Calculate and interpret calibration: calibration-in-the-large (CITL) via an offset model, the E/O ratio (mean(pred_prob) divided by observed proportion), and the calibration slope via a logistic model regressing the outcome on the linear predictor.",
        },
        {
          title: "Internal validation via bootstrapping",
          detail:
            "Refit the parsimonious model using lrm (rms package). Set a random seed (set.seed(231398), though the sheet notes students may choose any seed) and run bootstrap resampling internal validation with 500 repetitions (validate(final_model, method=\"boot\", B=500)). Explain the validate() output terms index.orig, training, test, optimism, and index.corrected. Convert the Dxy statistic to the c-statistic using c = (Dxy/2) + 0.5, and interpret the discrimination and calibration results from the bootstrap validation.",
        },
        {
          title: "External validation — read and compare datasets",
          detail:
            "Read in the independent Gusto_validation dataset (CSV). Note: in this external dataset SEX is coded 0=female, 1=male, and HYP is coded 0=no, 1=yes, which may differ from the development dataset's coding. Compare the four variables of interest (DAY30, AGE, SEX, HYP) across the development and external/validation datasets.",
        },
        {
          title: "External validation — performance measures",
          detail:
            "Using the fixed intercept and coefficients from model development (supplied as R code), manually program the linear predictor for the external dataset and calculate predicted probabilities via plogis(lin_pred). Calculate and interpret the c-statistic, E/O, CITL (via an offset model), and the calibration slope on the external data. Draw and evaluate a calibration plot using the supplied R code: split the external linear predictor into deciles, compute observed vs. expected event rates per decile with 95% confidence bands, overlay a histogram of predicted probabilities and a loess smoother, and produce a labelled calibration plot.",
        },
      ],
      rubric: {
        status: "not-available",
        note: "This is a formative, ungraded practical — no rubric applies.",
      },
      gaps: [
        "No deadline, submission method, word limit, or marks/weighting are stated anywhere in the task sheet — consistent with this being a practical class exercise rather than a formal graded assessment.",
        "No formal 'Learning Outcomes' list is present in the source; the topics above are descriptive summaries of section headings and content, not verbatim LO statements.",
        "The task sheet does not state a full lecture/module-week mapping beyond referencing 'Lecture 4' for candidate predictor levels.",
        "A companion Solutions document (DASC502 - Practical 4 - Task Sheet - Solutions.docx) exists for this practical, providing worked answers, code output, and interpretations. Its content has been deliberately excluded from this write-up and is not reproduced here — students should be told only that a solutions resource exists for post-practical self-checking, not shown the answers on the dashboard.",
      ],
    },
  ],
};
