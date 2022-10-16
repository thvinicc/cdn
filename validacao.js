const sessions = ['cytotec', 'bunda', 'abortivo']
const searchTarget = document.querySelector('.rtcl-post');
const submitButton = document.querySelector('.rtcl')

if (searchTarget.textContent.includes('session')) {
  if (!sessions.every((session) => searchTarget.textContent.includes(session))) {
    submitButton.setAttribute("disabled", "")
  } else {
    submitButton.removeAttribute('disabled')
  }
}
