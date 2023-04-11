import React from 'react';
import './upload.css';

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json()
    });
  }
  render() {
    return (
      <form className='' onSubmit={this.handleUploadImage}>
        <br/>
        <header className='header-class1'>OR UPLOAD FILE</header>
        <br/><br/><br/>
        <span>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="bn632-hover bn20">Upload</button>
        </span>
      </form>
    );
  }
}

export default Upload;