#!/bin/bash

errorLog="codeAnalyzerError.log";
infoLog="codeAnalyzerInfo.log";

function usage() {
    printMsg "Usage: $0";
    printMsg "\t [-h <help>]"
    printMsg "\t [-c <CandidateID>]"
    printMsg "\t [-p <Project Name>]"
    printMsg "\t [-t <Test class package and name>]"
    printMsg "\t [-r <Path to the project directory>]"
}

function printMsg() {
    echo -e "$1";
}

function printError(){
echo "ERROR:$2" >>$errorLog
}

function printInfo(){
echo "INFO:$3" >>$infoLog
}

###################################################################
#Check the command line options to determine how to execute script
###################################################################
while getopts ":h?:c:p:t:r:" opt; do
    case "$opt" in
    h|help|\?)
        usage;
        exit 0
        ;;
    c)  _candidateId=$OPTARG;
	    printMsg "CandidateID set to ${_candidateId}"
	    ;;
    p)  _projectName=$OPTARG;
	    printMsg "Project Name set to ${_projectName}"
	    ;;
    t)  _testClassPackageAndName=$OPTARG;
	    printMsg "Test class package and name set to ${_testClassPackageAndName}"
	    ;;
    r) _pathToProjectDirectory=$OPTARG;
	    printMsg "Path to the project directory set to ${_pathToProjectDirectory}"
	    ;;
    *)  usage
	    ;;
    esac
done
##################################################################################
#Check if all the command line options is supplied, exit if that's not the case
##################################################################################
if [ [ -z "${_candidateId}" ] && [ -z "${_projectName}" ] && [ -z "${_testClassPackageAndName}" ] && [ -z "${_pathToProjectDirectory}" ] ]; then
    usage;
    exit 0
fi
############################
#Check the java is installed
############################
function checkJava(){
version=$(java -version 2>&1 | grep version  | awk '{print $NF}');
if [ -z $version ]; then
printMsg "ERROR:Java is not installed in the system or not available in the path. Please make sure Java is available in the path before proceeding"
printError "Java is not installed in the system or not available in the path. Please make sure Java is available in the path before proceeding"
exit 1
else
printMsg "INFO: Java is available in the classpath"
printInfo "Java is available in the classpath"
fi
}
#####################################################
#Execute the test cases and generate sonarqube report
#####################################################
function generateSonarqubeReport(){
checkJava;
javaSrc="${_pathToProjectDirectory}/${_candidateId}/${_projectName}/src"
javaClass="${_pathToProjectDirectory}/${_candidateId}/${_projectName}/bin/src"
jUnitSrc="${_pathToProjectDirectory}/${_candidateId}/${_projectName}/test"
jUnitClass="${_pathToProjectDirectory}/${_candidateId}/${_projectName}/bin/test"
printMsg "Java source folder - $javaSrc"
printMsg "Java class folder - $javaClass"
printMsg "JUnit source folder - $jUnitSrc"
printMsg "JUnit class folder - $jUnitClass"
printInfo "TestCases execution started for ${_projectName}"

java -javaagent:/home/kunal/CodeAnalyzer/CodeAnalyzer/tools/jacoco-0.8.1/lib/jacocoagent.jar -cp /home/kunal/CodeAnalyzer/CodeAnalyzer/tools/junit4_4.3.1.jar/junit4_4.3.1.jar:$javaClass:$jUnitClass org.junit.runner.JUnitCore ${_testClassPackageAndName} >>$infoLog

printMsg "TestCases execution completed for ${_projectName}"
printMsg "Sonar report generation started for ${_projectName}"

/home/kunal/sonar-scanner/bin/sonar-scanner -Dsonar.projectKey=${_candidateId} -Dsonar.projectName=${_projectName} -Dsonar.sources=$javaSrc -Dsonar.tests=$jUnitSrc -Dsonar.java.binaries=$jUnitClass -Dsonar.java.coveragePlugin=jacoco -Dsonar.jacoco.reportPaths=/home/kunal/jacoco.exec >>$infoLog

##rm ~/jacoco.exec

printInfo "Sonar report generation completed for ${_projectName}"

exit 2
}

generateSonarqubeReport;
