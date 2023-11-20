export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export type SearchResult = {
  public_id: string;
  tags: string[];
};
export type AlbumsFolder = {

    name: string;
    path: string;

};
