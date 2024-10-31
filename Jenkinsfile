pipeline {
    agent any

    stages {

        stage ('Docker'){
            steps{
                sh 'docker build -t td-playwright .'
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