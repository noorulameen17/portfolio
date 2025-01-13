import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    // Save the form submission to the Supabase database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Error saving form submission:', error.message);
      return new Response(JSON.stringify({ message: 'Error saving form submission' }), { status: 500 });
    }

    console.log('Form submitted successfully:', data);
    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error.message);
    return new Response(JSON.stringify({ message: 'Unexpected error occurred' }), { status: 500 });
  }
}

export async function GET(req, res) {
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
