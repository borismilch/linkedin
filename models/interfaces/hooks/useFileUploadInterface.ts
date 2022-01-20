import { ChangeEvent, Ref } from "react";

export  interface IuseUploadDataReult {
  dataUrl: string,
  url: string,
  getUploadedData: (file: File) => void 
  loading: boolean 
  error: string
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  triggerInput: () => void
  fileInputRef: Ref<HTMLInputElement>
  cleanImage: () => void
}