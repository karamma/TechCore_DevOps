pipeline {
  agent any

  stages {
    stage('Checkout Info') {
      steps {
        echo "Clone repos"
        sh 'pwd'
        sh 'echo "Salam"'
      }
    }

    stage("Mock Test") {
      steps {
        echo "Running tests"
        sh 'echo "tests run"'
      }
    }
  }
}
