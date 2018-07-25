import React from 'react';
import { Loader } from 'semantic-ui-react';
import FormGroupShow from './form_group_show';

const FormsRenderQuestions = ({ form }) => {
  console.log('FormsRenderQuestions', form)
  if (form == null || form.questions == null ) {
    return <Loader active inline='centered' />
  } else {
    console.log(form.questions)
    return form.questions.map((question,i) => <FormGroupShow question={question} key={i} index={i} />)
   }
 }


export default FormsRenderQuestions
