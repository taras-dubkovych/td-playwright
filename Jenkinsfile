pipeline {
    agent {
        docker { 
            image 'docker/compose:1.29.2' 
            args '-v /var/run/docker.sock:/var/run/docker.sock' 
        }
    }

    stages {
        stage('Build and Run Tests') {
            steps {
                sh 'docker-compose up --abort-on-container-exit'
            }
        }
    }

    post {
        always {
            sh 'docker-compose down'
            archiveArtifacts artifacts: '**/allure-results', allowEmptyArchive: true
        }
    }
}
