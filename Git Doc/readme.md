Web Application Deployment Documentation
Table of Contents
Introduction
Prerequisites
Deployment Steps
Clone Git Repository
Apache Configuration
SSL Certificate Setup
HTTPS Redirection
Conclusion
Introduction
This document outlines the steps to deploy a web application using Git, Apache, and SSL on an Ubuntu server.

Prerequisites
Ubuntu server with root access
Apache web server installed
Git installed
Certbot installed for SSL certificate generation
Deployment Steps
1. Clone Git Repository
Navigate to the web server's root directory and clone the Git repository.

bash
Copy code
cd /var/www/html/
git clone git@gitlab.amura.in:core-php/kiradiam-lp-vicenzaoro.git
cd kiradiam-lp-vicenzaoro
2. Apache Configuration
Navigate to the Apache sites-available directory and create a new configuration file.

bash
Copy code
cd /etc/apache2/sites-available/
cp kiradiam-lp.conf kiradiam-lp-vicenzaro.conf
nano kiradiam-lp-vicenzaro.conf
Edit the configuration file and save the changes.

3. SSL Certificate Setup
Obtain a new SSL certificate using Certbot.

bash
Copy code
certbot
Select the appropriate domain names and follow the prompts to complete the certificate setup.

4. HTTPS Redirection
Enable the new Apache site configuration and reload the web server.

bash
Copy code
a2ensite kiradiam-lp-vicenzaro.conf
systemctl reload apache2
Configure Certbot to redirect HTTP traffic to HTTPS.

bash
Copy code
certbot
Choose option 2 to redirect HTTP traffic to HTTPS.

Conclusion


### Live

## Live Website Deployment

Assuming you have cloned the Git repository and updated the Apache configuration for the staging website as mentioned in the previous steps, here's how you can deploy the live website.

1. **Create Live Website Folder:**
    ```bash
    cd /var/www/html/
    cp -r kiradiam-lp-vicenzaro kiradiam-live.com
    cd kiradiam-live.com
    ```

2. **Update Apache Configuration:**
    ```bash
    cd /etc/apache2/sites-available/
    cp kiradiam-lp-vicenzaro.conf kiradiam-live.com.conf
    nano kiradiam-live.com.conf
    ```

    Edit the configuration file to reflect the correct paths and domain for the live website, then save the changes.

3. **Enable Live Website Configuration:**
    ```bash
    a2ensite kiradiam-live.com.conf
    systemctl reload apache2
    ```

4. **Obtain SSL Certificate for Live Website:**
    ```bash
    certbot
    ```

    Follow the prompts to obtain a new SSL certificate for your live website.

5. **Redirect HTTP to HTTPS for Live Website:**
    ```bash
    a2ensite kiradiam-live.com.conf
    systemctl reload apache2
    certbot
    ```

    Choose option 2 to redirect HTTP traffic to HTTPS for the live website.

Now, your live website should be deployed with SSL enabled. Access the site via the configured domain (e.g., https://kiradiam-live.com).

For detailed information and troubleshooting, refer to the [full documentation](./docs/deployment.md).

The web application is now deployed with SSL enabled. Verify the deployment by accessing the site via the configured domain.

Feel free to add more details, explanations, or troubleshooting information based on your specific requirements and environment.
