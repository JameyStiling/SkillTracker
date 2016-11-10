export default function ($scope) {
  let params = {
    createHasInput: false
  }

  $scope.skills = [
    {
      skill: 'Angular',
      goal: '100 hrs',
      progress: '80%',
    },
    {
      skill: 'React',
      goal: '200 hrs',
      progress: '70%',
    }
  ]

  //watches for new skill or goal input and dynamically adds the content in a new row
  $scope.$watchGroup(['newSkillInput', 'newGoalInput'],(values) => {
    if (values[0] && !params.createHasInput) {
      $scope.skills.push({ skill: values[0], goal: values[1] });
      params.createHasInput = true;
    } else if (values[0] && params.createHasInput) {
      $scope.skills[$scope.skills.length - 1].skill = values[0];
      $scope.skills[$scope.skills.length - 1].goal = values[1];
    }
  })

}