pipeline {
    agent any

    tools {
        nodejs 'Node.js 14 LTS'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Preparation') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                        sh 'npm install --save-dev jest-junit'
                        echo 'npm installations completed successfully'
                    } else {
                        bat 'npm install'
                        bat 'npm install --save-dev jest-junit'
                        echo 'npm installations completed successfully'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                    echo 'Tests completed'
                }
            }
        }
    }

    post {
        always {
            cleanWs() // Cleans the workspace
        }
        success {
            echo 'Build and tests succeeded!' // Prints a success message to the console
            office365ConnectorSend (
                webhookUrl: 'https://seneca.webhook.office.com/webhookb2/f09ab9be-ee43-4222-a593-608c99d15557@eb34f74a-58e7-4a8b-9e59-433e4c412757/IncomingWebhook/78e12c343b4e405f959f639e3dcbd8c8/902cbc47-1974-4a1e-88d9-d662e1e13789',
                message: "Build Succeeded: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                status: 'Success'
            )
        }
    }
}
