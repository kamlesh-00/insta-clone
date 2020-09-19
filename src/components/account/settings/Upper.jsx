import React, { Fragment } from 'react'
import { Segment, Grid, Image, Header, Item, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const Upper = () => {
    const history = useHistory()
    const signOut = () => {
        localStorage.clear()
        history.push('/')
    }
    return (
        <Fragment>
            <Segment>
                <Grid>
                    <Grid.Column width={6}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' fluid circular />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>Settings</Item.Header>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Item.Header>Introduction</Item.Header>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        <Button onClick={()=>signOut()} content='Sign-out'/>
                                    </Item.Header>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Fragment>
    )
}

export default Upper
