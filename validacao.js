const sessions = ['cytotec', 'bunda', 'abortivo']
const searchTarget = document.querySelector('.body');
const submitButton = document.querySelector('.btn btn-primary rtcl-submit-btn yp_onscreen')

if (searchTarget.textContent.includes('session')) {
  if (!sessions.every((session) => searchTarget.textContent.includes(session))) {
    submitButton.setAttribute("disabled", "")
  } else {
    submitButton.removeAttribute('disabled')
  }
}
