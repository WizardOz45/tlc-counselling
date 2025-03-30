import { 
  users, type User, type InsertUser,
  contactForms, type ContactForm, type InsertContactForm
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  saveContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private userIdCounter: number;
  private contactFormIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.userIdCounter = 1;
    this.contactFormIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async saveContactForm(form: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormIdCounter++;
    const createdAt = new Date().toISOString();
    
    const contactForm: ContactForm = { 
      ...form, 
      id, 
      createdAt
    };
    
    this.contactForms.set(id, contactForm);
    return contactForm;
  }
  
  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values()).sort((a, b) => {
      // Sort by newest first
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }
}

export const storage = new MemStorage();
