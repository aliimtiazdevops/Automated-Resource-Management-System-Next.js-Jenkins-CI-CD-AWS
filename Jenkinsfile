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
