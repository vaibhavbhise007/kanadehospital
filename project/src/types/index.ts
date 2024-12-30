export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  department: string;
  doctorName: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Expert {
  id: string;
  name: string;
  specialization: string;
  image: string;
  experience: number;
  availability: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}