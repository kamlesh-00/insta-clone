import React, { Fragment } from 'react'
import { Segment, Icon, Header } from 'semantic-ui-react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = ({setfiles}) => {
    const onDrop = useCallback(acceptedFiles => {
      setfiles(acceptedFiles.map(file=>Object.assign(file,{
          preview:URL.createObjectURL(file)
      })))
    }, [setfiles])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      multiple:false,
      accept:'image/*'
    
    })
    return (
        <Fragment>
            <Segment {...getRootProps()}>
            <input {...getInputProps()} />
                <Icon name='upload' size='huge'/>
                <Header content='Drag image here'/> 
            </Segment>
        </Fragment>
    )
}

export default Dropzone

/*
const DropzonePage = ({setfiles}) => {
 
  return (
    <div {...getRootProps()} className={'dropzone '+(isDragActive && 'dropzone--isActive')}>
      <input {...getInputProps()} />
        <Icon name='upload' size='huge'/>
        <Header content='Drag image here'/> 
    </div>
  )
}
*/