export class LoggerUtils {

  static logRequest(method: string, url: string, payload?: any) {
    console.log(`\n➡️ REQUEST: ${method} ${url}`);
    if (payload) {
      console.log(`Payload:`, JSON.stringify(payload, null, 2));
    }
  }

  static async logResponse(response: any) {
    const body = await response.text();

    console.log(`\n⬅️ RESPONSE STATUS: ${response.status()}`);
    console.log(`Response Body:`, body);
  }

}