module.exports = {
  prompt: ({inquirer}) => {
    const questions = [

      {
        name: 'basics',
        type: 'form',
        message: 'Please provide the following information:',
        choices: [
          {name: 'route_type', message: 'route type?', initial: 'GetCampaign'},
         ],
      },

    ]
    return inquirer
    .prompt(questions)
    .then(answers => {
      const {  basics} = answers
       const absPath = `apps/express-server/src/types/routes`

      return {...answers,  absPath,  ...basics}
    })
  }
}
