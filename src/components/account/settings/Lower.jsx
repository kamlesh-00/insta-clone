import React, { Fragment } from 'react'
import { Segment, Header, Card } from 'semantic-ui-react'

const src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'

const Lower = ({pics}) => {
    return (
        <Fragment>
            <Segment>
                <Header>My Posts</Header>
                <Card.Group itemsPerRow={3}>
                    {
                        pics && pics.length > 0 ?
                            <Fragment>
                                {pics.map(item=>{
                                    return(
                                        <Card 
                                            extra
                                            color='red' 
                                            image={item.photos}
                                            header={item.title}
                                            description={item.body} 
                                        />)
                                })
                            }
                            </Fragment>
                            :
                            <Fragment>
                                No photos
                            </Fragment>
                    }
                </Card.Group>
            </Segment>
        </Fragment>
    )
}

export default Lower
