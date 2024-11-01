import { genUploader } from "uploadthing/client";

const { uploadFiles } = genUploader({
    url: 'http://localhost:8081/api/uploadthing'
});
/** @type (s: string, context: Document | HTMLElement) => Element | null */
const $ = (s, context = document) => context.querySelector(s);

$('#file-upload').addEventListener('submit', async (ev) => {
    ev.preventDefault();
    /** @type HTMLInputElement */
    const fileInput = $('#files');

    console.log('Sending %d files...', fileInput.files.length);
    const response = await uploadFiles("imageUploader", {
        files: Array.from(fileInput.files)
    });
    console.log('Sent.');
    console.dir(response);
})