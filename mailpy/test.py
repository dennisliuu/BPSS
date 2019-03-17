import smtplib
smtp = smtplib.SMTP('smtp.gmail.com', 587)
smtp.ehlo()
smtp.starttls()
smtp.login('t105360725@ntut.org.tw','nlho gosl ifgu dqcn')
smtp.sendmail('no-reply@example.com',
              'dennisliuu@gmail.com',
              'Subject: Hello World Email!\n\nHi there~')
smtp.quit()
