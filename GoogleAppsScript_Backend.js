/**
 * ELITE Architectural Woodwork - Enterprise Serverless RFP Pipeline
 * Handles Form Ingestion, Google Sheets Logging, Telegram Alerts & Corporate Email.
 * Zero Tokens Leaked to the Client!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    // 1. Sanitize & Normalize Inputs
    var timestamp = new Date();
    var fullName = String(data.fullName || '').trim();
    var entity = String(data.entity || '').trim();
    var email = String(data.email || '').trim().toLowerCase();
    var phone = String(data.phone || '').trim();
    var scope = String(data.scopeTitle || data.scope || '').trim();
    var brief = String(data.brief || '').trim();

    // 2. Insert into Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([timestamp, fullName, entity, email, phone, scope, brief]);

    // 3. Read Secure Server Keys
    var scriptProps = PropertiesService.getScriptProperties();
    var telegramToken = scriptProps.getProperty('TELEGRAM_BOT_TOKEN');
    var telegramChatId = scriptProps.getProperty('TELEGRAM_CHAT_ID');
    var adminEmail = scriptProps.getProperty('ADMIN_EMAIL') || 'rfp@elite-sa.com';

    // 4. Send Instant Telegram Alert
    if (telegramToken && telegramChatId) {
      var messageText = "*NEW ELITE RFP RECEIVED*\n\n" +
        "• *Client:* " + fullName + "\n" +
        "• *Entity:* " + entity + "\n" +
        "• *Phone:* `" + phone + "`\n" +
        "• *Email:* " + email + "\n" +
        "• *Scope:* " + scope + "\n\n" +
        "• *Brief:* " + brief + "\n\n" +
        "• *Time:* " + timestamp.toISOString();

      var telegramUrl = "https://api.telegram.org/bot" + telegramToken + "/sendMessage";
      var payload = {
        chat_id: telegramChatId,
        text: messageText,
        parse_mode: "Markdown"
      };

      UrlFetchApp.fetch(telegramUrl, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      });
    }

    // 5. Send Executive Email to Company
    MailApp.sendEmail({
      to: adminEmail,
      subject: "New Executive RFP Submission: " + entity + " - " + fullName,
      htmlBody: "<div style='font-family:sans-serif; background:#0B0E13; color:#F5ECE1; padding:30px;'>" +
        "<h2 style='color:#D4AF37;'>ELITE Architectural RFP Notification</h2>" +
        "<p><strong>Client:</strong> " + fullName + " (" + entity + ")</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Scope:</strong> " + scope + "</p>" +
        "<p><strong>Brief:</strong> " + brief + "</p>" +
        "<hr style='border-color:#8F5D38;'/>" +
        "<p style='font-size:12px; color:#8A939E;'>ELITE Riyadh Headquarters • National Address Registered</p></div>"
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'RFP Logged & Dispatched' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
