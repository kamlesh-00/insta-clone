import React, { Fragment } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const style = {

    cd:{
        width:"100%"
    }
}

const Posts = () => {
    return (
        <Fragment>
            <Card.Group>
                <Card style={style.cd} link>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' fluid />
                    <Card.Content>
                        <Card.Header>Yash</Card.Header>
                        <Card.Meta>Date</Card.Meta>
                        <Card.Description>Caption</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group fluid>
                            <Button content='Like'/>
                            <Button.Or/>
                            <Button content='Dislike'/>
                            <Button.Or/>
                            <Button content='Comment'/>
                        </Button.Group>
                    </Card.Content>
                </Card>
                <Card style={style.cd} link>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' fluid />
                    <Card.Content>
                        <Card.Header>Yash</Card.Header>
                        <Card.Meta>Date</Card.Meta>
                        <Card.Description>Caption</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group fluid>
                            <Button content='Like'/>
                            <Button.Or/>
                            <Button content='Dislike'/>
                            <Button.Or/>
                            <Button content='Comment'/>
                        </Button.Group>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Fragment>
    )
}

export default Posts
