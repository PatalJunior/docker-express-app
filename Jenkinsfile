pipeline {
    agent any

    environment {
        VERSION = "${env.BUILD_ID}" // Or another versioning system
    }

    stages {
        stage('Build Web App') {
            steps {
                script {
                    // Build the Docker image and tag it with both VERSION and 'latest'
                    def customImage = docker.build("pataljunior/docker-node-web-app:${VERSION}")
                    // Tag the image with 'latest'
                    sh "docker tag pataljunior/docker-node-web-app:${VERSION} pataljunior/docker-node-web-app:latest"
                }
            }
        }
        
        stage('Push') {
            steps {
                script {
                    // Authenticate and push both the versioned and 'latest' tags
                    withDockerRegistry(credentialsId: 'dockerhub-pataljunior') {
                        def customImage = docker.image("pataljunior/docker-node-web-app:${VERSION}")
                        customImage.push() // Push the versioned tag
                        customImage.push('latest') // Push the 'latest' tag
                    }
                }
            }
        }
    }
}
