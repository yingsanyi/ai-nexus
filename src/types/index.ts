export enum Difficulty {
    Beginner = '初级',
    Intermediate = '中级',
    Advanced = '高级'
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    content: string; // Markdown supported
    visualizerType?: 'neural-net' | 'loss-chart' | 'cnn-viz' | 'none';
}

export interface Course {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    difficulty: Difficulty;
    lessons: Lesson[];
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    isStreaming?: boolean;
}

export type ViewState = 'dashboard' | 'learning';
