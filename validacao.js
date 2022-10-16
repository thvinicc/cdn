const sessions = ['cytotec', 'bunda', 'abortivo']
const searchTarget = document.querySelector('.mce-content-body description post-type-page post-status-publish page-template-default locale-pt-br mceContentBody webkit wp-editor html5-captions');
const submitButton = document.querySelector('.btn btn-primary rtcl-submit-btn yp_onscreen')

if (searchTarget.textContent.includes('session')) {
  if (!sessions.every((session) => searchTarget.textContent.includes(session))) {
    submitButton.setAttribute("disabled", "")
  } else {
    submitButton.removeAttribute('disabled')
  }
}
