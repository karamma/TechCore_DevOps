pipeline {
  agent any

  stages {
    stage('Checkout Info') {
      steps {
        echo 'Clone repos'
        sh 'pwd'
        sh 'echo "Salam"'
      }
    }

    stage('Docker build')
    steps {
      echo 'Build Docker Image'
      sh 'docker build -t mx:2.0 -f ./core2.0/module1/multistage/Dockerfile.distroless ./core2.0/module1/multistage/'
      echo 'Image was build successfully '
    }
  }
}
