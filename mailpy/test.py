import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

msg = MIMEMultipart()
msg.attach(MIMEText('hello', 'plain', 'utf-8'))
msg.attach(MIMEText('<html><body><h1>Hello</h1></body></html>', 'html', 'utf-8'))

msg['Subject'] = 'Test'
msg['From'] = 'no-reply@ntut.org.tw'
msg['To'] = 'dennisliuu@gmail.com'


smtp = smtplib.SMTP('smtp.gmail.com', 587)
smtp.ehlo()
smtp.starttls()
smtp.login('t105360725@ntut.org.tw','nlho gosl ifgu dqcn')
smtp.send_message(msg)
smtp.quit()
