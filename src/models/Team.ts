import { PlayerResult } from "./PlayerResult";

export interface Team {
    teamName: string;
    teamLogoUrl: string;    
    teamMembers: PlayerResult[]
  }