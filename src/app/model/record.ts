export class RecordFromDB {

    private title: string;
    private description: string;
    private path: string;

    constructor(title: string, description: string, path: string) {
        this.title = title;
        this.description = description;
        this.path = path;
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