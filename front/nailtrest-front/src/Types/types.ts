export interface Idea {
    name: string;
    description: string;
    imageUrl: string;
    complexity: string;
    requiredMeans: string;
    id: number;
    CreatedDate: Date;
    IsVerified: boolean;
    instruction: string;
    userId: string;
}

export interface Comment {
    content: string;
    userId: string;
    userName: string;
    id: number;
}
