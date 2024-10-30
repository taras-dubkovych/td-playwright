pipeline {
    agent any

    stages {

        stage ('Docker'){
            steps{
                sh 'docker-compose -f docker-compose.yml up .'
            }
        }

        stage('Run Tests') {
           agent {
            docker{
                image 'my-docker'
                reuseNode true
            }
           }
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results.xml', allowEmptyArchive: true
            junit 'test-results.xml'
        }
    }
}