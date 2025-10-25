node {
    def appName = env.JOB_BASE_NAME   // automatically use Jenkins job name
    def appDir = "/var/www/${appName}"

    stage('Clean Workspace') {
        echo 'Cleaning Jenkins Workspace'
        deleteDir()
    }

    stage('Clone Repo') {
        echo 'Cloning the repo'
        git branch: 'main', url: 'https://github.com/aliimtiazdevops/Automated-Resource-Management-System-Next.js-Jenkins-CI-CD-AWS'
    }

    stage('Deploy to EC2') {
        echo "Deploying ${appName} to ${appDir}"
        sh """
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}

            cd ${appDir}
            npm install
            npm run build

            if ! command -v pm2 >/dev/null 2>&1; then
              sudo npm install -g pm2
            fi

            pm2 delete ${appName} || true
            pm2 start npm --name "${appName}" -- start -- -H 0.0.0.0 -p 3000
            pm2 save
        """
    }
}
