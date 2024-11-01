import { createUploadthing } from "uploadthing/server"

const f = createUploadthing();

export const uploadRouter = {
    imageUploader: f({
        image: {
            maxFileSize: "5MB",
            maxFileCount: 4
        }
    }).onUploadComplete(d => {
        console.log('upload complete:', d);
    })
};