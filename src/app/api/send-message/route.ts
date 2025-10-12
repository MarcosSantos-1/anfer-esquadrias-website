import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'
import twilio from 'twilio'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, subject, message, type } = data

    // Validação dos campos obrigatórios
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Status dos envios
    const sendStatus = {
      email: { success: false, error: null as string | null },
      sms: { success: false, error: null as string | null },
      database: { success: false, error: null as string | null }
    }

    // ============================================
    // 1. ENVIAR E-MAIL
    // ============================================
    console.log('🔍 DEBUG EMAIL:');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Configurado' : '❌ NÃO CONFIGURADO');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Configurado' : '❌ NÃO CONFIGURADO');
    
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        console.log('📧 Tentando enviar e-mail...');
        
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        })

        const emailSubject = type === 'manutencao' 
          ? `[MANUTENÇÃO] ${subject || 'Nova solicitação'}` 
          : `[CONTATO] ${subject || 'Nova mensagem'}`

        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #7f1d1d, #dc2626); color: white; padding: 30px; text-center; border-radius: 8px 8px 0 0; }
                .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: bold; color: #7f1d1d; margin-bottom: 5px; }
                .field-value { padding: 10px; background: #f9fafb; border-left: 4px solid #dc2626; }
                .footer { background: #f9fafb; padding: 20px; text-center; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280; }
                .urgent { background: #fee2e2; border-color: #dc2626; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">📧 ${type === 'manutencao' ? 'Nova Solicitação de Manutenção' : 'Nova Mensagem de Contato'}</h1>
                  <p style="margin: 10px 0 0;">ANFER Esquadrias Metálicas</p>
                </div>
                
                <div class="content">
                  <div class="field">
                    <div class="field-label">👤 Nome do Cliente:</div>
                    <div class="field-value">${name}</div>
                  </div>

                  <div class="field">
                    <div class="field-label">📧 E-mail:</div>
                    <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                  </div>

                  <div class="field">
                    <div class="field-label">📱 Telefone:</div>
                    <div class="field-value">
                      <a href="tel:${phone.replace(/\D/g, '')}">${phone}</a> | 
                      <a href="https://wa.me/55${phone.replace(/\D/g, '')}" target="_blank">WhatsApp</a>
                    </div>
                  </div>

                  ${subject ? `
                    <div class="field">
                      <div class="field-label">📋 Assunto:</div>
                      <div class="field-value">${subject}</div>
                    </div>
                  ` : ''}

                  ${data.service ? `
                    <div class="field">
                      <div class="field-label">🔧 Tipo de Serviço:</div>
                      <div class="field-value">${data.service}</div>
                    </div>
                  ` : ''}

                  ${data.urgency ? `
                    <div class="field">
                      <div class="field-label">⚠️ Urgência:</div>
                      <div class="field-value ${data.urgency === 'urgent' || data.urgency === 'high' ? 'urgent' : ''}">
                        ${data.urgency === 'urgent' ? '🔴 URGENTE' : 
                          data.urgency === 'high' ? '🟠 Alta' : 
                          data.urgency === 'normal' ? '🟢 Normal' : '🔵 Baixa'}
                      </div>
                    </div>
                  ` : ''}

                  ${data.address ? `
                    <div class="field">
                      <div class="field-label">📍 Endereço:</div>
                      <div class="field-value">${data.address}</div>
                    </div>
                  ` : ''}

                  ${data.preferredDate ? `
                    <div class="field">
                      <div class="field-label">📅 Data Preferencial:</div>
                      <div class="field-value">${new Date(data.preferredDate).toLocaleDateString('pt-BR')}</div>
                    </div>
                  ` : ''}

                  <div class="field">
                    <div class="field-label">💬 ${type === 'manutencao' ? 'Descrição do Problema' : 'Mensagem'}:</div>
                    <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                  </div>

                  <div style="margin-top: 30px; padding: 20px; background: #dcfce7; border-left: 4px solid #16a34a; border-radius: 4px;">
                    <p style="margin: 0; font-weight: bold; color: #166534;">🚀 Ações Rápidas:</p>
                    <p style="margin: 10px 0 0;">
                      <a href="https://wa.me/55${phone.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Recebi sua mensagem no site da ANFER. Vamos conversar sobre seu projeto!')}" 
                         style="display: inline-block; padding: 10px 20px; background: #16a34a; color: white; text-decoration: none; border-radius: 5px; margin-right: 10px;">
                        💬 Responder WhatsApp
                      </a>
                      <a href="mailto:${email}?subject=${encodeURIComponent('Re: ' + emailSubject)}" 
                         style="display: inline-block; padding: 10px 20px; background: #dc2626; color: white; text-decoration: none; border-radius: 5px;">
                        📧 Responder Email
                      </a>
                    </p>
                  </div>
                </div>
                
                <div class="footer">
                  <p>Esta mensagem foi enviada através do formulário ${type === 'manutencao' ? 'de manutenção' : 'de contato'} do site ANFER Esquadrias Metálicas</p>
                  <p>Data e hora: ${new Date().toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </body>
          </html>
        `

        const mailInfo = await transporter.sendMail({
          from: `"Site ANFER Esquadrias" <${process.env.EMAIL_USER}>`,
          to: 'oficial.anferesquadrias@gmail.com',
          subject: emailSubject,
          html: htmlContent,
          replyTo: email
        })

        sendStatus.email.success = true
        console.log('✅ E-mail enviado com sucesso!');
        console.log('📬 Message ID:', mailInfo.messageId);
        console.log('📧 Para:', 'oficial.anferesquadrias@gmail.com')
      } else {
        sendStatus.email.error = 'Configuração de e-mail não encontrada (.env.local)'
        console.log('⚠️ E-mail não configurado')
      }
    } catch (error) {
      sendStatus.email.error = error instanceof Error ? error.message : 'Erro desconhecido'
      console.error('❌ ERRO AO ENVIAR E-MAIL:');
      console.error('Erro completo:', error);
      if (error instanceof Error) {
        console.error('Mensagem:', error.message);
        console.error('Stack:', error.stack);
      }
    }

    // ============================================
    // 2. ENVIAR SMS
    // ============================================
    try {
      if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
        const twilioClient = twilio(
          process.env.TWILIO_ACCOUNT_SID,
          process.env.TWILIO_AUTH_TOKEN
        )

        // Formatar telefone do pai (remover formatação)
        const phoneToSend = process.env.OWNER_PHONE_NUMBER || '+5511940093757'
        
        // Criar mensagem SMS
        const smsMessage = type === 'manutencao'
          ? `ANFER - Nova Solicitacao de Manutencao\n\nCliente: ${name}\nTel: ${phone}\nServico: ${data.service || 'Nao especificado'}\n${data.urgency === 'urgent' || data.urgency === 'high' ? 'URGENTE\n' : ''}\nMensagem: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}\n\nVerifique seu e-mail para detalhes completos.`
          : `ANFER - Nova Mensagem de Contato\n\nCliente: ${name}\nTel: ${phone}\nAssunto: ${subject || 'Nao especificado'}\n\nMensagem: ${message.substring(0, 120)}${message.length > 120 ? '...' : ''}\n\nVerifique seu e-mail para detalhes completos.`

        // Configurar SMS com MessagingServiceSid ou Phone Number
        const smsConfig: any = {
          body: smsMessage,
          to: phoneToSend
        }

        // Usar MessagingServiceSid se disponível, senão usar número direto
        if (process.env.TWILIO_MESSAGING_SERVICE_SID) {
          smsConfig.messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID
        } else if (process.env.TWILIO_PHONE_NUMBER) {
          smsConfig.from = process.env.TWILIO_PHONE_NUMBER
        }

        await twilioClient.messages.create(smsConfig)

        sendStatus.sms.success = true
        console.log('✅ SMS enviado com sucesso!')
      } else {
        sendStatus.sms.error = 'Configuração do Twilio não encontrada (.env.local)'
        console.log('⚠️ SMS não configurado (Twilio)')
      }
    } catch (error) {
      sendStatus.sms.error = error instanceof Error ? error.message : 'Erro desconhecido'
      console.error('❌ Erro ao enviar SMS:', error)
    }

    // ============================================
    // 3. SALVAR NO BANCO DE DADOS
    // ============================================
    try {
      const messageData = {
        name,
        email,
        phone,
        subject: subject || (type === 'manutencao' ? 'Solicitação de Manutenção' : 'Contato'),
        message: `${message}\n\n${data.service ? `Serviço: ${data.service}\n` : ''}${data.urgency ? `Urgência: ${data.urgency}\n` : ''}${data.address ? `Endereço: ${data.address}\n` : ''}${data.preferredDate ? `Data Preferencial: ${data.preferredDate}\n` : ''}`,
        status: 'PENDING'
      }

      const saveResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData)
      })

      if (saveResponse.ok) {
        sendStatus.database.success = true
        console.log('✅ Mensagem salva no banco de dados!')
      } else {
        sendStatus.database.error = 'Erro ao salvar no banco'
      }
    } catch (error) {
      sendStatus.database.error = error instanceof Error ? error.message : 'Erro desconhecido'
      console.error('❌ Erro ao salvar no banco:', error)
    }

    // ============================================
    // 4. PREPARAR RESPOSTA
    // ============================================
    const whatsappNumber = '5511940093757'
    const whatsappMessage = type === 'manutencao'
      ? `Olá! Gostaria de solicitar uma manutenção.\n\nNome: ${name}\nTelefone: ${phone}\nServiço: ${data.service || 'Não especificado'}\n${data.urgency === 'urgent' || data.urgency === 'high' ? '⚠️ URGENTE\n' : ''}\nProblema: ${message}`
      : `Olá! Tenho interesse nos serviços da ANFER.\n\nNome: ${name}\nTelefone: ${phone}\nAssunto: ${subject || 'Não especificado'}\n\nMensagem: ${message}`

    // Determinar se houve sucesso em pelo menos um canal
    const hasSuccess = sendStatus.email.success || sendStatus.sms.success || sendStatus.database.success

    if (!hasSuccess) {
      return NextResponse.json(
        { 
          error: 'Não foi possível enviar a mensagem por nenhum canal. Verifique as configurações no arquivo .env.local',
          details: sendStatus
        },
        { status: 500 }
      )
    }

    // Criar mensagem de status
    let statusMessage = 'Mensagem processada!'
    const successChannels = []
    if (sendStatus.email.success) successChannels.push('📧 E-mail')
    if (sendStatus.sms.success) successChannels.push('📱 SMS')
    if (sendStatus.database.success) successChannels.push('💾 Banco de dados')

    if (successChannels.length > 0) {
      statusMessage = `✅ Enviado com sucesso via: ${successChannels.join(', ')}`
    }

    return NextResponse.json({
      success: true,
      message: statusMessage,
      whatsappLink: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      sendStatus
    })

  } catch (error) {
    console.error('❌ Erro crítico ao processar mensagem:', error)
    return NextResponse.json(
      { 
        error: 'Erro ao processar mensagem', 
        details: error instanceof Error ? error.message : 'Erro desconhecido' 
      },
      { status: 500 }
    )
  }
}
