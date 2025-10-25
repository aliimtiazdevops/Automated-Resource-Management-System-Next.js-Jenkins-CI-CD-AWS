node {
    def appDir = '/var/www/nextjs-dashboards'
    def appName = 'nextjs-dashboards'

    stage('Clean Workspace') {
        echo 'Cleaning Jenkins Workspace'
        deleteDir()
    }

    stage('Clone Repo') {
        echo 'Cloning the repo'
        git(
            branch: 'main',
            url: 'https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS'
        )
    }

    stage('Deploy to EC2') {
        echo 'Deploying to EC2'
        sh """
            # Ensure target directory exists
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            # Sync project files
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}

            cd ${appDir}

            # Install dependencies and build
            npm install
            npm run build

            # Install PM2 globally if not already installed
            if ! command -v pm2 >/dev/null 2>&1; then
              sudo npm install -g pm2
            fi

            # Stop any previous PM2 process for this app (if exists)
            pm2 delete ${appName} || true

            # Start the app via PM2 on public host and port 4000
            pm2 start npm --name "${appName}" -- start -- -H 0.0.0.0 -p 4000

            # Save the PM2 process list so it auto-starts on reboot
            pm2 save
        """
    }
}
