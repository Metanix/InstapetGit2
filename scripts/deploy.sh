if [ "$BRANCH" != "master" ]

   then
   echo "Only master will be deployed. No deployment for this branch: $BRANCH"

else

   echo "deploying master branch"
   git push -f openshift $BRANCH:master
   echo "deployed successfully"

fi
