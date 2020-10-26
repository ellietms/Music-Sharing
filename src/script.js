import Amplify, {Storage} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

document.getElementById('upload-form').addEventListener('submit',event => {
    event.preventDefault();
    const file = document.getElementById('file-upload').files[0];
    // put our file in storage, use the file's name as its S3 Key
    Storage
})