import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for frontend communication
app.use('/*', cors());

// Demonstration scheduling schema
const DemonstrationSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  company: z.string().optional(),
  animals: z.string().min(1, "Tamanho do rebanho é obrigatório"),
  date: z.string().min(1, "Data é obrigatória"),
  time: z.string().min(1, "Horário é obrigatório")
});

// Schedule demonstration endpoint
app.post('/api/demonstrations', zValidator('json', DemonstrationSchema), async (c) => {
  try {
    const data = c.req.valid('json');
    const db = c.env.DB;
    
    // Insert into database
    const result = await db.prepare(`
      INSERT INTO demonstrations (name, email, phone, company, animals, preferred_date, preferred_time)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      data.name,
      data.email,
      data.phone,
      data.company || null,
      data.animals,
      data.date,
      data.time
    ).run();

    // Send email notification
    const emailData = {
      to: ['d.horvattid@gmail.com'],
      from: 'noreply@horvattichamp.com',
      subject: 'Nova Demonstração Agendada - Horvatti Champ',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            Nova Demonstração Agendada
          </h2>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Dados do Cliente:</h3>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>WhatsApp:</strong> ${data.phone}</p>
            <p><strong>Fazenda/Empresa:</strong> ${data.company || 'Não informado'}</p>
            <p><strong>Tamanho do Rebanho:</strong> ${data.animals}</p>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Agendamento:</h3>
            <p><strong>Data Preferida:</strong> ${new Date(data.date).toLocaleDateString('pt-BR')}</p>
            <p><strong>Horário:</strong> ${data.time}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db;">
            <p style="color: #6b7280; font-size: 14px;">
              ID do Agendamento: #${result.meta.last_row_id}<br>
              Data da Solicitação: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      `
    };

    // Send email using Cloudflare's email service
    try {
      const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (!emailResponse.ok) {
        console.error('Failed to send email:', await emailResponse.text());
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
    }

    return c.json({ 
      success: true, 
      message: 'Demonstração agendada com sucesso!',
      id: result.meta.last_row_id
    });

  } catch (error) {
    console.error('Error scheduling demonstration:', error);
    return c.json(
      { success: false, message: 'Erro interno do servidor' }, 
      500
    );
  }
});

// Get all demonstrations (admin endpoint)
app.get('/api/demonstrations', async (c) => {
  try {
    const db = c.env.DB;
    const demonstrations = await db.prepare(`
      SELECT * FROM demonstrations 
      ORDER BY created_at DESC
    `).all();

    return c.json({ success: true, data: demonstrations.results });
  } catch (error) {
    console.error('Error fetching demonstrations:', error);
    return c.json(
      { success: false, message: 'Erro interno do servidor' }, 
      500
    );
  }
});

export default app;
