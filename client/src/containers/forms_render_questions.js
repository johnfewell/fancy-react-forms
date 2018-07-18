import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import FormGroupShow from './form_group_show';

const FormsRenderQuestions = ({ form }) => {
  if (form == null || form.questions == null ) {
    return <Loader active inline='centered' />
  } else {
    console.log(form.questions)
    return form.questions.map((question,i) => <FormGroupShow question={question} index={i} />)
   }
 }


export default FormsRenderQuestions
