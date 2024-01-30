# User Authentication System

This is a user authentication system that allows users to sign up, sign in, sign out, reset their password, and use Google login/signup for social authentication. The system ensures that passwords are securely stored in the database by encrypting them. Additionally, it includes a bonus feature for password recovery in case a user forgets their password.

- [Installation](#installation)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RAHULANN/OAuth.git
   cd OAuth
   npm install  //install dependecies
   nodemon index.js   //start the server
   ```
   ```
   ENV config
   PORT = 4000
   DEBUG = false
   MONGO_USER=""
   MONGO_PASSWORD=""
   CLIENTID= ""
   CLIENTSCRET=""

# Sign Up

Users can create an account by providing their email and password.

HTML Page:

![image](https://github.com/RAHULANN/OAuth/assets/95866809/159b513f-1a46-432b-b8c7-f068785357b4)


# Sign In

Users can log in using their email and password. After successful sign-in, they are redirected to a blank home page with options to sign out and reset their password.

![image](https://github.com/RAHULANN/OAuth/assets/95866809/42bcf0ef-30f8-411b-821b-2eb76cd7b466)


# Home
Here user have there details name email some other options as well.
![image](https://github.com/RAHULANN/OAuth/assets/95866809/77905fec-3d67-4655-b05e-78deee1df9a0)

# Reset Password

After signing in, users have the option to reset their password.

![image](https://github.com/RAHULANN/OAuth/assets/95866809/5ea16116-3368-44a3-a342-af98f5f31689)


