export async function POST(req) {
  try {
    const data = await req.json();

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzd2JJfI8BqU1ONhwrwmhjLEgFtupjKW4MWep3rYM4R_ULUdzGp-Gn2D9imwrWJSWk/exec"; // Use your actual deployed Apps 
    // https://script.google.com/macros/s/AKfycbzd2JJfI8BqU1ONhwrwmhjLEgFtupjKW4MWep3rYM4R_ULUdzGp-Gn2D9imwrWJSWk/execScript Web App URL

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      return new Response(JSON.stringify({ error: "Invalid JSON from Google Script", raw: text }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Proxy failed", message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
} 