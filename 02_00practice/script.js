import consentPage from "./consentPage.js";

const currentSurveyStatuts = new consentPage(
  "Modelling Subjective Wellbeing",
  "August-23",
  "This survey asks you to consider sensitive topics such as mental wellbeing, illness, and death. More details are available in the Participant Information Sheet.",
  "Not yet collected"
);

const contentConsent = `
<main>
    <article>
      <h1>${currentSurveyStatuts.projectName}</h1>
      <ul>
        <li>Consent Status: ${currentSurveyStatuts.consentStatus}</li>
        <li>Survey version:${currentSurveyStatuts.versionDate}</li>
        <li>Warning:${currentSurveyStatuts.warning}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = contentConsent;

console.log("Project name:", consentPage.projectName);
console.log("Participant consent obtained:", consentPage.projectName);
