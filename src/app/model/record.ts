export class RecordFromDB {

    private idKey: string;
    private title: string;
    private description: string;
    private path: string;
    private buttonLabel: string;
    private mainContent: string;
    private id: number;
    private miniImagePath: string;
    private mainImagePath: string;

    constructor(idKey:string, title: string, description: string, path: string, buttonLabel: string,
         mainContent: string, miniImagePath: string, mainImagePath: string, id: number = 99) {
        this.idKey = idKey;
        this.title = title;
        this.description = description;
        this.path = path;
        this.buttonLabel = buttonLabel;
        this.id = id;
        this.mainContent = mainContent;
        this.miniImagePath = miniImagePath;
        this.mainImagePath = mainImagePath;
    }

    getIdKey() {
        return this.idKey;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getPath() {
        return this.path;
    }

    getButtonLabel() {
        return this.buttonLabel;
    }

    getMainContent() {
        return this.mainContent;
    }

    setTitle(title: string) {
        this.title = title;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setPath(path: string) {
        this.path = path;
    }

    setMainContent(content: string) {
        this.mainContent = content;
    }

    getMiniImagePath() {
        return this.miniImagePath;
    }

    getMainImagePath() {
        return this.mainImagePath;
    }

}