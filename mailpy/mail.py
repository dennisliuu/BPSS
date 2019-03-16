import smtplib

gmail_user = 'XXXX@gmail.com'  
gmail_password = 'XXXX'

fromur = gmail_user  
to = ['ayasedd@yahoo.com.tw']

msg = MIMEText('content')
msg['Subject'] = 'Test'
msg['From'] = gmail_user
msg['To'] = 'xxx@gmail.com'

try:  
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()
    server.login(gmail_user, gmail_password)
    server.send_message(msg)
    server.quit()
    print('Email sent')
except:  
    print('GG')
