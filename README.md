# react-drag-n-drop-to-s3

React component to drag and drop files and upload them to AWS S3.

Based on [react-dropzone](https://github.com/react-dropzone/react-dropzone) and [react-s3-uploader/s3upload.js](https://github.com/odysseyscience/react-s3-uploader/s3upload.js).

## Install

```bash
npm install react-drag-n-drop-to-s3 react-dropzone
```

## Example

```js
import DragNDropToS3 from 'react-drag-n-drop-to-s3'

const UploadAvatar = () => (
  <DragNDropToS3
    dropzoneProps={{
      accept: 'image/png',
      maxSize: 2000000,
    }}
    s3UploaderProps={{
      getSignedUrl: APIs.getSignedURL,
      autoUpload: true,
      onFinish: response => console.log(response.publicUrl),
    }}
  >
    {({ acceptedFiles }) => (
      <div>
        <p>Drop your avatar here or click to upload</p>
        <ul>
          {acceptedFiles.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      </div>
    )}
  </DragNDropToS3>
)
```

## Props

| Prop                | Description                                                                                                     | Type     | Required |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| **dropzoneProps**   | For the list of available options, see [react-dropzone](https://github.com/react-dropzone/react-dropzone)       | `Object` | No       |
| **s3UploaderProps** | For the list of available options, see [react-s3-uploader](https://github.com/odysseyscience/react-s3-uploader) | `Object` | No       |
