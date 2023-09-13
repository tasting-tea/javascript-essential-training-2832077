class consentPage {
  constructor(projectName, versionDate, warning, consentStatus) {
    this.projectName = projectName;
    this.versionDate = versionDate;
    this.warning = warning;
    this.consentStatus = consentStatus;
    //    this.dateAcquired = dateAcquired;
  }
  togglConsent(participantStatus) {
    this.consentStatus = participantStatus;
  }
}
export default consentPage;
