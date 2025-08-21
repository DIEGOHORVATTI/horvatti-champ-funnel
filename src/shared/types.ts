import z from "zod";

/**
 * Types shared between the client and server go here.
 */

export const DemonstrationSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  company: z.string().optional(),
  animals: z.string().min(1, "Tamanho do rebanho é obrigatório"),
  date: z.string().min(1, "Data é obrigatória"),
  time: z.string().min(1, "Horário é obrigatório")
});

export type DemonstrationType = z.infer<typeof DemonstrationSchema>;

export interface DemonstrationResponse {
  success: boolean;
  message: string;
  id?: number;
}
