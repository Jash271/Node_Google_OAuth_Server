var old_url = 'http://localhost:5000/oauth2callback'
old_url = encodeURIComponent(old_url)
var url = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=564790885481-7d0fdgi7jirh5mke5u4r3v2dqvbj8ba9.apps.googleusercontent.com&redirect_uri=${old_url}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&state=1235&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow`
console.log(url)