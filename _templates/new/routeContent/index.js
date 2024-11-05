module.exports = {
  prompt: ({inquirer}) => {
    const questions = [

      {
        name: 'basics',
        type: 'form',
        message: 'Please provide the following information:',
        choices: [
          {name: 'route_type', message: 'route type?', initial: 'get campaign'},
          {name: 'handler_notes', message: 'handler notes?', initial: '...'},
          {name: 'req_params', message: 'req params?', initial: 'gameId, sceneId'},
          {name: 'req_body', message: 'req body?', initial: 'height, width'},
          {name: 'protocol', message: 'POST GET PATCH DELETE', initial: ''},
          {name: 'url_return', message: 'route url', initial: `users/\${userId}/\${adminId}`},
          {name: 'response_type', message: 'response type', initial: "any"},
         ],
      },

    ]
    return inquirer
    .prompt(questions)
    .then(answers => {
      const {  basics} = answers
       const type_path = `03-backends/launch/src/types/routes`
       const content_path = `03-backends/launch/src/router/routes`
       const handler_path = `03-backends/launch/src/controllers`
       const common_package = `@change-my-story/common`
       const common_type_dir = `01-packages/common/src/config/axiosLaunchEndpoints`
       const client_util_path = `02-goods/client/src/utils/axiosRequests/overflow.ts`

        const body_type_object = basics.req_body?`{ ${basics.req_body.split(", ").map(param=>`${param}:any,`)} }` : "any"
        const param_type_object = basics.req_params?`{ ${basics.req_params.split(", ").map(param=>`${param}:string,`)} }` : "any"
        const param_type_destructure = basics.req_params?`{ ${ basics.req_params } }: Params` : ""
        const util_creator = basics.protocol === "GET"?"createAxiosLaunchGetRequest":"createAxiosLaunchRequest"

        const param_identifier = basics.req_params?`{ ${basics.req_params.split(", ").map(param=>{
               return `${param}: ":${param}"`
        })} }`:""

      return {...answers, content_path, type_path, handler_path, common_package, client_util_path, common_type_dir,param_type_object,body_type_object,param_type_destructure,util_creator,param_identifier, ...basics}
    })
  }
}
