![Typing Animation](https://readme-typing-svg.herokuapp.com/?font=Righteous&color=9D4EDD&size=35&center=true&vCenter=true&width=600&height=70&duration=3000&lines=Automated+Resource+Management;Next.js+Dashboard;Jenkins+CI/CD+on+AWS;)
---
### **DevOps Project | Next.js | Jenkins | GitHub Webhooks | AWS EC2**

This **Automated Resource Management System** is a responsive Next.js dashboard designed for managing company resources, including employees, projects, and server monitoring.  
It utilizes **Jenkins CI/CD** and **GitHub webhooks** for automated deployment to an **AWS EC2 instance** — ensuring every push to the `main` branch triggers seamless updates on the server.

---

## ⚙️ Features
- 🔄 Automated deployment via Jenkins CI/CD pipeline & GitHub webhook triggers  
- 📊 Dashboard for employee status, project progress, and server metrics  
- 📱 Responsive design with dark neon theme and Framer Motion transitions  
- 👥 Employee management view with online/offline status  
- 📈 Project tracking with progress bars and status indicators  
- 📉 Server monitoring with charts for deployment trends and resource usage  
- 🌐 Live deployment on AWS EC2 instance (port 3000)

---

## 🧰 Technologies Used
- **Next.js** – React framework for server-side rendering and static generation  
- **React** – Frontend library  
- **Recharts** – Charting library for visualizations  
- **Framer Motion** – Animation library for smooth transitions  
- **Jenkins** – CI/CD automation  
- **GitHub Webhooks** – Trigger pipelines on push events  
- **AWS EC2** – Cloud hosting  
- **PM2** – Process manager for Node.js applications  
- **Git** – Version control  
- **Node.js & NPM** – Runtime and package manager  

---

## 🗂️ Project Structure
```plaintext
├── .gitignore
├── Jenkinsfile
├── README.md
├── components
│   ├── CardLink.js
│   ├── Charts.client.js
│   ├── EmployeeCard.js
│   ├── Nav.js
│   └── ProjectCard.js
├── next.config.js
├── package-lock.json
├── package.json
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
│   └── images
│       └── logo.png
└── styles
    └── globals.css
```

---

## 🧩 Jenkinsfile (CI/CD Pipeline)
```groovy
node {
    // Define global variables once
    def appDir = '/var/www/nextjs-dashboards'
    def appName = 'nextjs-dashboard'

    stage('Clean Workspace') {
        echo '🧹 Cleaning Jenkins Workspace...'
        deleteDir()
    }

    stage('Clone Repo') {
        echo '📦 Cloning the repository...'
        git(
            branch: 'main',
            url: 'https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS'
        )
    }

    stage('Deploy to EC2') {
        echo '🚀 Deploying to EC2...'

        sh """
            # Ensure target directory exists
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            # Sync project files (excluding heavy or unnecessary folders)
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}

            cd ${appDir}

            # Install dependencies
            npm install

            # Build Next.js app
            npm run build

            # Ensure PM2 is installed
            if ! command -v pm2 >/dev/null 2>&1; then
              sudo npm install -g pm2
            fi

            # Stop existing app (ignore error if not found)
            pm2 delete ${appName} || true

            # Start the Next.js app on port 3000
            pm2 start npm --name "${appName}" -- run start -- -H 0.0.0.0 -p 3000

            # Save process list so it restarts on reboot
            pm2 save
        """
    }
}
```

---

## 🧱 File Overview
- **pages/index.js** → Main dashboard page with links to employees, projects, and monitoring  
- **pages/employees.js** → Employee list view  
- **pages/projects.js** → Project progress view  
- **pages/monitor.js** → Server metrics and deployment charts  
- **components/** → Reusable UI components like navigation, cards, and charts  
- **api/** → Mock API endpoints for employees and projects  
- **styles/globals.css** → Global styling with dark neon theme  
- **Jenkinsfile** → CI/CD pipeline for automated deployment  
- **public/images/** → Static assets like logos  

---

## ⚡ Setup
```bash
git clone https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS.git
cd Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS
```

---

## 💻 Run Locally
```bash
npm install
npm run dev
```
Access at `http://localhost:3000`.

---

## 🧩 CI/CD Setup
1. Launch an AWS EC2 instance (e.g., Ubuntu) and connect via SSH:  
   ```bash
   ssh -i "your-key.pem" ubuntu@your-ec2-public-ip
   ```  
2. Update packages and install Java:  
   ```bash
   sudo apt update
   sudo apt install openjdk-21-jdk -y
   ```  
3. Install Jenkins: Follow official docs or add Jenkins repo, then:  
   ```bash
   sudo apt install jenkins -y
   sudo systemctl enable jenkins
   sudo systemctl start jenkins
   sudo systemctl status jenkins
   ```  
4. Grant sudo to Jenkins user (edit `/etc/sudoers`):  
   ```bash
   sudo visudo
   ```  
   Add: `jenkins ALL=(ALL) NOPASSWD: ALL`  
5. Install Node.js and NPM:  
   ```bash
   sudo apt install nodejs npm -y
   ```  
6. In Jenkins dashboard, create a new pipeline job:  
   - Select "GitHub hook trigger for GITScm polling".  
   - Pipeline: "Pipeline script from SCM".  
   - SCM: Git, repo URL: `https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS`, branch: `main`.  
7. Set up GitHub webhook: In repo settings, add webhook to `http://your-ec2-ip:8080/github-webhook/` for push events.  
8. Push to `main` → Jenkins auto-deploys to EC2 on port 3000.

---

## 🧠 Usage
- Customize dashboard pages and components as needed.  
- Update mock API data in `/pages/api/` for real integrations.  
- Push changes to `main` → Automatic deployment to EC2.  
- Monitor via `http://your-ec2-public-ip:3000`.

---

## 🔗 Live Demo
View the deployed dashboard at: http://13.62.51.224:3000 (AWS EC2 public IP).

---

## 📬 Contact
- **Email:** aliimtiaz.dev@gmail.com  
- **Linkedin:** https://www.linkedin.com/in/ali-imtiaz1/

---

🧑‍💻 *Developed and Deployed by Ali Imtiaz, DevOps Engineer*
