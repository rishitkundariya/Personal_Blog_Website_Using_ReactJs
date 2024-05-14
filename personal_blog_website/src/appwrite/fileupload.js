import { Client, Account, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/config";

class FileUploadService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(File) {
    try {
      return await this.storage.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        File
      );
    } catch (error) {
      console.log(
        "Appwrite services :: FileUpload :: uploadFile :: Error",
        error
      );
    }
  }

  async removeFile(FileId) {
    try {
      await this.storage.deleteFile(conf.appWriteBucketId, ID.unique());
      return true;
    } catch (error) {
      console.log(
        "Appwrite services :: FileUpload :: removeFile :: Error",
        error
      );
    }
    return false;
  }

  getFile(FileId) {
    return this.storage.getFilePreview(conf.this.appWriteBucketId, FileId);
  }
}
const fileUploadService = new FileUploadService();

export default fileUploadService;
