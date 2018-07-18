import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Menu, Item, Dropdown, Label } from 'semantic-ui-react';

const FormCard = ({ form, editUrl, formUrl, handleDelete,  }) => {
  return (
    <Grid.Column>
      <Card key={form.id}>
        <Card.Content as={Link} to={editUrl}>
          <Card.Header>{form.name}</Card.Header>
          <Card.Meta>0 Responses</Card.Meta>
          <Card.Description>
            Duis convallis varius tellus id gravida. Vestibulum pulvinar lacus hendrerit neque ullamcorper sagittis.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Menu secondary>
            <Menu.Item>
              5 Responses
            </Menu.Item>
            <Menu.Menu position='right'>
             <Dropdown item icon='ellipsis horizontal' simple>
               <Dropdown.Menu>
                 <Dropdown.Item as={Link} to={editUrl}>Edit</Dropdown.Item>
                 <Dropdown.Item as={Link} to={formUrl}>Preview</Dropdown.Item>
                 <Dropdown.Item>Duplicate</Dropdown.Item>
                 <Dropdown.Item>Results</Dropdown.Item>
                 <Dropdown.Divider />
                 <Dropdown.Item onClick={handleDelete}><Label color='red'>Delete</Label></Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
           </Menu.Menu>
         </Menu>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}
export default FormCard
