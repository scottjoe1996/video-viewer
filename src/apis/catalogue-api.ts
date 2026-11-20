interface BaseCatalogueItem<T> {
  type: T;
  directory: string;
}

type CatalogueItem = BaseCatalogueItem<"folder"> | BaseCatalogueItem<"video">;

class CatalogueApi {
  private catalguePromise: Promise<CatalogueItem[]> | undefined;

  public async getCatalogue(directory: string): Promise<CatalogueItem[]> {
    if (this.catalguePromise) {
      return this.catalguePromise;
    }

    this.catalguePromise = this.fetchCatalogue(directory);

    return this.catalguePromise;
  }

  private async fetchCatalogue(_directory: string): Promise<CatalogueItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return [
      { type: "folder", directory: "directory-1" },
      { type: "folder", directory: "directory-2" },
      { type: "folder", directory: "directory-3" },
      { type: "folder", directory: "directory-4" },
      { type: "video", directory: "spinning-earth.mp4" },
    ];
  }
}

export default CatalogueApi;
