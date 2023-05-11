import { useEffect } from 'react'
const chat = () => {
  // const API_ENDPOINT=`${rocess.env.REACT_APP_API_ID}`
  useEffect(() => {
    return (function (d, m) {
      var kommunicateSettings = {
        appId: '5df39f3cd79bd672eee63c9a5a286bc6',
        popupWidget: true,
        voiceOutput: true,
        voiceName: 'Google UK English Female',
        voiceRate: 1,
        automaticChatOpenOnNavigation: true,
      }
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app'
      var h = document.getElementsByTagName('head')[0]
      h.appendChild(s)
      window.kommunicate = m
      m._globals = kommunicateSettings
    })(document, window.kommunicate || {})
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  },[])
  return (
    <div>
      {' '}
      <h1>this is our chatbot agent</h1>
    </div>
  )
}
export default chat
