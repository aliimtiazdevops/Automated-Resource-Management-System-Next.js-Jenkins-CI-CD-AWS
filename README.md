

![Typing Animation](https://readme-typing-svg.herokuapp.com/?font=Righteous&color=9D4EDD&size=35&center=true&vCenter=true&width=600&height=70&duration=3000&lines=Automated+Resource+Management;Next.js+%2B+Jenkins+CI/CD;AWS+EC2+Deployment+Live!)
---
### **DevOps | CI/CD | Jenkins | GitHub Webhooks | AWS EC2**

This **Company Resource Management Dashboard** is a **static, responsive Next.js application** with a dark neon theme, designed to showcase employee tracking, project progress, and server monitoring.  
It features **fully automated CI/CD deployment** using **Jenkins + GitHub Webhooks** to an **AWS EC2 instance** on **port 3000** — every `main` branch push triggers instant deployment.

---

## ⚙️ Features
- **Automated CI/CD** via Jenkins pipeline & GitHub webhook  
- **Live deployment** to AWS EC2 (`http://13.62.51.224:3000`)  
- **Static data** – employees, projects, and server metrics (non-editable)  
- **Responsive design** with Framer Motion transitions  
- **Interactive charts** using Recharts  
- **PM2 process manager** for production reliability  
- **Dark neon UI** with gradient accents and glassmorphism  



---

## 🧰 Technologies Used
- **Next.js 14** – React framework with SSR & API routes  
- **React 18** – UI library  
- **Recharts** – Interactive bar charts  
- **Framer Motion** – Smooth page transitions  
- **Tailwind-like CSS** – Custom styles in `globals.css`  
- **Jenkins** – CI/CD automation  
- **GitHub Webhooks** – Trigger pipeline on push  
- **AWS EC2** – Deployment target  
- **PM2** – Process manager for Node.js apps  
- **Node.js & npm** – Runtime and package management  

---

## 🗂️ Project Structure
```plaintext
├── .gitignore
├── Jenkinsfile
├── components
│   ├── CardLink.js
│   ├── Charts.client.js
│   ├── EmployeeCard.js
│   ├── Nav.js
│   └── ProjectCard.js
├── pages
│   ├── _app.js
│   ├── api
│   │   ├── employees.js
│   │   └── projects.js
│   ├── employees.js
│   ├── index.js
│   ├── monitor.js
│   └── projects.js
├── public
│   └── images/logo.png
├── styles/globals.css
├── next.config.js
├── package.json
└── README.md
```

---

## 🧩 Jenkinsfile (CI/CD Pipeline)
```groovy
node {
    def appDir = '/var/www/nextjs-dashboards'
    def appName = 'nextjs-dashboard'

    stage('Clean Workspace') {
        echo 'Cleaning Jenkins Workspace...'
        deleteDir()
    }

    stage('Clone Repo') {
        echo 'Cloning the repository...'
        git(
            branch: 'main',
            url: 'https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS'
        )
    }

    stage('Deploy to EC2') {
        echo 'Deploying to EC2...'

        sh """
            # Create directory
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            # Sync files
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}

            cd ${appDir}

            # Install & build
            npm install
            npm run build

            # Ensure PM2
            if ! command -v pm2 >/dev/null 2>&1; then
              sudo npm install -g pm2
            fi

            # Restart app
            pm2 delete ${appName} || true
            pm2 start npm --name "${appName}" -- run start -- -H 0.0.0.0 -p 3000
            pm2 save
        """
    }
}
```

---

## 🧱 File Overview
- **`pages/index.js`** → Home dashboard with navigation cards  
- **`pages/employees.js`** → Employee list with status badges  
- **`pages/projects.js`** → Project cards with progress bars  
- **`pages/monitor.js`** → Server stats + deployment trend chart  
- **`components/Charts.client.js`** → Recharts bar chart (client-side)  
- **`Jenkinsfile`** → Full CI/CD automation  
- **`pages/api/*.js`** → Mock API endpoints (static JSON)  

---

## ⚡ Setup (EC2 + Jenkins)

### 1. Launch EC2 Instance (Ubuntu 22.04)
```bash
# SSH into your EC2
ssh -i "jenkenisss.pem" ubuntu@<EC2-PUBLIC-IP>
```

### 2. Install Java, Jenkins, Node.js
```bash
sudo apt update
sudo apt install openjdk-21-jdk -y
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
sudo apt install jenkins -y

# Start Jenkins
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v  # Should show v20+
```

### 3. Allow Jenkins Sudo Access
```bash
sudo visudo
# Add this line:
jenkins ALL=(ALL) NOPASSWD: ALL
```

---

## 🚀 CI/CD Setup

1. **Create Jenkins Job**
   - New Item → Pipeline → Name: `resource-dashboard`
   - Trigger: **GitHub hook trigger for GITScm polling**
   - Pipeline → **Pipeline script from SCM**
   - SCM: Git
   - Repository URL: `https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS`
   - Branch: `*/main`

2. **Set Up GitHub Webhook**
   - GitHub → Settings → Webhooks → Add webhook
   - Payload URL: `http://<EC2-PUBLIC-IP>:8080/github-webhook/`
   - Content type: `application/json`
   - Events: **Just the push event**

3. **Push to `main` → Auto-deploy!**

---

## 💻 Run Locally
```bash
git clone https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS.git
cd Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Live Demo
**Deployed on AWS EC2**  
**URL:** `http://13.62.51.224:3000` *(Replace with your EC2 public IP)*

> The site is live and updates **automatically** on every push to `main`.

---

## 🧠 Usage
- Edit data in `pages/api/*.js` or hardcode in components  
- Customize styles in `styles/globals.css`  
- Push to `main` → Jenkins auto-deploys in < 60 seconds  

---

## 📬 Contact
- **Email:** aliimtiaz.dev@gmail.com   
- **LinkedIn:** linkedin.com/in/ali-imtiaz1 

---

🧑‍💻 *Automated, Deployed, and Monitored by Ali Imtiaz — DevOps Engineer*


