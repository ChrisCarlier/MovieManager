export class MovieVideo {

    public static fromJson(json: Object): MovieVideo {
        return new MovieVideo(
            json['id'],
            json['key'],
            json['name'],
            json['site']
        );
    }

    constructor(public id: number, public key: string, public name: string, public site: string){}
}