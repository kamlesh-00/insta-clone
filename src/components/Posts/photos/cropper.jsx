import React, { Fragment , createRef, useRef } from 'react'
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; 



const CropperComp = ({imagePreview,setImage,setCropResult}) => {
    const cropper = useRef(null)
    const cropImage = () => {
        console.log(cropper)
        /*
        if (typeof cropper.current.getCroppedCanvas() === 'undefined'){
          return
        }
        cropper.current.getCroppedCanvas().toBlob(blob => {
            setCropResult(URL.createObjectURL(blob));
            setImage(blob)
        },'image/jpeg')
    */ }
    return (
        <Fragment>
            <Cropper
                ref={cropper}
                src={imagePreview}
                style={{height: 200, width: '100%'}}
                preview='.img-preview'
                aspectRatio={1}
                viewMode={1}
                dragMode='move'
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizable={true}
                guides={false}
                crop={cropImage} 
            />
        </Fragment>
    )
}

export default CropperComp


/*

  cropper = createRef();

  cropImage = () => {
    const {setImage} = this.props
    if (typeof this.cropper.current.getCroppedCanvas() === 'undefined'){
      return
    }
    this.cropper.current.getCroppedCanvas().toBlob(blob => {
      setImage(blob)
    },'image/jpeg')
  }
 
  render() {
    const {imagePreview} = this.props 
    return (
      <Cropper
        ref={this.cropper}
        src={imagePreview}
        style={{height: 200, width: '100%'}}
        preview={'.img-preview'}
        aspectRatio={1}
        viewMode={1}
        dragMode='move'
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        guides={false}
        crop={this.cropImage} />
    );
  }
}

*/