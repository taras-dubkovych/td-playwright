pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile
                    sh 'docker build -t playwright-test .'
                }
            }
        }

        stage('Run Tests in Docker Container') {
            steps {
                script {
                    // Run Docker Compose to start the container and execute the tests
                    sh 'ls -la'
                    sh 'docker compose version'
                    sh 'docker compose up --abort-on-container-exit'
                }
            }
        }
    }

    post {
        always {
            // Archive test results for reporting, if available
            archiveArtifacts artifacts: '**/allure-results', allowEmptyArchive: true

            // Stop and remove the container after tests are complete
            sh 'docker-compose down'
        }
    }
}