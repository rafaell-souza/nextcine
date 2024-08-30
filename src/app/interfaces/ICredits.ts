interface CastMember {
    name: string;
    profile_path: string | null;
}

interface CrewMember {
    job: string;
    name: string;
    profile_path: string | null;
}

export default interface ICredits {
    cast: CastMember[];
    crew: CrewMember[];
}