package uol.tm.filechecker.email;

import java.io.File;

import org.apache.commons.mail.EmailAttachment;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.MultiPartEmail;

/**
 *
 * @author lnferreira@uolinc.com
 */
public class Mail {

    private final MultiPartEmail email = new MultiPartEmail();

    public Mail(String hostName) {
        email.setHostName(hostName);
    }

    public Mail(String hostName, int smtpPort) {
        email.setHostName(hostName);
        email.setSmtpPort(smtpPort);
    }

    public void send() throws EmailException {
        try {
            email.send();
        } catch (EmailException e) {
            throw new EmailException("Erro ao enviar email", e);
        }
    }

    public Mail addMessageBody(String message) throws EmailException {
        try {
            email.setMsg(message);
        } catch (EmailException e) {
            throw new EmailException("Erro ao adicionar corpo do email", e);
        }
        return this;
    }

    public Mail addSubject(String subject) {
        email.setSubject(subject);
        return this;
    }

    public Mail addFrom(String email, String name) throws EmailException {
        try {
            this.email.setFrom(email, name);
        } catch (EmailException e) {
            throw new EmailException("Erro ao adicionar remetente ao email", e);
        }
        return this;
    }

    public Mail addTo(String email, String name) throws EmailException {
        try {
            this.email.addTo(email, name);
        } catch (EmailException e) {
            throw new EmailException("Erro ao adicionar destinatario ao email", e);
        }
        return this;
    }

    public Mail addAttachment(File file) throws EmailException {
        try {
            EmailAttachment attachment = new EmailAttachment();
            attachment.setPath(file.getName());
            attachment.setDisposition(EmailAttachment.ATTACHMENT);
            email.attach(attachment);
        } catch (EmailException e) {
            throw new EmailException("Erro ao anexar arquivo ao email", e);
        }
        return this;
    }
}
