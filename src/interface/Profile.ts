export interface Profile {
    basics: Basics;
    work: Volunteer[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Award[];
    certificates: Certificate[];
    publications: Certificate[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    references: Reference[];
    projects: Project[];
}

export interface Award {
    title: string;
    date: Date;
    awarder: string;
    summary: string;
}

export interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    summary: string;
    location: Location;
    profiles: ProfileElement[];
}

export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

export interface ProfileElement {
    network: string;
    username: string;
    url: string;
}

export interface Certificate {
    name: string;
    publisher: string;
    releaseDate: Date;
    url: string;
    summary?: string;
}

export interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: Date;
    endDate: Date;
    score: string;
    courses: string[];
}

export interface Interest {
    name: string;
    keywords: string[];
}

export interface Language {
    language: string;
    fluency: string;
}

export interface Project {
    name: string;
    isActive: boolean;
    description: string;
    highlights: string[];
    url: string;
}

export interface Reference {
    name: string;
    reference: string;
}

export interface Skill {
    name: string;
    level: Level;
    keywords: string[];
}

export enum Level {
    Avanzado = 'Avanzado',
    Master = 'Master',
    Mid = 'Mid',
}

export interface Volunteer {
    organization?: string;
    position: string;
    url: string;
    startDate: Date;
    endDate: Date | null;
    summary: string;
    highlights: string[];
    name?: string;
}
