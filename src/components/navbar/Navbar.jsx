import React, { Fragment } from 'react'
import { Menu, Input, Dropdown, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
            <Menu fixed='top'>
                <Container>
                    <Menu.Item name='Home' as={Link} to='/home'/>
                    <Menu.Item name='Messages'/>
                    <Menu.Item name='Likes'/>
                    <Menu.Item name='Create Post' as={Link} to='/create'/>
                    <Menu.Item name='Personal' position='right'as={Link} to='/profiles'/>
                    <Menu.Menu>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </Fragment>
    )
}

export default Navbar
