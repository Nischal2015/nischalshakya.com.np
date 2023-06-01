pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stages {
    stage('Install dependencies') {
      steps {
        echo "Installing dependencies"
        sh 'corepack enable'
        sh 'yarn'
      }
    }

    stage('Build') {
      steps {
        echo "Building project"
        sh 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        echo "Deploying to S3 bucket"
        sh 'aws s3 cp ./dist/. s3://portfolio-nischal-bucket-v1 --recursive'
      }
    }
  }

  post {
    success {
      echo "success"
    }
    failure {
      echo "failure"
    }
  }
}