export class ActorDto{
    name: string;
    dateOfBirth: Date;
    picture: File;
    biography: string;
}

export class ActorGetDto{
    id:number
    name: string;
    dateOfBirth: Date;
    picture: string;
    biography: string;
}

export class ActorMovieDto {
    id: number;
    name: string;
    character: string;
    picture: string;
}