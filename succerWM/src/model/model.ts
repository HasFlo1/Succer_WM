export interface Post {
    id: number;
    title: string;
    author: string;
}

export interface Comment {
    id: number;
    body: string;
    postId: number;
}

export interface Profile {
    name: string;
}

export interface Player {
    playerName: string;
}

export interface Team {
    countryName: string;
    image: string;
    points: string;
    player: Player[];
}

export interface Group {
    group: string;
    teams: Team[];
}

export interface RootObject {
    posts: Post[];
    comments: Comment[];
    profile: Profile[];
    group: Group[];
}