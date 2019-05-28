export class RecordFromDB {

    private title: string;
    private description: string;
    private path: string;
    private buttonLabel: string;

    constructor(title: string, description: string, path: string, buttonLabel: string) {
        this.title = title;
        this.description = description;
        this.path = path;
        this.buttonLabel = buttonLabel;

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

    setTitle(title: string) {
        this.title = title;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setPath(path: string) {
        this.path = path;
    }

}