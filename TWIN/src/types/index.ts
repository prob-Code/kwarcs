export interface User {
  uid: string;
  email: string;
  displayName?: string;
  bio?: string;
  skills?: string[];
  avatarUrl?: string;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  createdAt: number;
  createdBy: string;
  status: 'open' | 'in-progress' | 'completed';
}

export interface Application {
  id: string;
  taskId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedAt: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
  translatedContent?: {
    [key: string]: string;
  };
} 