from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.example.com'  # Replace with your email provider's SMTP server
app.config['MAIL_PORT'] = 587  # Replace with the appropriate port
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'your_email@example.com'  # Replace with your email address
app.config['MAIL_PASSWORD'] = 'your_email_password'  # Replace with your email password

app.config['MAIL_DEFAULT_SENDER'] = 'your_email@example.com'  # Replace with your email address
app.config['MAIL_SUPPRESS_SEND'] = False
mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/subscribe', methods=['POST'])
def subscribe():
    if request.method == 'POST':
        email = request.form['email']

        # Send subscription confirmation email
        send_subscription_email(email)

        flash('Subscription confirmation email sent!', 'success')
        return redirect(url_for('index'))

def send_subscription_email(email):
    subject = 'Subscription Confirmation'
    body = 'Thank you for subscribing to Barasa\'s Grocery updates!'

    msg = Message(subject, recipients=[email], body=body)
    mail.send(msg)

if __name__ == '__main__':
    app.secret_key = 'your_secret_key'  # Replace with a secure secret key
    app.run(debug=True)
